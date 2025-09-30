import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BookedAppointments = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booked Appointments</CardTitle>
        <CardDescription>
          My Booked Appointments With Conultants
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center text-xl font-semibold">
        No Appointments Available
      </CardContent>
    </Card>
  );
};
export default BookedAppointments;
