"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { updateStudentProfile } from "../../../../../actions/profile";
import { useState } from "react";

const StudentProfileForm = ({ data }: { data: any }) => {
  const { loading, fn } = useFetch(updateStudentProfile);
  const changeProfile = () => {
    const formData = new FormData();
    formData.append("recentDegree", "");
    formData.append("grades", "");
    formData.append("homeCountry", "");
    formData.append("ieltsScore", "");
    formData.append("budget", "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fn(formData);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Student Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Input
            name="recentDegree"
            defaultValue={data?.recentDegree}
            placeholder="Recent Degree"
          />
          <Input
            name="grades"
            type="number"
            defaultValue={data?.grades}
            placeholder="Grades"
          />
          <Input
            name="homeCountry"
            defaultValue={data?.homeCountry}
            placeholder="Home Country"
          />
          <Input
            name="ieltsScore"
            defaultValue={data?.ieltsScore}
            placeholder="IELTS Score"
          />
          <Input
            name="budget"
            type="number"
            defaultValue={data?.budget}
            placeholder="Budget (Lakhs)"
          />

          <Button
            className="bg-emerald-500/80 hover:bg-emerald-500/60 md:col-span-2"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentProfileForm;
