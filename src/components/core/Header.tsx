import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="h-16 px-10">
      <div className="flex justify-between items-center">
        <div className="w-20 h-16">
          <Link className="-mt-1 -ml-3 inline-block" href={"/"}>
            <Image src={"/images/Logo.png"} alt="Logo" width={80} height={80} />
          </Link>
        </div>
        <Button variant={"link"} className=" hover:text-emerald-700/80" asChild>
          <Link href={"#pricing"}>Pricing</Link>
        </Button>
        <Button variant={"link"} className=" hover:text-emerald-700/80" asChild>
          <Link href={"/sign-up"}>Sign Up</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
