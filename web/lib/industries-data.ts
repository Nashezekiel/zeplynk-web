import {
  Users,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Building2,
  LucideIcon,
} from "lucide-react";

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryChallenge {
  name: string;
  description: string;
}

export interface IndustryProcess {
  step: number;
  title: string;
  description: string;
}

export interface IndustryDifferentiator {
  title: string;
  description: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface Industry {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  gradientFrom: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  stats: IndustryStat[];
  challenges: IndustryChallenge[];
  services: IndustryChallenge[];
  process: IndustryProcess[];
  differentiators: IndustryDifferentiator[];
  techStack: string[];
  faqs: IndustryFaq[];
}

export const industries: Industry[] = [
  {
    slug: "hr-recruitment",
    name: "Recruitment & HR",
    title: "Recruitment & HR Software",
    tagline: "Automated hiring and workforce systems built for Nigerian teams.",
    description:
      "Zeplynk builds recruitment platforms, applicant tracking systems, and HR portals for Nigerian staffing agencies, corporates, and HR-tech startups. We replace manual candidate screening and spreadsheet-based HR with automated, data-driven systems.",
    icon: Users,
    accentColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    gradientFrom: "from-blue-500/20",
    metaTitle: "Recruitment & HR Software Development Nigeria | Zeplynk",
    metaDescription:
      "Zeplynk builds applicant tracking systems, HR portals, and recruitment automation software for Nigerian businesses and staffing agencies. Get a free consultation.",
    keywords: [
      "recruitment software Nigeria",
      "HR software development Nigeria",
      "recruitment automation Nigeria",
      "applicant tracking system Nigeria",
      "ATS development Nigeria",
      "HR portal development Nigeria",
      "employee self-service portal Nigeria",
      "payroll software Nigeria",
      "AI recruitment automation",
    ],
    stats: [
      { value: "70%", label: "Less Manual Screening Time" },
      { value: "3x", label: "Faster Time-to-Hire" },
      { value: "100%", label: "Payroll Integration" },
      { value: "24/7", label: "Candidate Self-Service" },
    ],
    challenges: [
      {
        name: "Manual candidate screening",
        description: "HR teams sifting through hundreds of CVs by hand, with no consistent scoring or shortlisting criteria.",
      },
      {
        name: "Disconnected HR tools",
        description: "Payroll, attendance, and performance data trapped in spreadsheets that don't talk to each other.",
      },
      {
        name: "Slow, opaque hiring pipelines",
        description: "Candidates and hiring managers with no visibility into where an application stands.",
      },
    ],
    services: [
      {
        name: "Applicant Tracking Systems",
        description: "Custom ATS platforms that score, shortlist, and route candidates automatically.",
      },
      {
        name: "Employee Self-Service Portals",
        description: "Leave requests, payslips, and document access without HR email chains.",
      },
      {
        name: "Performance Tracking Dashboards",
        description: "Review cycles, goal tracking, and manager dashboards in one system.",
      },
      {
        name: "Payroll & Compliance Integration",
        description: "Connected payroll runs with Nigerian tax and pension deduction rules built in.",
      },
      {
        name: "AI-Assisted Candidate Screening",
        description: "Resume parsing and ranking models that cut first-pass screening time dramatically.",
      },
    ],
    process: [
      { step: 1, title: "HR Workflow Audit", description: "We map your current hiring and HR processes to find the bottlenecks worth automating first." },
      { step: 2, title: "System Design", description: "We define the ATS/HR portal structure, roles, and approval chains around how your team actually works." },
      { step: 3, title: "Build & Integrate", description: "We build the platform and connect it to your existing payroll, email, and communication tools." },
      { step: 4, title: "Rollout & Training", description: "We launch with HR and hiring-manager training so adoption happens from day one." },
    ],
    differentiators: [
      { title: "Built for Nigerian HR Rules", description: "Payroll and compliance logic pre-configured for Nigerian tax, pension, and labour requirements." },
      { title: "Recruiter-First UX", description: "Interfaces designed around how Nigerian HR and recruitment teams actually screen and hire." },
      { title: "Fast, Measurable Rollout", description: "Most HR portals and ATS builds go from kickoff to live system in 4–8 weeks." },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "n8n", "OpenAI", "Paystack"],
    faqs: [
      { question: "Can you build a custom applicant tracking system for our agency?", answer: "Yes. We build ATS platforms tailored to your screening criteria, client reporting needs, and hiring pipeline stages." },
      { question: "Can HR software integrate with our existing payroll provider?", answer: "Yes, we integrate with local payroll and payment providers, or build payroll logic directly into your portal." },
      { question: "How long does an HR portal build take?", answer: "A standard employee self-service portal takes 4–6 weeks. A full ATS with automated screening takes 6–10 weeks." },
    ],
  },
  {
    slug: "startups-saas",
    name: "Startups & SaaS",
    title: "SaaS & Startup Development",
    tagline: "MVP to scale — engineering built for high-growth ventures.",
    description:
      "Zeplynk builds SaaS platforms and MVPs for Nigerian and African startups, from first prototype through to multi-tenant, investor-ready products. We help founders ship fast without accumulating technical debt that slows the next raise.",
    icon: Briefcase,
    accentColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    gradientFrom: "from-purple-500/20",
    metaTitle: "SaaS Development Company Nigeria | MVP Development | Zeplynk",
    metaDescription:
      "Zeplynk builds SaaS platforms and MVPs for African startups — multi-tenant architecture, scalable infrastructure, and investor-ready engineering. Talk to us.",
    keywords: [
      "SaaS development company Nigeria",
      "MVP development Nigeria",
      "startup development company Nigeria",
      "SaaS developers Nigeria",
      "SaaS development Nigeria",
      "custom software development Nigeria",
      "startup software development Nigeria",
      "product engineering Nigeria",
    ],
    stats: [
      { value: "6–10wk", label: "Typical MVP Timeline" },
      { value: "40+", label: "Startup Products Shipped" },
      { value: "100%", label: "Source Code Ownership" },
      { value: "Multi-tenant", label: "Architecture as Standard" },
    ],
    challenges: [
      {
        name: "Slow time-to-market",
        description: "Founders losing runway to development cycles that stretch far past the original MVP scope.",
      },
      {
        name: "Technical debt from early hires",
        description: "Prototype code that can't scale past the first hundred users without a costly rebuild.",
      },
      {
        name: "No clear path to multi-tenancy",
        description: "Single-customer architecture that blocks growth once the second and third client sign on.",
      },
    ],
    services: [
      {
        name: "Rapid MVP Development",
        description: "Scoped, sprint-based builds that get a testable product in front of real users fast.",
      },
      {
        name: "Multi-Tenant SaaS Architecture",
        description: "Subscription billing, tenant isolation, and role-based access built in from day one.",
      },
      {
        name: "API-First Development",
        description: "Clean, documented APIs so your product integrates with partners without friction.",
      },
      {
        name: "Growth Analytics & BI",
        description: "Usage, retention, and revenue dashboards so founders can make decisions on real data.",
      },
      {
        name: "Post-MVP Scaling",
        description: "Refactoring and infrastructure work that turns an MVP into a product that survives growth.",
      },
    ],
    process: [
      { step: 1, title: "Product Scoping", description: "We define the smallest version of your product that proves the core value proposition." },
      { step: 2, title: "Architecture Planning", description: "We design a data model and infrastructure that won't need a rebuild at 10x users." },
      { step: 3, title: "Sprint-Based Build", description: "Weekly milestones with staging access, so you can test with users as we build." },
      { step: 4, title: "Launch & Iterate", description: "Production deployment plus a feedback loop for fast post-launch iteration." },
    ],
    differentiators: [
      { title: "Founder-Speed Delivery", description: "We scope tightly and ship in weeks, not quarters — runway matters." },
      { title: "Built to Survive a Raise", description: "Architecture decisions made with due diligence and future scale in mind, not just the demo." },
      { title: "Full IP Ownership", description: "You own 100% of the codebase and IP on delivery — no vendor lock-in." },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Paystack", "AWS", "Vercel"],
    faqs: [
      { question: "How much does it cost to build an MVP in Nigeria?", answer: "A focused MVP typically ranges from ₦800,000 to ₦3,500,000 depending on scope. We give a fixed quote after a scoping call." },
      { question: "Can you help us pitch to investors with the product?", answer: "Yes — we've supported founders through due-diligence technical reviews and can prepare architecture documentation for investor conversations." },
      { question: "Do you take equity instead of cash?", answer: "We work primarily on fixed-fee and retainer terms. Equity arrangements are considered case-by-case for early-stage founders." },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    title: "E-commerce Development",
    tagline: "High-converting storefronts built for the Nigerian buyer journey.",
    description:
      "Zeplynk builds e-commerce platforms for Nigerian retailers and brands — fast storefronts, integrated local payment gateways, and inventory systems that keep stock accurate across channels.",
    icon: ShoppingBag,
    accentColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    gradientFrom: "from-pink-500/20",
    metaTitle: "E-commerce Website Development Nigeria | Zeplynk",
    metaDescription:
      "Zeplynk builds e-commerce websites and online stores for Nigerian businesses — Paystack/Flutterwave checkout, inventory sync, and fast, mobile-first storefronts.",
    keywords: [
      "ecommerce website Nigeria",
      "ecommerce development Nigeria",
      "online store development Nigeria",
      "ecommerce website development company Nigeria",
      "Paystack integration Nigeria",
      "Flutterwave integration Nigeria",
      "headless commerce Nigeria",
      "online shop development Nigeria",
    ],
    stats: [
      { value: "<2s", label: "Avg. Storefront Load Time" },
      { value: "100%", label: "Local Payment Gateway Coverage" },
      { value: "Real-time", label: "Inventory Sync" },
      { value: "2.5x", label: "Avg. Conversion Lift" },
    ],
    challenges: [
      {
        name: "Slow, template-based storefronts",
        description: "Generic builders that load slowly on Nigerian mobile networks and hurt conversion.",
      },
      {
        name: "Payment friction",
        description: "Checkout flows that don't support the local cards, bank transfers, and wallets Nigerian buyers actually use.",
      },
      {
        name: "Inventory out of sync",
        description: "Stock counts that drift between the website, WhatsApp orders, and physical store.",
      },
    ],
    services: [
      {
        name: "Custom Storefront Development",
        description: "Fast, mobile-first storefronts built on modern frameworks instead of bloated templates.",
      },
      {
        name: "Local Payment Integration",
        description: "Paystack, Flutterwave, and bank transfer checkout flows tuned for Nigerian buyers.",
      },
      {
        name: "Inventory & Order Management",
        description: "Real-time stock sync across web, WhatsApp, and in-store channels.",
      },
      {
        name: "AI Product Recommendations",
        description: "Personalized upsell and cross-sell logic based on browsing and purchase behaviour.",
      },
      {
        name: "Headless Commerce Builds",
        description: "Decoupled storefronts for brands that need full design control at scale.",
      },
    ],
    process: [
      { step: 1, title: "Catalog & Journey Mapping", description: "We map your product catalog and buyer journey from discovery to checkout." },
      { step: 2, title: "Storefront Design", description: "Mobile-first UI design focused on speed and checkout conversion." },
      { step: 3, title: "Build & Payment Integration", description: "Development plus integration of local payment gateways and inventory systems." },
      { step: 4, title: "Launch & Conversion Tuning", description: "Go-live followed by funnel analysis and checkout optimisation." },
    ],
    differentiators: [
      { title: "Built for Nigerian Bandwidth", description: "Aggressive performance optimisation so pages load fast on 3G/4G, not just fibre." },
      { title: "Local Payment-First", description: "Checkout designed around the gateways and payment habits Nigerian shoppers already trust." },
      { title: "Omnichannel Inventory", description: "One source of truth for stock across your website, WhatsApp, and physical store." },
    ],
    techStack: ["Next.js", "Shopify", "Paystack", "Flutterwave", "PostgreSQL", "Redis"],
    faqs: [
      { question: "Which payment gateways do you integrate for Nigerian stores?", answer: "We integrate Paystack, Flutterwave, and bank transfer/USSD flows, plus card and mobile money options for cross-border stores." },
      { question: "Can you migrate our store from Shopify or WooCommerce?", answer: "Yes, we handle catalog, customer, and order migrations with minimal downtime." },
      { question: "How much does an e-commerce website cost in Nigeria?", answer: "A custom storefront typically starts from ₦600,000, scaling with catalog size, payment integrations, and inventory complexity." },
    ],
  },
  {
    slug: "education",
    name: "Education & EdTech",
    title: "Education & EdTech Software",
    tagline: "Learning platforms and school systems built for Nigerian institutions.",
    description:
      "Zeplynk builds school management systems, learning management platforms, and EdTech products for Nigerian schools, training academies, and education startups.",
    icon: GraduationCap,
    accentColor: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    gradientFrom: "from-yellow-500/20",
    metaTitle: "School Management Software & LMS Development Nigeria | Zeplynk",
    metaDescription:
      "Zeplynk builds school management systems, learning management platforms, and online examination software for Nigerian schools and EdTech startups.",
    keywords: [
      "school management software Nigeria",
      "LMS development Nigeria",
      "learning management system Nigeria",
      "EdTech development Nigeria",
      "school portal development Nigeria",
      "online examination software Nigeria",
      "school management system Nigeria",
      "e-learning platform development Nigeria",
    ],
    stats: [
      { value: "100%", label: "Result & Fee Digitization" },
      { value: "5x", label: "Faster Report Generation" },
      { value: "24/7", label: "Parent/Student Portal Access" },
      { value: "Zero", label: "Paper Result Sheets" },
    ],
    challenges: [
      {
        name: "Paper-based records",
        description: "Attendance, results, and fee tracking still running on paper registers and spreadsheets.",
      },
      {
        name: "No parent visibility",
        description: "Parents with no real-time way to check attendance, results, or fee balances.",
      },
      {
        name: "Manual exam administration",
        description: "Test creation, grading, and result compilation eating up staff hours every term.",
      },
    ],
    services: [
      {
        name: "School Management Systems",
        description: "Admissions, attendance, results, and fee management in one connected portal.",
      },
      {
        name: "Learning Management Systems",
        description: "Course delivery, video lessons, and progress tracking for schools and training academies.",
      },
      {
        name: "Online Examination Platforms",
        description: "Auto-graded quizzes and exams with anti-cheating controls and instant results.",
      },
      {
        name: "Parent & Student Portals",
        description: "Real-time access to results, attendance, and fee balances from any device.",
      },
      {
        name: "Virtual Classroom Tools",
        description: "Live class scheduling, recordings, and discussion spaces for remote learning.",
      },
    ],
    process: [
      { step: 1, title: "Institution Needs Assessment", description: "We map your academic calendar, grading system, and administrative workflows." },
      { step: 2, title: "Platform Design", description: "We design the portal structure for admins, teachers, students, and parents." },
      { step: 3, title: "Build & Data Migration", description: "Development plus migration of existing student and result records." },
      { step: 4, title: "Staff Training & Go-Live", description: "Hands-on training for administrative and teaching staff before full rollout." },
    ],
    differentiators: [
      { title: "Nigerian Curriculum Fit", description: "Grading scales, term structures, and result formats built around WAEC/NECO-aligned school calendars." },
      { title: "Low-Bandwidth Friendly", description: "Interfaces that work reliably for staff and parents on modest internet connections." },
      { title: "Staff-First Rollout", description: "We train administrative and teaching staff directly — adoption doesn't stall after handover." },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "Paystack"],
    faqs: [
      { question: "Can you digitize our school's existing student and result records?", answer: "Yes, we handle data migration from paper records or spreadsheets into the new system as part of the rollout." },
      { question: "Can parents access the system on their phones?", answer: "Yes, every portal we build is mobile-first and works on any smartphone browser." },
      { question: "How long does a school management system take to build?", answer: "A standard school portal takes 6–8 weeks; a full LMS with online examinations takes 8–12 weeks." },
    ],
  },
  {
    slug: "sme-corporate",
    name: "SMEs & Corporate",
    title: "SME & Corporate Digitization",
    tagline: "Modernizing legacy operations for established Nigerian businesses.",
    description:
      "Zeplynk helps Nigerian SMEs and corporates replace manual, paper-based operations with custom CRM, ERP, and business management systems — without disrupting how the business already runs.",
    icon: Building2,
    accentColor: "text-zgreen-400",
    bgColor: "bg-zgreen-500/10",
    borderColor: "border-zgreen-500/20",
    gradientFrom: "from-zgreen-500/20",
    metaTitle: "Business Software & ERP Development for Nigerian SMEs | Zeplynk",
    metaDescription:
      "Zeplynk builds custom CRM, ERP, and business management software for Nigerian SMEs and corporates — replacing spreadsheets with automated, auditable systems.",
    keywords: [
      "SME software Nigeria",
      "business automation Nigeria",
      "CRM for Nigerian businesses",
      "ERP software Nigeria",
      "business management software Nigeria",
      "custom CRM Nigeria",
      "custom ERP Nigeria",
      "digital transformation Nigeria",
      "legacy system migration Nigeria",
    ],
    stats: [
      { value: "70%", label: "Manual Process Reduction" },
      { value: "3x", label: "Faster Reporting Cycles" },
      { value: "100%", label: "Audit-Ready Data" },
      { value: "40+", label: "SME/Corporate Clients" },
    ],
    challenges: [
      {
        name: "Spreadsheet-dependent operations",
        description: "Sales, inventory, and finance tracked in disconnected spreadsheets prone to error and version conflicts.",
      },
      {
        name: "No real-time visibility",
        description: "Leadership waiting days for reports that a connected system could generate instantly.",
      },
      {
        name: "Ageing legacy software",
        description: "Old desktop systems that can't be accessed remotely or integrated with modern tools.",
      },
    ],
    services: [
      {
        name: "Custom CRM & ERP Systems",
        description: "Sales pipelines, inventory, and finance modules built around how your business actually operates.",
      },
      {
        name: "Legacy System Migration",
        description: "Safe migration from ageing desktop software to secure, cloud-hosted platforms.",
      },
      {
        name: "Custom Business Portals",
        description: "Secure dashboards for HR, procurement, and staff administrative actions.",
      },
      {
        name: "Enterprise Security Audits",
        description: "Access control and compliance review as part of every digitization rollout.",
      },
      {
        name: "BI Reporting Dashboards",
        description: "Real-time KPI dashboards replacing manual month-end report compilation.",
      },
    ],
    process: [
      { step: 1, title: "Workflow Audit", description: "We map existing departmental processes to isolate where manual work is costing the most time." },
      { step: 2, title: "Solution Blueprinting", description: "We decide what to customize from existing platforms versus build from scratch." },
      { step: 3, title: "Integration Sprints", description: "We connect active systems and deploy the new platform to a secure staging environment." },
      { step: 4, title: "Go-Live & Hypercare", description: "Production launch backed by hands-on staff training and post-launch support." },
    ],
    differentiators: [
      { title: "Business-First, Not Tech-First", description: "We fit software to how your team already works instead of forcing process change for its own sake." },
      { title: "NDPR-Aware by Default", description: "Data handling and access-control practices built around Nigerian data protection requirements." },
      { title: "Hands-On Change Management", description: "Staff training baked into the rollout so the system actually gets used." },
    ],
    techStack: ["Odoo", "HubSpot", "Next.js", "PostgreSQL", "n8n", "Power BI"],
    faqs: [
      { question: "We still use Excel for everything — where do we start?", answer: "We start with a short workflow audit to find the one or two processes causing the most pain, and digitize those first rather than a risky big-bang rollout." },
      { question: "Can you integrate with our existing accounting software?", answer: "Yes, we integrate with common Nigerian and international accounting and payment tools as part of the system design." },
      { question: "How long does a CRM or ERP rollout take?", answer: "A standard CRM customisation takes 4–6 weeks. A multi-module ERP rollout takes 8–16 weeks." },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
