import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const OnboardingPage = () => {
  const roles = [
    {
      id: "student",
      icon: <GraduationCap className="text-emerald-400 w-8 h-8" />,
      title: "Join as a Student",
      description:
        "Discover courses, find scholarships, and get guidance for your study abroad journey.",
      buttonText: "Continue as Student",
      url: "/onboarding/student",
    },
    {
      id: "consultant",
      icon: <Users className="text-emerald-400 w-8 h-8" />,
      title: "Join as a Consultant",
      description:
        "Create your profile, offer one-on-one sessions, and guide students with your expertise.",
      buttonText: "Continue as Consultant",
      url: "/onboarding/consultant",
    },
  ];
  return (
    <section className="py-20 min-h-screen">
      <div className="space-y-14">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to Bahir Chalo</h1>
          <p className="text-lg text-muted-foreground">
            Tell us how you want to use the platform
          </p>
        </div>

        <div className="flex justify-center gap-8">
          {roles.map(({ icon, buttonText, description, id, title, url }) => (
            <Card
              key={id}
              className="max-w-sm bg-muted/5 border-emerald-600/20 cursor-pointer hover:border-emerald-600/60 transition-colors"
            >
              <CardContent className="py-4 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 mb-6 bg-gradient-to-r from-emerald-200/30 to-emerald-200/10  text-emerald-500/80 flex items-center justify-center bg-teal-900/10 rounded-full">
                  {icon}
                </div>
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="text-muted-foreground text-sm text-center">
                  {description}
                </p>
                <Button className="w-full bg-emerald-600/80 hover:bg-emerald-600/90 text-white">
                  <Link href={url}>{buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingPage;
