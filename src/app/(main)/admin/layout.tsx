import { Metadata } from "next";
import BackButton from "@/components/common/BackButton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Settings - Bahir Chalo",
  description: "Verify Concultants and view Approved Consultants",
};

interface Props {
  children: React.ReactNode;
}

const AdminDashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className=" min-h-screen px-8 py-10">
      <div className="">
        <BackButton title="Back to Home" url="/" style="mb-4" />
        <h1 className="flex items-center gap-2 text-5xl font-bold mb-6">
          <ShieldCheck className="w-10 h-10" />
          <span>Admin Settings</span>
        </h1>
        <Tabs
          defaultValue="pending-verifications"
          className="flex flex-col md:flex-row gap-8"
        >
          <TabsList className="w-full md:w-[400px] h-[80px] flex flex-col">
            <TabsTrigger className="w-full" value="pending-verifications">
              Pending Verifications
            </TabsTrigger>
            <TabsTrigger className="w-full" value="consultants">
              Consultants
            </TabsTrigger>
          </TabsList>
          {children}
        </Tabs>
      </div>
    </section>
  );
};

export default AdminDashboardLayout;
