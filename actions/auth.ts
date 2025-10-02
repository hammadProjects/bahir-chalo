"use server";
import { generateError } from "@/lib/utils";
import api from "@/services/api";
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

    console.log("data from auth.ts", res.data);

    const token = res.data?.token;
    if (!token)
      return {
        success: false,
        message: "Please Login TO Continue",
        url: "/sign-in",
      };

    (await cookies()).set("token", token as string, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    });

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
    // (todo) - change error type here
    console.log(error);
    const message = generateError(error);
    return {
      success: false,
      message,
    };
  }
};

export const registerUserAction = async (
  prevState: unknown,
  FormData: FormData
) => {
  try {
    // validate with zod
    const email = FormData.get("email");
    const password = FormData.get("password");

    if (!FormData || !email || !password)
      return {
        success: false,
        message: "All Fields are Required",
      };

    const payload = {
      // username: FormData.get("username"),
      username: "Random Username",
      email: FormData.get("email"),
      password: FormData.get("password"),
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
    console.log(error);
    return {
      success: false,
      message: error?.response?.data?.message || "Something Went Wrong",
    };
  }
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

    // set token as cookie - send token as response from backend
    cookieStore.set("token", res.data?.token as string, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    });

    return {
      success: true,
      message: res.data?.message,
      url: "/onboarding",
    };
  } catch (error: any) {
    console.log(error);
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
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    console.log(error.response);
    return {
      success: false,
      message: error?.response?.data?.message || "Something Went Wrong",
    };
  }
};
