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

export const countries = [
  "Australia",
  "Austria",
  "Azerbaijan",
  "Belgium",
  "Canada",
  "China",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Indonesia",
  "Italy",
  "Japan",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Netherlands",
  "New Zealand",
  "Poland",
  "Portugal",
  "Russia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Turkmenistan",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];

export const StaticRoadmapData = [
  {
    name: "Intakes & Applications",
    notes: [
      "Major intakes: Spring (March) and Fall (September).",
      "Spring intake application: August-October of previous year.",
      "Fall intake application: February-April of same year.",
      "Apply early, especially for scholarship consideration.",
    ],
  },
  {
    name: "University Options & Budget Realism",
    notes: [
      "Budget (46 lakhs PKR / ~ $15,500 USD) is critically low for full tuition + living in South Korea.",
      "Requires securing significant university-specific scholarships (full tuition waiver + stipend) or highly competitive government scholarships.",
      "Consider national universities outside Seoul: Busan National University, Kyungpook National University, Chonnam National University, Chungnam National University.",
      "Top-tier universities (SNU, KAIST, Yonsei, Korea University) are likely outside budget without substantial funding.",
    ],
  },
  {
    name: "Scholarship Opportunities",
    notes: [
      "Global Korea Scholarship (GKS - formerly KGSP): Fully funded, highly competitive, apply through embassy or university track.",
      "University-specific scholarships: Tuition fee waivers (partial/full), Research Assistantships (RA), Teaching Assistantships (TA). Crucial for budget.",
      "Professors' research grants often fund RAs and TAs; direct contact with professors is highly recommended.",
    ],
  },
  {
    name: "Document Attestation",
    notes: [
      "Start 4-6 months before application deadlines.",
      "Matric & Intermediate: Attest from IBCC.",
      "Bachelor: Attest from HEC.",
      "All documents: Attest from Ministry of Foreign Affairs (MOFA) then Korean Embassy.",
    ],
  },
  {
    name: "IELTS Timeline",
    notes: [
      "Take IELTS at least 2-3 months before application deadlines.",
      "Target IELTS by July-August for Spring intake (Oct deadline).",
      "Target IELTS by January-February for Fall intake (Apr deadline).",
    ],
  },
  {
    name: "Recommended Courses",
    notes: [
      "Master's in Computer Science, Software Engineering, Data Science, Artificial Intelligence, Cybersecurity.",
      "Focus on specializations in Algorithms, Data Structures, Machine Learning, Systems given DSA background.",
    ],
  },
  {
    name: "Admission Chances",
    notes: [
      "Universities: Competitive for top-tier without high IELTS/publications; moderate for regional national universities with scholarships.",
      "Scholarships: GKS highly competitive; university-specific RA/TA moderate but requires strong professor support.",
      "Cities: Seoul highly competitive and expensive; regional cities offer moderate chances and lower costs.",
      "Courses: AI/DS are competitive; explore niche research areas for better chances.",
    ],
  },
  {
    name: "Best Cities (Job Market & Budget)",
    notes: [
      "Job Market: Seoul (most opportunities), Busan (second largest).",
      "Budget-Friendly: Busan, Daejeon, Gwangju, Daegu (lower living costs than Seoul).",
    ],
  },
  {
    name: "Financial Proof & Visa",
    notes: [
      "Bank/Blocked Account: Required for D-2 visa, typically ~20,000,000 KRW (~$15,000 USD) or more to cover first year's living and tuition.",
      "Proof of funds must be demonstrated in addition to tuition if no full scholarship.",
      "Apply for visa immediately after receiving Certificate of Admission (CoA) and Admission Letter.",
      "Visa processing usually takes 2-4 weeks.",
    ],
  },
  {
    name: "Embassy Presence",
    notes: [
      "Yes, Embassy of the Republic of Korea is present in Islamabad, Pakistan.",
    ],
  },
  {
    name: "Work During Study",
    notes: [
      "Allowed after 6 months of study with immigration permission.",
      "Up to 20 hours/week during semesters.",
      "Unlimited hours during vacation periods.",
    ],
  },
  {
    name: "Wage & Job Opportunities",
    notes: [
      "Minimum Wage (2024): 9,860 KRW/hour (~$7.50 USD).",
      "Student Jobs: Convenience stores, restaurants, cafes, language tutoring, on-campus research assistantships.",
    ],
  },
  {
    name: "Language Barrier",
    notes: [
      "Significant language barrier for daily life and many part-time jobs.",
      "Korean proficiency (TOPIK) is crucial for integration and better job prospects.",
      "English-taught programs mitigate academic language issues, but not social/work.",
    ],
  },
  {
    name: "Job Progression",
    notes: [
      "Initial Odd Jobs: Convenience store clerk, restaurant server, cafe staff.",
      "Later Field Jobs: Research assistant, IT support, entry-level software development (highly competitive, requires Korean proficiency and networking).",
    ],
  },
  {
    name: "Post-Study Work (PSW)",
    notes: [
      "No direct 'Post-Study Work Permit' like some other countries.",
      "Graduates need to find a job and convert to a D-10 Job Seeking Visa (6 months, extendable) then an E-series work visa.",
      "Transitioning from student to work visa is challenging and requires meeting specific criteria.",
    ],
  },
  {
    name: "PR / Citizenship Path",
    notes: [
      "Permanent Residency (F-5 visa): Requires 5+ years continuous legal residence, income, assets, Korean proficiency, and other strict criteria.",
      "Study period does not directly count towards PR residency requirement; transition to a work visa is the common path.",
      "Citizenship: Requires 5+ years continuous residence (general naturalization) and passing comprehensive naturalization exams (language, history, culture).",
      "Both PR and Citizenship are long and stringent processes.",
    ],
  },
];
