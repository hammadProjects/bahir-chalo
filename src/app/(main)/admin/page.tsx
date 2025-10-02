"use client";
import { TabsContent } from "@/components/ui/tabs";
import PendingVerifications from "./_components/PendingVerifications";

import { useQueries } from "@tanstack/react-query";

import VerifiedConsulants from "./_components/VerifiedConsultants";
import {
  getAllConsultants,
  getPendingConsultants,
} from "../../../../actions/admin";

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

  if (pending.isError || consultants.isError)
    return (
      <div className="min-h-screen flex items-center justify-center">
        {`${pending.error} ${consultants.error}`}
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
        <VerifiedConsulants data={consultants.data} />
      </TabsContent>
    </>
  );
};

export default AdminDashboard;
