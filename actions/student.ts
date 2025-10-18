"use server";
import { generateError } from "@/lib/utils";
import api from "@/services/api";
import { cookies } from "next/headers";

export const getAvailableTimeSlots = async (id: string) => {
  try {
    if (!id) return { success: false, message: "consultantId is required" };

    const res = await api.get(`/availability/${id}/slots`, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });

    return {
      success: true,
      message: "Availabilities Fetched Successsfully",
      timeSlots: res.data?.data?.timeSlots || [],
    };
  } catch (error) {
    return { success: false, message: generateError(error) };
  }
};
