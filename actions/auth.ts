"use server";
import { generateError } from "@/lib/utils";
import api from "@/services/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const loginUserAction = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    if (!formData.get("email") || !formData.get("password"))
      return {
        success: false,
        message: "All Fields are Required",
      };

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const res = await api.post("/auth/sign-in", payload, {
      withCredentials: true,
    });

    console.log(res.headers);

    let url =
      res.data?.user?.role === "unassigned"
        ? "/onboarding"
        : `/${res.data?.user?.role}`;

    return {
      success: true,
      message: res.data?.message || "You are Successfully Registered",
      url,
    };
  } catch (error) {
    return {
      success: false,
      message: generateError(error),
    };
  }
};

export const registerUserAction = async (
  prevState: unknown,
  FormData: FormData
) => {
  try {
    // validate with zod
    const username = FormData.get("username");
    const email = FormData.get("email");
    const password = FormData.get("password");

    if (!FormData || !email || !password || !username)
      return {
        success: false,
        message: "All Fields are Required",
      };

    const payload = {
      username,
      email,
      password,
    };

    // store email in cookie
    (await cookies()).set("email", email as string, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    });

    const res = await api.post("/auth/sign-up", payload);
    return {
      success: true,
      message: res.data?.message || "You are Successfully Registered",
      url: "/verify-otp",
    };
  } catch (error: any) {
    return {
      success: false,
      message: generateError(error),
    };
  }
};

export const logutAction = async () => {
  (await cookies()).delete("token");
  redirect("/sign-in");
};

export const verifyOtpAction = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const otp = formData.get("otp");
    if (!otp)
      return {
        success: false,
        message: "OTP is Required",
      };

    const cookieStore = await cookies();
    const email = cookieStore.get("email")?.value;

    if (!email)
      return {
        success: false,
        message: "Email is Required",
      };

    const payload = { otpCode: otp, email: email };

    const res = await api.post("/auth/otp/verify", payload);

    return {
      success: true,
      message: res.data?.message,
      url: "/onboarding",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message || "Something Went Wrong",
    };
  }
};

export const otpResendAction = async (prevState: unknown) => {
  try {
    const cookieStore = await cookies();
    const email = cookieStore.get("email")?.value;

    if (!email)
      return {
        success: false,
        message: "Email is Required",
      };

    const payload = { email };

    const res = await api.post("/auth/otp/resend", payload);
    return res.data;
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message || "Something Went Wrong",
    };
  }
};

export const forgetPasswordAction = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const email = formData.get("email");
    if (!email) return { success: false, message: "Email is required" };

    (await cookies()).set("email", `${email}`);

    await api.post("/auth/password/forgot", { email });

    return {
      success: true,
      message: "Reset password link has been sent to your email",
    };
  } catch (error) {
    return {
      success: false,
      message: generateError(error),
    };
  }
};

export const resetPasswordAction = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const email = (await cookies()).get("email")?.value;
    if (!email)
      return {
        success: false,
        message: "Email is required",
        url: "/forget-password",
      };

    const password = formData.get("password");
    const resetPasswordId = formData.get("resetPasswordId");

    const payload = {
      email,
      password,
    };

    await api.post(`/auth/password/reset${resetPasswordId}`, payload);

    return {
      success: true,
      message: "Your Password has been reset. Please sign in to Continue",
      url: "/sign-in",
    };
  } catch (error) {
    return {
      success: false,
      message: generateError(error),
      url: "/forget-password",
    };
  }
};
