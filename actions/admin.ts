"use server";
import { generateError } from "@/lib/utils";
import api from "@/services/api";
import { cookies } from "next/headers";

export async function getAllConsultants() {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");
    const response = await api.get("/admin/consultants", {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data.consultants;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPendingConsultants() {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");
    const response = await api.get("/admin/consultants/pending", {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data.consultants;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function verifyConsultant(
  id: string,
  status: "approved" | "rejected"
) {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");
    const payload = { status };
    const data = await api.patch(`/admin/consultant/${id}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { success: true, message: data.data?.message };
  } catch (error) {
    return { success: false, message: generateError(error) };
  }
}
