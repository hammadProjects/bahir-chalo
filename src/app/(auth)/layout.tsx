import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen -mt-10">
      <div className="w-20 h-20">
        <Link href={"/"}>
          <Image src={"/images/Logo.png"} alt="Logo" width={80} height={80} />
        </Link>
      </div>
      <main className="flex justify-center w-full h-full">{children}</main>
    </section>
  );
};

export default AuthLayout;
