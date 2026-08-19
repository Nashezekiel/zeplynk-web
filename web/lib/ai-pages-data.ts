import {
  MessageCircle,
  Bot,
  Workflow,
  Compass,
  Sparkles,
  LucideIcon,
} from "lucide-react";

export interface AiPageStat {
  value: string;
  label: string;
}

export interface AiUseCase {
  name: string;
  description: string;
}

export interface AiProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface AiDifferentiator {
  title: string;
  description: string;
}

export interface AiFaq {
  question: string;
  answer: string;
}

export interface AiPage {
  slug: string;
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
  stats: AiPageStat[];
  useCases: AiUseCase[];
  process: AiProcessStep[];
  differentiators: AiDifferentiator[];
  integrations: string[];
  faqs: AiFaq[];
  relatedSlug: string;
  relatedLabel: string;
}

export const aiPages: AiPage[] = [
  {
    slug: "whatsapp-chatbots",
    title: "WhatsApp AI Chatbots",
    tagline: "24/7 customer support and sales on the channel Nigerians already use.",
    description:
      "Zeplynk builds AI-powered WhatsApp chatbots for Nigerian businesses — handling customer inquiries, order tracking, appointment booking, and lead qualification automatically, without losing the personal feel of a real conversation.",
    icon: MessageCircle,
    accentColor: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    gradientFrom: "from-green-500/20",
    metaTitle: "WhatsApp Chatbot Development Nigeria | AI WhatsApp Bots | Zeplynk",
    metaDescription:
      "Zeplynk builds AI-powered WhatsApp chatbots for Nigerian businesses — customer support, order tracking, and lead capture, live 24/7. Get a free consultation.",
    keywords: [
      "WhatsApp chatbot Nigeria",
      "WhatsApp AI chatbot Nigeria",
      "WhatsApp bot development Nigeria",
      "WhatsApp business automation Nigeria",
      "WhatsApp chatbot for business Nigeria",
      "AI customer service Nigeria",
    ],
    stats: [
      { value: "24/7", label: "Automated Response Coverage" },
      { value: "<5s", label: "Avg. First Response Time" },
      { value: "70%+", label: "Queries Resolved Without a Human" },
      { value: "1", label: "Number, Every Channel" },
    ],
    useCases: [
      { name: "Instant Customer Support", description: "Answer FAQs, pricing questions, and order status instantly, any time of day." },
      { name: "Order & Delivery Tracking", description: "Let customers check order status on WhatsApp without calling or emailing support." },
      { name: "Appointment & Booking Flows", description: "Automated scheduling for clinics, salons, and service businesses, synced to your calendar." },
      { name: "Lead Capture & Qualification", description: "Qualify inbound leads automatically and route hot leads straight to your sales team." },
    ],
    process: [
      { step: 1, title: "Conversation Mapping", description: "We map the real conversations your team has today — support tickets, sales chats, FAQs — into a bot flow." },
      { step: 2, title: "AI + Logic Design", description: "We combine structured flows with an LLM layer so the bot handles both scripted and open-ended questions." },
      { step: 3, title: "WhatsApp Business API Setup", description: "We configure your official WhatsApp Business number and connect it to the bot backend." },
      { step: 4, title: "Launch & Handoff Rules", description: "We define when the bot hands off to a human, and launch with monitoring in place." },
    ],
    differentiators: [
      { title: "Feels Like a Real Conversation", description: "LLM-powered responses, not rigid keyword menus — customers get real answers, not dead ends." },
      { title: "Built on the Official WhatsApp API", description: "No banned numbers or shaky unofficial integrations — we build on WhatsApp's official Business API." },
      { title: "Human Handoff Built In", description: "The bot knows when to step aside and route a conversation to your team." },
    ],
    integrations: ["WhatsApp Business API", "OpenAI", "Anthropic Claude", "n8n", "Google Calendar", "Paystack"],
    faqs: [
      { question: "Do I need a WhatsApp Business account already?", answer: "No, we help you set up or migrate to the official WhatsApp Business API as part of the build." },
      { question: "Can the chatbot handle orders and payments?", answer: "Yes, we can integrate order tracking and payment links directly into the WhatsApp conversation flow." },
      { question: "How much does a WhatsApp chatbot cost in Nigeria?", answer: "Pricing depends on complexity — a straightforward FAQ/support bot starts from ₦350,000, while a bot with order tracking, payments, and CRM integration ranges higher. We give a fixed quote after a scoping call." },
    ],
    relatedSlug: "ai-agents",
    relatedLabel: "Explore AI Agents",
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    tagline: "Custom AI chatbots for websites, apps, and internal tools.",
    description:
      "Zeplynk designs and builds custom AI chatbots for Nigerian businesses — from website support widgets to internal knowledge-base assistants — powered by production-grade LLM integrations, not generic plugin bots.",
    icon: Bot,
    accentColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    gradientFrom: "from-purple-500/20",
    metaTitle: "AI Chatbot Development Company Nigeria | Custom AI Chatbots | Zeplynk",
    metaDescription:
      "Zeplynk builds custom AI chatbots for Nigerian businesses — website support, internal tools, and product assistants powered by GPT and Claude. Get a quote.",
    keywords: [
      "AI chatbot development Nigeria",
      "AI chatbot company Nigeria",
      "chatbot development Nigeria",
      "custom AI chatbot Nigeria",
      "AI chatbot for business Nigeria",
      "conversational AI Nigeria",
    ],
    stats: [
      { value: "40+", label: "AI Systems Deployed" },
      { value: "98%", label: "Uptime SLA" },
      { value: "<2s", label: "Avg. Response Latency" },
      { value: "Custom", label: "Trained on Your Data" },
    ],
    useCases: [
      { name: "Website Support Widgets", description: "A chat widget trained on your docs, pricing, and policies that resolves support tickets before they're opened." },
      { name: "Internal Knowledge Assistants", description: "An internal chatbot your staff can ask instead of digging through shared drives and old emails." },
      { name: "Product & Sales Assistants", description: "A chatbot that helps prospects find the right product or service and pushes them toward checkout or booking." },
      { name: "Multi-Channel Deployment", description: "One chatbot brain deployed consistently across your website, WhatsApp, and internal tools." },
    ],
    process: [
      { step: 1, title: "Scope & Data Audit", description: "We identify what the chatbot needs to know and where that knowledge currently lives." },
      { step: 2, title: "Knowledge Base & RAG Setup", description: "We structure your data into a retrieval system so the bot answers accurately, not generically." },
      { step: 3, title: "Build & Guardrails", description: "We build the chatbot with clear guardrails so it stays on-topic and doesn't hallucinate answers." },
      { step: 4, title: "Deploy & Monitor", description: "We deploy across your chosen channels and set up logging to keep improving accuracy over time." },
    ],
    differentiators: [
      { title: "Trained on Your Business, Not Generic Data", description: "We build retrieval systems (RAG) so answers come from your actual docs and policies." },
      { title: "Production-Grade, Not a Demo", description: "Built to handle real traffic, edge cases, and failure modes — not a fragile proof of concept." },
      { title: "Model-Agnostic", description: "We work with OpenAI, Anthropic Claude, and open-source models — whichever fits your budget and requirements." },
    ],
    integrations: ["OpenAI", "Anthropic Claude", "LangChain", "Pinecone", "Python", "Next.js"],
    faqs: [
      { question: "Can the chatbot be trained on our own documents and policies?", answer: "Yes — we build retrieval-augmented (RAG) systems so the chatbot answers from your actual content, not generic knowledge." },
      { question: "Will the chatbot ever give wrong or made-up answers?", answer: "We design guardrails and fallback rules to minimize this, including escalation to a human when the bot isn't confident." },
      { question: "Can you add the chatbot to our existing website?", answer: "Yes, we integrate the chatbot as a widget into any existing website or web application." },
    ],
    relatedSlug: "whatsapp-chatbots",
    relatedLabel: "Explore WhatsApp Chatbots",
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    tagline: "Autonomous systems that execute multi-step business tasks.",
    description:
      "Zeplynk builds AI agents that go beyond chat — autonomous systems that research, decide, and take action across your tools: qualifying leads, processing documents, and executing multi-step workflows without constant human oversight.",
    icon: Sparkles,
    accentColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    gradientFrom: "from-indigo-500/20",
    metaTitle: "AI Agent Development Nigeria | Autonomous AI Agents | Zeplynk",
    metaDescription:
      "Zeplynk builds AI agents for Nigerian businesses — autonomous systems that qualify leads, process documents, and execute multi-step workflows. Book a call.",
    keywords: [
      "AI agents Nigeria",
      "AI agent development Nigeria",
      "AI agent development company Nigeria",
      "autonomous AI agents Nigeria",
      "AI automation agency Nigeria",
    ],
    stats: [
      { value: "10x", label: "Process Speed Gain" },
      { value: "24/7", label: "Autonomous Operation" },
      { value: "Multi-step", label: "Task Execution" },
      { value: "Full", label: "Audit Trail Logging" },
    ],
    useCases: [
      { name: "Lead Research & Qualification", description: "An agent that researches inbound leads, scores them, and drafts a first outreach message." },
      { name: "Document Processing Agents", description: "Agents that extract, validate, and file data from invoices, contracts, and forms automatically." },
      { name: "Recruitment Screening Agents", description: "An agent that reviews CVs against a role's criteria and produces a ranked shortlist." },
      { name: "Ops & Reporting Agents", description: "Agents that pull data from multiple systems and compile recurring reports without manual work." },
    ],
    process: [
      { step: 1, title: "Task Decomposition", description: "We break down the multi-step task into the decisions and actions an agent needs to handle." },
      { step: 2, title: "Tool & Access Design", description: "We define exactly which systems and data the agent is allowed to touch, and how." },
      { step: 3, title: "Build & Guardrail Testing", description: "We build the agent and stress-test it against edge cases before it touches real data." },
      { step: 4, title: "Deploy & Human Oversight", description: "We deploy with logging and approval checkpoints so you retain control over consequential actions." },
    ],
    differentiators: [
      { title: "Action, Not Just Conversation", description: "Our agents connect to your real tools and take real actions — not just answer questions." },
      { title: "Guardrails by Design", description: "Every agent has clear boundaries on what it can and can't do autonomously." },
      { title: "Full Observability", description: "Every decision and action an agent takes is logged, so you can audit exactly what happened." },
    ],
    integrations: ["OpenAI", "Anthropic Claude", "LangChain", "n8n", "Python", "PostgreSQL"],
    faqs: [
      { question: "What's the difference between an AI agent and a chatbot?", answer: "A chatbot answers questions in conversation. An AI agent takes multi-step action — researching, deciding, and executing tasks across your systems with minimal human input." },
      { question: "Is it safe to let an AI agent take actions on our systems?", answer: "We design explicit guardrails and approval checkpoints for consequential actions, and log every decision the agent makes for full auditability." },
      { question: "What business processes are good candidates for an AI agent?", answer: "Repetitive, multi-step processes with clear rules — lead qualification, document processing, and recurring reporting are common starting points." },
    ],
    relatedSlug: "workflow-automation",
    relatedLabel: "Explore Workflow Automation",
  },
  {
    slug: "workflow-automation",
    title: "Workflow & Business Automation",
    tagline: "Connect your tools and eliminate repetitive manual work.",
    description:
      "Zeplynk designs workflow automation systems that connect your CRM, payment tools, spreadsheets, and communication channels — removing the manual copy-paste work that slows Nigerian teams down.",
    icon: Workflow,
    accentColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    gradientFrom: "from-orange-500/20",
    metaTitle: "Business Automation & Workflow Automation Nigeria | Zeplynk",
    metaDescription:
      "Zeplynk builds workflow and business automation systems for Nigerian companies — connecting CRMs, payments, and tools to eliminate manual work. Talk to us.",
    keywords: [
      "business automation Nigeria",
      "workflow automation Nigeria",
      "intelligent automation Nigeria",
      "process automation Nigeria",
      "automation agency Nigeria",
      "n8n automation Nigeria",
    ],
    stats: [
      { value: "70%", label: "Manual Task Reduction" },
      { value: "10x", label: "Faster Process Cycles" },
      { value: "Zero", label: "Copy-Paste Between Tools" },
      { value: "24/7", label: "Always-On Workflows" },
    ],
    useCases: [
      { name: "CRM & Sales Automation", description: "New leads automatically logged, scored, and assigned — no manual data entry." },
      { name: "Finance & Invoicing Flows", description: "Automated invoice generation, payment reminders, and reconciliation across payment gateways." },
      { name: "Cross-Tool Data Sync", description: "Keep your CRM, spreadsheets, and communication tools in sync automatically, in real time." },
      { name: "Notification & Alert Systems", description: "Automated Slack/WhatsApp/email alerts when key business events happen." },
    ],
    process: [
      { step: 1, title: "Process Audit", description: "We map your team's current manual workflows to find where automation pays off fastest." },
      { step: 2, title: "Automation Design", description: "We design the trigger-action logic connecting your existing tools." },
      { step: 3, title: "Build & Integrate", description: "We build the automation using tools like n8n and custom scripts, connected to your live systems." },
      { step: 4, title: "Monitor & Refine", description: "We monitor early runs and refine edge cases before handing off a stable, self-running system." },
    ],
    differentiators: [
      { title: "Fits Your Existing Tools", description: "We automate around the tools you already use — no forced migration to a new platform." },
      { title: "ROI-First Prioritization", description: "We start with the automations that save the most time, not the flashiest ones." },
      { title: "Built to Fail Gracefully", description: "Error handling and alerts are part of every workflow, so failures get caught, not buried." },
    ],
    integrations: ["n8n", "Zapier", "HubSpot", "Paystack", "Flutterwave", "Google Workspace", "Slack"],
    faqs: [
      { question: "What business processes should we automate first?", answer: "Start with high-frequency, rule-based tasks — data entry, notifications, and reporting are usually the fastest wins." },
      { question: "Do we need to replace our current tools to automate?", answer: "No, most automation connects your existing tools rather than replacing them." },
      { question: "How long does a typical automation project take?", answer: "A focused automation (e.g. lead-to-CRM sync) can be live in 1-2 weeks; multi-system workflows typically take 3-6 weeks." },
    ],
    relatedSlug: "ai-agents",
    relatedLabel: "Explore AI Agents",
  },
  {
    slug: "ai-consulting",
    title: "AI Strategy & Consulting",
    tagline: "A clear, practical roadmap for adopting AI in your business.",
    description:
      "Zeplynk's AI consulting service helps Nigerian businesses cut through the hype — auditing your operations, identifying where AI actually creates ROI, and building a realistic adoption roadmap.",
    icon: Compass,
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    gradientFrom: "from-cyan-500/20",
    metaTitle: "AI Consulting Nigeria | AI Strategy & Readiness Audit | Zeplynk",
    metaDescription:
      "Zeplynk provides AI consulting and strategy for Nigerian businesses — readiness audits, use-case identification, and practical adoption roadmaps. Book a call.",
    keywords: [
      "AI consulting Nigeria",
      "AI consultant Nigeria",
      "AI strategy Nigeria",
      "AI readiness audit Nigeria",
      "AI adoption Nigeria",
      "generative AI consulting Nigeria",
    ],
    stats: [
      { value: "40+", label: "AI Roadmaps Delivered" },
      { value: "2wk", label: "Typical Audit Turnaround" },
      { value: "ROI-First", label: "Use-Case Prioritization" },
      { value: "Vendor-Neutral", label: "Recommendations" },
    ],
    useCases: [
      { name: "AI Readiness Audits", description: "An honest assessment of where your data, processes, and team are ready for AI — and where they aren't yet." },
      { name: "Use-Case Prioritization", description: "A ranked list of AI opportunities scored by effort and expected ROI, not just what's trendy." },
      { name: "Build vs. Buy Guidance", description: "Clear recommendations on when to buy an existing AI tool versus build something custom." },
      { name: "Team AI Enablement", description: "Practical training so your team can use AI tools effectively day-to-day." },
    ],
    process: [
      { step: 1, title: "Discovery Sessions", description: "We interview key stakeholders to understand current processes and pain points." },
      { step: 2, title: "Data & Systems Audit", description: "We assess your data quality and existing systems for AI readiness." },
      { step: 3, title: "Roadmap Development", description: "We prioritize AI use cases by ROI and build a phased adoption plan." },
      { step: 4, title: "Implementation Support", description: "We stay engaged through the first build phase so the roadmap doesn't sit on a shelf." },
    ],
    differentiators: [
      { title: "We Also Build", description: "Unlike pure strategy firms, we implement — so our recommendations are grounded in what's actually buildable." },
      { title: "No Hype, No Vendor Lock-In", description: "Vendor-neutral advice focused on ROI, not pushing a particular AI platform." },
      { title: "Africa-Context Recommendations", description: "Roadmaps that account for local infrastructure, data costs, and team capacity." },
    ],
    integrations: ["OpenAI", "Anthropic Claude", "Google Cloud AI", "AWS Bedrock", "n8n"],
    faqs: [
      { question: "We don't have clean data — can we still start with AI?", answer: "Yes. Many engagements start with a light data cleanup phase as part of the roadmap; you don't need perfect data to begin." },
      { question: "How long does an AI readiness audit take?", answer: "A standard audit takes about 2 weeks, culminating in a prioritized roadmap presentation." },
      { question: "Do you only give recommendations, or do you also build?", answer: "Both — we can hand off the roadmap for your team to execute, or continue as the implementation partner." },
    ],
    relatedSlug: "ai-chatbot-development",
    relatedLabel: "Explore AI Chatbot Development",
  },
];

export function getAiPageBySlug(slug: string): AiPage | undefined {
  return aiPages.find((p) => p.slug === slug);
}
