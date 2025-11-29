"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import GenerateRoadmap from "./_components/GenerateRoadmap";
import BookedAppointments from "./_components/BookedAppointments";
import MyRoadmaps from "./_components/MyRoadmaps";
import { useQueries } from "@tanstack/react-query";
import { getBookings } from "../../../../actions/booking";
import { getAllRoadmaps } from "../../../../actions/student";
import AppPagination from "@/components/common/AppPagination";

const StudentDashboard = () => {
  const getBookingsHandler = (page?: number) => {
    const formData = new FormData();
    page = page || 1;
    formData.append("page", `${page}`);
    return getBookings(formData);
  };

  const [bookingPagination, roadmaps] = useQueries({
    queries: [
      { queryKey: ["get-bookings"], queryFn: () => getBookingsHandler() },
      { queryKey: ["getRoadmaps"], queryFn: getAllRoadmaps },
    ],
  });

  const refetchAppointments = async () => {
    await bookingPagination?.refetch();
  };

  const handlePageChange = (page: number) => getBookingsHandler(page);

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
        />
        <AppPagination
          totalPages={bookingPagination?.data?.totalPages!}
          currentPage={bookingPagination?.data?.currentPage!}
          hasNext={bookingPagination?.data?.hasNext!}
          hasPrev={bookingPagination?.data?.hasPrev!}
          onPageChange={handlePageChange}
        />
      </TabsContent>
    </>
  );
};

export default StudentDashboard;
