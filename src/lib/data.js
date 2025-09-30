import { Handshake, Wand2, Sparkles } from "lucide-react";

export const publicRoutes = [
  "/sign-up",
  "/sign-in",
  "/forget-password",
  "/reset-password/*",
  "/verify-otp",
];

export const timeOptionsWithValues = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
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
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. Swaziland)",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const RoadmapArray = [
  {
    title: "Intakes",
    items: [
      {
        name: "Autumn Intake",
        major: true,
        start_month: "September/October",
        notes:
          "This is the primary intake for most Master's programs and offers the widest selection of courses and scholarships. Application deadlines are typically in April.",
      },
      {
        name: "Spring Intake",
        major: false,
        start_month: "January/February",
        notes:
          "This intake is less common and has a more limited selection of programs. It's a backup option if you miss the Autumn intake deadline. Application deadlines are typically in October.",
      },
    ],
  },
  {
    title: "Budget Options",
    items: [
      {
        total_budget_pkr: "5,000,000",
        notes:
          "Your budget of 50 lakhs PKR (~€16,500) is tight but manageable, especially with scholarships. The main costs are tuition fees and living expenses. Your focus should be on public universities to keep costs low.",
        public_university_tuition:
          "For non-EU students, tuition fees in public universities range from €1,200 to €8,000 per academic year. Your budget should comfortably cover this.",
        living_expenses_per_month:
          "Approximately €950 to €1,350 per month, which includes accommodation, food, and other costs. This is a critical factor and a strong reason to seek scholarships that cover living costs.",
      },
    ],
  },
  {
    title: "Scholarships",
    items: [
      {
        type: "Tuition Fee Waivers",
        notes:
          "Many public universities offer scholarships that waive all or part of the tuition fees for students with a strong academic record (high CGPA). Given your 3.5 CGPA, you are a competitive candidate for these.",
      },
      {
        type: "Fully Funded/Partially Funded",
        notes:
          "Fully funded scholarships are rare but exist, often for specific programs or through government-sponsored schemes. Your profile makes you a good candidate for these as well.",
        examples: [
          "VLIR-UOS Scholarships: For students from developing countries, these cover tuition fees, a monthly allowance, and other costs. They are highly competitive.",
          "Master Mind Scholarships: Offered by the Flemish government for outstanding international students. These scholarships are a great option for a high CGPA.",
          "ARES Scholarships: These are specifically for students from developing countries and cover travel, living expenses, and tuition.",
        ],
      },
    ],
  },
  {
    title: "Document Timeline",
    items: [
      {
        start_attestation_month: "January",
        attestation_bodies: [
          "Higher Education Commission (HEC): Your Bachelors degree and transcripts must be attested by the HEC.",
          "Inter Board Committee of Chairmen (IBCC): Your Matric and Intermediate degrees must be attested by the IBCC.",
          "Ministry of Foreign Affairs (MoFA): After attestation from HEC and IBCC, all documents must be attested by MoFA. This is a mandatory requirement for your visa application.",
          "Directorate of Technical Education (for DAE holders): For those with a DAE, the diploma must first be verified by the relevant provincial technical board before being attested by IBCC and then MoFA.",
        ],
      },
    ],
  },
  {
    title: "Application Timeline",
    items: [
      {
        start_applying_month: "December",
        notes:
          "Most university application portals for the autumn intake open in November or December. It is highly recommended to start compiling your applications then, as some programs are first-come, first-served or have limited seats.",
      },
    ],
  },
  {
    title: "IELTS Timeline",
    items: [
      {
        timeline:
          "You should take your IELTS test in **September/October** to have your results ready by the time application portals open in November/December. This gives you time to retake the test if needed and submit a strong application without delays.",
      },
    ],
  },
  {
    title: "Recommended Courses",
    items: [
      {
        course: "Master of Science in Computer Science",
        notes:
          "A general Master's in Computer Science will align with your BSCS background. Look for specializations in software engineering or data science which are very practical.",
        core_subjects_match: [
          "Data Structures and Algorithms",
          "Object-Oriented Programming",
          "Web Development",
          "Machine Learning",
        ],
      },
      {
        course: "Master of Science in Artificial Intelligence",
        notes:
          "Given your background in ML and Deep Learning, a specialized degree in AI would be a perfect fit. Universities like KU Leuven and Ghent University have strong programs in this field.",
      },
      {
        course: "Master of Science in Software Engineering",
        notes:
          "This is a very practical, industry-focused degree that will build directly on your core programming and web development skills.",
      },
    ],
  },
  {
    title: "Competitive Analysis",
    items: [
      {
        your_profile:
          "CGPA: 3.5/4 (High), IELTS: 6.5 (Meets minimum), Extracurriculars: None (Weakness), Degree: BSCS (Strong foundation)",
        competitive_universities: [
          {
            name: "KU Leuven",
            competition: "High",
            notes:
              "Internationally renowned, KU Leuven is very competitive. Your high CGPA will make your application strong. They have excellent practical and research-based programs. Their scholarships are also very competitive but worth applying for.",
            cities: "Leuven",
          },
          {
            name: "Ghent University",
            competition: "High",
            notes:
              "Another top-tier university. They are known for their practical approach and have a strong reputation in the tech industry. Your profile is a good fit for their programs. They offer merit-based scholarships.",
          },
          {
            name: "University of Antwerp",
            competition: "Medium-High",
            notes:
              "A very good option with a strong emphasis on practical skills and industry collaboration. It is slightly less competitive than KU Leuven or Ghent, giving you a better chance of admission and scholarships. Their Master of Computer Science is practical and aligns with your interests.",
          },
        ],
        easily_accessible_universities: [
          {
            name: "Vrije Universiteit Brussel (VUB)",
            competition: "Medium",
            notes:
              "VUB is a great option with a solid reputation. Its location in Brussels offers excellent job and networking opportunities. Your profile is a very strong fit here, and they offer scholarships for a high CGPA.",
            cities: "Brussels",
          },
          {
            name: "University of Hasselt",
            competition: "Medium",
            notes:
              "A smaller, more focused university known for its practical and student-centric approach. Your CGPA will make you a standout candidate for both admission and scholarships here.",
          },
          {
            name: "Université de Liège",
            competition: "Medium",
            notes:
              "This university is a good option with a wide range of programs. It's less competitive than the top-tier universities, making it a good choice for solidifying an offer.",
          },
        ],
      },
    ],
  },
  {
    title: "Best Cities for Jobs",
    items: [
      {
        city: "Brussels",
        notes:
          "As the capital, it's the economic and tech hub of Belgium and Europe. You will find numerous opportunities here in both IT and government sectors. The cost of living is high but can be managed by part-time jobs.",
        budget_compatibility: "Average to high",
      },
      {
        city: "Antwerp",
        notes:
          "A major city with a booming tech scene, especially in logistics and innovation. It offers a good balance of job opportunities and a slightly lower cost of living compared to Brussels.",
        budget_compatibility: "Medium",
      },
      {
        city: "Ghent",
        notes:
          "Known for its vibrant tech ecosystem and innovative startups. It's a great city for students with a youthful vibe and a strong job market in web development and software engineering. Cost of living is manageable.",
        budget_compatibility: "Medium",
      },
    ],
  },

  {
    title: "Financial Requirements",
    items: [
      {
        notes:
          "Belgian immigration requires proof of sufficient funds for your studies and stay. Your funds can be proven in one of two ways:",
        blocked_account_required: false,
        options: [
          {
            type: "Blocked Account",
            notes:
              "While not a blocked account in the traditional sense like in Germany, some universities offer to manage your funds in a university account. You transfer the required amount, and they release it to you monthly.",
          },
          {
            type: "Bank Statement/Sponsorship",
            notes:
              "The most common method for Pakistani students. You can provide a bank statement showing a minimum of **€803 per month** for the entire academic year (approx. €9,636). This can be in your name or a sponsor's (e.g., parents) via a **sponsorship certificate (Annex 32)** from the municipality in Belgium. Given your budget and scholarship goals, you should prepare a strong bank statement from a sponsor.",
          },
        ],
      },
    ],
  },
  {
    title: "Visa Timeline",
    items: [
      {
        start_applying_month: "Immediately after getting offer letter",
        notes:
          "Start your visa application process through the Belgian embassy or visa application center (VFS/Gerry's) in Pakistan as soon as you receive and accept your admission offer. The process can take several weeks or even a few months, so it is crucial to start this right away to make it for the September intake.",
      },
    ],
  },
  {
    title: "Student Work Rights",
    items: [
      {
        allowed_to_work: true,
        hours_allowed:
          "Up to **20 hours per week** during the academic year. During official school holidays, there's no hour limit.",
        minimum_wage:
          "The general minimum wage is approximately **€12.82 per hour** (as of 2025). Student wages can vary but are often around this amount.",
        opportunities:
          "Students can find work in the service sector (restaurants, retail), administrative roles, and as teaching or research assistants at universities. These are often called 'odd jobs' at the beginning.",
      },
    ],
  },
  {
    title: "Language Barrier",
    items: [
      {
        for_students:
          "Medium. Many Master's programs are in English, so your studies won't be affected. However, for daily life and interactions outside of the university, knowing basic French or Dutch (depending on the region) is very helpful. Most Belgians, especially the younger generation, speak English well.",
        for_jobs:
          "High. While the tech sector may have English-speaking roles, a good command of French, Dutch, or both is essential for most jobs, especially in smaller companies or non-tech roles. Learning the local language is critical for long-term career prospects.",
      },
    ],
  },
  {
    title: "Post Study Opportunities",
    items: [
      {
        psw_visa:
          "Yes, Belgium offers an 'orientation year' visa which allows you to stay for up to **12 months** after graduation to look for a job or start a business. To be eligible, you must have graduated from a Belgian higher education institution.",
        pr_options:
          "You can apply for permanent residency after **5 years of continuous legal residence** in Belgium. Your study period counts towards this. During this time, you must demonstrate you have sufficient means of subsistence (e.g., a stable job and income).",
        citizenship_opportunities:
          "You can apply for Belgian citizenship after **5 years of legal residence** and demonstrating social and economic integration (e.g., language proficiency and employment). The study period is also counted towards this.",
      },
    ],
  },
  {
    title: "Embassy in Pakistan",
    items: [
      {
        presence:
          "Yes, Belgium has an embassy in Islamabad, Pakistan. Visa applications are typically processed through an external service provider like **VFS Global or Gerry's**.",
      },
    ],
  },
];
