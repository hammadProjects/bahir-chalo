"use client";

import React from "react";
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
import { formatDateInHours, getCurrentDate } from "@/lib/utils";
import { BookingSchema, BookingStatus } from "@/types/types";
import { Calendar, Clock, Loader2, User, X } from "lucide-react";
import Link from "next/link";
import AppPagination from "@/components/common/AppPagination";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AppointmentListSkeleton } from "./ListSkeletons";
import QueryErrorView from "./QueryErrorView";

interface Props {
  bookings: BookingSchema[];
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  currentBookingId: string | null;
  dialogId: string | null;
  isCancelling: boolean;
  isJoining: boolean;
  onPageChange: (page: number) => void;
  onCancelBooking: (id: string) => void;
  onJoinAppointment: (id: string) => void;
  onDialogChange: (id: string | null) => void;
  onRetry: () => void;
}

const AppointmentListView: React.FC<Props> = ({
  bookings,
  isLoading,
  isError,
  currentPage,
  totalPages,
  hasNext,
  hasPrev,
  currentBookingId,
  dialogId,
  isCancelling,
  isJoining,
  onPageChange,
  onCancelBooking,
  onJoinAppointment,
  onDialogChange,
  onRetry,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booked Appointments</CardTitle>
        <CardDescription>
          My Booked Appointments With Consultants
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        {isError ? (
          <QueryErrorView onRetry={onRetry} />
        ) : isLoading ? (
          <AppointmentListSkeleton />
        ) : bookings.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-xl border-2 border-dashed">
            <p className="text-muted-foreground mb-4">No appointment available. You can view consultants here</p>
            <Link href={"/consultants"}>
              <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">View Consultants</Button>
            </Link>
          </div>
        ) : (
          bookings.map((booking) => (
            <Card key={booking._id} className="py-6 w-full shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
                <div className="flex gap-4 items-start">
                  <User className="w-10 h-10 p-2 bg-emerald-100 rounded-full text-emerald-600" />
                  <div>
                    <h2 className="font-bold text-xl capitalize text-gray-900">
                      {booking.consultantId?.username}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {booking.consultantId?.email}
                    </p>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {getCurrentDate(booking?.startTime)}
                      </p>
                      <p className="text-xs flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {formatDateInHours(booking?.startTime, true)} -
                        {formatDateInHours(booking?.endTime, true)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                  <GetBookingStatus
                    status={booking?.status?.toUpperCase() as BookingStatus}
                  />
                  <div className="flex items-center gap-2">
                    {booking?.status.toUpperCase() === "SCHEDULED" && (
                      <Button
                        onClick={() => onCancelBooking(booking._id)}
                        variant={"destructive"}
                        size="sm"
                        disabled={isCancelling && currentBookingId === booking._id}
                      >
                        {isCancelling && currentBookingId === booking._id ? (
                          <Loader2 className="animate-spin h-4 w-4 mr-2" />
                        ) : (
                          <X className="h-4 w-4 mr-2" />
                        )}
                        Cancel
                      </Button>
                    )}
                    <Dialog
                      open={dialogId === booking._id}
                      onOpenChange={(isOpen) =>
                        onDialogChange(isOpen ? booking._id : null)
                      }
                    >
                      <DialogTrigger asChild>
                        <Button variant={"outline"} size="sm">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogTitle>Appointment Details</DialogTitle>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground mb-4">
                            Details for your session with {booking.consultantId?.username}.
                          </p>
                          {booking.status.toUpperCase() !== "CANCELLED" && (
                            <Button
                              onClick={() => onJoinAppointment(booking._id)}
                              disabled={isJoining && currentBookingId === booking._id}
                              className="w-full bg-emerald-600 hover:bg-emerald-700"
                            >
                              {isJoining && currentBookingId === booking._id ? (
                                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                              ) : (
                                "Join Meeting"
                              )}
                            </Button>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </CardContent>
      {bookings.length > 0 && 
      <CardFooter className="justify-center border-t py-4">
        <AppPagination
          totalPages={totalPages}
          currentPage={currentPage}
          hasNext={hasNext}
          hasPrev={hasPrev}
          onPageChange={onPageChange}
        />
      </CardFooter>
      }
    </Card>
  );
};

export default AppointmentListView;
