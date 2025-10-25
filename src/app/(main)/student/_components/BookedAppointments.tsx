"use client";
import GetBookingStatus from "@/components/common/GetBooingStatus";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";
import { formatDateInHours, getCurrentDate } from "@/lib/utils";
import { BookingSchema, BookingStatus } from "@/types/types";
import { Calendar, Clock, Loader2, User, X } from "lucide-react";
import { cancelBookingAction } from "../../../../../actions/booking";
import { useEffect, useState } from "react";

interface Props {
  data: BookingSchema[] | [];
  refetchAppointments: () => void;
}

const BookedAppointments: React.FC<Props> = ({ data, refetchAppointments }) => {
  const [currentBookingid, setCurrentBooking] = useState<null | string>(null);
  const {
    loading,
    fn: CancelBooking,
    data: cancelBookingData,
  } = useFetch(cancelBookingAction);

  const handleCancelBooking = (id: string) => {
    if (loading) return;
    setCurrentBooking(id);
    const formData = new FormData();
    formData.append("bookingId", id);
    formData.append("role", "student"); // for revalidate path
    CancelBooking(formData);
  };

  useEffect(() => {
    if (cancelBookingData?.success) {
      refetchAppointments();
    }
  }, [cancelBookingData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booked Appointments</CardTitle>
        <CardDescription>
          My Booked Appointments With Conultants
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        {data?.map((booking) => (
          <Card key={booking._id} className="py-6 w-full">
            <CardContent className="flex items-center justify-between w-full">
              <div className="flex gap-2 items-start">
                <User className="mt-4" />
                <div>
                  <h2 className="font-bold text-xl">
                    {booking.consultantId?.username}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {booking.consultantId?.email}
                  </p>
                  <p className="text-sm flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {getCurrentDate(booking?.startTime)}
                  </p>
                  <p className="text-sm flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />{" "}
                    {formatDateInHours(booking?.startTime)} -
                    {formatDateInHours(booking?.endTime)}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <GetBookingStatus
                  status={booking?.status?.toUpperCase() as BookingStatus}
                />
                <div className="flex items-center gap-2">
                  {booking?.status.toUpperCase() === "SCHEDULED" && (
                    <Button
                      onClick={() => handleCancelBooking(booking?._id)}
                      className="bg-red-500/80 hover:bg-red-500/83"
                    >
                      {loading && currentBookingid == booking?._id ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <X />
                      )}{" "}
                      Cancel
                    </Button>
                  )}
                  <Button className="py-1" variant={"outline"}>
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};
export default BookedAppointments;
