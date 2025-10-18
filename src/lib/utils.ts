import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For Middleware
export const redirectTo = (req: NextRequest, url: string) => {
  const cloneURL = req.nextUrl.clone();
  cloneURL.pathname = url;
  return NextResponse.redirect(cloneURL);
};

// To redirect specific role to relative pages
export const allowedRoutes: Record<string, string[]> = {
  admin: ["/admin"],
  consultant: ["/consultant", "/verification"],
  student: ["/student", "/consultants"],
  unassigned: ["/onboarding"],
};

export const getDashboardUrl = (role: string, status?: string) => {
  return role === "student"
    ? "/student"
    : role === "consultant"
    ? "/consultant"
    : role === "admin"
    ? "/admin"
    : role === "unassigned"
    ? "/onboarding"
    : status && (status === "pending" || status === "rejected")
    ? "/verification"
    : "";
};

export const generateError = (error: unknown) => {
  let message = "Something Went Wrong. Please try again";

  if (error && typeof error === "object" && "response" in error) {
    const err = error as { response?: { data?: { message?: string } } };
    message = err.response?.data?.message || message;
  }
  return message;
};

export const getCurrentTime = (date: string) => date.slice(11, 16);
export const getDate = (date: string) => date.slice(0, 10);

export const convertTimeToDate = (timeStr: string) => {
  // have to convert it into date
  const [hours, minutes] = timeStr.split(":").map(Number);
  const now = new Date();
  const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes
  );
  return date;
};

export const formatDateInHours = (date: Date | null) =>
  date && format(new Date(date), "hh:mm a");
