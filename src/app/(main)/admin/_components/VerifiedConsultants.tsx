import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Consultant } from "@/types/types";
import { User } from "lucide-react";

interface Props {
  data: Consultant[];
}

const VerifiedConsulants: React.FC<Props> = ({ data }) => {
  return (
    <section className="shadow-xl bg-gray-100 p-4 rounded-md h-full">
      <h1 className="text-lg font-semibold">Verified Consultants</h1>
      <p className="text-sm">
        View and manage All Verified and Suspended Consultants
      </p>

      <div className="space-y-4 mt-4">
        {data.length === 0 ? (
          <h2>No Pending Verifications</h2>
        ) : (
          data.map((consultant) => {
            const isSuspended =
              consultant.consultantProfile.status === "rejected" ? true : false;
            return (
              <Card key={consultant.email}>
                <CardContent className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <User className="w-10 h-10 p-2 rounded-md bg-gradient-to-r from-emerald-300 to-emerald-100 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold">{consultant.username}</h3>
                      <p className="text-sm">
                        {consultant?.consultantProfile?.experience} years
                        experience
                      </p>
                    </div>
                  </div>

                  <Badge
                    className={`h-6 ${
                      isSuspended
                        ? "bg-red-500/15 text-red-600"
                        : "bg-emerald-500/15 text-emerald-600"
                    }`}
                  >
                    {isSuspended ? "Suspended" : "Approved"}
                  </Badge>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </section>
  );
};

export default VerifiedConsulants;
