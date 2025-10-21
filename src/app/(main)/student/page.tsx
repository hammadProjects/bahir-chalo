"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import GenerateRoadmap from "./_components/GenerateRoadmap";
import BookedAppointments from "./_components/BookedAppointments";
import MyRoadmaps from "./_components/MyRoadmaps";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../../actions/booking";

const StudentDashboard = () => {
  const { data, refetch } = useQuery({
    queryFn: getBookings,
    queryKey: ["get-bookings"], //Array according to Documentation
  });

  const refetchAppointments = async () => {
    await refetch();
  };

  return (
    <>
      <TabsContent value="my-roadmaps">
        <MyRoadmaps />
      </TabsContent>
      <TabsContent value="generate-roadmaps">
        <GenerateRoadmap />
      </TabsContent>
      <TabsContent value="booked-appointments">
        <BookedAppointments
          refetchAppointments={refetchAppointments}
          data={data || []}
        />
      </TabsContent>
    </>
  );
};

export default StudentDashboard;
