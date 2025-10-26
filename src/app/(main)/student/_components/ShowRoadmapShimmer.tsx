"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ShowRoadmapShimmer = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <Card className="w-full max-w-xl shadow-lg border border-gray-200 animate-pulse">
        {/* Header shimmer */}
        <CardHeader>
          <div className="h-6 w-2/3 mx-auto bg-gray-200 rounded-md" />
        </CardHeader>

        {/* Notes shimmer */}
        <CardContent className="space-y-3 min-h-[40vh] max-h-[40vh] overflow-y-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-gray-100 border border-gray-300/30"
            >
              <div className="h-4 w-5/6 bg-gray-200 rounded-md mb-2" />
              <div className="h-4 w-4/6 bg-gray-200 rounded-md" />
            </div>
          ))}
        </CardContent>

        {/* Footer shimmer */}
        <CardFooter className="flex items-center justify-between pt-4">
          <Button
            variant="outline"
            disabled
            className="rounded-full opacity-50 cursor-not-allowed"
          >
            <ArrowLeft size={18} />
          </Button>

          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-300 h-2 w-2 rounded-full cursor-default"
              />
            ))}
          </div>

          <Button
            disabled
            className="rounded-full bg-gray-300 opacity-50 cursor-not-allowed"
          >
            <ArrowRight size={18} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowRoadmapShimmer;
