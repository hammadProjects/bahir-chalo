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
    const data = await api.patch(`/admin/consultant/${id}`, payload, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhbW1hZHNhcndhcjIyMDBAZ21haWwuY29tIiwiaWQiOiI2OGQwMzRmNGZmYTFjMGMxOTg1NTA4M2IiLCJpYXQiOjE3NTg2MTU0OTEsImV4cCI6MTc1OTIyMDI5MX0.KIBntOxB1fJ-0l1Fzr6EWkQNZaLqvymBCpnoEh0wVQk",
      },
    });
    toast.success(data.data?.message);
  } catch (error) {
    toast.error("Something Went Wrong. Please Try Again");
  } finally {
    setLoading(false);
  }
}
