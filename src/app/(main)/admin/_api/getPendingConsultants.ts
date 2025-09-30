import api from "@/services/api";

export default async function getPendingConsultants() {
  try {
    const response = await api.get("/admin/consultants/pending");

    return response.data.data.consultants;
  } catch (error) {
    console.log(error);
    return [];
  }
}
