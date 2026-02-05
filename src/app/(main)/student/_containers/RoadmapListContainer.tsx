import React, { useState, useCallback, useMemo } from "react";
import { useStudentRoadmapsQuery, useStudentRoadmapDetailsQuery } from "../_hooks/useStudentQueries";
import RoadmapListView from "../_components/RoadmapListView";

const RoadmapListContainer = () => {
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string | null>(null);
  
  const { data: roadmapsData, isLoading: isListLoading, isError, refetch } = useStudentRoadmapsQuery();
  const { data: detailsData, isLoading: isDetailsLoading } = useStudentRoadmapDetailsQuery(selectedRoadmapId);

  const handleSelectRoadmap = useCallback((id: string) => {
    setSelectedRoadmapId(id);
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedRoadmapId(null);
  }, []);

  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  const roadmaps = useMemo(() => roadmapsData?.roadmapData || [], [roadmapsData]);
  const currentRoadmap = useMemo(() => detailsData?.roadmapData, [detailsData]);

  return (
    <RoadmapListView
      roadmaps={roadmaps}
      selectedRoadmapId={selectedRoadmapId}
      isListLoading={isListLoading}
      isDetailsLoading={isDetailsLoading}
      isError={isError}
      currentRoadmap={currentRoadmap}
      onSelectRoadmap={handleSelectRoadmap}
      onBackToList={handleBackToList}
      onRetry={handleRetry}
    />
  );
};

export default RoadmapListContainer;
