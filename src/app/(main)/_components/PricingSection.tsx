"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/lib/data";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center py-10 md:py-20 px-4"
    >
      <h3 className="font-semibold text-xl text-emerald-600 mb-8">Pricing</h3>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(({ description, features, price, title }, i) => (
          <Card
            key={i}
            className="w-full max-w-sm mx-auto flex flex-col justify-between gap-8 hover:scale-104 transition-all delay-100"
          >
            <div>
              <CardHeader>
                <CardTitle className="text-lg font-bold">{title}</CardTitle>
                <CardDescription className="text-base">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="my-6">
                  <span className="text-3xl font-bold">{price}</span>
                  <span> PKR / month</span>
                </p>
                <ul className="mt-4 text-gray-600 space-y-3">
                  {features.map((f, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
            <CardFooter>
              <Button className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-400">
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
