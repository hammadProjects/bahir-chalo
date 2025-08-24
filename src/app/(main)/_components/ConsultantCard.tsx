import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ConsultantCard = () => {
  return (
    <Card className="bg-muted/6 border-emerald-600/20 hover:border-emerald-600/60 hover:scale-101 transition-all">
      <CardContent className="flex gap-3 lg:gap-6">
        <div className="bg-rose-300 rounded-full h-10 w-10 lg:h-12 lg:w-12">
          {/* <Image
            src={"/images/banner2.webp"}
            alt="avatar"
            width={60}
            height={60}
            className="rounded-full h-10 w-10 lg:h-12 lg:w-12 object-contain"
          /> */}
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-semibold">Muhammad Hammad</h2>
            <Badge
              className="border-emerald-400/30 bg-emerald-400 hover:bg-emerald-400/90 text-white"
              variant={"outline"}
            >
              <Star />
              Verified
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm mb-2">
            4 years experience -{" "}
            <span className="font-semibold">Starts at $15/30 min</span>
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            Specialization: Scholarships • Visa Guidance • SOP Review
          </p>
          <Button className="w-full bg-emerald-400 hover:bg-emerald-400/90 text-white">
            <Calendar /> View Profile & Book
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsultantCard;
