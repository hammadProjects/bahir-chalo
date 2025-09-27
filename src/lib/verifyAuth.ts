import api from "@/services/api";
import { cookies } from "next/headers";

export const verifyAuth = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    const res = await api.put(
      "/auth/validate-token",
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { success: res.data?.success, role: res.data?.role };
  } catch (error: any) {
    // if error just return false
    return {
      success: false,
      message: error?.response?.data?.message || "Something Went Wrong",
    };
  }
};
