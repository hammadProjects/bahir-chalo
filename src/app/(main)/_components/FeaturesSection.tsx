"use client";
import React from "react";
import { steps } from "@/lib/data";
import { MoveRight } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 py-10 md:py-20 px-4">
      <h3 className="text-teal-600 font-bold text-xl">What to Expect?</h3>
      <p className="text-center text-2xl md:text-3xl teal-600 font-bold max-w-lg mt-4">
        Get matched with scholarships in just a few clicks.
      </p>
      <div className="mt-5 md:mt-10 max-w-3xl w-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        {steps.map(({ icon, title, description }, index) => (
          <div
            className="relative border-transparent hover:border-emerald-400 transition-all text-center border-[2px] p-6 rounded-md"
            key={index}
          >
            <div className="w-16 h-16 mb-6 bg-gradient-to-r from-emerald-200/30 to-emerald-200/10  text-emerald-500/80 rounded-lg flex items-center justify-center mx-auto">
              {icon}
            </div>
            <h4 className="font-semibold text-xl mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
            {index < 2 && (
              <MoveRight
                size={20}
                className="hidden lg:block absolute -right-3 top-5/12 text-emerald-400/80"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
