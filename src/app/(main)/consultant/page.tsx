import { TabsContent } from "@radix-ui/react-tabs";
import Availability from "./_components/Availability";
import Bookings from "./_components/Bookings";

const ConsultantDashboard = () => {
  return (
    <>
      <TabsContent value="earnings">Earnings</TabsContent>
      <TabsContent value="bookings">
        <Bookings />
      </TabsContent>
      <TabsContent value="availability">
        <Availability />
      </TabsContent>
    </>
  );
};

export default ConsultantDashboard;
