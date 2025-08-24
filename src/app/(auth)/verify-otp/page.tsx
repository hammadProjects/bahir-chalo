"use client";
import React, { useState } from "react";
import AuthPage from "../_components/AuthPage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ForgetPasswordPage = () => {
  const [otp, setOtp] = useState("");
  return (
    <AuthPage
      title="Verify OTP"
      description="We have sent an OTP Code to ha******m"
    >
      <div className="space-y-2">
        <Label htmlFor="otp">OTP Code</Label>
        <Input
          id="otp"
          placeholder="123456"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          min={6}
          max={6}
        />
      </div>
      <Button className="w-full mt-4">Verify Code</Button>
    </AuthPage>
  );
};

export default ForgetPasswordPage;
