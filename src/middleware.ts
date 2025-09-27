import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/verifyAuth";
import { allowedRoutes, redirectTo } from "./lib/utils";

export const middleware = async (req: NextRequest) => {
  const cookieStore = await cookies();
  if (!cookieStore.get("token")) return redirectTo(req, "/sign-in");

  const { success, role } = await verifyAuth(); // can get role from here as well
  if (!success) return redirectTo(req, "/sign-in");

  const roleRoutes = allowedRoutes[role] || [];
  const isAllowed = roleRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (!isAllowed) return redirectTo(req, roleRoutes[0]);

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
