"use client";
import React from "react";
import HeroSection from "./_components/HeroSection";
import RoadmapSection from "./_components/RoadmapSection";
import FeaturesSection from "./_components/FeaturesSection";
import PricingSection from "./_components/PricingSection";
import CTASection from "./_components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RoadmapSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
