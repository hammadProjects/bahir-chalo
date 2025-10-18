"use server";

import api from "@/services/api";
import { Availability, Consultant } from "@/types/types";
import { cookies } from "next/headers";

export const getConsultantById = async (id: string) => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");
    const data = await api.get(`/consultant/${id}`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data?.data as {
      consultant: Consultant;
      availabilities: Record<string, Availability[]>;
      totalAvailabilities: number;
    };
  } catch (error) {
    let message = "Something Went Wrong";

    if (error && typeof error === "object" && "response" in error) {
      const err = error as { response?: { data?: { message?: string } } };
      message = err.response?.data?.message || message;
    }
    console.log(message);
    return null;
  }
};
