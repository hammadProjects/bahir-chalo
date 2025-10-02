"use server";

import api from "@/services/api";
import { Consultant } from "@/types/types";
import { cookies } from "next/headers";

export const getVerifiedConsultants = async () => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");
    const data = await api.get("/consultant", {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data?.data?.consultants as Consultant[];
  } catch (error) {
    let message = "Something Went Wrong";

    if (error && typeof error === "object" && "response" in error) {
      const err = error as { response?: { data?: { message?: string } } };
      message = err.response?.data?.message || message;
    }
    console.log(message);
    return [];
  }
};
