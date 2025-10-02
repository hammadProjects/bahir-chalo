import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/verifyAuth";
import { allowedRoutes, redirectTo } from "./lib/utils";

export const middleware = async (req: NextRequest) => {
  const cookieStore = await cookies();
  const response = NextResponse.next();
  response.headers.set("x-current-pathname", req.nextUrl.pathname);

  if (!cookieStore.get("token")) return redirectTo(req, "/sign-in");

  const { success, role, user } = await verifyAuth(); // can get role from here as well
  if (!success) return redirectTo(req, "/sign-in");

  // create a helper function like getDashboardRoutes for in header

  if (
    role == "consultant" &&
    req.nextUrl.pathname !== "/verification" &&
    user.consultantProfile.status === "pending"
  )
    return redirectTo(req, "/verification");

  const roleRoutes = allowedRoutes[role] || [];
  const isAllowed = roleRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (!isAllowed) {
    return redirectTo(req, roleRoutes[0] || "/sign-in");
  }

  return;
};

export const config: MiddlewareConfig = {
  matcher: [
    "/consultant/:paths*",
    "/admin/:paths*",
    "/student/:paths*",
    "/consultants/:paths*",
    "/onboarding",
    "/verification",
  ],
};
