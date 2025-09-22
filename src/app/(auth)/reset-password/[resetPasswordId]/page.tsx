"use client";
import React, { useState } from "react";
import AuthPage from "../../_components/AuthPage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resetPasswordThunk } from "@/redux/thunk/auth.thunk";
import { toast } from "sonner";
import { redirect, useParams } from "next/navigation";

const ForgetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const { resetPasswordId } = useParams();
  // console.log(resetPasswordId);

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((store) => store.auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = z.string().min(4).safeParse(password);
    if (!result.success) {
      toast.error("Password must be atleast 4 Characters", {
        richColors: true,
      });
      return;
    }

    const email = localStorage.getItem("email");
    const verifiedEmail = z.email().safeParse(email);
    if (!verifiedEmail.success || !email) {
      toast.error("Please Enter Email again");
      redirect("/forget-password");
      return;
    }

    const data = await dispatch(
      resetPasswordThunk({ resetPasswordId, email, password })
    );
    if (!data.payload?.success) {
      // just for now reedirecting back to writing email
      redirect("/forget-password");
    }
    redirect("/sign-in");
  };

  return (
    <AuthPage title="Reset Password" description="Enter new Password">
      <div>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <Label htmlFor="email" className="">
            Password
          </Label>
          <Input
            id="email"
            min={4}
            placeholder="Please Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            disabled={loading}
            type="submit"
            className="w-full mt-4 bg-emerald-400 hover:bg-emerald-400/90 text-white"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Change Password"
            )}
          </Button>
        </form>
      </div>
    </AuthPage>
  );
};

export default ForgetPasswordPage;
