import AppPagination from "@/components/common/AppPagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaginationSchema } from "@/types/types";
import { useState } from "react";
import BookingCard from "./BookingCard";

interface Props {
  completeLoading: boolean;
  joinAppointmentLoading: boolean;
  currentBookingid: string | null;
  onCompleteBooking: (id: string) => void;
  onJoinBooking: (id: string) => void;
  data: PaginationSchema;
  handlePageChange: (page: number) => void;
}

const BookingsPresenter = ({
  completeLoading,
  joinAppointmentLoading,
  currentBookingid,
  onCompleteBooking,
  onJoinBooking,
  data,
  handlePageChange,
}: Props) => {
  const [dialogId, setDialogId] = useState<string | null>(null);

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
            <BookingCard booking={booking} completeLoading={completeLoading} />
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

export default BookingsPresenter;
