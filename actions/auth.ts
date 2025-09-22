"use server";
import api from "@/services/api";
import { LoginUserPayload } from "@/types/types";
import { toast } from "sonner";

export const loginUser = async (formData: LoginUserPayload) => {
  try {
    console.log("formData from auth.ts", formData);
    if (!formData || !formData.email || !formData.password) {
      toast.error("All fieds are required");
      return;
    }
    console.log("is it even coming here huh😒");

    const data = await api.post("/auth/sign-in", formData, {
      withCredentials: true,
    });
    console.log("👌 not beiing called uh?");
    const { user, success, message } = data.data;
    console.log("data from auth.ts", data.headers);

    return data.data;
  } catch (error: any) {
    // (todo) - change error type here
    // toast.error(error.response.data.message);
    // console.log("error from auth.ts", error);
    return error;
  }
};
