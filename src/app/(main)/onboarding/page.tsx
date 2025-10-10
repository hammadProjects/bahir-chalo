"use client";
import { setUserRole } from "../../../../actions/onboarding";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";
import { GraduationCap, Users } from "lucide-react";
import React, { useState } from "react";
import ConsultantOnboardingPage from "./_components/ConsultantOnboardingPage";

const OnboardingPage = () => {
  const [onboardingStep, setOnboardingStep] = useState(0);

  const { fn: submitUserRole, loading } = useFetch(setUserRole);
  const setStudentRole = () => {
    const formData = new FormData();
    formData.append("role", "student");
    submitUserRole(formData);
  };

  const prevStep = () => setOnboardingStep(0);

  return onboardingStep === 0 ? (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
      <Card className="w-full md:max-w-sm bg-muted/5 border-emerald-600/20 cursor-pointer hover:border-emerald-600/60 transition-colors">
        <CardContent className="py-4 flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 mb-6 bg-gradient-to-r from-emerald-200/30 to-emerald-200/10  text-emerald-500/80 flex items-center justify-center bg-teal-900/10 rounded-full">
            <GraduationCap className="text-emerald-400 w-8 h-8" />
          </div>
          <h2 className="font-semibold text-lg">Join as a Student</h2>
          <p className="text-muted-foreground text-sm text-center">
            Discover courses, find scholarships, and get guidance for your study
            abroad journey.
          </p>
          <Button
            onClick={setStudentRole}
            disabled={loading}
            className="w-full bg-emerald-600/80 hover:bg-emerald-600/90 text-white"
          >
            Continue as Student
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full md:max-w-sm bg-muted/5 border-emerald-600/20 cursor-pointer hover:border-emerald-600/60 transition-colors">
        <CardContent className="py-4 flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 mb-6 bg-gradient-to-r from-emerald-200/30 to-emerald-200/10  text-emerald-500/80 flex items-center justify-center bg-teal-900/10 rounded-full">
            <Users className="text-emerald-400 w-8 h-8" />
          </div>
          <h2 className="font-semibold text-lg">Join as a Consultant</h2>
          <p className="text-muted-foreground text-sm text-center">
            Create your profile, offer one-on-one sessions, and guide students
            with your expertise.
          </p>
          <Button
            onClick={() => setOnboardingStep(1)}
            disabled={loading}
            className="w-full bg-emerald-600/80 hover:bg-emerald-600/90 text-white"
          >
            Continue as Consultant
          </Button>
        </CardContent>
      </Card>
    </div>
  ) : (
    onboardingStep === 1 && (
      <ConsultantOnboardingPage
        loading={loading}
        submitUserRole={submitUserRole}
        prevStep={prevStep}
      />
    )
  );
};

export default OnboardingPage;
