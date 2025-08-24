import React from "react";
import ConsultantCard from "../_components/ConsultantCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ConsultantsPage = () => {
  const consultantsData = Array(4).fill(0);
  return (
    <section className="min-h-screen py-20 max-w-5xl mx-auto">
      <Button className="mb-8" size={"sm"} variant={"outline"}>
        <Link href={"/"} className="flex gap-1 items-center">
          <ArrowLeft /> Back to Home
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-4">Consultants</h1>
      <div className="grid grid-cols-2 gap-8">
        {consultantsData.map((_, index) => (
          <ConsultantCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default ConsultantsPage;
