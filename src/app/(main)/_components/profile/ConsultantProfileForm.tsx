"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { updateConsultantProfile } from "../../../../../actions/profile";

const ConsultantProfileForm = ({ data }: { data: any }) => {
  //   const { loading, fn } = useFetch(updateConsultantProfile);
  let loading = false;
  let fn = (formData: FormData) => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fn(formData);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Consultant Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <Textarea
            name="bio"
            defaultValue={data?.bio}
            placeholder="Your bio"
          /> */}

          <Input
            name="experience"
            type="number"
            defaultValue={data?.experience}
            placeholder="Experience (years)"
          />

          <Input
            name="certificateUrl"
            defaultValue={data?.certificateUrl}
            placeholder="Certificate URL"
          />

          <Input
            className="opacity-70 hover:cursor-not-allowed"
            readOnly
            value={data?.status}
          />

          <Button disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultantProfileForm;
