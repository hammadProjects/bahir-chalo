"use server";

import api from "@/services/api";
import { cookies } from "next/headers";

export async function getProfile(formData: FormData) {
  try {
    const token = (await cookies()).get("token")?.value;
    const res = await api.get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { success: true, user: res.data?.data?.user };
  } catch (error) {
    return { success: false, user: null };
  }
}

export async function updateConsultantProfile(formData: FormData) {
  return { success: true };
}

export async function updateStudentProfile(formData: FormData) {
  return { success: true };
}
