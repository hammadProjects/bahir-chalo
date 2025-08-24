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
import React from "react";

interface Props {
  type: "sign-up" | "sign-in";
}

const formSchema = z.object({
  email: z.email(),
  password: z
    .string("Please Enter a Valid Password!")
    .min(4, "Password must be atleast 4 Characters"),
});

const AuthForm: React.FC<Props> = ({ type }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  )}
                </div>
                <FormControl>
                  <Input placeholder="Enter your Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>
      <p className="ml-auto inline-block text-sm w-full text-center mt-2">
        {type === "sign-in"
          ? "Dont have an account? "
          : "Already have an account? "}
        <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"}>
          <span className="underline-offset-4 hover:underline">
            {type === "sign-in" ? "Sign Up" : "Sign In"}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
