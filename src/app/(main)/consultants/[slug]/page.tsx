"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, FileText, Medal, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import BackButton from "@/components/common/BackButton";
import { useParams } from "next/navigation";
import { useQueries } from "@tanstack/react-query";
import { getConsultantById } from "../_api/getConsultantById";
import ByIdShimmer from "../_components/ByIdShimmer";
import AvailabilityTabs from "../../_components/AvailabilityTabs";
import { getAvailableTimeSlots } from "../../../../../actions/student";

const ConsultantProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const [show, setShow] = useState(false);

  // if id are different it considers them different - if same it caches it
  const [consultantById, availableSlots] = useQueries({
    queries: [
      {
        queryKey: ["consultant-by-id", slug],
        queryFn: ({ queryKey }: { queryKey: string[] }) =>
          getConsultantById(queryKey[1]),
      },
      {
        queryKey: ["consultant-available-slots", slug],
        queryFn: ({ queryKey }: { queryKey: string[] }) =>
          getAvailableTimeSlots(queryKey[1]),
      },
    ],
  });

  const { isLoading, data } = consultantById;
  const { data: slots } = availableSlots;
  const slotKeys = Object.keys(slots?.timeSlots || {});
  const slotLength = slotKeys?.map((key) => slots?.timeSlots[key]?.length);
  const totalAvailabilities = slotLength?.reduce((acc, elem) => acc + elem, 0);

  return isLoading ? (
    <ByIdShimmer />
  ) : (
    <section className="min-h-screen py-10 md:py-20 max-w-5xl mx-auto px-4">
      <div>
        <BackButton
          title="Back to Consultants"
          style="mb-8"
          url="/consultants"
        />
        <h1 className="text-4xl font-bold mb-4 capitalize">
          {data?.consultant?.username}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="col-span-1 bg-muted/5 border-emerald-400/10 h-fit">
          <CardContent className="flex flex-col items-center pt-10">
            <div className="h-28 w-28 rounded-full bg-red-100" />
            <h2 className="font-bold text-xl mt-4 mb-2 capitalize">
              {data?.consultant?.username}
            </h2>
            <p className="flex mt-4 mb-6 gap-2">
              <Medal className="text-emerald-400/90" />
              {data?.consultant?.consultantProfile?.experience} years experience
            </p>
            <Button
              onClick={() => setShow((prev) => !prev)}
              className="bg-emerald-400 hover:bg-emerald-600/90 w-full"
            >
              Book Appointment {show ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </CardContent>
        </Card>
        <div className="md:col-span-2 flex flex-col gap-6">
          <Card className="bg-muted/5 border-emerald-400 h-fit">
            <CardContent className="">
              <h4 className="font-bold text-xl mb-2 capitalize">
                About {data?.consultant?.username}
              </h4>
              <p className="text-muted-foreground text-sm mb-6">
                Professional background and expertise
              </p>

              <div>
                <h5 className="flex gap-2 font-semibold">
                  <FileText className="text-emerald-400" />
                  Description
                </h5>
                <p className="text-muted-foreground mt-3 capitalize">
                  {data?.consultant?.consultantProfile?.bio}
                </p>
              </div>
              <Separator className="bg-emerald-600/20 my-4" />
              <div>
                <h5 className="flex gap-2 font-semibold">
                  <Clock className="text-emerald-400" /> Availability
                </h5>
                <p className="text-muted-foreground mt-3">
                  {totalAvailabilities} time slots available for booking over
                  the next 4 days
                </p>
              </div>
            </CardContent>
          </Card>
          {show && (
            <Card className="bg-muted/5 border-emerald-400 h-fit">
              <CardContent>
                <h4 className="font-bold text-xl mb-2">Book an Appointment</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Select a time slot and provide details for your consultation
                </p>

                {slots?.timeSlots === 0 ? (
                  <div>
                    <h2 className="text-2xl font-semibold text-center">
                      {data?.consultant?.username} have no Availability for next
                      7 days
                    </h2>
                  </div>
                ) : (
                  <AvailabilityTabs
                    refetchAvailabilities={async () => {
                      await availableSlots?.refetch();
                    }}
                    availabilities={slots?.timeSlots || {}}
                  />
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsultantProfile;
