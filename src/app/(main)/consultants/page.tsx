"use client";
import React from "react";
import ConsultantCard from "../_components/ConsultantCard";
import BackButton from "@/components/common/BackButton";
import { useQuery } from "@tanstack/react-query";
import { getVerifiedConsultants } from "./_api/getVerifiedConsultants";
import { Consultant } from "@/types/types";
import CardShimmer from "./_components/CardShimmer";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import useSearch from "@/hooks/useSearch";

const ConsultantsPage = () => {
  const { searchQuery, handleSearchChange, debouncedQuery, searchLoading } =
    useSearch();
  const { data, isLoading, error } = useQuery({
    queryKey: ["verified-consultant"],
    queryFn: getVerifiedConsultants,
  });

  return (
    <section className="min-h-screen py-10 md:py-20 px-4 max-w-5xl mx-auto">
      <BackButton title="Back to Home" style="mb-8" />
      <h1 className="text-4xl font-bold mb-4">Consultants</h1>
      {error ? (
        <>{error}</>
      ) : isLoading ? (
        <CardShimmer />
      ) : (
        <>
          <div className="flex relative mb-4">
            <label htmlFor="search-consultants">
              <Search
                className="absolute top-2 left-2 text-emerald-400/70 cursor-pointer"
                size={20}
              />
            </label>
            <Input
              id="search-consultants"
              className="pl-10 max-w-sm"
              placeholder="Search Consultants by name or specilization"
              onChange={handleSearchChange}
            />
          </div>

          {searchLoading ? (
            <CardShimmer />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data?.length === 0 ? (
                <>No consultant found</>
              ) : (
                data
                  ?.filter(
                    (consultant: Consultant) =>
                      consultant?.username
                        .toLowerCase()
                        .includes(debouncedQuery.toLowerCase()) ||
                      consultant?.consultantProfile?.bio
                        ?.toLowerCase()
                        .includes(debouncedQuery.toLowerCase())
                  )
                  ?.map((consultant: Consultant, index: number) => (
                    <ConsultantCard data={consultant} key={index} />
                  ))
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ConsultantsPage;
