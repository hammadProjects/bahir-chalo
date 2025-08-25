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

const signUpSchema = z.object({
  email: z.email(),
  password: z
    .string("Please Enter a Valid Password!")
    .min(4, "Password must be atleast 4 Characters"),
  username: z
    .string("Please Enter a Valid Name")
    .min(4, "Password must be atleast 4 Characters")
    .optional(),
  picture: z.file().optional(),
});

const signInSchema = z.object({
  email: z.email(),
  password: z
    .string("Please Enter a Valid Password!")
    .min(4, "Password must be atleast 4 Characters"),
});

const getSchema = (type: "sign-in" | "sign-up") => {
  return type === "sign-up" ? signUpSchema : signInSchema;
};

const AuthForm: React.FC<Props> = ({ type }) => {
  const schema = getSchema(type);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      // username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* {type === "sign-up" && (
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
          )} */}

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

          {/* {type === "sign-up" && (
            <FormField
              control={form.control}
              name="picture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Picture</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )} */}

          <Button
            className="w-full bg-emerald-400 hover:bg-emerald-600/90 text-white"
            type="submit"
          >
            {type === "sign-in" ? "Sign In" : "Sign Up"}
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
