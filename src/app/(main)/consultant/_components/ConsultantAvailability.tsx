"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useFetch from "@/hooks/useFetch";
import { Clock, Loader2, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { setAvailabilityAction } from "../../../../../actions/consultant";
import { Availability } from "@/types/types";
import { formatDateInHours } from "@/lib/utils";

interface Props {
  isLoading: boolean;
  // availabilities: Availability[];
  availability: Availability | null;
  refetch: () => void;
}

const ConsultantAvailability: React.FC<Props> = ({
  isLoading,
  availability,
  refetch,
}) => {
  const [showFrom, setShowForm] = useState(false);
  const {
    loading,
    fn: submitAvailability,
    data,
  } = useFetch(setAvailabilityAction);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ startTime: string; endTime: string }>();

  const setAvailability: SubmitHandler<{
    startTime: string;
    endTime: string;
  }> = (data) => {
    const formData = new FormData();
    formData.append("startTime", data.startTime);
    formData.append("endTime", data.endTime);
    submitAvailability(formData);
  };

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    if (!loading && data?.success) {
      refetch();
      id = setTimeout(() => {
        setShowForm(false);
      }, 1000);
    }
    return () => clearTimeout(id);
  }, [data, loading]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock />
          <span className="text-xl font-semibold">Availability Settings</span>
        </CardTitle>
        <CardDescription>
          Set your daily availability for student appointments
        </CardDescription>
      </CardHeader>
      <CardContent>
        {showFrom ? (
          <form onSubmit={handleSubmit(setAvailability)}>
            <div className="flex gap-4">
              <div className="space-y-1">
                <Label>Start Time</Label>
                <Input
                  {...register("startTime", {
                    required: "Start time is required",
                  })}
                  type="time"
                />
                <span className="text-sm text-red-600">
                  {errors.startTime?.message}
                </span>
              </div>
              <div className="space-y-1">
                <Label>End Time</Label>
                <Input
                  {...register("endTime", { required: "End time is required" })}
                  type="time"
                />
                <span className="text-sm text-red-600">
                  {errors.endTime?.message}
                </span>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant={"outline"} onClick={() => setShowForm(false)}>
                Cancel
              </Button>
              <Button
                className="bg-emerald-600/90 hover:bg-emerald-600/80"
                type="submit"
              >
                {loading && <Loader2 className="animate-spin" />}
                Save Changes
              </Button>
            </div>
          </form>
        ) : (
          <>
            {isLoading ? (
              <div className="flex gap-2 items-center rounded-md mb-2 shadow-md animate-pulse p-4">
                <div className="w-8 h-8 bg-gray-200 rounded-sm" />
                <div className="w-24 h-8 bg-gray-200 rounded-sm" />
              </div>
            ) : (
              availability && (
                <div
                  className="flex items-center gap-2 p-4 rounded-md mb-2 shadow-md"
                  // key={id}
                >
                  <Clock />
                  <span className="font-semibold">
                    {formatDateInHours(availability?.startTime || null, true)} :{" "}
                    {formatDateInHours(availability?.endTime || null, true)}
                  </span>
                </div>
              )
            )}

            <Button
              className="bg-emerald-600/90 hover:bg-emerald-600/80 my-4 w-full"
              onClick={() => setShowForm(true)}
            >
              <Plus /> Set Availability
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};
export default ConsultantAvailability;
