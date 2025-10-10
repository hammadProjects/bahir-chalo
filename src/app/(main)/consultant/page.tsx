"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import Availability from "./_components/Availability";
import Bookings from "./_components/Bookings";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../../actions/booking";

const ConsultantDashboard = () => {
  const { data, isLoading } = useQuery({
    queryFn: getBookings,
    queryKey: ["get-bookings"], //Array according to Documentation
  });

  if (data && !isLoading) console.log("data from page.tsx", data);

  return (
    <>
      <TabsContent value="earnings">Earnings</TabsContent>
      <TabsContent value="bookings">
        <Bookings data={data || []} />
      </TabsContent>
      <TabsContent value="availability">
        <Availability />
      </TabsContent>
    </>
  );
};

export default ConsultantDashboard;
