"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentDate } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import ShowRoadmap from "./ShowRoadmap";
import useFetch from "@/hooks/useFetch";
import { getRoadmapById } from "../../../../../actions/student";

interface Props {
  roadmaps: {
    _id: string;
    studentId: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    roadmapData: {
      country: string;
      data: { title: string; notes: string[] }[];
    };
  }[];
}

const MyRoadmaps: React.FC<Props> = ({ roadmaps }) => {
  const { loading, fn: getRoadmap, data } = useFetch(getRoadmapById);
  const [roadmapId, setRoadmapId] = useState<string | null>(null);

  useEffect(() => {
    if (roadmapId != null) {
      const formData = new FormData();
      formData.append("roadmapId", roadmapId);
      getRoadmap(formData);
    }
  }, [roadmapId]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Roadmaps</CardTitle>
        <CardDescription>All Previosuly Generated Roadmaps</CardDescription>
      </CardHeader>

      <CardContent>
        {roadmapId ? (
          <div>
            <Button onClick={() => setRoadmapId(null)} variant={"secondary"}>
              <ChevronLeft />
              go Back
            </Button>
            {loading ? (
              <div>loading...</div>
            ) : data?.roadmapData ? (
              <ShowRoadmap roadmap={data?.roadmapData} />
            ) : (
              <>its us, please try again</>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {roadmaps.map((item) => (
              <Button
                className="rounded-xl shadow-md h-14 hover:scale-103 transition-all"
                key={item?._id}
                variant={"secondary"}
                onClick={() => {
                  setRoadmapId(item?._id);
                }}
              >
                <div>
                  <p>{item.title}</p>
                  <p>{getCurrentDate(item?.createdAt)}</p>
                </div>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default MyRoadmaps;
