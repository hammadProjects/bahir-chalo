import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/verifyAuth";
import { allowedRoutes } from "./lib/data";
import { redirectTo } from "./lib/utils";
import { Role } from "./types/types";

export const middleware = async (req: NextRequest) => {
  const cookieStore = await cookies();
  if (!cookieStore.get("token")) return redirectTo(req, "/sign-in");

  const { success } = await verifyAuth();
  if (!success) return redirectTo(req, "/sign-in");

  const role: Role = "student";
  // if (role == "unassigned") return redirectTo(req, "/onboarding")

  const isAllowed = allowedRoutes[role].some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (!isAllowed) return redirectTo(req, "/sign-in");

  return NextResponse.next();
};

export const config: MiddlewareConfig = {
  matcher: [
    "/consultant/:paths*",
    "/admin/:paths*",
    "/student/:paths*",
    "/consultants/:paths*",
    "/onboarding",
  ],
};
