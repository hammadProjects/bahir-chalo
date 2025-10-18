"use client";
import React, { useActionState, useEffect, useState } from "react";
import AuthPage from "../_components/AuthPage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { otpResendAction, verifyOtpAction } from "../../../../actions/auth";
import { LoaderCircleIcon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const VerifyOtpPage = () => {
  const { push } = useRouter();
  const [otp, setOtp] = useState("");
  const [message, formAction, isPending] = useActionState(
    verifyOtpAction,
    undefined
  );

  const [state, otpResend, loading] = useActionState(
    otpResendAction,
    undefined
  );

  useEffect(() => {
    if (message?.success) {
      toast.success(message.message);
      if (message?.url) push(message.url);
    } else if (message?.success == false) toast.error(message?.message);
  }, [message]);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    } else if (state?.success == false) toast.error(state?.message);
  }, [state]);

  return (
    <AuthPage
      title="Verify OTP"
      description={`We have sent an OTP Code to Your Email`}
    >
      <form action={formAction}>
        <div className="space-y-2">
          <Label htmlFor="otp">OTP Code</Label>
          <Input
            name="otp"
            minLength={4}
            maxLength={4}
            id="otp"
            placeholder="1234"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <Button
          disabled={isPending || loading}
          className="w-full mt-4 bg-emerald-400 hover:bg-emerald-400/90 text-white"
        >
          {isPending ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            "Verify Code"
          )}
        </Button>
      </form>
      <form action={otpResend} className="flex items-center justify-center">
        <Button disabled={loading} variant={"link"}>
          Resend OTP
        </Button>
      </form>
    </AuthPage>
  );
};

export default VerifyOtpPage;
