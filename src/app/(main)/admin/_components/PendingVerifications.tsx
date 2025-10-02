"use client";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ExternalLink,
  Loader,
  Medal,
  Star,
  User,
  X,
} from "lucide-react";
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
import { useState } from "react";
import verifyConsultant from "../../../../../actions/admin";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  data: Consultant[];
  ApiLoading: boolean;
}

const PendingVerifications: React.FC<Props> = ({ data, ApiLoading }) => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="shadow-xl bg-gray-100 p-4 rounded-md h-full">
      <h1 className="text-lg font-semibold">
        Pending Consultant Verifications
      </h1>
      <p className="text-sm">Review and approve consultant applications</p>

      <div className="space-y-4 mt-4">
        {ApiLoading ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <Loader className="animate-spin" />
          </div>
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
                          <p>{`${consultant.createdAt}`}</p>
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
                          <p>3 Years</p>
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

                      <div className="flex justify-between md:mt-6">
                        <Button
                          onClick={() =>
                            verifyConsultant(
                              consultant._id,
                              "rejected",
                              setLoading
                            )
                          }
                          disabled={loading}
                          className="bg-red-600/80 hover:bg-red-600/70"
                          variant={"destructive"}
                        >
                          {loading ? (
                            <Loader className="animate-spin" />
                          ) : (
                            <>
                              <X /> Reject
                            </>
                          )}
                        </Button>
                        <Button
                          disabled={loading}
                          onClick={() =>
                            verifyConsultant(
                              consultant._id,
                              "approved",
                              setLoading
                            )
                          }
                          className="bg-emerald-500/90 hover:bg-emerald-500/80"
                        >
                          {loading ? (
                            <Loader className="animate-spin" />
                          ) : (
                            <>
                              <Check />
                              Approve
                            </>
                          )}
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
