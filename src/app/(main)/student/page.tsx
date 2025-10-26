"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import GenerateRoadmap from "./_components/GenerateRoadmap";
import BookedAppointments from "./_components/BookedAppointments";
import MyRoadmaps from "./_components/MyRoadmaps";
import { useQueries } from "@tanstack/react-query";
import { getBookings } from "../../../../actions/booking";
import { getAllRoadmaps } from "../../../../actions/student";

const StudentDashboard = () => {
  const [bookings, roadmaps] = useQueries({
    queries: [
      { queryKey: ["get-bookings"], queryFn: getBookings },
      { queryKey: ["getRoadmaps"], queryFn: getAllRoadmaps },
    ],
  });

  const refetchAppointments = async () => {
    await bookings?.refetch();
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
          data={bookings?.data || []}
        />
      </TabsContent>
    </>
  );
};

export default StudentDashboard;
