"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import Availability from "./_components/ConsultantAvailability";
import Bookings from "./_components/Bookings";
import { useQueries } from "@tanstack/react-query";
import { getBookings } from "../../../../actions/booking";
import { getAvailabilities } from "../../../../actions/consultant";

const ConsultantDashboard = () => {
  const [bookings, availabilities] = useQueries({
    queries: [
      {
        queryFn: getBookings,
        queryKey: ["get-bookings"], //Array according to Documentation
      },
      {
        queryFn: getAvailabilities,
        queryKey: ["get-availabilities"],
      },
    ],
  });

  const refetchAvailability = async () => {
    await availabilities.refetch();
  };

  return (
    <>
      <TabsContent value="earnings">Earnings</TabsContent>
      <TabsContent value="bookings">
        <Bookings data={bookings.data || []} />
      </TabsContent>
      <TabsContent value="availability">
        <Availability
          isLoading={availabilities.isLoading}
          availability={availabilities.data?.availability || null}
          refetch={refetchAvailability}
        />
      </TabsContent>
    </>
  );
};

export default ConsultantDashboard;
