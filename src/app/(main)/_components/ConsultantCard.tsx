import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Consultant } from "@/types/types";
import { Calendar, Star } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  data: Consultant;
}

const ConsultantCard: React.FC<Props> = ({ data }) => {
  return (
    <Card className="bg-muted/6 border-emerald-600/20 hover:border-emerald-600/60 hover:scale-101 transition-all">
      <CardContent className="flex gap-3 lg:gap-6">
        <div className="text-2xl font-bold flex items-center justify-center bg-rose-300 rounded-full h-10 w-10 lg:h-12 lg:w-12">
          {data?.username[0]}
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
            <h2 className="text-lg font-semibold">{data.username}</h2>
            <Badge
              className="border-emerald-400/30 bg-teal-400/10 text-emerald-400 font-medium"
              variant={"outline"}
            >
              <Star />
              Verified
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm mb-2">
            {data?.consultantProfile?.experience} years experience
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            {data?.consultantProfile?.bio}
          </p>
          <Button className="w-full bg-emerald-400 hover:bg-emerald-400/90 text-white">
            <Link
              className="flex items-center justify-center gap-1 "
              href={`/consultants/${data?._id}`}
            >
              <Calendar /> View Profile & Book
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsultantCard;
