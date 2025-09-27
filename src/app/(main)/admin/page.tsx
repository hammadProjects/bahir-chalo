"use client";
import { TabsContent } from "@/components/ui/tabs";
import PendingVerifications from "./_components/PendingVerifications";

import { useQueries } from "@tanstack/react-query";
import getPendingConsultants from "./_api/getPendingConsultants";
import getAllConsultants from "./_api/getAllConsultants";
import VerifiedConsulants from "./_components/VerifiedConsultants";

const AdminDashboard = () => {
  const results = useQueries({
    queries: [
      {
        queryFn: async () => await getPendingConsultants(),
        queryKey: ["pending-consultants"], //Array according to Documentation
      },
      {
        queryFn: async () => await getAllConsultants(),
        queryKey: ["all-consultants"], //Array according to Documentation
      },
    ],
  });

  const [pending, consultants] = results;

  // if (pending.isLoading || consultants.isLoading)
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       Loading...
  //     </div>
  //   );

  if (pending.isError || consultants.isError)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Sorry There was an Error
      </div>
    );
  return (
    <>
      <TabsContent value="pending-verifications">
        <PendingVerifications
          data={pending.data}
          ApiLoading={pending.isLoading}
        />
      </TabsContent>
      <TabsContent value="consultants">
        <VerifiedConsulants
          data={consultants.data}
          ApiLoading={consultants.isLoading}
        />
      </TabsContent>
    </>
  );
};

export default AdminDashboard;
