import { clsx, type ClassValue } from "clsx";
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
  consultant: ["/consultant"],
  student: ["/student", "/consultants"],
};

export const getDashboardUrl = (role: string) => {
  return role === "student"
    ? "/student"
    : role === "consultant"
    ? "/consultant"
    : role === "admin"
    ? "/admin"
    : "";
};
