import api from "@/services/api";
import { generateError } from "./utils";
import { cookies } from "next/headers";

export const verifyAuth = async () => {
  try {
    const res = await api.put(
      "/auth/token/validate",
      {},
      {
        headers: {
          Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
        },
        withCredentials: true,
      }
    );

    return {
      success: res.data?.success,
      role: res.data?.role,
      user: res.data?.user,
    };
  } catch (error) {
    return { success: false, message: generateError(error) };
  }
};
