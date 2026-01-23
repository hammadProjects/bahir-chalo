"use server";
import api from "@/services/api";
import { Availability, Consultant } from "@/types/types";

export const getConsultantById = async (id: string) => {
  try {
    const data = await api.get(`/consultants/${id}`);

    return data.data?.data as {
      consultant: Consultant;
      availabilities: Record<string, Availability[]>;
      totalAvailabilities: number;
    };
  } catch (error) {
    return null;
  }
};
