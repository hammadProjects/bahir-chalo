import api from "@/services/api";
import { cookies } from "next/headers";

export default async function getPendingConsultants() {
  const token = (await cookies()).get("token")?.value;
  if (!token) throw Error("Unauthorized");
  try {
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
