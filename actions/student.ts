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

export const generateRoadmapAction = async (formData: FormData) => {
  try {
    const country = formData.get("country");
    if (!country)
      throw {
        success: false,
        message: "Please Enter Some Desired Country",
      };

    const res = await api.post(
      `/student/roadmap/generate/${country}`,
      { country },
      {
        headers: {
          Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
        },
      }
    );

    return {
      success: true,
      message: "Roadmap generated successfully",
      roadmap: res.data?.data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: generateError(error),
    };
  }
};

export const getAllRoadmaps = async () => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");

    const res = await api.get("/student/roadmap", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      success: true,
      message: "Roadmaps fetched successfully",
      roadmapData: res.data?.data?.roadmaps,
    };
  } catch (error) {
    return { success: false, message: generateError(error) };
  }
};

export const getRoadmapById = async (formData: FormData) => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw Error("Unauthorized");

    const roadmapId = formData.get("roadmapId");
    if (!roadmapId)
      return { success: false, message: "Roadmap Id is required" };

    const res = await api.get(`/student/roadmap/${roadmapId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      success: true,
      message: "Roadmap fetched successfully",
      roadmapData: res?.data?.data?.roadmapData?.roadmapData || [],
      hideResponse: true,
    };
  } catch (error) {
    return { success: false, message: generateError(error) };
  }
};
