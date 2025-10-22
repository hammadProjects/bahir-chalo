import { Metadata } from "next";
import BackButton from "@/components/common/BackButton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Dashboard - Bahir Chalo",
  description: "View Booked Appointments and Generate Roadmaps",
};

interface Props {
  children: React.ReactNode;
}

const StudentDashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className=" min-h-screen px-8 py-10">
      <div className="">
        <BackButton title="Back to Home" url="/" style="mb-4" />
        <h1 className="flex items-center gap-2 text-3xl md:text-5xl font-bold mb-6">
          <GraduationCap className="text-emerald-400/90 w-8 h-8 md:w-10 md:h-10" />
          <span>Student Dashboard</span>
        </h1>
        <Tabs
          // defaultValue="my-roadmaps"
          defaultValue="generate-roadmaps"
          // defaultValue="booked-appointments"
          className="flex flex-col md:flex-row gap-8"
        >
          <TabsList className="w-full md:w-[400px] h-[100px] flex flex-col">
            <TabsTrigger className="w-full" value="my-roadmaps">
              My Roadmaps
            </TabsTrigger>
            <TabsTrigger className="w-full" value="generate-roadmaps">
              Generate Roadmaps
            </TabsTrigger>
            <TabsTrigger className="w-full" value="booked-appointments">
              Booked Appointments
            </TabsTrigger>
          </TabsList>
          <div className="w-full">{children}</div>
        </Tabs>
      </div>
    </section>
  );
};

export default StudentDashboardLayout;
