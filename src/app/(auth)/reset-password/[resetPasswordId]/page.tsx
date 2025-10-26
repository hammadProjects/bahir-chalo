"use client";
import React, {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import AuthPage from "../../_components/AuthPage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { resetPasswordAction } from "../../../../../actions/auth";

const ForgetPasswordPage = () => {
  const { resetPasswordId } = useParams();
  const [response, formAction, loading] = useActionState(
    resetPasswordAction,
    undefined
  );
  const [password, setPassword] = useState("");
  const { push } = useRouter();

  useEffect(() => {
    if (response?.success) {
      toast.success(response?.message);
    } else if (response?.success == false) {
      toast.error(response?.message);
    }
    if (response?.url) push(response?.url);
  }, [response]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(() => {
      const formData = new FormData();
      formData.append("password", password);
      formData.append("resetPasswordId", `${resetPasswordId}`);
      formAction(formData);
    });
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
