"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { ClipboardCheck, XCircle } from "lucide-react";
import { validateStatus } from "../../../../actions/consultant";

const ConsultantVerificationPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["validate-status"],
    queryFn: validateStatus,
  });

  return (
    <section className="min-h-screen -mt-16 flex justify-center items-center">
      <Card>
        <CardContent className="text-center min-w-sm">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-300 animate-pulse w-10 h-10 rounded-full mb-4" />
              <div className="h-7 bg-gray-300 rounded-lg animate-pulse w-1/2 mb-2" />
              <div className="h-6 bg-gray-300 rounded-lg animate-pulse w-full" />
            </div>
          ) : !data?.success ? (
            <p>{data?.message}</p>
          ) : (
            <>
              {data?.status === "rejected" ? (
                <div className="flex items-center justify-center mx-auto bg-red-500/14 text-red-700/80 w-10 h-10 rounded-full mb-4">
                  <XCircle />
                </div>
              ) : (
                <div className="flex items-center justify-center mx-auto bg-amber-500/14 text-amber-700/80 w-10 h-10 rounded-full mb-4">
                  <ClipboardCheck />
                </div>
              )}
              <h2 className="font-bold text-xl">
                {data?.status === "rejected"
                  ? "Verification Rejected"
                  : "Verification in Progress"}
              </h2>
              <p className="text-muted-foreground">
                {data?.status === "rejected"
                  ? "Unfortunately your application has been rejected. Please try again Enter valid information."
                  : "Thank you for submitting your information"}
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
export default ConsultantVerificationPage;
