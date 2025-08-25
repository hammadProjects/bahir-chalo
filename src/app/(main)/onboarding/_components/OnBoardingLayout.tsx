import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

const OnboardingLayout: React.FC<Props> = ({
  description,
  title,
  children,
}) => {
  return (
    <section className="w-3xl mx-auto min-h-screen pt-20 flex justify-center">
      <Card className="w-full max-w-lg h-fit">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  );
};

export default OnboardingLayout;
