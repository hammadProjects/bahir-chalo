"use server";

import api from "@/services/api";
import { Consultant } from "@/types/types";
import { cookies } from "next/headers";

export const getConsultantById = async (id: string) => {
  try {
    console.log(id);
    const token = (await cookies()).get("token")?.value;
    if (!token) return;
    const data = await api.get(`/consultant/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data?.data?.consultant as Consultant;
  } catch (error: any) {
    console.log(error?.response?.data);
    return error?.response?.data?.message || "Something Went Wrong";
  }
};
