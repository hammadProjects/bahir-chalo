"use client";
import AppPagination from "@/components/common/AppPagination";
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
import { getCurrentDate, getCurrentTime } from "@/lib/utils";
import { BookingSchema, BookingStatus, PaginationSchema } from "@/types/types";
import { Calendar, CheckCircle, Clock, User } from "lucide-react";

interface Props {
  data: PaginationSchema;
  handlePageChange: (page: number) => void;
}

const Bookings: React.FC<Props> = ({ data, handlePageChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-xl font-semibold">Booking Settings</span>
        </CardTitle>
        <CardDescription>
          View and manage all your booked Appointments
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        {data?.bookings?.length === 0 ? (
          <div className="text-center font-bold text-lg">
            You have no bookings
          </div>
        ) : (
          data?.bookings?.map((booking) => (
            <Card key={booking._id} className="py-4 w-full">
              <CardContent className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-start">
                  <User className="mt-4" />
                  <div>
                    <h2 className="font-bold text-xl">
                      {booking.studentId.username}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {booking.studentId.email}
                    </p>
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
                </div>
                <div className="space-y-2">
                  <GetBookingStatus
                    status={booking?.status?.toUpperCase() as BookingStatus}
                  />
                  <div className="flex items-center gap-2">
                    {booking?.status.toUpperCase() != "COMPLETED" && (
                      <Button>
                        <CheckCircle /> Complete
                      </Button>
                    )}
                    <Button className="py-1" variant={"outline"}>
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </CardContent>
      <CardFooter>
        <AppPagination
          currentPage={data?.currentPage}
          hasNext={data?.hasNext}
          hasPrev={data?.hasPrev}
          totalPages={data?.totalPages}
          onPageChange={(page: number) => handlePageChange(page)}
        />
      </CardFooter>
    </Card>
  );
};
export default Bookings;
