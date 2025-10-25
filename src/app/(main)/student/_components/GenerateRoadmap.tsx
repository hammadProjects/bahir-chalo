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
import { useState } from "react";
import ShowRoadmap from "./ShowRoadmap";

const GenerateRoadmap = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
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
          <ShowRoadmap roadmap={data.roadmap} />
        ) : loading ? (
          "Please Wait, we are getting something for you..."
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
