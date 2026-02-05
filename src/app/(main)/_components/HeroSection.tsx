"use client";
import React from "react";
import BgGradient from "@/components/common/BgGradient";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-38 text-center space-y-10 px-4">
      <BgGradient position="top" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold md:leading-14 lg:leading-16">
          Simplifying Study Abroad{" "}
          <span>
            <span className="inline-block relative px-1">
              with AI{" "}
              <span className="rounded-md bg-teal-400/50 absolute top-0 right-0 w-full h-full -rotate-2 -z-10" />
            </span>
            <br />
            and Expert Guidance
          </span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-muted-foreground sm:text-lg lg:text-xl max-w-lg mx-auto">
          Seek personalized guidance from AI and connect with expert consultants
          to simplify every step of your study abroad journey - from courses to
          scholarships.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="space-x-4 space-y-4">
          <Link href={"/onboarding"}>
            <Button className="w-full md:w-40 lg:w-48 bg-linear-to-r from-emerald-400 to-teal-600 hover:from-teal-600 hover:to-emerald-400 hover:scale-110 text-lg !px-6 py-6 lg:py-8 rounded-full transition-all duration-300">
              Get Started <ArrowRight />
            </Button>
          </Link>

          <Link href={"/consultants"}>
            <Button
              className="w-full md:w-40 lg:w-48 bg-muted/60 border-none px-6 py-6 lg:py-8 text-lg rounded-full hover:scale-110 transition-all duration-300"
              variant={"outline"}
            >
              Find Consultants
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
