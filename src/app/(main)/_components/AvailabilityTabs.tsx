"use client";
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
import { TimeSlot } from "@/types/types";
import { Calendar, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BookAppointment } from "../../../../actions/booking";

interface Props {
  availabilities: Record<string, TimeSlot[]>;
}

const AvailabilityTabs: React.FC<Props> = ({ availabilities }) => {
  const [dialogOpen, setDialogOpen] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const { loading, fn: BookingAppointment, data } = useFetch(BookAppointment);
  const dates = Object.keys(availabilities);

  useEffect(() => {
    if (data?.success) {
      console.log(data);
    }
  }, [data]);

  return dates.length === 0 ? (
    <>No Availabilities are available</>
  ) : (
    <Tabs className="gap-2" defaultValue={dates[0]}>
      <TabsList className="w-full mb-4">
        {dates.map((date) => (
          <TabsTrigger key={date} value={date}>
            {date}
          </TabsTrigger>
        ))}
      </TabsList>

      {dates.map((date: string, i) => (
        <TabsContent key={date} value={date}>
          {availabilities[date].length === 0 ? (
            <p>
              No slot is available for{" "}
              <span className="font-bold">{dates[i]}</span>
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {availabilities[date].map(
                ({ startTime, endTime, availabilityId }: TimeSlot) => (
                  <Dialog
                    open={`${startTime}` === dialogOpen}
                    onOpenChange={(isOpen) =>
                      setDialogOpen(isOpen ? `${startTime}` : null)
                    }
                    key={`${startTime}`}
                  >
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => setDialogOpen(`${startTime}`)}
                        variant={"outline"}
                        className={`border-[1px] border-emerald-400 h-14 rounded-lg flex items-center 
                  justify-center hover:scale-105 transition-all cursor-pointer font-bold`}
                      >
                        {`${new Date(startTime).getHours()} : ${new Date(
                          startTime
                        ).getMinutes()} `}{" "}
                        - {new Date(endTime).getHours()} :
                        {new Date(endTime).getMinutes()}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="md:w-[780px]">
                      <DialogTitle>Book an Appointment</DialogTitle>

                      {/* <h1>{avl._id}</h1>
                <h1>{consultantId}</h1> */}

                      <form>
                        <Label
                          className="text-base font-medium mb-2"
                          htmlFor="notes"
                        >
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
                          onClick={async () => {
                            const formData = new FormData();
                            formData.append("availabilityId", availabilityId);
                            formData.append("notes", notes);
                            formData.append("startTime", `${startTime}`);
                            formData.append("endTime", `${endTime}`);
                            await BookingAppointment(formData);
                            setDialogOpen(null);
                          }}
                          className="w-full bg-emerald-400 hover:bg-emerald-600/90 mt-4"
                        >
                          {loading ? (
                            <Loader2 className="animate-spin" />
                          ) : (
                            <>
                              <Calendar /> Book Appointment
                            </>
                          )}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                )
              )}
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default AvailabilityTabs;
