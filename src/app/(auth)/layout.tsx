import BackButton from "@/components/common/BackButton";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex flex-col items-center justify-center py-20 -mt-5">
      <div className="w-20 h-20">
        <Link href={"/"}>
          <Image
            priority={true}
            src={"/images/Logo.png"}
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
      </div>
      <main className="flex flex-col items-center justify-center w-full h-full">
        {children}
        <BackButton title="Back to Home" style="mt-4" />
      </main>
    </section>
  );
};

export default AuthLayout;
