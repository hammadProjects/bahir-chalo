"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-20 px-4 bg-gray-50">
      <h4 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        From Dreaming to Departing — Let&apos;s Make It Happen
      </h4>
      <p className="md:text-lg lg:text-xl text-muted-foreground mt-2 max-w-xl mx-auto text-center">
        The earlier you start, the smoother your study abroad process becomes.
        Begin today.
      </p>
      <Button
        className="group mt-6 h-10 text-white bg-linear-to-r from-emerald-400 to-teal-600 hover:from-teal-600 hover:to-emerald-400 transition-all"
        variant={"link"}
      >
        <Link className="flex items-center px-6" href={"/onboarding"}>
          <span className="mr-1 group-hover:mr-2 transition-margin duration-200">
            Get Started
          </span>
          <ArrowRight />
        </Link>
      </Button>
    </section>
  );
};

export default CTASection;
