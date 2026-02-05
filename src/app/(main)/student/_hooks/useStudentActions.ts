"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelBookingAction, joinAppointment } from "@/../actions/booking";
import { generateRoadmapAction } from "@/../actions/student";
import { toast } from "sonner";

export const useStudentCancelBookingMutation = () => {
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

export const useStudentJoinAppointmentMutation = () => {
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

export const useStudentGenerateRoadmapMutation = () => {
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
