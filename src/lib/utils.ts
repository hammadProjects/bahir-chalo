import { clsx, type ClassValue } from "clsx";
import { NextRequest, NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const redirectTo = (req: NextRequest, url: string) => {
  const cloneURL = req.nextUrl.clone();
  cloneURL.pathname = url;
  return NextResponse.redirect(cloneURL);
};

export const allowedRoutes: Record<string, string[]> = {
  admin: ["/admin"],
  consultant: ["/consultant"],
  student: ["/consultants/", "/student"],
};
