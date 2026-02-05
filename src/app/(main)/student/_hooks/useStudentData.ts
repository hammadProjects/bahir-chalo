"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings, cancelBookingAction, joinAppointment } from "@/../actions/booking";
import { getAllRoadmaps, getRoadmapById, generateRoadmapAction } from "@/../actions/student";
import { toast } from "sonner";
import { BookingSchema, PaginationSchema } from "@/types/types";

// --- Queries ---

export const useBookings = (page: number) => {
  return useQuery({
    queryKey: ["bookings", page],
    queryFn: async () => {
      const formData = new FormData();
      formData.append("page", page.toString());
      return getBookings(formData);
    },
  });
};

export const useRoadmaps = () => {
  return useQuery({
    queryKey: ["roadmaps"],
    queryFn: getAllRoadmaps,
  });
};

export const useRoadmapDetails = (roadmapId: string | null) => {
  return useQuery({
    queryKey: ["roadmap", roadmapId],
    queryFn: async () => {
      if (!roadmapId) return null;
      const formData = new FormData();
      formData.append("roadmapId", roadmapId);
      return getRoadmapById(formData);
    },
    enabled: !!roadmapId,
  });
};

// --- Mutations ---

export const useCancelBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cancelBookingAction,
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["bookings"] });
      } else {
        toast.error(data?.message || "Failed to cancel booking");
      }
    },
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong");
    },
  });
};

export const useJoinAppointment = () => {
  return useMutation({
    mutationFn: joinAppointment,
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.message);
        if (data.url) {
          window.open(data.url, "_blank");
        }
      } else {
        toast.error(data?.message || "Failed to join appointment");
      }
    },
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong");
    },
  });
};

export const useGenerateRoadmap = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: generateRoadmapAction,
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["roadmaps"] });
      } else {
        toast.error(data?.message || "Failed to generate roadmap");
      }
    },
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong");
    },
  });
};
