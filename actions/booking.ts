"use server";

import { generateError } from "@/lib/utils";
import api from "@/services/api";
import { BookingSchema, UseFetchData } from "@/types/types";
import { cookies } from "next/headers";

export const BookAppointment = async (formData: FormData) => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");

    const availabilityId = formData.get("availabilityId");

    if (!availabilityId)
      throw Error("Consultant ID and Availability ID are required");

    const payload = { notes: formData.get("notes") };

    const res = await api.post(`/booking/${availabilityId}`, payload, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("Coming over herr huh", res.data);

    return { success: true, message: res.data?.message } as UseFetchData;
  } catch (error: any) {
    console.log(error?.response);
    const message = generateError(error);
    return { success: false, message };
  }
};

export const getBookings = async () => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");

    const res = await api.get("/booking/mine", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data?.data?.bookings as BookingSchema[];
  } catch (error) {
    console.log(error);
  }
};
