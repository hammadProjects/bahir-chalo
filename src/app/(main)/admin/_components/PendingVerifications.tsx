"use client";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Medal, Star, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Consultant } from "@/types/types";
import verifyConsultant from "../../../../../actions/admin";
import { Card, CardContent } from "@/components/ui/card";
import { BarLoader } from "react-spinners";
import useFetch from "@/hooks/useFetch";
import { format } from "date-fns";
import Shimmer from "./Shimmer";

interface Props {
  data: Consultant[];
  ApiLoading: boolean;
}

const PendingVerifications: React.FC<Props> = ({ data, ApiLoading }) => {
  const { loading, fn: changeStatus } = useFetch(verifyConsultant);
  const handleClick = (
    consultantId: string,
    status: "approved" | "rejected"
  ) => {
    changeStatus(consultantId, status);
  };

  return (
    <section className="shadow-xl bg-gray-100 p-4 rounded-md h-full">
      <h1 className="text-lg font-semibold">
        Pending Consultant Verifications
      </h1>
      <p className="text-sm">Review and approve consultant applications</p>

      <div className="space-y-4 mt-4">
        {ApiLoading ? (
          <Shimmer />
        ) : data.length === 0 ? (
          <h2>No Pending Verifications</h2>
        ) : (
          data.map((consultant) => (
            <Card key={consultant._id}>
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
                <div className="flex gap-2 items-center">
                  <Badge className="bg-amber-600/20 text-amber-700">
                    <Star />
                    Pending
                  </Badge>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">View Details</Button>
                    </DialogTrigger>
                    <DialogContent className="md:w-[780px]">
                      <DialogHeader>
                        <DialogTitle>
                          Consultant Verification Details
                        </DialogTitle>
                        <DialogDescription>
                          Review the Consultant&apos;s information carefully
                          before making a decision
                        </DialogDescription>
                      </DialogHeader>

                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="text-sm font-bold">Full Name</h3>
                          <p>{consultant.username}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold">Email</h3>
                          <p>{consultant.email}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold">
                            Application Date
                          </h3>
                          <p>
                            {format(new Date(consultant.createdAt), "MM-dd-yy")}
                          </p>
                        </div>
                      </div>
                      <Separator />
                      <h4 className="flex items-center gap-1">
                        <Medal />
                        <span className="font-bold">
                          Professional Experience
                        </span>
                      </h4>
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h4 className="text-sm font-bold">
                            Years of experience
                          </h4>
                          <p>
                            {consultant?.consultantProfile?.experience} Years
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold">Credentials</h4>
                          <Link
                            target="_blank"
                            href={
                              consultant.consultantProfile?.certificateUrl ||
                              "/"
                            }
                            className="flex items-center gap-1"
                          >
                            <span>View Credentials</span>{" "}
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="text-sm font-bold">
                          service Description
                        </h4>
                        <p>{consultant.consultantProfile.bio}</p>
                      </div>

                      <BarLoader
                        width={"100%"}
                        loading={loading}
                        color="#16A34A"
                      />

                      <div className="flex justify-between md:mt-6">
                        <Button
                          onClick={() =>
                            handleClick(consultant._id, "rejected")
                          }
                          disabled={loading}
                          className="bg-red-600/80 hover:bg-red-600/70"
                          variant={"destructive"}
                        >
                          Reject
                        </Button>
                        <Button
                          disabled={loading}
                          onClick={() =>
                            handleClick(consultant._id, "approved")
                          }
                          className="bg-emerald-500/90 hover:bg-emerald-500/80"
                        >
                          Approve
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </section>
  );
};

export default PendingVerifications;
