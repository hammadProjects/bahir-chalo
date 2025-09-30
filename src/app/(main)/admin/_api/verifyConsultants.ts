import api from "@/services/api";
import { toast } from "sonner";

export default async function verifyConsultant(
  id: string,
  status: "approved" | "rejected",
  setLoading: (val: boolean) => void
) {
  try {
    setLoading(true);
    const payload = { status };
    const data = await api.patch(`/admin/consultant/${id}`, payload);
    toast.success(data.data?.message);
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong. Please Try Again");
  } finally {
    setLoading(false);
  }
}
