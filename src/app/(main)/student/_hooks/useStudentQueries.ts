"use client";

import { useQuery } from "@tanstack/react-query";
import { getBookings } from "@/../actions/booking";
import { getAllRoadmaps, getRoadmapById } from "@/../actions/student";

export const useStudentBookingsQuery = (page: number) => {
  return useQuery({
    queryKey: ["bookings", page],
    queryFn: async () => {
      const formData = new FormData();
      formData.append("page", page.toString());
      return getBookings(formData);
    },
  });
};

export const useStudentRoadmapsQuery = () => {
  return useQuery({
    queryKey: ["roadmaps"],
    queryFn: getAllRoadmaps,
  });
};

export const useStudentRoadmapDetailsQuery = (roadmapId: string | null) => {
  return useQuery({
    queryKey: ["roadmap", roadmapId],
    queryFn: async () => {
      if (!roadmapId) return null;
      const formData = new FormData();
      formData.append("roadmapId", roadmapId);
      return getRoadmapById(formData);
    },
    enabled: !!roadmapId, // query will only run if roadmapId is not null
  });
};
