"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useActionState, useEffect } from "react";
import { LoaderCircleIcon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signInSchema, signUpSchema } from "@/types/formSchema";

interface Props {
  type: "sign-up" | "sign-in";
  action: (
    prevState: unknown,
    formData: FormData
  ) => Promise<{ success: boolean; message: string; url?: string }>;
}

const AuthForm: React.FC<Props> = ({ type, action }) => {
  const { push } = useRouter();
  const [message, formAction, isPending] = useActionState(action, null);

  const form = useForm<
    z.infer<typeof signUpSchema> | z.infer<typeof signInSchema>
  >({
    resolver: zodResolver(type === "sign-up" ? signUpSchema : signInSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    if (message?.success) {
      toast.success(message.message);
    } else if (message?.success == false) {
      toast.error(message?.message);
    }
    if (message?.url) push(message.url);
  }, [push, message]);

  return (
    <div>
      <Form {...form}>
        <form action={formAction} className="space-y-8">
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Password</FormLabel>
                  {type === "sign-in" && (
                    <Link
                      href="/forget-password"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline hover:text-emerald-600/90"
                    >
                      Forgot your password?
                    </Link>
                  )}
                </div>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full bg-emerald-400 hover:bg-emerald-600/90 text-white"
            type="submit"
            disabled={isPending}
          >
            {isPending ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : type === "sign-in" ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </Form>
      <p className="ml-auto inline-block text-sm w-full text-center mt-2">
        {type === "sign-in"
          ? "Dont have an account? "
          : "Already have an account? "}
        <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"}>
          <span className="underline-offset-4 hover:underline hover:text-emerald-600/90">
            {type === "sign-in" ? "Sign Up" : "Sign In"}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
