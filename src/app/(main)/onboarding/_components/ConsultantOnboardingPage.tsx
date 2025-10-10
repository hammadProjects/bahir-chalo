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
  proofOfWork: z
    .any()
    .refine((file) => file?.length > 0, "Please upload a file"),
  experience: z
    .string()
    .min(1, "Please enter your years of experience")
    .refine((val) => !isNaN(Number(val)), "Must be a number"),
  bio: z.string().min(1, "Please provide a short description"),
});

type ConsultantFormValues = z.infer<typeof consultantSchema>;

interface Props {
  prevStep: () => void;
  loading: boolean;
  submitUserRole: (formData: FormData) => Promise<void | UseFetchData>;
}

const ConsultantOnboardingPage: React.FC<Props> = ({
  prevStep,
  loading,
  submitUserRole,
}) => {
  const form = useForm<ConsultantFormValues>({
    resolver: zodResolver(consultantSchema),
    defaultValues: {
      experience: "",
      bio: "",
    },
  });

  const onSubmit = (values: ConsultantFormValues) => {
    const formData = new FormData();
    formData.append("role", "consultant");
    formData.append("bio", values.bio);
    formData.append("certificateUrl", values.proofOfWork);
    formData.append("experience", values.experience);
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
            {/* Proof of Work */}
            <FormField
              control={form.control}
              name="proofOfWork"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Proof of Work (certificate, portfolio, etc.)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Years of Experience */}
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of Experience</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Bio</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g. "Helping students get into top universities"'
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

export default ConsultantOnboardingPage;
