import { FileWarning } from "lucide-react";

const ConsultantVerificationPage = async () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="bg-amber-500/14 text-amber-900 border-[2px] border-amber-400/40 hover:border-amber-400/80 transition-all py-6 px-10 -mt-20 rounded-xl text-center space-y-2">
        <FileWarning className="mx-auto" />
        <p>You are not Verified yet!</p>
        <p>An Admin Will Verify You Soon.</p>
      </div>
    </section>
  );
};
export default ConsultantVerificationPage;
