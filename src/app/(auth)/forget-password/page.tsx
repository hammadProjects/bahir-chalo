"use client";
import React, { useState } from "react";
import AuthPage from "../_components/AuthPage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  return (
    <AuthPage
      title="Forget Password"
      description="Enter your email to receive a reset link."
    >
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Please Enter you email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-4 underline-offset-4 hover:underline">
        <Link className="flex items-center gap-1 text-sm" href={"/sign-in"}>
          <ArrowLeftIcon size={14} /> Back to sign in
        </Link>
      </div>
      <Button className="w-full mt-2">Send Reset Link</Button>
    </AuthPage>
  );
};

export default ForgetPasswordPage;
