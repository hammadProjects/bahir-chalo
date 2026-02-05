"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentDate } from "@/lib/utils";
import { ChevronLeft, FolderOpen, Calendar } from "lucide-react";
import ShowRoadmap from "./ShowRoadmap";
import MyRoadmapsShimmer from "./MyRoadmapsShimmer";
import ShowRoadmapShimmer from "./ShowRoadmapShimmer";

import { RoadmapListSkeleton } from "./ListSkeletons";
import QueryErrorView from "./QueryErrorView";

interface RoadmapItem {
  _id: string;
  title: string;
  createdAt: Date;
}

interface Props {
  roadmaps: RoadmapItem[];
  selectedRoadmapId: string | null;
  isListLoading: boolean;
  isDetailsLoading: boolean;
  isError: boolean;
  currentRoadmap: any;
  onSelectRoadmap: (id: string) => void;
  onBackToList: () => void;
  onRetry: () => void;
}

const RoadmapListView: React.FC<Props> = ({
  roadmaps,
  selectedRoadmapId,
  isListLoading,
  isDetailsLoading,
  isError,
  currentRoadmap,
  onSelectRoadmap,
  onBackToList,
  onRetry,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FolderOpen className="w-5 h-5 text-emerald-500" />
          My Roadmaps
        </CardTitle>
        <CardDescription>All previously generated AI roadmaps.</CardDescription>
      </CardHeader>

      <CardContent>
        {isError ? (
          <QueryErrorView onRetry={onRetry} />
        ) : isListLoading ? (
          <RoadmapListSkeleton />
        ) : selectedRoadmapId ? (
          <div className="space-y-4">
            <Button 
              onClick={onBackToList} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to My Roadmaps
            </Button>
            
            {isDetailsLoading ? (
              <ShowRoadmapShimmer />
            ) : currentRoadmap ? (
              <ShowRoadmap roadmap={currentRoadmap} />
            ) : (
              <div className="text-center py-10 text-muted-foreground bg-gray-50 rounded-lg border-2 border-dashed">
                Could not load roadmap details. Please try again.
              </div>
            )}
          </div>
        ) : roadmaps.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed">
            <p className="text-muted-foreground">You haven't generated any roadmaps yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {roadmaps.map((item) => (
              <Button
                key={item._id}
                variant="ghost"
                className="h-auto p-4 flex flex-col items-start gap-2 border-2 border-emerald-100/50 hover:border-emerald-400/40 bg-white hover:bg-emerald-50/50 rounded-xl transition-all group"
                onClick={() => onSelectRoadmap(item._id)}
              >
                <p className="font-semibold text-gray-800 capitalize group-hover:text-emerald-700 text-left">
                  {item.title}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {getCurrentDate(item.createdAt)}
                </div>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RoadmapListView;
