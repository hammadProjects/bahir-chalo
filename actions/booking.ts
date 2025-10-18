"use server";

import api from "@/services/api";
import { generateError } from "@/lib/utils";
import { BookingSchema, UseFetchData } from "@/types/types";
import { cookies } from "next/headers";

export const BookAppointment = async (formData: FormData) => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");

    const availabilityId = formData.get("availabilityId");
    const startTime = formData.get("startTime");
    const endTime = formData.get("endTime");

    if (!availabilityId || !startTime || !endTime)
      throw Error("AvailabilityId, startTime, and endTime are Required");

    const payload = {
      notes: formData.get("notes"),
      startTime: new Date(startTime as string),
      endTime: new Date(endTime as string),
      // startTime: "2025-10-14T19:30:00.299+00:00",
      // endTime: "2025-10-14T20:00:00.299+00:00",
      availabilityId,
    };

    const res = await api.post(`/booking/${availabilityId}`, payload, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    return { success: true, message: res.data?.message } as UseFetchData;
  } catch (error: any) {
    console.log(error?.response);
    return { success: false, message: generateError(error) };
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
