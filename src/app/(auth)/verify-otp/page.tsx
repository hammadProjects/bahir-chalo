"use client";
import React, { useEffect, useState } from "react";
import AuthPage from "../_components/AuthPage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setEmail } from "@/redux/slices/auth.slice";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((store) => store.auth);

  useEffect(() => {
    dispatch(setEmail());
  });

  return (
    <AuthPage
      title="Verify OTP"
      description={`We have sent an OTP Code to ${email}`}
    >
      <div className="space-y-2">
        <Label htmlFor="otp">OTP Code</Label>
        <Input
          minLength={4}
          maxLength={4}
          id="otp"
          placeholder="1234"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <Button className="w-full mt-4 bg-emerald-400 hover:bg-emerald-400/90 text-white">
        Verify Code
      </Button>
    </AuthPage>
  );
};

export default VerifyOtpPage;
