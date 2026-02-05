"use client";

import React from "react";
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
import { countries } from "@/lib/data";
import ShowRoadmap from "./ShowRoadmap";
import ShowRoadmapShimmer from "./ShowRoadmapShimmer";

import QueryErrorView from "./QueryErrorView";

interface Props {
  selectedCountry: string;
  loadingMessage: string;
  isLoading: boolean;
  isError: boolean;
  roadmap: any;
  onGenerate: (country: string) => void;
  onCountryChange: (country: string) => void;
  onRetry: () => void;
}

const RoadmapGeneratorView: React.FC<Props> = ({
  selectedCountry,
  loadingMessage,
  isLoading,
  isError,
  roadmap,
  onGenerate,
  onCountryChange,
  onRetry,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Roadmaps</CardTitle>
        <CardDescription>
          Provide your profile information and get an AI-generated roadmap for a specific country.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isError ? (
          <QueryErrorView onRetry={onRetry} />
        ) : roadmap ? (
          <ShowRoadmap roadmap={roadmap} />
        ) : isLoading ? (
          <div className="space-y-6">
            <p className="text-emerald-600 text-base md:text-lg font-medium animate-pulse text-center bg-emerald-50 py-3 rounded-lg border border-emerald-100">
              {loadingMessage}
            </p>
            <ShowRoadmapShimmer />
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedCountry}
              onValueChange={onCountryChange}
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
              className="bg-emerald-600 hover:bg-emerald-700 text-white min-w-[160px]"
              onClick={() => onGenerate(selectedCountry)}
              disabled={!selectedCountry || isLoading}
            >
              Generate Roadmap
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RoadmapGeneratorView;
