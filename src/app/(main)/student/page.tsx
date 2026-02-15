"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import GenerateRoadmap from "./_components/GenerateRoadmap";
import BookedAppointments from "./_components/BookedAppointments";
import MyRoadmaps from "./_components/MyRoadmaps";
import { useQueries } from "@tanstack/react-query";
import { getBookings } from "../../../../actions/booking";
import { getAllRoadmaps } from "../../../../actions/student";
import { useState } from "react";

const StudentDashboard = () => {
  const [page, setPage] = useState(1);
  const getBookingsHandler = (page?: number) => {
    const formData = new FormData();
    page = page || 1;
    formData.append("page", `${page}`);
    return getBookings(formData);
  };

  const [bookingPagination, roadmaps] = useQueries({
    queries: [
      {
        queryKey: ["get-bookings", page],
        queryFn: () => getBookingsHandler(page),
      },
      { queryKey: ["getRoadmaps"], queryFn: getAllRoadmaps },
    ],
  });

  const refetchAppointments = async () => {
    await bookingPagination?.refetch();
  };

  const handlePageChange = (page: number) => {
    // getBookingsHandler(page);
    if (page < 1) return;
    setPage(page);
  };

  return (
    <>
      <TabsContent value="my-roadmaps">
        <MyRoadmaps
          apiLoading={roadmaps?.isLoading}
          roadmaps={roadmaps?.data?.roadmapData || []}
        />
      </TabsContent>
      <TabsContent value="generate-roadmaps">
        <GenerateRoadmap
          refetchRoadmaps={async () => {
            await roadmaps.refetch();
          }}
        />
      </TabsContent>
      <TabsContent value="booked-appointments">
        <BookedAppointments
          refetchAppointments={refetchAppointments}
          data={bookingPagination?.data?.bookings || []}
          error={bookingPagination?.data?.bookings === undefined}
          currentPage={bookingPagination?.data?.currentPage || 1}
          totalPages={bookingPagination?.data?.totalPages || 1}
          hasNext={bookingPagination?.data?.hasNext || false}
          hasPrev={bookingPagination?.data?.hasPrev || false}
          handlePageChange={handlePageChange}
        />
      </TabsContent>
    </>
  );
};

export default StudentDashboard;
