"use server";

import api from "@/services/api";
import { generateError } from "@/lib/utils";
import { BookingSchema, PaginationSchema, UseFetchData } from "@/types/types";
import { cookies, headers } from "next/headers";
import { revalidatePath } from "next/cache";

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

    const res = await api.post(`/bookings/${availabilityId}`, payload, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      success: true,
      message: res.data?.message,
      credits: res.data?.remainingCredits,
    };
  } catch (error: any) {
    return { success: false, message: generateError(error) };
  }
};

export const getBookings = async (formData: FormData) => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");

    const pageNum = formData.get("page");
    const limit = 5;

    const res = await api.get(`/bookings/mine?page=${pageNum}&limit=${limit}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data?.pagination as PaginationSchema;
  } catch (error) {}
};

export const cancelBookingAction = async (formData: FormData) => {
  try {
    const bookingId = formData.get("bookingId");
    const role = formData.get("role");
    if (!bookingId || !role)
      return { success: false, message: "Booking ID and Role are required" };

    if (role != "student" && role != "consultant")
      return {
        success: false,
        message: "Only Student and Consultant can cancel Appointment",
      };

    const token = (await cookies()).get("token")?.value;

    await api.delete(`/bookings/${bookingId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    revalidatePath(role === "student" ? "/student" : "/consultant");
    return { success: true, message: `Booking Canceled Successfully` };
  } catch (error) {
    return { success: false, message: generateError(error) };
  }
};

export const joinAppointment = async (formData: FormData) => {
  try {
    const bookingId = formData.get("bookingId");
    if (!bookingId)
      return { success: false, message: "Booking ID is required" };

    const token = (await cookies()).get("token")?.value;
    if (!token) return { success: false, message: "Unauthorized" };
    const response = await api.post(
      `/bookings/join/${bookingId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: true,
      message: "Meeting will be joined shortly",
      url: `http://localhost:3000/meeting/${response?.data?.data?.token}`,
    };
  } catch (error) {
    return { success: false, message: generateError(error) };
  }
};

export const completeBooking = async (formData: FormData) => {
  try {
    const bookingId = formData.get("bookingId");
    if (!bookingId)
      return { success: false, message: "Booking ID Role are required" };

    await api.put(
      `/bookings/${bookingId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
        },
        withCredentials: true,
      }
    );

    return { success: true, message: "Appointment has been marked completed" };
  } catch (error) {
    return { success: false, message: generateError(error) };
  }
};
