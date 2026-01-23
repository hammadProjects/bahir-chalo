"use client";
import useFetch from "@/hooks/useFetch";
import { PaginationSchema } from "@/types/types";
import { useState } from "react";
import {
  completeBooking,
  joinAppointment,
} from "../../../../../actions/booking";
import BookingsPresenter from "./BookingsPresenter";

interface Props {
  data: PaginationSchema;
  handlePageChange: (page: number) => void;
  refetch: () => void;
}

const Bookings: React.FC<Props> = ({ data, refetch, handlePageChange }) => {
  const [currentBookingid, setCurrentBooking] = useState<null | string>(null);

  const { loading: joinAppointmentLoading, fn: join } =
    useFetch(joinAppointment);

  const { loading: completeLoading, fn: complete } = useFetch(completeBooking);

  const handleJoinAppointment = (id: string) => {
    if (joinAppointmentLoading) return;
    setCurrentBooking(id);
    const formData = new FormData();
    formData.append("bookingId", id);
    join(formData).finally(() => setCurrentBooking(null));
  };

  const handleCompleteBooking = (id: string) => {
    if (completeLoading) return;
    setCurrentBooking(id);
    const formData = new FormData();
    formData.append("bookingId", id);
    complete(formData).finally(() => {
      setCurrentBooking(null);
      refetch();
    });
  };

  return (
    <BookingsPresenter
      handlePageChange={handlePageChange}
      completeLoading={completeLoading}
      currentBookingid={currentBookingid}
      onCompleteBooking={handleCompleteBooking}
      onJoinBooking={handleJoinAppointment}
      joinAppointmentLoading={joinAppointmentLoading}
      data={data}
    />
  );
};
export default Bookings;
