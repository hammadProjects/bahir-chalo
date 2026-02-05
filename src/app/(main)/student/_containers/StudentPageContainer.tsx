import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import RoadmapListContainer from "./RoadmapListContainer";
import RoadmapGeneratorContainer from "./RoadmapGeneratorContainer";
import AppointmentListContainer from "./AppointmentListContainer";

const StudentPageContainer = () => {
  return (
    <>
      <TabsContent value="my-roadmaps" className="mt-0">
        <RoadmapListContainer />
      </TabsContent>
      <TabsContent value="generate-roadmaps" className="mt-0">
        <RoadmapGeneratorContainer />
      </TabsContent>
      <TabsContent value="booked-appointments" className="mt-0">
        <AppointmentListContainer />
      </TabsContent>
    </>
  );
};

export default StudentPageContainer;
