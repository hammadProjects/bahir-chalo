import api from "@/services/api";

export const verifyAuth = async () => {
  try {
    const res = await api.put(
      "/auth/validate-token",
      {},
      { withCredentials: true }
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
