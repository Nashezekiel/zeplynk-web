import {
  Bot,
  Cloud,
  Shield,
  BarChart3,
  Code,
  Smartphone,
  Server,
  Building2,
  Palette,
  GraduationCap,
  LucideIcon,
} from "lucide-react";

export interface SolutionItem {
  name: string;
  description: string;
}

export interface SolutionStat {
  value: string;
  label: string;
}

export interface SolutionProcess {
  step: number;
  title: string;
  description: string;
}

export interface SolutionDifferentiator {
  title: string;
  description: string;
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface Solution {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  gradientFrom: string;
  stats: SolutionStat[];
  items: SolutionItem[];
  process: SolutionProcess[];
  differentiators: SolutionDifferentiator[];
  techStack: string[];
  faqs: SolutionFaq[];
}

export const solutions: Solution[] = [
  {
    slug: "web-engineering",
    title: "Web Engineering",
    tagline: "High-performance web apps built for conversion and scale.",
    description:
      "We build fast, secure, and search-optimized web applications designed for conversion and global scale. Leveraging modern frameworks, we ensure your web presence is a major business asset.",
    icon: Code,
    accentColor: "text-zgreen-400",
    bgColor: "bg-zgreen-500/10",
    borderColor: "border-zgreen-500/20",
    gradientFrom: "from-zgreen-500/20",
    stats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "<1.5s", label: "Avg. Page Load Time" },
      { value: "99.9%", label: "Availability SLA" },
      { value: "5★", label: "Client Satisfaction" },
    ],
    items: [
      {
        name: "Custom Web Applications",
        description: "Tailored to your business logic, workflow, and user needs.",
      },
      {
        name: "SaaS Platforms",
        description: "Subscription-ready systems with robust multi-tenant architecture.",
      },
      {
        name: "E-commerce Engines",
        description: "Fast checkout flows, payment integrations, and inventory synchronization.",
      },
      {
        name: "Corporate Websites",
        description: "Search-optimized, modern, and high-converting brand experiences.",
      },
      {
        name: "CMS Integration",
        description: "Flexible, headless, or traditional content management systems.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Scoping",
        description: "We align on requirements, user personas, architecture, and project timeline.",
      },
      {
        step: 2,
        title: "UX/UI Prototyping",
        description: "Figma-based high-fidelity design iterations to finalize visual layout.",
      },
      {
        step: 3,
        title: "Agile Development",
        description: "Weekly milestone sprints with continuous staging access.",
      },
      {
        step: 4,
        title: "Launch & Optimisation",
        description: "Production deployment, speed tuning, SEO checks, and codebase handover.",
      },
    ],
    differentiators: [
      {
        title: "Performance-First Architecture",
        description: "SSR (Server-Side Rendering) and edge caching implemented as standard.",
      },
      {
        title: "Clean, Maintainable Codebases",
        description: "Type-safe code structure that your in-house team can easily inherit.",
      },
      {
        title: "Seamless Payments Hub",
        description: "Pre-integrated checkout experiences for African and global payment gates.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Strapi"],
    faqs: [
      {
        question: "How long does it take to build a custom website?",
        answer: "A corporate website takes 2–4 weeks. A custom web app or SaaS MVP typically takes 6–12 weeks.",
      },
      {
        question: "Will the website be mobile-friendly and optimized for Google?",
        answer: "Yes, 100%. All our sites are fully responsive and designed to score 90+ on Google PageSpeed Insights.",
      },
      {
        question: "Do we own the source code?",
        answer: "Absolutely. Upon final project sign-off, full source code ownership and intellectual property are transferred to you.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    tagline: "Intelligent systems that automate workflows and drive growth.",
    description:
      "We design and deploy production-grade AI systems, autonomous agents, and workflow automations that eliminate repetitive tasks and scale business operations.",
    icon: Bot,
    accentColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    gradientFrom: "from-purple-500/20",
    stats: [
      { value: "40+", label: "AI Systems Deployed" },
      { value: "10x", label: "Process Speed Gain" },
      { value: "98%", label: "Uptime SLA" },
      { value: "24/7", label: "Model Monitoring" },
    ],
    items: [
      {
        name: "AI Strategy & Consulting",
        description: "We audit your stack to build an AI adoption roadmap with clear ROI.",
      },
      {
        name: "Intelligent Agents",
        description: "Autonomous workflows executing complex cognitive tasks.",
      },
      {
        name: "WhatsApp & Web Chatbots",
        description: "24/7 intelligent customer engagement integrated with your database.",
      },
      {
        name: "Workflow Automation",
        description: "Connecting CRMs, APIs, and administrative pipelines without code friction.",
      },
      {
        name: "Generative AI Solutions",
        description: "Custom LLM integrations, fine-tuning, and private RAG systems.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Audit",
        description: "We study your processes and data quality to identify automation options.",
      },
      {
        step: 2,
        title: "System Architecture",
        description: "Selecting model parameters, backend schemas, and integration structures.",
      },
      {
        step: 3,
        title: "Build & Training",
        description: "Engineering custom pipelines and validating accuracy with test datasets.",
      },
      {
        step: 4,
        title: "Deploy & Observability",
        description: "Deploying API agents and creating dashboard logs for real-time monitoring.",
      },
    ],
    differentiators: [
      {
        title: "Africa-First Context",
        description: "LLM tuning optimized for regional vocabulary, currencies, and context.",
      },
      {
        title: "Full-Stack Ownership",
        description: "We design the backend pipelines and custom frontends under one roof.",
      },
      {
        title: "Production-Ready Build",
        description: "No fragile demos. We deliver stable AI that handles real traffic and edge cases.",
      },
    ],
    techStack: ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "Python", "Pinecone"],
    faqs: [
      {
        question: "Is our business data safe when using your AI systems?",
        answer: "Yes. We configure private endpoints and secure VPC layers so your proprietary data is never used to train public models.",
      },
      {
        question: "Can we integrate AI with our existing CRM?",
        answer: "Yes, we integrate intelligent triggers and analytics directly into HubSpot, Salesforce, or custom databases.",
      },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    tagline: "Native iOS & Android apps designed for Africa and the world.",
    description:
      "We develop reliable mobile apps optimized for low-bandwidth and offline environments. With native performance and localized UX, we build apps users love.",
    icon: Smartphone,
    accentColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    gradientFrom: "from-blue-500/20",
    stats: [
      { value: "30+", label: "Apps Launched" },
      { value: "50%", label: "Bandwidth Savings" },
      { value: "4.8★", label: "App Store Rating" },
      { value: "<2s", label: "Push Latency" },
    ],
    items: [
      {
        name: "iOS Native App Development",
        description: "Premium native apps leveraging Swift and SwiftUI.",
      },
      {
        name: "Android Native App Development",
        description: "High-performance applications built on Kotlin and Jetpack Compose.",
      },
      {
        name: "Cross-Platform Development",
        description: "React Native and Flutter systems with unified codebase.",
      },
      {
        name: "Offline-First Sync",
        description: "Robust local databases that automatically sync when connectivity returns.",
      },
      {
        name: "Mobile Gateway Integrations",
        description: "Integrating USSD engines, mobile money APIs, and card checkout.",
      },
    ],
    process: [
      {
        step: 1,
        title: "UX Research",
        description: "Mapping user journey constraints and network environment expectations.",
      },
      {
        step: 2,
        title: "UI Design & Flow",
        description: "Designing layout mockups to guarantee easy navigation.",
      },
      {
        step: 3,
        title: "Coding & Testing",
        description: "Deploying code updates via TestFlight and Google Play Console beta.",
      },
      {
        step: 4,
        title: "Store Submission",
        description: "Guiding the project through full App Store approval and launch.",
      },
    ],
    differentiators: [
      {
        title: "Optimized for Low-Bandwidth",
        description: "Asset compression and smart caching that saves user data usage.",
      },
      {
        title: "Native Performance Feel",
        description: "Butter-smooth animations and responsive touch gestures as standard.",
      },
      {
        title: "Mobile Money Friendly",
        description: "Pre-configured interfaces for MTN MoMo, Orange Money, and local cards.",
      },
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite"],
    faqs: [
      {
        question: "Should we build a native or cross-platform app?",
        answer: "We recommend cross-platform (React Native/Flutter) for most startups to save costs, and native for heavy graphics or system integrations.",
      },
      {
        question: "Do you handle app store updates and maintenance?",
        answer: "Yes, we offer monthly retainers to handle OS upgrades, patches, and feature updates.",
      },
    ],
  },
  {
    slug: "backend-api",
    title: "Backend & API Development",
    tagline: "Robust engines powering your digital products.",
    description:
      "We build secure, scalable backend architectures and API interfaces that form the resilient foundation of web and mobile software.",
    icon: Server,
    accentColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    gradientFrom: "from-orange-500/20",
    stats: [
      { value: "10M+", label: "Daily API Requests" },
      { value: "<100ms", label: "Response Latency" },
      { value: "99.99%", label: "Availability SLA" },
      { value: "Terabytes", label: "Data Scaled" },
    ],
    items: [
      {
        name: "Custom API Development",
        description: "RESTful, gRPC, and GraphQL server endpoints with clean docs.",
      },
      {
        name: "Database Schema Design",
        description: "High-throughput SQL and NoSQL layouts tuned for speed.",
      },
      {
        name: "Payment & Auth Integrations",
        description: "Secure gateway connections (Paystack, Flutterwave) and OAuth/SSO systems.",
      },
      {
        name: "Microservices Architecture",
        description: "Decoupling server blocks for independent scale and failover protection.",
      },
      {
        name: "Server-Side Performance Tuning",
        description: "Deploying Redis cache matrices and database query optimizations.",
      },
    ],
    process: [
      {
        step: 1,
        title: "API Design & Spec",
        description: "Defining endpoints and request/response payloads in OpenAPI/Swagger.",
      },
      {
        step: 2,
        title: "Database Modeling",
        description: "Constructing table relations, normalization steps, and indexing.",
      },
      {
        step: 3,
        title: "Core Logic Sprints",
        description: "Writing secure, test-covered logic code with middleware rules.",
      },
      {
        step: 4,
        title: "Stress Testing",
        description: "Running k6 and load scripts to benchmark latency bottlenecks.",
      },
    ],
    differentiators: [
      {
        title: "Zero-Downtime Database Migration",
        description: "Safe database restructuring schemas that don't block user access.",
      },
      {
        title: "Strict Security Baselines",
        description: "SQL injection guards, rate limiting, and server hardening on every deploy.",
      },
      {
        title: "Automated Documentation",
        description: "Interactively testable API references that speed up client-side coding.",
      },
    ],
    techStack: ["Node.js", "FastAPI", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    faqs: [
      {
        question: "Can you help migrate our legacy backend databases?",
        answer: "Yes. We perform secure ETL operations to clean and port legacy structures to modern cloud databases.",
      },
      {
        question: "Do you support GraphQL or REST?",
        answer: "We build both. We choose REST for standard simplicity and GraphQL for client-heavy query flexibility.",
      },
    ],
  },
  {
    slug: "enterprise-digitization",
    title: "Enterprise Digitization",
    tagline: "Modernize legacy operations and automate workflows.",
    description:
      "We digitize internal operations, build custom management portals (ERP/CRM), and modernize aging software to help enterprises work faster and cut costs.",
    icon: Building2,
    accentColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    gradientFrom: "from-amber-500/20",
    stats: [
      { value: "70%", label: "Manual Process Reduction" },
      { value: "3x", label: "Faster Reporting Cycles" },
      { value: "100%", label: "Data Integration" },
      { value: "40+", label: "SME/Corp Clients" },
    ],
    items: [
      {
        name: "ERP & CRM Customization",
        description: "Tailored setup of Odoo, Salesforce, and HubSpot.",
      },
      {
        name: "Custom Business Portals",
        description: "Secure dashboards for HR, admin, procurement, and staff actions.",
      },
      {
        name: "Legacy Stack Modernization",
        description: "Upgrading aging business software to secure, cloud-hosted web apps.",
      },
      {
        name: "Process Digitization",
        description: "Replacing spreadsheet and paper chains with automated pipelines.",
      },
      {
        name: "BI Reporting Portals",
        description: "Consolidating business metrics into real-time KPI layouts.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Workflow Auditing",
        description: "We map out existing departmental actions to isolate process lags.",
      },
      {
        step: 2,
        title: "Solution Blueprinting",
        description: "Deciding which components to customize or build from scratch.",
      },
      {
        step: 3,
        title: "Integration Sprints",
        description: "Hooking up active systems and deploying secure portal staging.",
      },
      {
        step: 4,
        title: "Go-Live & Hypercare",
        description: "Production launch combined with intensive employee training support.",
      },
    ],
    differentiators: [
      {
        title: "Compliance Ready",
        description: "Integrated NDPR compliance rules and security audit logging.",
      },
      {
        title: "Tailored Adaptability",
        description: "We match the software to your workflow, avoiding workflow disruptions.",
      },
      {
        title: "Change Management Support",
        description: "Hands-on team training guides to ensure active dashboard adoption.",
      },
    ],
    techStack: ["Odoo", "HubSpot", "Salesforce", "n8n", "PostgreSQL", "Power BI"],
    faqs: [
      {
        question: "How long does a CRM or ERP implementation take?",
        answer: "A standard CRM customisation takes 4–6 weeks. A multi-module ERP rollout takes 8–16 weeks.",
      },
      {
        question: "Can Odoo handle local tax rules?",
        answer: "Yes, we pre-configure Odoo for Nigerian VAT, WHT, and FIRS compliance standards.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Reliable cloud infrastructure that auto-scales seamlessly.",
    description:
      "We set up secure cloud hosting, automate deployment pipelines (CI/CD), and manage infrastructure as code to guarantee maximum speed and uptime.",
    icon: Cloud,
    accentColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    gradientFrom: "from-sky-500/20",
    stats: [
      { value: "60%", label: "Avg. Infra Cost Saved" },
      { value: "10x", label: "Deploy Frequency Gain" },
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "<5min", label: "Mean Recovery Time" },
    ],
    items: [
      {
        name: "Cloud Hosting & Migration",
        description: "Secure migration of workloads to AWS, GCP, and Azure.",
      },
      {
        name: "CI/CD Pipeline Setup",
        description: "Automated code integration, testing, and deployment scripts.",
      },
      {
        name: "Infrastructure as Code (IaC)",
        description: "Defining network environments in clean, repeatable Terraform templates.",
      },
      {
        name: "System Monitoring",
        description: "Setting up metrics and log aggregation dashboards.",
      },
      {
        name: "Cloud Cost Optimization",
        description: "Eliminating idle cloud resources to drop monthly server bills.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Infra Audit",
        description: "We assess resource loads and security parameters to catch waste.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description: "Drafting scalable VPC layouts, security groups, and recovery systems.",
      },
      {
        step: 3,
        title: "Codification & Sprints",
        description: "Writing Terraform templates and deploying live integration hooks.",
      },
      {
        step: 4,
        title: "Migration & Sync",
        description: "Safely switching traffic flow to the modern cloud environment.",
      },
    ],
    differentiators: [
      {
        title: "IaC-First Deployment",
        description: "Unerring replication of testing, staging, and production environments.",
      },
      {
        title: "Zero-Trust VPC Setup",
        description: "Least-privilege firewall configurations and encrypted storage arrays.",
      },
      {
        title: "Bill Control Framework",
        description: "Budget alert monitors that prevent cost spikes from runaway server usage.",
      },
    ],
    techStack: ["AWS", "Google Cloud", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    faqs: [
      {
        question: "Which cloud provider should we use?",
        answer: "We recommend AWS for deep ecosystem features, and Vercel/Supabase for fast startup phases.",
      },
      {
        question: "What is Infrastructure as Code (IaC)?",
        answer: "IaC codifies networks in text files, making backup environments immediately restorable.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    tagline: "Beautiful interfaces backed by seamless user experiences.",
    description:
      "We conduct user research, construct Figma interactive prototypes, and design scalable component systems to make software visually stunning and easy to use.",
    icon: Palette,
    accentColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    gradientFrom: "from-pink-500/20",
    stats: [
      { value: "500+", label: "Figma Screens Designed" },
      { value: "+30%", label: "User Retention Gain" },
      { value: "2.5x", label: "Conversion Ratio Boost" },
      { value: "100+", label: "User Usability Tests" },
    ],
    items: [
      {
        name: "User Research & Audits",
        description: "Interviews, field tests, and dashboard heat-map analytics reviews.",
      },
      {
        name: "Wireframing & Prototyping",
        description: "High-fidelity, clickable visual paths in Figma for design review.",
      },
      {
        name: "Brand System Design",
        description: "Logos, type selections, color theory, and asset guideline libraries.",
      },
      {
        name: "Scalable Design Systems",
        description: "UI components built to streamline dev coding handovers.",
      },
      {
        name: "Interactive Animations",
        description: "Micro-interactions that guide users and create polished app flows.",
      },
    ],
    process: [
      {
        step: 1,
        title: "User Empathy & Audit",
        description: "Studying target audience goals and mapping navigation bottlenecks.",
      },
      {
        step: 2,
        title: "Wireframe Mapping",
        description: "Drafting skeleton layouts to establish page hierarchy.",
      },
      {
        step: 3,
        title: "Visual Design Layout",
        description: "Applying colors, assets, and branding rules to high-fidelity layouts.",
      },
      {
        step: 4,
        title: "Dev Team Handoff",
        description: "Packaging Figma variables and design specs for developers.",
      },
    ],
    differentiators: [
      {
        title: "Figma-First Workflow",
        description: "Interactive mocks that let you experience the product before coding.",
      },
      {
        title: "Africa-Centric UX Design",
        description: "Layouts designed with local contexts, literacy rates, and bandwidth in mind.",
      },
      {
        title: "Engineering-Ready Export",
        description: "We align colors and layouts with standard component frameworks.",
      },
    ],
    techStack: ["Figma", "Adobe Creative Suite", "Storybook", "Framer"],
    faqs: [
      {
        question: "How long does the UI/UX design phase take?",
        answer: "A standard web/mobile prototype takes 3–6 weeks depending on page count.",
      },
      {
        question: "Do you test designs with real users?",
        answer: "Yes, we run usability tests with real users to validate layout choices.",
      },
    ],
  },
  {
    slug: "data-bi",
    title: "Data & Business Intelligence",
    tagline: "Turn raw metrics into your ultimate competitive edge.",
    description:
      "We build automated data warehouses, ETL pipelines, and real-time dashboards to give your business leadership the accurate facts needed to execute strategies.",
    icon: BarChart3,
    accentColor: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    gradientFrom: "from-teal-500/20",
    stats: [
      { value: "5x", label: "Faster Report Delivery" },
      { value: "100%", label: "Data Source Sync" },
      { value: "Real-Time", label: "Dashboard Refresh" },
      { value: "Terabytes", label: "Data Scaled" },
    ],
    items: [
      {
        name: "BI Dashboard Development",
        description: "Custom real-time analytical dashboards in Power BI and Metabase.",
      },
      {
        name: "Data Warehousing Setup",
        description: "Consolidating databases into Snowflake, BigQuery, or Redshift.",
      },
      {
        name: "ETL Data Pipelines",
        description: "Automating data transfer from CRMs, Ads, and internal tables.",
      },
      {
        name: "Predictive Analytics",
        description: "Deploying machine learning models to track churn and sales projections.",
      },
      {
        name: "Customer Cohort Analytics",
        description: "Visualizing user retention loops and lifetime value patterns.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Metrics Discovery",
        description: "Identifying key business parameters and active data sources.",
      },
      {
        step: 2,
        title: "Warehouse Architecture",
        description: "Creating ingestion rules and mapping schemas in the data lake.",
      },
      {
        step: 3,
        title: "ETL Engine Setup",
        description: "Configuring pipeline sync systems and transforming data via dbt.",
      },
      {
        step: 4,
        title: "Data Visualisation",
        description: "Building reporting layouts and training teams on self-serve query tools.",
      },
    ],
    differentiators: [
      {
        title: "Business KPI Focus First",
        description: "We focus on key metrics that matter, avoiding noisy analytics dashboards.",
      },
      {
        title: "Self-Serve Training",
        description: "We teach your marketing/finance staff how to query dashboards without dev aid.",
      },
      {
        title: "Data Integrity Scrubber",
        description: "Automated alert monitors that verify data accuracy and pipeline sync.",
      },
    ],
    techStack: ["Metabase", "Power BI", "Snowflake", "dbt", "Fivetran", "Airbyte"],
    faqs: [
      {
        question: "Do we need a data warehouse?",
        answer: "If you have more than 3 data sources (e.g. Ads, Stripe, Database) and need cross-system metrics, yes.",
      },
      {
        question: "Can you pull data from payment gateways?",
        answer: "Yes, we sync data from Paystack, Flutterwave, Stripe, and global gateways.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Compliance",
    tagline: "Layered digital security to defend your business.",
    description:
      "We conduct penetration testing, build secure backend configurations, audit codebases, and implement controls required for NDPR, ISO 27001, and SOC 2.",
    icon: Shield,
    accentColor: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    gradientFrom: "from-red-500/20",
    stats: [
      { value: "Zero", label: "Client Breaches Post-Audit" },
      { value: "200+", label: "Security Vulnerabilities Patched" },
      { value: "<24hr", label: "SLA Response Window" },
      { value: "100%", label: "Audit Pass Rate" },
    ],
    items: [
      {
        name: "Penetration Testing",
        description: "Ethical hacking sprints to identify and exploit vulnerabilities.",
      },
      {
        name: "App Security Audits",
        description: "Secure code analysis, package checks, and vulnerability scanning.",
      },
      {
        name: "Identity & IAM Setup",
        description: "Configuring SSO, MFA, and Zero-Trust access hierarchies.",
      },
      {
        name: "Compliance Preparation",
        description: "Drafting policies and technical settings for ISO 27001, SOC 2, and NDPR.",
      },
      {
        name: "Incident Response Playbooks",
        description: "Establishing emergency recovery and data breach containment guides.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Attack Path Mapping",
        description: "We scan public network assets to establish threat exposure zones.",
      },
      {
        step: 2,
        title: "Threat Modeling",
        description: "Simulating attacks on databases, servers, and APIs.",
      },
      {
        step: 3,
        title: "Hardening & Patching",
        description: "Setting up firewalls, patching packages, and deploying secrets vaults.",
      },
      {
        step: 4,
        title: "SIEM & Logs Monitoring",
        description: "Deploying automated intrusion detection and alert monitors.",
      },
    ],
    differentiators: [
      {
        title: "CVSS Compliant Analysis",
        description: "Clear vulnerability reporting categorizing severity for business prioritization.",
      },
      {
        title: "NITDA/NDPR Ready",
        description: "We align security controls with NITDA's regulatory requirements.",
      },
      {
        title: "Defensive Coding Alignment",
        description: "We don't just report issues; we pair with your dev team to fix them.",
      },
    ],
    techStack: ["Burp Suite", "OWASP ZAP", "Wazuh", "Okta", "HashiCorp Vault", "AWS Security Hub"],
    faqs: [
      {
        question: "What's the difference between a scan and a pentest?",
        answer: "A scan is automated; a pentest involves skilled human attackers actively exploiting security gaps.",
      },
      {
        question: "Can you help us with NDPR audits?",
        answer: "Yes. We deploy compliance audit logs and compile files for your NITDA audit submission.",
      },
    ],
  },
  {
    slug: "tech-education",
    title: "Tech Education (Academy)",
    tagline: "Building Africa's next generation of elite engineers.",
    description:
      "We provide hands-on coding bootcamps, practical AI training, and custom corporate upskilling programs to bridge the developer talent gap.",
    icon: GraduationCap,
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    gradientFrom: "from-cyan-500/20",
    stats: [
      { value: "1000+", label: "Developers Trained" },
      { value: "15+", label: "Bootcamps Run" },
      { value: "85%", label: "Placement Rate" },
      { value: "4.9★", label: "Student Rating" },
    ],
    items: [
      {
        name: "Coding Bootcamps",
        description: "Full-stack web (React, Next.js) and mobile engineering programs.",
      },
      {
        name: "AI & ML Certifications",
        description: "Hands-on Python code scripting, prompt optimization, and AI agent building.",
      },
      {
        name: "Corporate Developer Upskilling",
        description: "Custom technical training sprints built for team needs.",
      },
      {
        name: "Tech Curriculum Design",
        description: "Helping institutions design structured code learning frameworks.",
      },
      {
        name: "Structured Mentorship",
        description: "Daily review sessions with senior developer mentors.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Needs Assessment",
        description: "Establishing existing coding levels and hiring target expectations.",
      },
      {
        step: 2,
        title: "Syllabus Customization",
        description: "Tuning course curriculum to match active tech stack constraints.",
      },
      {
        step: 3,
        title: "Practical Labs",
        description: "Project-based learning focusing on building real applications.",
      },
      {
        step: 4,
        title: "Handoff & Placement",
        description: "Assisting students with resume reviews and matching with hiring partners.",
      },
    ],
    differentiators: [
      {
        title: "Project-First Approach",
        description: "No boring lectures. Students build production-grade web apps from week one.",
      },
      {
        title: "Local Mentor Network",
        description: "Interactive help from local engineering leads who know the market.",
      },
      {
        title: "Hiring Partners Core",
        description: "Post-course placement services connecting graduates with businesses.",
      },
    ],
    techStack: ["HTML/CSS", "JavaScript", "TypeScript", "Next.js", "Node.js", "Python", "Git"],
    faqs: [
      {
        question: "How long are the coding bootcamp courses?",
        answer: "Full-time web bootcamps are 3 months. Backend and AI programs run for 4–6 months.",
      },
      {
        question: "Do I need prior coding experience?",
        answer: "No. Our beginner tracks start from the basics and require no prior coding skills.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
