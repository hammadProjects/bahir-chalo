import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding - Bahir Chalo",
  description: "Start Your Journey as Student or Consultant",
};

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

const OnboardingLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className="px-4 mx-auto min-h-screen py-10 md:pt-20 flex justify-center">
      <div className="space-y-8 md:space-y-14">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to Bahir Chalo</h1>
          <p className="text-lg text-muted-foreground">
            Tell us how you want to use the platform
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default OnboardingLayout;
