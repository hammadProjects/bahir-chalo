import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { verifyAuth } from "@/lib/verifyAuth";
import { getDashboardUrl } from "@/lib/utils";
import { headers } from "next/headers";
import { publicRoutes } from "@/lib/data";
import { LogOut } from "lucide-react";
import { logutAction } from "../../../actions/auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = async () => {
  const { success, role, user } = await verifyAuth();
  const headersList = await headers();
  const pathname = headersList.get("x-current-pathname") || "";
  const hideHeader = !publicRoutes.includes(pathname);

  let dashboardUrl = "/sign-in";
  if (success)
    dashboardUrl = getDashboardUrl(
      role,
      role === "consultant" && user?.consultantProfile?.status
    );

  const btnText =
    role === "unassigned"
      ? "Onboarding"
      : role === "consultant" &&
        (user?.consultantProfile?.status === "pending" ||
          user?.consultantProfile?.status === "rejected")
      ? "Verification"
      : dashboardUrl != "/sign-in"
      ? "Dashboard"
      : "Sign In";

  return (
    hideHeader && (
      <header className="h-16 px-6 sm:px-10 md:px-24">
        <div className="flex justify-between items-center">
          <div className="w-20 h-16">
            <Link className="-mt-1 -ml-3 inline-block" href={"/"}>
              <Image
                priority={true}
                src={"/images/Logo.png"}
                alt="Logo"
                width={80}
                height={80}
              />
            </Link>
          </div>
          <Button
            variant={"link"}
            className=" hover:text-emerald-700/80"
            asChild
          >
            <Link href={"/#pricing"}>Pricing</Link>
          </Button>
          <div className="flex items-center">
            <Button
              variant={"link"}
              className=" hover:text-emerald-700/80"
              asChild
            >
              <Link href={dashboardUrl}>{btnText}</Link>
            </Button>

            {success && (
              <Link href={"/profile"}>
                <Avatar>
                  <AvatarImage src={user?.profilePicture} />
                  <AvatarFallback>
                    {user?.username[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Link>
            )}

            {success && (role === "student" || role === "consultant") && (
              <p className="ml-3 hidden sm:block text-sm font-bold border-1 border-emerald-400 py-1 px-2 rounded-sm hover:scale-105 transition-all cursor-pointer">
                🪙 {user?.credits} Credits
              </p>
            )}
            {success && (
              <form action={logutAction}>
                <Button
                  className="hover:text-emerald-600 transition-all"
                  variant={"link"}
                >
                  <LogOut />
                </Button>
              </form>
            )}
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
