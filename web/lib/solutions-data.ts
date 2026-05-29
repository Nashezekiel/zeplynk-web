import { Bot, Laptop, Cloud, Database, Shield, BarChart3, LucideIcon } from "lucide-react";

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
    slug: "ai",
    title: "AI & Intelligent Systems",
    tagline: "Build systems that think, learn, and scale.",
    description:
      "We design and deploy production-grade AI systems that transform how businesses operate. From conversational agents and intelligent automation to generative AI integrations — we handle strategy, architecture, and delivery end-to-end.",
    icon: Bot,
    accentColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    gradientFrom: "from-purple-500/20",
    stats: [
      { value: "40+", label: "AI Systems Deployed" },
      { value: "10x", label: "Avg. Process Speed Gain" },
      { value: "98%", label: "Uptime SLA" },
      { value: "24/7", label: "Model Monitoring" },
    ],
    items: [
      {
        name: "AI Strategy & Consulting",
        description:
          "We audit your current stack, identify automation opportunities, and build a phased AI adoption roadmap tailored to your business goals and budget.",
      },
      {
        name: "Intelligent Automation",
        description:
          "Replace repetitive workflows with intelligent pipelines — document processing, data extraction, approval flows, and multi-step agent orchestration.",
      },
      {
        name: "Conversational AI",
        description:
          "Production-grade chatbots and voice assistants built on GPT-4, Claude, and Gemini — integrated with your CRM, helpdesk, and backend systems.",
      },
      {
        name: "Generative AI Solutions",
        description:
          "Custom LLM fine-tuning, RAG systems, AI content pipelines, and image/video generation tools built for your specific domain and data.",
      },
      {
        name: "Computer Vision",
        description:
          "Object detection, facial recognition, quality inspection, and real-time video analytics for industrial, retail, and security use cases.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Audit",
        description:
          "We analyse your existing processes, data quality, and infrastructure to map where AI can generate the highest ROI.",
      },
      {
        step: 2,
        title: "Solution Architecture",
        description:
          "Our AI architects design the system — model selection, data pipelines, integration points, and scalability plan.",
      },
      {
        step: 3,
        title: "Build & Fine-Tune",
        description:
          "We develop, train, and validate models on your data, iterating with continuous feedback loops until precision targets are met.",
      },
      {
        step: 4,
        title: "Deploy & Monitor",
        description:
          "We ship to production, set up observability dashboards, and provide ongoing model maintenance and retraining schedules.",
      },
    ],
    differentiators: [
      {
        title: "Africa-First Context",
        description:
          "We train and fine-tune models that understand Nigerian markets, languages, and business processes — not just generic Western datasets.",
      },
      {
        title: "Full-Stack AI Ownership",
        description:
          "From data engineering to model inference and frontend integration — we own the entire stack so you have one accountable partner.",
      },
      {
        title: "Production-Grade, Not Demos",
        description:
          "We build AI systems that handle real traffic, edge cases, and business-critical workflows — not just impressive proof-of-concepts.",
      },
    ],
    techStack: [
      "OpenAI GPT-4",
      "Anthropic Claude",
      "Google Gemini",
      "LangChain",
      "LlamaIndex",
      "Python",
      "FastAPI",
      "Pinecone",
      "PostgreSQL",
      "Redis",
    ],
    faqs: [
      {
        question: "How long does it take to build an AI chatbot?",
        answer:
          "A basic AI chatbot integrated with your website or CRM typically takes 2–4 weeks. A more complex multi-agent system with custom fine-tuning can take 6–12 weeks depending on data availability.",
      },
      {
        question: "Do you work with our existing data?",
        answer:
          "Yes. We can build RAG (Retrieval-Augmented Generation) systems that connect your AI to your existing documents, databases, and knowledge bases securely.",
      },
      {
        question: "Is our data safe when using AI?",
        answer:
          "We implement strict data governance policies. We use private deployments where needed, and never share your data with third-party model providers without explicit consent.",
      },
      {
        question: "What industries do you build AI for?",
        answer:
          "We've built AI systems for fintech, healthcare, education, logistics, e-commerce, and government — across Nigeria, Africa, and globally.",
      },
      {
        question: "Do you provide ongoing AI maintenance?",
        answer:
          "Yes. All our AI deployments come with monitoring dashboards, drift detection alerts, and optional SLA-backed maintenance plans.",
      },
    ],
  },
  {
    slug: "engineering",
    title: "Digital Product Engineering",
    tagline: "High-performance products built for global scale.",
    description:
      "We engineer web and mobile platforms with architectural precision, designed to handle hypergrowth. From SaaS products to enterprise portals — we build fast, secure, and maintainable software that becomes a competitive advantage.",
    icon: Laptop,
    accentColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    gradientFrom: "from-blue-500/20",
    stats: [
      { value: "100+", label: "Products Launched" },
      { value: "<1.5s", label: "Avg. Page Load Time" },
      { value: "99.9%", label: "Availability SLA" },
      { value: "5★", label: "Client Satisfaction" },
    ],
    items: [
      {
        name: "Web Application Development",
        description:
          "Full-stack web apps built with Next.js, React, and TypeScript — optimised for performance, SEO, and accessibility from day one.",
      },
      {
        name: "Mobile App Development",
        description:
          "Cross-platform iOS and Android apps using React Native — with native performance, offline support, and seamless backend integration.",
      },
      {
        name: "SaaS Product Development",
        description:
          "End-to-end SaaS engineering: multi-tenant architecture, billing integration, user management, and scalable API design.",
      },
      {
        name: "API Development & Integration",
        description:
          "RESTful and GraphQL API design, third-party integrations (payment gateways, ERPs, CRMs), and microservices architecture.",
      },
      {
        name: "UI/UX Engineering",
        description:
          "Pixel-perfect implementation of design systems, accessibility-first components, and motion-rich interfaces that delight users.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Scoping",
        description:
          "We map your product vision, define user flows, and create a technical specification document and delivery timeline.",
      },
      {
        step: 2,
        title: "Design & Architecture",
        description:
          "UI/UX design in Figma, system architecture planning, database schema design, and tech stack finalisation.",
      },
      {
        step: 3,
        title: "Agile Development",
        description:
          "Iterative sprints with weekly demos, continuous integration, and early access staging environments for your team.",
      },
      {
        step: 4,
        title: "Launch & Handover",
        description:
          "Production deployment, performance auditing, documentation, team training, and ongoing support packages.",
      },
    ],
    differentiators: [
      {
        title: "Performance-First Architecture",
        description:
          "We build with Core Web Vitals, server-side rendering, and edge caching baked in — not as an afterthought.",
      },
      {
        title: "Code You Can Own",
        description:
          "Full source code ownership, clear documentation, and clean codebases that your in-house team can maintain and extend.",
      },
      {
        title: "Nigerian Market Expertise",
        description:
          "We understand local payment systems (Paystack, Flutterwave), connectivity constraints, and Nigerian user behaviour.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Vercel",
      "Supabase",
    ],
    faqs: [
      {
        question: "How much does a web application cost in Nigeria?",
        answer:
          "A basic business web app starts from ₦500,000. A full SaaS product with authentication, billing, and admin panels typically ranges from ₦1.5M–₦5M depending on complexity.",
      },
      {
        question: "How long does it take to build a product?",
        answer:
          "A simple web application takes 4–6 weeks. A full SaaS product typically takes 8–16 weeks. We provide a fixed timeline in our proposal after the discovery call.",
      },
      {
        question: "Do you build mobile apps?",
        answer:
          "Yes. We build cross-platform iOS and Android apps using React Native, ensuring a single codebase that performs natively on both platforms.",
      },
      {
        question: "Can you work with our existing codebase?",
        answer:
          "Yes. We conduct a code audit first, then work within your existing architecture or recommend a phased migration strategy if needed.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes. We offer retainer-based maintenance packages covering bug fixes, feature additions, security patches, and performance monitoring.",
      },
    ],
  },
  {
    slug: "cloud",
    title: "Cloud & DevOps",
    tagline: "Reliable infrastructure that scales without limits.",
    description:
      "We modernise your infrastructure with cloud-native architectures and automate your delivery pipelines. From cloud migration to full DevOps transformation — we eliminate deployment friction and maximise system reliability.",
    icon: Cloud,
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    gradientFrom: "from-cyan-500/20",
    stats: [
      { value: "60%", label: "Avg. Infrastructure Cost Reduction" },
      { value: "10x", label: "Deployment Frequency Improvement" },
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "<5min", label: "Mean Recovery Time" },
    ],
    items: [
      {
        name: "Cloud Infrastructure",
        description:
          "Design and provision of AWS, GCP, and Azure environments — VPCs, load balancers, auto-scaling groups, and managed databases.",
      },
      {
        name: "DevOps & CI/CD",
        description:
          "Automated build, test, and deployment pipelines using GitHub Actions, Jenkins, or CircleCI. Zero-downtime deployments as standard.",
      },
      {
        name: "Cloud Migration",
        description:
          "Lift-and-shift, re-platform, or full cloud-native refactoring of legacy on-premise systems with minimal downtime and risk.",
      },
      {
        name: "Serverless Architecture",
        description:
          "Event-driven, serverless systems using AWS Lambda, Vercel Edge Functions, or Cloudflare Workers — pay only for what you use.",
      },
      {
        name: "Monitoring & Observability",
        description:
          "Full-stack observability with Datadog, Grafana, or Prometheus — custom dashboards, alerting rules, and incident response runbooks.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Infrastructure Audit",
        description:
          "We assess your current setup, identify bottlenecks, security gaps, and cost inefficiencies, and produce a detailed remediation report.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "We design your target cloud architecture with IaC (Terraform/Pulumi), environment strategy, and disaster recovery planning.",
      },
      {
        step: 3,
        title: "Migration & Automation",
        description:
          "Phased migration with parallel environments, automated CI/CD pipeline setup, and infrastructure-as-code implementation.",
      },
      {
        step: 4,
        title: "Handover & Optimise",
        description:
          "Team training, runbook documentation, cost optimisation review, and ongoing managed services if required.",
      },
    ],
    differentiators: [
      {
        title: "IaC-First Approach",
        description:
          "All infrastructure is codified in Terraform or Pulumi — version-controlled, reproducible, and auditable by your team at any time.",
      },
      {
        title: "Security Built In",
        description:
          "We implement least-privilege IAM, secrets management, network segmentation, and compliance controls from the first sprint.",
      },
      {
        title: "Cost Transparency",
        description:
          "We set up cost monitoring and budget alerts so you always know what you're spending and where — no cloud bill surprises.",
      },
    ],
    techStack: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Grafana",
      "Datadog",
      "Cloudflare",
    ],
    faqs: [
      {
        question: "How much can cloud migration save our business?",
        answer:
          "Most clients see 30–60% infrastructure cost reductions after migration, through right-sizing, reserved instances, and eliminating on-premise hardware overhead.",
      },
      {
        question: "Do you support AWS, GCP, and Azure?",
        answer:
          "Yes. We are multi-cloud practitioners. We recommend the best cloud provider based on your workload, budget, and existing tooling — or design multi-cloud strategies when needed.",
      },
      {
        question: "What is IaC and why does it matter?",
        answer:
          "Infrastructure as Code (IaC) means your servers, networks, and services are defined in code files (Terraform/Pulumi) — making your infra reproducible, version-controlled, and disaster-recoverable.",
      },
      {
        question: "Can you help us achieve ISO 27001 or SOC 2 compliance?",
        answer:
          "Yes. We implement the technical controls required for ISO 27001, SOC 2, and NDPR compliance as part of our cloud engineering engagements.",
      },
    ],
  },
  {
    slug: "enterprise",
    title: "Enterprise Systems",
    tagline: "Integrate, automate, and scale your core operations.",
    description:
      "We bridge the gap between legacy systems and modern business workflows. From CRM and ERP implementation to full enterprise integration — we unify your data, automate your processes, and give every team a single source of truth.",
    icon: Database,
    accentColor: "text-zgreen-400",
    bgColor: "bg-zgreen-500/10",
    borderColor: "border-zgreen-500/20",
    gradientFrom: "from-zgreen-500/20",
    stats: [
      { value: "70%", label: "Manual Task Reduction" },
      { value: "3x", label: "Faster Reporting Cycles" },
      { value: "100%", label: "Data Integration Rate" },
      { value: "30+", label: "Enterprise Clients" },
    ],
    items: [
      {
        name: "CRM & ERP Solutions",
        description:
          "Implementation and customisation of Salesforce, HubSpot, SAP, and Odoo — configured for your specific team structures and sales processes.",
      },
      {
        name: "Enterprise Integration",
        description:
          "Connecting disparate systems (ERP, CRM, HRMS, accounting) via APIs, webhooks, and middleware — creating a unified operational backbone.",
      },
      {
        name: "Workflow Automation",
        description:
          "Automated approval chains, document generation, notification systems, and cross-departmental data flows using n8n, Zapier, or custom engines.",
      },
      {
        name: "Data Warehousing",
        description:
          "Centralised data repositories with ETL pipelines from all your operational systems into a single analytics-ready warehouse.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Business Process Mapping",
        description:
          "We document your current workflows, pain points, and data flows to design the optimal enterprise architecture.",
      },
      {
        step: 2,
        title: "System Selection & Design",
        description:
          "We recommend and configure the right CRM/ERP platform, design integration schemas, and plan data migration.",
      },
      {
        step: 3,
        title: "Implementation & Integration",
        description:
          "Phased rollout with parallel system operation, staff training, and real-time integration testing across all connected systems.",
      },
      {
        step: 4,
        title: "Go-Live & Optimise",
        description:
          "Production cutover, hypercare support period, performance tuning, and ongoing system administration.",
      },
    ],
    differentiators: [
      {
        title: "End-to-End Ownership",
        description:
          "We handle everything from vendor selection and licensing to implementation, training, and post-go-live support.",
      },
      {
        title: "Custom, Not Cookie-Cutter",
        description:
          "We configure enterprise systems to match your exact business logic — not the other way around.",
      },
      {
        title: "Nigerian Compliance Ready",
        description:
          "All implementations include NDPR data governance controls and localised reporting for Nigerian tax and regulatory requirements.",
      },
    ],
    techStack: [
      "Salesforce",
      "HubSpot",
      "SAP",
      "Odoo",
      "n8n",
      "Zapier",
      "PostgreSQL",
      "dbt",
      "Apache Kafka",
      "REST APIs",
    ],
    faqs: [
      {
        question: "How long does a CRM implementation take?",
        answer:
          "A standard CRM setup (HubSpot or Salesforce) typically takes 4–8 weeks. Complex ERP implementations with custom modules and data migration can take 3–6 months.",
      },
      {
        question: "Can you migrate our data from a legacy system?",
        answer:
          "Yes. We perform secure data extraction, cleansing, transformation, and migration with full audit trails and rollback capability.",
      },
      {
        question: "Do you support Odoo for Nigerian businesses?",
        answer:
          "Yes. We are Odoo implementation partners with experience configuring the platform for Nigerian accounting standards, payroll, and FIRS compliance.",
      },
      {
        question: "How do you handle change management?",
        answer:
          "We include structured user training, documentation, and a hypercare support period in all enterprise rollouts to maximise adoption.",
      },
    ],
  },
  {
    slug: "security",
    title: "Cybersecurity",
    tagline: "Protect your business before threats become breaches.",
    description:
      "We provide proactive, layered cybersecurity engineering for businesses that cannot afford a breach. From penetration testing and application security to identity management and compliance governance — we secure your entire attack surface.",
    icon: Shield,
    accentColor: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    gradientFrom: "from-red-500/20",
    stats: [
      { value: "Zero", label: "Client Breaches Post-Engagement" },
      { value: "200+", label: "Vulnerabilities Remediated" },
      { value: "48hr", label: "Incident Response SLA" },
      { value: "100%", label: "Compliance Audit Pass Rate" },
    ],
    items: [
      {
        name: "Application Security",
        description:
          "Secure code reviews, SAST/DAST scanning, dependency auditing, and security architecture design for web and mobile applications.",
      },
      {
        name: "Penetration Testing",
        description:
          "Ethical hacking engagements simulating real-world attackers — web app pentests, network pentests, and social engineering assessments.",
      },
      {
        name: "Identity & Access Management",
        description:
          "Zero-trust IAM design, SSO implementation, multi-factor authentication rollout, and privileged access management.",
      },
      {
        name: "Compliance & Governance",
        description:
          "NDPR, ISO 27001, SOC 2, and PCI-DSS compliance gap analysis, remediation roadmaps, and audit preparation support.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Security Assessment",
        description:
          "We map your attack surface, review your security posture, and identify vulnerabilities across people, processes, and technology.",
      },
      {
        step: 2,
        title: "Threat Modelling",
        description:
          "We model realistic threat scenarios for your industry and build a prioritised remediation backlog.",
      },
      {
        step: 3,
        title: "Hardening & Controls",
        description:
          "Implementation of technical controls: firewalls, WAF, encryption, secrets management, and endpoint protection.",
      },
      {
        step: 4,
        title: "Monitor & Respond",
        description:
          "24/7 SIEM monitoring, automated alerting, incident response playbooks, and quarterly security reviews.",
      },
    ],
    differentiators: [
      {
        title: "Proactive, Not Reactive",
        description:
          "We find your vulnerabilities before attackers do — with continuous scanning and quarterly red team exercises.",
      },
      {
        title: "Compliance-Linked Engineering",
        description:
          "Every security control we implement maps directly to a compliance framework requirement — giving you dual value.",
      },
      {
        title: "Clear, Actionable Reports",
        description:
          "Our pentest reports are written for both technical teams and C-suite — with CVSS scores, business impact ratings, and step-by-step fixes.",
      },
    ],
    techStack: [
      "Burp Suite",
      "OWASP ZAP",
      "Nmap",
      "Metasploit",
      "Wazuh",
      "Snyk",
      "HashiCorp Vault",
      "AWS Security Hub",
      "Okta",
      "CrowdStrike",
    ],
    faqs: [
      {
        question: "How often should we do a penetration test?",
        answer:
          "At minimum annually, and after any major infrastructure change or product launch. High-risk industries (fintech, healthcare) should conduct pentests every 6 months.",
      },
      {
        question: "What is the difference between a pentest and a vulnerability scan?",
        answer:
          "A vulnerability scan is automated and lists potential weaknesses. A penetration test involves skilled humans actively exploiting those weaknesses to demonstrate real-world impact and attack chains.",
      },
      {
        question: "Do you help with NDPR compliance in Nigeria?",
        answer:
          "Yes. We conduct NDPR gap assessments, implement required technical and organisational measures, and prepare the Data Protection Audit documentation required by NITDA.",
      },
      {
        question: "Can you help us respond to an active security incident?",
        answer:
          "Yes. We offer emergency incident response retainers. Contact us immediately at hello@zeplynk.com for active breach situations.",
      },
    ],
  },
  {
    slug: "data",
    title: "Data & Analytics",
    tagline: "Turn raw data into your sharpest competitive edge.",
    description:
      "We build high-speed data pipelines, centralised warehouses, and real-time dashboards that surface the insights your business needs to make decisions with confidence. From raw data chaos to a unified analytics platform — we own the full journey.",
    icon: BarChart3,
    accentColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    gradientFrom: "from-amber-500/20",
    stats: [
      { value: "5x", label: "Faster Reporting Speed" },
      { value: "100%", label: "Data Source Unification" },
      { value: "Real-Time", label: "Dashboard Refresh Rate" },
      { value: "TB+", label: "Data Processed Monthly" },
    ],
    items: [
      {
        name: "Business Intelligence",
        description:
          "Custom BI dashboards in Metabase, Power BI, or Looker — connecting every data source into one executive-ready reporting layer.",
      },
      {
        name: "Real-Time Dashboards",
        description:
          "Streaming analytics dashboards with sub-second refresh rates for operations, sales, and customer success teams.",
      },
      {
        name: "Big Data Engineering",
        description:
          "Scalable data pipelines handling millions of events daily using Apache Kafka, Spark, and dbt — on cloud or on-premise.",
      },
      {
        name: "Customer Analytics",
        description:
          "Cohort analysis, churn prediction, LTV modelling, and behavioural segmentation to drive retention and revenue growth.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Data Discovery",
        description:
          "We map all your data sources, assess data quality, and identify the key metrics that matter most to your business.",
      },
      {
        step: 2,
        title: "Pipeline Architecture",
        description:
          "We design ELT pipelines, schema modelling in the warehouse, and a data governance framework.",
      },
      {
        step: 3,
        title: "Build & Integrate",
        description:
          "We build and test all pipelines, connect data sources, and implement transformation layers with dbt.",
      },
      {
        step: 4,
        title: "Visualise & Train",
        description:
          "Dashboard delivery, metric definition documentation, and team training on self-serve analytics.",
      },
    ],
    differentiators: [
      {
        title: "Metrics That Matter",
        description:
          "We work with your leadership to define the right KPIs first — not just build pretty charts that nobody uses.",
      },
      {
        title: "Self-Serve Analytics",
        description:
          "We build platforms your team can actually use independently — with training and documentation included.",
      },
      {
        title: "Data Quality Obsession",
        description:
          "We implement automated data quality checks, freshness monitoring, and lineage tracking so you always trust your numbers.",
      },
    ],
    techStack: [
      "BigQuery",
      "Snowflake",
      "dbt",
      "Apache Kafka",
      "Apache Spark",
      "Metabase",
      "Power BI",
      "Looker",
      "Fivetran",
      "Airbyte",
    ],
    faqs: [
      {
        question: "What is a data warehouse and do we need one?",
        answer:
          "A data warehouse centralises data from all your apps (CRM, ERP, website, ads) into one place optimised for analysis. If you have more than 3 data sources and need cross-system reporting, you likely need one.",
      },
      {
        question: "How long does it take to build a BI dashboard?",
        answer:
          "A basic dashboard connected to 2–3 data sources typically takes 2–3 weeks. A full analytics platform with a data warehouse and multiple dashboards takes 6–10 weeks.",
      },
      {
        question: "Can you connect to our existing tools (Salesforce, Shopify, etc.)?",
        answer:
          "Yes. We use Fivetran, Airbyte, or custom connectors to pull data from 200+ sources including Salesforce, HubSpot, Shopify, Paystack, and more.",
      },
      {
        question: "Is our data secure in the warehouse?",
        answer:
          "All data warehouses we deploy include role-based access control, encryption at rest and in transit, and audit logging of all data access.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
