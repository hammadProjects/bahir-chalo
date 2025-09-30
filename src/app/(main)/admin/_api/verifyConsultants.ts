import api from "@/services/api";
import { cookies } from "next/headers";
import { toast } from "sonner";

export default async function verifyConsultant(
  id: string,
  status: "approved" | "rejected",
  setLoading: (val: boolean) => void
) {
  const token = (await cookies()).get("token")?.value;
  if (!token) throw Error("Unauthorized");
  try {
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
