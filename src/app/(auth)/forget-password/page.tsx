"use client";
import React, { useState } from "react";
import AuthPage from "../_components/AuthPage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon, LoaderCircle } from "lucide-react";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <AuthPage
      title="Forget Password"
      description="Enter your email to receive a reset link."
    >
      <div>
        <form className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Please Enter you email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-4 underline-offset-4 hover:underline hover:text-emerald-600/90">
            <Link
              className="flex items-center gap-1 text-sm max-w-1/3"
              href={"/sign-in"}
            >
              <ArrowLeftIcon size={14} /> Back to sign in
            </Link>
          </div>
          <Button
            disabled={loading}
            type="submit"
            className="w-full mt-2 bg-emerald-400 hover:bg-emerald-400/90 text-white"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </form>
      </div>
    </AuthPage>
  );
};

export default ForgetPasswordPage;
