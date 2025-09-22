import api from "@/services/api";
import { cookies } from "next/headers";

export const verifyAuth = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    const data = await api.put(
      "/auth/validate-token",
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.data;
  } catch (error) {
    // if error just return false
    return { success: false };
  }
};
