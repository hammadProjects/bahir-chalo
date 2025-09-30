import { TabsContent } from "@radix-ui/react-tabs";
import GenerateRoadmap from "./_components/GenerateRoadmap";
import BookedAppointments from "./_components/BookedAppointments";
import MyRoadmaps from "./_components/MyRoadmaps";

const StudentDashboard = () => {
  return (
    <>
      <TabsContent value="my-roadmaps">
        <MyRoadmaps />
      </TabsContent>
      <TabsContent value="generate-roadmaps">
        <GenerateRoadmap />
      </TabsContent>
      <TabsContent value="booked-appointments">
        <BookedAppointments />
      </TabsContent>
    </>
  );
};

export default StudentDashboard;
