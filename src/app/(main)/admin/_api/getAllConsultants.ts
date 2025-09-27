import api from "@/services/api";

export default async function getAllConsultants() {
  try {
    const response = await api.get("/admin/consultants", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhbW1hZHNhcndhcjIyMDBAZ21haWwuY29tIiwiaWQiOiI2OGQwMzRmNGZmYTFjMGMxOTg1NTA4M2IiLCJpYXQiOjE3NTg2MTU0OTEsImV4cCI6MTc1OTIyMDI5MX0.KIBntOxB1fJ-0l1Fzr6EWkQNZaLqvymBCpnoEh0wVQk",
      },
    });

    return response.data.data.consultants;
  } catch (error) {
    console.log(error);
    return [];
  }
}
