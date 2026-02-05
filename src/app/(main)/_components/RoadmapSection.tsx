"use client";
import React from "react";
import BgGradient from "@/components/common/BgGradient";
import { StaticRoadmapData } from "@/lib/data";
import ShowRoadmap from "../student/_components/ShowRoadmap";

const RoadmapSection = () => {
  return (
    <section className="pb-8 md:pb-10 lg:pb-20">
      <BgGradient position="bottom" />
      <h2 className="text-2xl md:text-3xl font-bold max-w-xl mx-auto text-center mb-4">
        Watch Bahir Chalo use AI to create your{" "}
        <span className="text-emerald-500/80">personalized</span> study abroad
        roadmap
      </h2>
      <ShowRoadmap roadmap={StaticRoadmapData} />
    </section>
  );
};

export default RoadmapSection;
