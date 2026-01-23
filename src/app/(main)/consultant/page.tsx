"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import Availability from "./_components/ConsultantAvailability";
import Bookings from "./_components/Bookings";
import { useQueries } from "@tanstack/react-query";
import { getBookings } from "../../../../actions/booking";
import { getAvailability } from "../../../../actions/consultant";
import { useState } from "react";

const ConsultantDashboard = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const fetchBookings = (page: number) => {
    const formData = new FormData();
    formData.append("page", `${page}`);
    return getBookings(formData);
  };

  const [bookings, availabilities] = useQueries({
    queries: [
      {
        queryFn: () => fetchBookings(page),
        queryKey: ["get-bookings", page],
      },
      {
        queryFn: getAvailability,
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
        {bookings?.data && (
          <Bookings
            data={bookings.data}
            handlePageChange={handlePageChange}
            refetch={async () => await bookings.refetch()}
          />
        )}
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
