"use client";
import OnboardingLayout from "../_components/OnBoardingLayout";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- Schema ---
const consultantSchema = z.object({
  proofOfWork: z
    .any()
    .refine((file) => file?.length > 0, "Please upload a file"),
  experience: z
    .string()
    .min(1, "Please enter your years of experience")
    .refine((val) => !isNaN(Number(val)), "Must be a number"),
  rateType: z.enum(["hour", "half-hour"], "Select a rate type"),
  rateAmount: z
    .string()
    .min(1, "Enter a pay rate")
    .refine((val) => !isNaN(Number(val)), "Must be a number"),
  description: z.string().min(1, "Please provide a short description"),
  youtubeLink: z.string().optional(),
});

type ConsultantFormValues = z.infer<typeof consultantSchema>;

const ConsultantOnboardingPage = () => {
  const form = useForm<ConsultantFormValues>({
    resolver: zodResolver(consultantSchema),
    defaultValues: {
      experience: "",
      rateType: "hour",
      rateAmount: "",
      description: "",
      youtubeLink: "N/A",
    },
  });

  const onSubmit = (values: ConsultantFormValues) => {
    console.log("Consultant Onboarding Data:", values);
  };

  return (
    <OnboardingLayout
      title="Showcase Your Expertise to Students"
      description="Share your experience, expertise, and availability to connect with students who need trusted guidance."
    >
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

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="rateType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rate Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select rate type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="hour">Per hour</SelectItem>
                      <SelectItem value="half-hour">Per half hour</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rateAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rate Amount ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tagline / Short Bio</FormLabel>
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

          <FormField
            control={form.control}
            name="youtubeLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>YouTube Channel Link (optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. https://youtube.com/..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-600/80 text-white"
          >
            Continue
          </Button>
        </form>
      </Form>
    </OnboardingLayout>
  );
};

export default ConsultantOnboardingPage;
