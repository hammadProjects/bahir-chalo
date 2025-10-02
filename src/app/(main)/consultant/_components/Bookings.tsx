"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, CheckCircle, Clock, User } from "lucide-react";

const Bookings = () => {
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
      <CardContent className="flex justify-between items-center">
        <Card className="py-4 w-full">
          <CardContent className="flex items-center justify-between w-full">
            <div className="flex gap-2 items-start">
              <User className="mt-4" />
              <div>
                <h2 className="font-bold text-xl">John Doe</h2>
                <p className="text-sm text-muted-foreground">
                  john.doe@example.com
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" /> May 28, 2025
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" /> 12:30 - 13:00
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
      </CardContent>
    </Card>
  );
};
export default Bookings;
