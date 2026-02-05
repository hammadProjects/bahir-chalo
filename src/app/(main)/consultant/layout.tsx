import { Metadata } from "next";
import BackButton from "@/components/common/BackButton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Consultant - Bahir Chalo",
  description: "Set availability, check upcoming bookings and request payouts",
};

interface Props {
  children: React.ReactNode;
}

const ConsultantDashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className=" min-h-screen px-8 py-10">
      <div className="">
        <BackButton title="Back to Home" url="/" style="mb-4" />
        <h1 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
          <Users className="text-emerald-400/90 w-8 h-8 md:w-10 md:h-10" />
          <span>Consultant Dashboard</span>
        </h1>
        <Tabs
          defaultValue="availability"
          className="flex flex-col md:flex-row gap-8"
        >
          <TabsList className="w-full md:w-[440px] h-[100px] flex flex-col">
            <TabsTrigger className="w-full" value="earnings">
              Earnings
            </TabsTrigger>
            <TabsTrigger className="w-full" value="bookings">
              Bookings
            </TabsTrigger>
            <TabsTrigger className="w-full" value="availability">
              Availability
            </TabsTrigger>
          </TabsList>
          <div className="w-full">{children}</div>
        </Tabs>
      </div>
    </section>
  );
};

export default ConsultantDashboardLayout;
