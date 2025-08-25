"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Clock,
  FileText,
  Medal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TabsDemo } from "../../_components/Tabs";

const ConsultantProfile = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="min-h-screen py-20 max-w-5xl mx-auto">
      <div>
        <Button className="mb-8" size={"sm"} variant={"outline"}>
          <Link href={"/consultants"} className="flex gap-1 items-center">
            <ArrowLeft /> Back to Consultants
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">Muhammad Hammad</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card className="bg-muted/5 border-emerald-400/10 h-fit">
          <CardContent className="flex flex-col items-center pt-10">
            <div className="h-28 w-28 rounded-full bg-red-100" />
            {/* <Image
              src={"/images/banner2.webp"}
              alt="avatar"
              width={160}
              height={160}
              className="rounded-full"
            /> */}
            <h2 className="font-bold text-xl mt-4 mb-2">Muhammad Hammad</h2>
            <p className="flex mt-4 mb-6">
              <Medal className="text-emerald-400/90" />4 years experience
            </p>
            <Button
              onClick={() => setShow((prev) => !prev)}
              className="bg-emerald-400 hover:bg-emerald-600/90 text-white w-full"
            >
              Book Appointment {show ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </CardContent>
        </Card>
        <div className="col-span-2 flex flex-col gap-6">
          <Card className="bg-muted/5 border-emerald-400 h-fit">
            <CardContent className="">
              <h4 className="font-bold text-xl mb-2">About Muhammad Hammad</h4>
              <p className="text-muted-foreground text-sm mb-6">
                Professional background and expertise
              </p>

              <div>
                <h5 className="flex gap-2 font-semibold">
                  <FileText className="text-emerald-400" />
                  Description
                </h5>
                <p className="text-muted-foreground mt-3">
                  Expert in Scholarships
                </p>
              </div>
              <Separator className="bg-emerald-600/20 my-4" />
              <div>
                <h5 className="flex gap-2 font-semibold">
                  <Clock className="text-emerald-400" /> Availability
                </h5>
                <p className="text-muted-foreground mt-3">
                  7 time slots available for booking over the next 4 days
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

                <div>
                  <TabsDemo />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsultantProfile;
