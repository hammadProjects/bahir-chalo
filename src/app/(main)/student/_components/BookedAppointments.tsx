"use client";
import GetBookingStatus from "@/components/common/GetBooingStatus";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";
import { formatDateInHours, getCurrentDate } from "@/lib/utils";
import { BookingSchema, BookingStatus } from "@/types/types";
import { Calendar, Clock, Loader2, User, X } from "lucide-react";
import {
  cancelBookingAction,
  joinAppointment,
} from "../../../../../actions/booking";
import { useEffect, useState } from "react";
import Link from "next/link";
import AppPagination from "@/components/common/AppPagination";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  handlePageChange: (page: number) => void;
  data: BookingSchema[] | [];
  refetchAppointments: () => void;
  error: boolean;
}

const BookedAppointments: React.FC<Props> = ({
  error,
  data,
  totalPages,
  currentPage,
  hasNext,
  hasPrev,
  handlePageChange,
  refetchAppointments,
}) => {
  const [currentBookingid, setCurrentBooking] = useState<null | string>(null);
  const [dialogId, setDialogId] = useState<string | null>(null);

  const {
    loading,
    fn: CancelBooking,
    data: cancelBookingData,
  } = useFetch(cancelBookingAction);

  const {
    loading: joinAppointmentLoading,
    fn: join,
    // data: joinAppointmentData,
  } = useFetch(joinAppointment);

  const handleCancelBooking = (id: string) => {
    if (loading) return;
    setCurrentBooking(id);
    const formData = new FormData();
    formData.append("bookingId", id);
    formData.append("role", "student"); // for revalidate path
    CancelBooking(formData);
    setCurrentBooking(null);
  };

  const handleJoinAppointment = (id: string) => {
    if (joinAppointmentLoading) return;
    setCurrentBooking(id);
    const formData = new FormData();
    formData.append("bookingId", id);
    join(formData);
    setCurrentBooking(null);
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
        {error ? (
          <>an error occured. thank you for being patient</>
        ) : data?.length === 0 ? (
          <div>
            <p>no appointment available. you can view consultants here</p>
            <Link href={"/consultants"}>
              <Button>Consultants</Button>
            </Link>
          </div>
        ) : (
          data?.map((booking) => (
            <Card key={booking._id} className="py-6 w-full">
              <CardContent className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-start">
                  <User className="mt-4" />
                  <div>
                    <h2 className="font-bold text-xl capitalize">
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
                      {formatDateInHours(booking?.startTime, true)} -
                      {formatDateInHours(booking?.endTime, true)}
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
                        variant={"destructive"}
                      >
                        {loading && currentBookingid == booking?._id ? (
                          <Loader2 className="animate-spin" />
                        ) : (
                          <X />
                        )}{" "}
                        Cancel
                      </Button>
                    )}
                    <Dialog
                      open={dialogId === booking?._id}
                      onOpenChange={(isOpen) =>
                        setDialogId(isOpen ? `${booking?._id}` : null)
                      }
                      key={booking?._id}
                    >
                      <DialogTrigger asChild>
                        <Button
                          onClick={() => setDialogId(booking?._id)}
                          className="py-1"
                          variant={"outline"}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="md:w-[780px]">
                        <DialogTitle>Appointment Details</DialogTitle>
                        <Button
                          onClick={() => handleJoinAppointment(booking?._id)}
                          disabled={joinAppointmentLoading}
                        >
                          {joinAppointmentLoading ? (
                            <Loader2 className="animate-spin" />
                          ) : (
                            "Join Meeting"
                          )}
                        </Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </CardContent>
      <CardFooter>
        <AppPagination
          totalPages={totalPages}
          currentPage={currentPage}
          hasNext={hasNext}
          hasPrev={hasPrev}
          onPageChange={handlePageChange}
        />
      </CardFooter>
    </Card>
  );
};

export default BookedAppointments;
