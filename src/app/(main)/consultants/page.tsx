import React from "react";
import ConsultantCard from "../_components/ConsultantCard";
import BackButton from "@/components/common/BackButton";

const ConsultantsPage = () => {
  const consultantsData = Array(4).fill(0);
  return (
    <section className="min-h-screen py-20 max-w-5xl mx-auto">
      <BackButton title="Back to Home" style="mb-8" />
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
