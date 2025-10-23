"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronLeft, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UseFetchData } from "@/types/types";

const consultantSchema = z.object({
  recentDegree: z.string(),
  grades: z.string(),
  itelsScore: z.string(),
  homeCountry: z.string(),
  budget: z.string(),
  courses: z.string(),
});

type ConsultantFormValues = z.infer<typeof consultantSchema>;

interface Props {
  prevStep: () => void;
  loading: boolean;
  submitUserRole: (formData: FormData) => Promise<void | UseFetchData>;
}

const StudentOnboardingPage: React.FC<Props> = ({
  prevStep,
  loading,
  submitUserRole,
}) => {
  const form = useForm<ConsultantFormValues>({
    resolver: zodResolver(consultantSchema),
    defaultValues: {},
  });

  const onSubmit = (values: ConsultantFormValues) => {
    const formData = new FormData();
    formData.append("role", "student");
    // formData.append("bio", values.bio);
    // formData.append("certificateUrl", values.proofOfWork);
    // formData.append("experience", values.experience);
    submitUserRole(formData);
  };

  return (
    <Card className="w-[440px] h-fit">
      <CardHeader>
        <CardTitle>
          Please Enter Following information to Request Verification.
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="recentDegree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recent Degree</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., BSCS or Intermediate or DAE"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grades"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grades</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 3.4/4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="courses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Bio</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. DSA, OOP, DBMS..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="homeCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Home Country</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Pakistan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="itelsScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ielts Grades or Expected</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. 7 or NULL (if have not appeared)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-600/80 text-white"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Continue"}
            </Button>
          </form>
        </Form>
        <Button variant={"outline"} className="h-8 mt-4" onClick={prevStep}>
          <ChevronLeft /> Go back
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudentOnboardingPage;
