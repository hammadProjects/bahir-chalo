import api from "@/services/api";

export default async function getAllConsultants() {
  try {
    const response = await api.get("/admin/consultants");

    return response.data.data.consultants;
  } catch (error) {
    console.log(error);
    return [];
  }
}
