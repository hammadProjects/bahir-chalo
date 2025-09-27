import { Handshake, Wand2, Sparkles } from "lucide-react";

export const publicRoutes = [
  "/sign-up",
  "/sign-in",
  "/forget-password",
  "/reset-password/*",
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

export const dates = [0, 1, 2, 3].map((offset) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
});

export const plans = [
  {
    title: "Free",
    price: 0,
    description:
      "Basic access to explore opportunities and connect with consultants.",
    features: ["Limited access", "Basic consultation booking"],
  },
  {
    title: "Standard",
    price: 250,
    description:
      "A budget-friendly plan to access the platform’s basic features.",
    features: [
      "Access to platform",
      "Basic profile setup",
      "Application tracking",
    ],
  },
  {
    title: "Premium",
    price: 450,
    description:
      "A complete plan with advanced features for serious applicants.",

    features: [
      "Everything in Standard",
      "Priority support",
      "Extended application insights",
    ],
  },
];
