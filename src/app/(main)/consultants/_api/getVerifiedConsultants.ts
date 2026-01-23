"use server";
import api from "@/services/api";

export const getVerifiedConsultants = async (page: number) => {
  try {
    const limit = 5;
    const data = await api.get(`/consultants?page=${page}&limit=${limit}`, {
      withCredentials: true,
    });

    return data.data?.data?.pagination;
  } catch (error) {
    return [];
  }
};

export const searchVerifiedConsultants = async (
  searchQuery: string,
  page: number
) => {
  try {
    const limit = 5;
    const data = await api.get(
      `/consultants?page=${page}&limit=${limit}&search=${searchQuery}`,
      {
        withCredentials: true,
      }
    );

    return data.data?.data?.pagination;
  } catch (error) {
    return [];
  }
};
