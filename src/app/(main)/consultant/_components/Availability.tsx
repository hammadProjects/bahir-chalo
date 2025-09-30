import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";

const Availability = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock />
          <span className="text-xl font-semibold">Availability Settings</span>
        </CardTitle>
        <CardDescription>
          Set your daily availability for student appointments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2 text-lg">Current Availability</h3>
        <Card className="py-4">
          <CardContent className="flex items-center gap-4"></CardContent>
        </Card>

        <Button className="my-4 w-full">Update Availability</Button>
      </CardContent>
    </Card>
  );
};
export default Availability;
