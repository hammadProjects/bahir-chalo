"use server";

import api from "@/services/api";
import { Consultant } from "@/types/types";
import { cookies } from "next/headers";

export const getVerifiedConsultants = async () => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) return;
    const data = await api.get("/consultant", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data?.data?.consultants as Consultant[];
  } catch (error: any) {
    // console.log(error);
    return error?.response?.data?.message || "Something Went Wrong";
  }
};
