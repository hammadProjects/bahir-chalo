"use client";
// import { Button } from "@/components/ui/button";
import {
  Card,
  // CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { RoadmapArray } from "@/lib/data";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useState } from "react";

const GenerateRoadmap = () => {
  // const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // const currentSection = RoadmapArray[currentSectionIndex];

  // const handleNext = () => {
  //   if (currentSectionIndex < RoadmapArray.length - 1) {
  //     setCurrentSectionIndex(currentSectionIndex + 1);
  //   }
  // };

  // const handlePrev = () => {
  //   if (currentSectionIndex > 0) {
  //     setCurrentSectionIndex(currentSectionIndex - 1);
  //   }
  // };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Roadmaps</CardTitle>
        <CardDescription>
          Give Your Profile Information and get AI Generated Roadmap for a
          specific Country
        </CardDescription>
      </CardHeader>

      {/* <CardContent className="h-full">
        <Card className="md:w-3/4 md:mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Step - {currentSectionIndex} / {RoadmapArray.length}{" "}
              {currentSection.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 max-h-[400px]">
            {currentSection.items.map((item, index) => (
              <Card key={index} className="bg-muted/40 p-4">
                {Object.entries(item).map(([key, value]) => (
                  <div key={key} className="mb-2">
                    <strong className="capitalize">
                      {key.replace(/_/g, " ")}:
                    </strong>{" "}
                    {Array.isArray(value) ? (
                      <ul className="list-disc list-inside">
                        {value.map((v, i) => (
                          <li key={i}>{v}</li>
                        ))}
                      </ul>
                    ) : (
                      <span>{value?.toString()}</span>
                    )}
                  </div>
                ))}
              </Card>
            ))}
          </CardContent>

          <CardFooter className="flex justify-between mt-4">
            <Button
              onClick={handlePrev}
              disabled={currentSectionIndex === 0}
              size="icon"
              className="rounded-full bg-emerald-400/90 hover:bg-emerald-400/70"
            >
              <ChevronLeft />
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentSectionIndex === RoadmapArray.length - 1}
              size="icon"
              className="rounded-full bg-emerald-400/90 hover:bg-emerald-400/70"
            >
              <ChevronRight />
            </Button>
          </CardFooter>
        </Card>
      </CardContent> */}
    </Card>
  );
};

export default GenerateRoadmap;
