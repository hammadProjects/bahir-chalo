import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentTime, getDate } from "@/lib/utils";
import { BookingSchema } from "@/types/types";
import { Calendar, CheckCircle, Clock, User } from "lucide-react";

interface Props {
  data: BookingSchema[] | [];
}

const BookedAppointments: React.FC<Props> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booked Appointments</CardTitle>
        <CardDescription>
          My Booked Appointments With Conultants
        </CardDescription>
      </CardHeader>
      {/* <CardContent className="text-center text-xl font-semibold">
        No Appointments Available
      </CardContent> */}
      <CardContent className="grid grid-cols-1 gap-4">
        {data?.map((booking) => (
          <Card key={booking._id} className="py-4 w-full">
            <CardContent className="flex items-center justify-between w-full">
              <div className="flex gap-2 items-start">
                <User className="mt-4" />
                <div>
                  <h2 className="font-bold text-xl">
                    {booking.consultantId.username}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {booking.consultantId.email}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {getDate(`${booking.availabilityId.startTime}`)}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />{" "}
                    {getCurrentTime(`${booking.availabilityId.startTime}`)} -
                    {getCurrentTime(`${booking.availabilityId.endTime}`)}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-amber-600/20 text-amber-700 p-1 rounded-sm text-sm w-fit">
                  SCHEDULED
                </div>
                <div className="flex items-center gap-2">
                  <Button>
                    <CheckCircle /> Complete
                  </Button>
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
