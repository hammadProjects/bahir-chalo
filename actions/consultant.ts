"use server";

import { convertTimeToDate, generateError } from "@/lib/utils";
import api from "@/services/api";
import { Availability } from "@/types/types";
import { isBefore } from "date-fns";
import { cookies } from "next/headers";

export const setAvailabilityAction = async (formData: FormData) => {
  try {
    let startTime = formData.get("startTime");
    let endTime = formData.get("endTime");

    if (!startTime || !endTime)
      return { success: false, message: "All fields are required" };

    if (isBefore(endTime as string, startTime as string))
      return { success: false, message: "Start Time must be before End Time" };

    const payload = {
      startTime: convertTimeToDate(startTime as string),
      endTime: convertTimeToDate(endTime as string),
    };

    await api.post("/availability", payload, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });
    return { success: true, message: "Availability has been set successfully" };
  } catch (error) {
    console.log(error);
    throw Error(generateError(error));
  }
};

export const getAvailabilities = async () => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");

    const res = await api.get("/availability", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      success: true,
      message: "Availability Fetched Successfully",
      availability: (res.data?.data?.availability as Availability) || null,
    };
  } catch (error) {
    console.log("error from get availability", error);
    throw Error(generateError(error));
  }
};
