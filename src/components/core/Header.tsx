import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { verifyAuth } from "@/lib/verifyAuth";
import { getDashboardUrl } from "@/lib/utils";

const Header = async () => {
  const { success, role } = await verifyAuth();
  let dashboardUrl;
  if (success) dashboardUrl = getDashboardUrl(role) || "";

  return (
    <header className="h-16 px-10">
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
        <Button variant={"link"} className=" hover:text-emerald-700/80" asChild>
          <Link href={"/#pricing"}>Pricing</Link>
        </Button>
        <Button variant={"link"} className=" hover:text-emerald-700/80" asChild>
          <Link href={dashboardUrl || "/sign-in"}>
            {dashboardUrl ? "Dashboard" : "Sign In"}
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
