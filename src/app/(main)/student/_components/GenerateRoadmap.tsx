"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/useFetch";
import { countries } from "@/lib/data";
import { generateRoadmapAction } from "../../../../../actions/student";
import React, { useEffect, useState } from "react";
import ShowRoadmap from "./ShowRoadmap";
import { messages } from "@/lib/utils";
import ShowRoadmapShimmer from "./ShowRoadmapShimmer";

interface Props {
  refetchRoadmaps: () => void;
}

const GenerateRoadmap: React.FC<Props> = ({ refetchRoadmaps }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const {
    data,
    loading,
    fn: generateRoadmap,
  } = useFetch(generateRoadmapAction);

  const handleGenerateRoadmap = (country: string) => {
    if (loading) return;
    const formData = new FormData();
    formData.append("country", country);
    generateRoadmap(formData);
  };

  useEffect(() => {
    if (data?.success) {
      refetchRoadmaps();
    }
  }, [data]);

  useEffect(() => {
    if (currentMessageIndex >= messages.length - 1) return;
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) =>
        prev < messages.length - 1 ? prev + 1 : prev
      );
    }, 5500);
    return () => clearInterval(timer);
  }, [currentMessageIndex]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Roadmaps</CardTitle>
        <CardDescription>
          Give Your Profile Information and get AI Generated Roadmap for a
          specific Country
        </CardDescription>
      </CardHeader>

      <CardContent>
        {data?.roadmap ? (
          <ShowRoadmap roadmap={data?.roadmap} />
        ) : loading ? (
          <>
            <p className="text-gray-700 text-base md:text-lg font-medium animate-pulse mb-4">
              {messages[currentMessageIndex]}
            </p>
            <ShowRoadmapShimmer />
          </>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedCountry}
              onValueChange={(value) => setSelectedCountry(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your desired Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country.toLowerCase()}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button
              className="bg-emerald-500/80 hover:bg-emerald-500/90"
              onClick={() => handleGenerateRoadmap(selectedCountry)}
              disabled={!selectedCountry}
            >
              Generate Roadmap
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GenerateRoadmap;
