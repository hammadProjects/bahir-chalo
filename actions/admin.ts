"use server";
import api from "@/services/api";
import { cookies } from "next/headers";
import { toast } from "sonner";

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
  status: "approved" | "rejected",
  setLoading: (val: boolean) => void
) {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");
    setLoading(true);
    const payload = { status };
    const data = await api.patch(`/admin/consultant/${id}`, payload, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success(data.data?.message);
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong. Please Try Again");
  } finally {
    setLoading(false);
  }
}
