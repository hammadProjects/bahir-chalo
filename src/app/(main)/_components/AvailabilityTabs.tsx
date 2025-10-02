import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFetch from "@/hooks/useFetch";
import { Availability } from "@/types/types";
import { Calendar, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { BookAppointment } from "../../../../actions/booking";

interface Props {
  availabilities: Record<string, Availability[]>;
}

const AvailabilityTabs: React.FC<Props> = ({ availabilities }) => {
  const [notes, setNotes] = useState("");
  const { loading, data, fn: BookingAppointment } = useFetch(BookAppointment);
  const dates = Object.keys(availabilities);
  return (
    <Tabs className="gap-2" defaultValue={dates[0]}>
      <TabsList className="w-full mb-4">
        {dates.map((date) => (
          <TabsTrigger key={date} value={date}>
            {date}
          </TabsTrigger>
        ))}
      </TabsList>

      {dates.map((date: string) => (
        <TabsContent
          key={date}
          value={date}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {availabilities[date].map((avl: Availability, i: number) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`border-[1px] border-emerald-400 h-14 rounded-lg flex items-center 
                  justify-center hover:scale-105 transition-all cursor-pointer font-bold`}
                >
                  {`${avl.startTime}`.slice(11, 16)}
                </Button>
              </DialogTrigger>
              <DialogContent className="md:w-[780px]">
                <DialogTitle>Book an Appointment</DialogTitle>

                {/* <h1>{avl._id}</h1>
                <h1>{consultantId}</h1> */}

                <form>
                  <Label className="text-base font-medium mb-2" htmlFor="notes">
                    Notes (Optional):
                  </Label>
                  <Input
                    value={notes}
                    onChange={(e) => {
                      setNotes(e.target.value);
                    }}
                    id="notes"
                    placeholder="I am thinking of applying for summer intake in Germany..."
                  />
                  <Button
                    disabled={loading}
                    onClick={() => {
                      const formData = new FormData();
                      formData.append("availabilityId", avl._id);
                      formData.append("notes", notes);
                      BookingAppointment(formData);
                    }}
                    className="w-full bg-emerald-400 hover:bg-emerald-600/90 mt-4"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <Calendar /> "Book Appointment"
                      </>
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default AvailabilityTabs;
