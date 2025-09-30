import api from "@/services/api";
import { cookies } from "next/headers";

export const verifyAuth = async () => {
  const token = (await cookies()).get("token")?.value;
  if (!token) throw Error("Unauthorized");
  try {
    const res = await api.put(
      "/auth/validate-token",
      {},
      { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: res.data?.success,
      role: res.data?.role,
      user: res.data?.user,
    };
  } catch (error) {
    // if error just return false
    let message = "Something Went Wrong";

    if (error && typeof error === "object" && "response" in error) {
      const err = error as { response?: { data?: { message?: string } } };
      message = err.response?.data?.message || message;
    }

    return { success: false, message };
  }
};
