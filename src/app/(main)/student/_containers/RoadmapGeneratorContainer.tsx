import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useStudentGenerateRoadmapMutation } from "../_hooks/useStudentActions";
import { messages } from "@/lib/utils";
import RoadmapGeneratorView from "../_components/RoadmapGeneratorView";

const RoadmapGeneratorContainer = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const generateMutation = useStudentGenerateRoadmapMutation();

  const handleGenerate = useCallback((country: string) => {
    const formData = new FormData();
    formData.append("country", country);
    generateMutation.mutate(formData);
  }, [generateMutation]);

  const handleCountryChange = useCallback((country: string) => {
    setSelectedCountry(country);
  }, []);

  const handleRetry = useCallback(() => {
    if (selectedCountry) {
      handleGenerate(selectedCountry);
    }
  }, [handleGenerate, selectedCountry]);

  // Timer logic for rotating messages during loading
  useEffect(() => {
    if (!generateMutation.isPending) {
      setCurrentMessageIndex(0);
      return;
    }

    if (currentMessageIndex >= messages.length - 1) return;

    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) =>
        prev < messages.length - 1 ? prev + 1 : prev
      );
    }, 5500);

    return () => clearInterval(timer);
  }, [generateMutation.isPending, currentMessageIndex]);

  // Example of using useMemo for current loading message
  const loadingMessage = useMemo(() => messages[currentMessageIndex], [currentMessageIndex]);

  return (
    <RoadmapGeneratorView
      selectedCountry={selectedCountry}
      loadingMessage={loadingMessage}
      isLoading={generateMutation.isPending}
      isError={generateMutation.isError}
      roadmap={generateMutation.data?.roadmap}
      onGenerate={handleGenerate}
      onCountryChange={handleCountryChange}
      onRetry={handleRetry}
    />
  );
};

export default RoadmapGeneratorContainer;
