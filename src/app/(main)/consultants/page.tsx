"use client";

import React from "react";
import ConsultantCard from "../_components/ConsultantCard";
import BackButton from "@/components/common/BackButton";
import { useQuery } from "@tanstack/react-query";
import { getVerifiedConsultants } from "./_api/getVerifiedConsultants";
import { Consultant } from "@/types/types";
import CardShimmer from "./_components/CardShimmer";

const ConsultantsPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["verified-consultant"],
    queryFn: getVerifiedConsultants,
  });

  return (
    <section className="min-h-screen py-10 md:py-20 px-4 max-w-5xl mx-auto">
      <BackButton title="Back to Home" style="mb-8" />
      <h1 className="text-4xl font-bold mb-4">Consultants</h1>
      {error ? (
        <>Error Bro</>
      ) : isLoading ? (
        <CardShimmer />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data?.length === 0 ? (
            <>No consultant bro</>
          ) : (
            data?.map((consultant: Consultant, index: number) => (
              <ConsultantCard data={consultant} key={index} />
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default ConsultantsPage;
