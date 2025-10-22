"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronRightIcon } from "lucide-react";

interface RoadmapSection {
  name: string;
  notes: string[];
}

interface RoadmapProps {
  roadmap: RoadmapSection[];
}

export default function StudyRoadmap({ roadmap }: RoadmapProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSections = roadmap.length;
  const section = roadmap[currentIndex];

  const handleNext = () => {
    if (currentIndex < totalSections - 1) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <Card className="w-full max-w-2xl shadow-lg border border-gray-200 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800 text-center">
            {section.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 min-h-[40vh] max-h-[40vh] overflow-y-auto">
          {section.notes.map((note, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-gray-100 text-gray-700 text-sm leading-relaxed"
            >
              {note}
            </div>
          ))}
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="rounded-full"
          >
            <ArrowLeft size={18} />
          </Button>

          <p className="text-gray-500 text-sm">
            {currentIndex + 1} / {totalSections}
          </p>

          <Button
            onClick={handleNext}
            disabled={currentIndex === totalSections - 1}
            className="rounded-full"
          >
            <ArrowRight size={18} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
