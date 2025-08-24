import { Handshake, Wand2, Sparkles } from "lucide-react";

export const publicRoutes = [
  "/sign-up",
  "/sign-in",
  "/forget-password",
  "/verify-otp",
];

export const steps = [
  {
    title: "Tell Us Your Dream",
    description:
      "Drop in your budget, interests, and what you’d love to study.",
    icon: <Sparkles className="w-10 h-10" />,
  },
  {
    title: "AI Magic",
    description:
      "Our AI instantly whips up the best countries, courses, and scholarships.",
    icon: <Wand2 className="w-10 h-10" />,
  },
  {
    title: "Human Touch",
    description: "Real experts step in to double-check and polish your plan.",
    icon: <Handshake className="w-10 h-10" />,
  },
];
