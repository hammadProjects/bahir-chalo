import GetBookingStatus from "@/components/common/GetBooingStatus";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getCurrentDate, getCurrentTime } from "@/lib/utils";
import { BookingSchema, BookingStatus, PaginationSchema } from "@/types/types";
import { Calendar, CheckCircle, Clock, Loader2, User } from "lucide-react";

const BookingCard = ({ booking }: { booking: BookingSchema }) => {
  return (
    <Card key={booking._id} className="py-4 w-full">
      <CardContent className="flex items-center justify-between w-full">
        <div className="flex gap-2 items-start">
          <User className="text-emerald-600 mt-4" />
          <div>
            <h2 className="font-bold text-xl">{booking.studentId.username}</h2>
            <p className="text-sm text-muted-foreground">
              {booking.studentId.email}
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="text-emerald-600 w-4 h-4" />
              {getCurrentDate(booking?.startTime)}
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Clock className="text-emerald-600 w-4 h-4" />{" "}
              {getCurrentTime(`${booking?.startTime}`)} -{" "}
              {getCurrentTime(`${booking?.endTime}`)}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <GetBookingStatus
            status={booking?.status?.toUpperCase() as BookingStatus}
          />
          <div className="flex items-center gap-2">
            {booking?.status.toUpperCase() != "COMPLETED" && (
              <Button
                className="bg-emerald-600 hover:bg-emerald-600/90"
                disabled={completeLoading && currentBookingid === booking?._id}
                onClick={() => onCompleteBooking(booking?._id)}
              >
                {completeLoading && currentBookingid === booking?._id ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <CheckCircle />
                )}{" "}
                Complete
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
                <h3 className="text-foreground/50 text-sm">Student</h3>
                <div className="-mt-3 flex gap-2 items-start">
                  <User className="mt-4" />
                  <div>
                    <h2 className="font-semibold">
                      {booking.studentId.username}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {booking.studentId.email}
                    </p>
                  </div>
                </div>

                <h3 className="text-foreground/50 text-sm">Scheduled Time</h3>
                <div className="-mt-3">
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {getCurrentDate(booking?.startTime)}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />{" "}
                    {getCurrentTime(`${booking?.startTime}`)} -{" "}
                    {getCurrentTime(`${booking?.endTime}`)}
                  </p>
                </div>

                {booking?.status.toUpperCase() === "SCHEDULED" && (
                  <Button
                    className="bg-emerald-600 hover:bg-emerald-600/90"
                    onClick={() => onJoinBooking(booking?._id)}
                    disabled={joinAppointmentLoading}
                  >
                    {joinAppointmentLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Join Meeting"
                    )}
                  </Button>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
