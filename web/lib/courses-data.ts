import {
  Layout,
  Globe,
  Smartphone,
  Database,
  Bot,
  Cloud,
  Terminal,
  Shield,
  BarChart3,
  PenTool,
  Briefcase,
  Server,
  LucideIcon,
} from "lucide-react";

export interface CourseStat {
  value: string;
  label: string;
}

export interface CourseModule {
  title: string;
  description: string;
}

export interface CourseDifferentiator {
  title: string;
  description: string;
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface Course {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  duration: string;
  format: string;
  level: string;
  price: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  gradientFrom: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  stats: CourseStat[];
  whoFor: string[];
  curriculum: CourseModule[];
  outcomes: string[];
  differentiators: CourseDifferentiator[];
  techStack: string[];
  faqs: CourseFaq[];
}

export const courses: Course[] = [
  {
    slug: "frontend-engineering",
    category: "Software Development",
    title: "Frontend Engineering",
    tagline: "Build production-grade interfaces with React and Next.js.",
    description:
      "A hands-on frontend development course covering HTML, CSS, JavaScript, React, and Next.js. Students build and ship real, deployed web applications — not just static exercises.",
    icon: Layout,
    image: "/Service Images/web.jpeg",
    duration: "12 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Beginner to Job-Ready",
    price: "₦250,000 – ₦450,000",
    accentColor: "text-zgreen-400",
    bgColor: "bg-zgreen-500/10",
    borderColor: "border-zgreen-500/20",
    gradientFrom: "from-zgreen-500/20",
    metaTitle: "Frontend Development Course Nigeria | React & Next.js | Zeplynk Academy",
    metaDescription:
      "Learn frontend development in Nigeria — HTML, CSS, JavaScript, React, and Next.js. 12-week job-ready bootcamp at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "frontend development course Nigeria",
      "frontend development training Nigeria",
      "React course Nigeria",
      "JavaScript course Nigeria",
      "web development course Nigeria",
      "learn frontend development Nigeria",
      "Next.js course Nigeria",
      "HTML CSS JavaScript course Nigeria",
    ],
    stats: [
      { value: "12wk", label: "Course Duration" },
      { value: "300+", label: "Frontend Devs Trained" },
      { value: "85%", label: "Placement Rate" },
      { value: "0", label: "Prior Experience Required" },
    ],
    whoFor: [
      "Complete beginners who want a job-ready frontend skillset",
      "Backend developers who want to add UI engineering to their toolkit",
      "Designers who want to build the interfaces they design",
      "Career switchers targeting frontend/web developer roles",
    ],
    curriculum: [
      { title: "Web Fundamentals", description: "HTML5, CSS3, responsive layout, and semantic markup." },
      { title: "Modern JavaScript", description: "ES6+, the DOM, async/await, and browser APIs." },
      { title: "React", description: "Components, hooks, state management, and component architecture." },
      { title: "Next.js", description: "Routing, server components, data fetching, and deployment." },
      { title: "Styling at Scale", description: "Tailwind CSS and component design systems." },
      { title: "Capstone Project", description: "Build and deploy a full production web application from scratch." },
    ],
    outcomes: [
      "Build and deploy production React/Next.js applications",
      "Work confidently in a professional frontend codebase",
      "Portfolio of 3+ shipped projects, including a capstone",
      "Ready for junior/mid frontend developer roles",
    ],
    differentiators: [
      { title: "Project-First, Not Lecture-First", description: "You're writing and shipping code from week one, not just watching slides." },
      { title: "Senior Engineer Mentorship", description: "Direct code review and mentorship from engineers who build production software daily." },
      { title: "Real Deployment Experience", description: "Every project is deployed live — you graduate with a public portfolio, not just certificates." },
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git"],
    faqs: [
      { question: "Do I need coding experience to join this course?", answer: "No. The course starts from web fundamentals and requires no prior coding experience." },
      { question: "Is the frontend course available online?", answer: "Yes, the course runs onsite in Kaduna and online across Nigeria, taught live in both formats." },
      { question: "Will I have a portfolio by the end of the course?", answer: "Yes. You'll deploy multiple projects during the course and finish with a capstone project for your portfolio." },
    ],
  },
  {
    slug: "backend-development",
    category: "Software Development",
    title: "Backend Development",
    tagline: "Node.js, Python, and database engineering for scalable systems.",
    description:
      "A practical backend engineering course covering server-side architecture, APIs, and databases. Students build authenticated, database-backed APIs that mirror real production systems.",
    icon: Server,
    image: "/Service Images/Backend.jpeg",
    duration: "12 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Beginner to Job-Ready",
    price: "₦250,000 – ₦450,000",
    accentColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    gradientFrom: "from-orange-500/20",
    metaTitle: "Backend Development Course Nigeria | Node.js & Python | Zeplynk Academy",
    metaDescription:
      "Learn backend development in Nigeria — Node.js, Python, PostgreSQL, and API design. 12-week job-ready bootcamp at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "backend development course Nigeria",
      "backend development training Nigeria",
      "Node.js course Nigeria",
      "Python course Nigeria",
      "SQL course Nigeria",
      "learn backend development Nigeria",
      "API development course Nigeria",
    ],
    stats: [
      { value: "12wk", label: "Course Duration" },
      { value: "250+", label: "Backend Devs Trained" },
      { value: "85%", label: "Placement Rate" },
      { value: "0", label: "Prior Experience Required" },
    ],
    whoFor: [
      "Beginners targeting backend or full-stack developer roles",
      "Frontend developers who want to own the full stack",
      "IT professionals moving into software engineering",
      "Founders who need to understand their own product's backend",
    ],
    curriculum: [
      { title: "Programming Foundations", description: "Core programming logic in JavaScript and Python." },
      { title: "Node.js & Express", description: "Building RESTful APIs and server-side application logic." },
      { title: "Databases", description: "Relational design with PostgreSQL, plus NoSQL fundamentals." },
      { title: "Authentication & Security", description: "Auth flows, password handling, and API security basics." },
      { title: "APIs & Integrations", description: "REST design, third-party integrations, and documentation." },
      { title: "Capstone Project", description: "Build and deploy a full backend API powering a real application." },
    ],
    outcomes: [
      "Design and build secure, database-backed REST APIs",
      "Work confidently with SQL and relational data modeling",
      "Deploy and manage a live backend service",
      "Ready for junior/mid backend developer roles",
    ],
    differentiators: [
      { title: "Production-Pattern Curriculum", description: "You learn the patterns used in real, live systems — not toy examples." },
      { title: "Senior Engineer Mentorship", description: "Code review and architecture guidance from engineers who ship backend systems for clients." },
      { title: "Database-Deep Focus", description: "Heavy emphasis on database design — the skill most bootcamps skip." },
    ],
    techStack: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Git", "Postman"],
    faqs: [
      { question: "Do I need to know frontend development first?", answer: "No, this course is self-contained and starts from programming fundamentals." },
      { question: "Which languages does the backend course cover?", answer: "You'll work primarily in JavaScript (Node.js) with Python fundamentals also covered." },
      { question: "Can I combine this with the frontend course?", answer: "Yes — many students combine both courses, or enroll directly in the Full Stack Development program." },
    ],
  },
  {
    slug: "full-stack-development",
    category: "Software Development",
    title: "Full Stack Development",
    tagline: "End-to-end web engineering — frontend, backend, and deployment.",
    description:
      "Our flagship full-stack bootcamp combines frontend and backend engineering into one intensive program, taking students from fundamentals to deploying complete, production-ready applications.",
    icon: Globe,
    image: "/Service Images/web.jpeg",
    duration: "24 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Beginner to Job-Ready",
    price: "₦450,000 – ₦850,000",
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    gradientFrom: "from-cyan-500/20",
    metaTitle: "Full Stack Web Development Course Nigeria | Zeplynk Academy",
    metaDescription:
      "Zeplynk Academy's full-stack development bootcamp in Kaduna — MERN stack, Next.js, and databases. 24-week job-ready program, onsite and online.",
    keywords: [
      "full stack development course Nigeria",
      "full stack web development course Nigeria",
      "full stack development training Nigeria",
      "coding bootcamp Nigeria",
      "coding bootcamp Kaduna",
      "MERN stack course Nigeria",
      "web development bootcamp Nigeria",
    ],
    stats: [
      { value: "24wk", label: "Course Duration" },
      { value: "400+", label: "Full-Stack Devs Trained" },
      { value: "85%", label: "Placement Rate" },
      { value: "10+", label: "Projects Shipped" },
    ],
    whoFor: [
      "Career switchers who want the most complete path into software engineering",
      "Founders who want to build and maintain their own product",
      "Students seeking the strongest possible job-readiness outcome",
      "Anyone who wants to own a project from database to deployed UI",
    ],
    curriculum: [
      { title: "Frontend Foundations", description: "HTML, CSS, JavaScript, and React fundamentals." },
      { title: "Backend Foundations", description: "Node.js, Express, and RESTful API design." },
      { title: "Databases", description: "PostgreSQL and MongoDB — schema design and querying." },
      { title: "Next.js & Full-Stack Architecture", description: "Connecting frontend and backend in one cohesive application." },
      { title: "Auth, Payments & Deployment", description: "Authentication, Paystack/Flutterwave integration, and cloud deployment." },
      { title: "Capstone Project", description: "Design, build, and deploy a complete production application solo or in a team." },
    ],
    outcomes: [
      "Build complete applications end-to-end, from database to UI",
      "Deploy and maintain live, production applications",
      "Portfolio of 10+ projects including a full capstone build",
      "Ready for junior/mid full-stack developer roles",
    ],
    differentiators: [
      { title: "The Most Complete Track", description: "Covers everything the standalone frontend and backend courses cover, plus integration and deployment." },
      { title: "Team Project Experience", description: "A group capstone that mirrors how real engineering teams collaborate." },
      { title: "Direct Hiring Partner Network", description: "Graduates are introduced to Zeplynk's hiring partner network for placement support." },
    ],
    techStack: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS", "Git"],
    faqs: [
      { question: "How is this different from taking the frontend and backend courses separately?", answer: "The full-stack track integrates both into one continuous curriculum with a unified capstone, and includes deployment, auth, and payments that the standalone courses don't cover in depth." },
      { question: "How long is the full-stack bootcamp?", answer: "24 weeks, delivered onsite in Kaduna or live online." },
      { question: "What's the placement support like?", answer: "Resume reviews, interview prep, and introductions to Zeplynk's hiring partner network are included for all graduates." },
    ],
  },
  {
    slug: "mobile-app-development",
    category: "Software Development",
    title: "Mobile App Development",
    tagline: "Build cross-platform iOS & Android apps with React Native and Flutter.",
    description:
      "A hands-on mobile development course teaching cross-platform app engineering with React Native and Flutter, including offline-first patterns built for African network conditions.",
    icon: Smartphone,
    image: "/Service Images/andriod.png",
    duration: "16 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Beginner to Job-Ready",
    price: "₦300,000 – ₦550,000",
    accentColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    gradientFrom: "from-blue-500/20",
    metaTitle: "Mobile App Development Course Nigeria | React Native & Flutter | Zeplynk Academy",
    metaDescription:
      "Learn mobile app development in Nigeria — React Native and Flutter. 16-week job-ready bootcamp at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "mobile app development course Nigeria",
      "React Native course Nigeria",
      "Flutter course Nigeria",
      "learn mobile app development Nigeria",
      "app development training Nigeria",
    ],
    stats: [
      { value: "16wk", label: "Course Duration" },
      { value: "120+", label: "Mobile Devs Trained" },
      { value: "80%", label: "Placement Rate" },
      { value: "2", label: "Frameworks Covered" },
    ],
    whoFor: [
      "Web developers expanding into mobile",
      "Beginners targeting mobile developer roles",
      "Founders building their own mobile product",
      "Backend developers who want full-stack mobile skills",
    ],
    curriculum: [
      { title: "Mobile Fundamentals", description: "Mobile UX principles, navigation patterns, and platform guidelines." },
      { title: "React Native", description: "Cross-platform app development with a shared JavaScript codebase." },
      { title: "Flutter Fundamentals", description: "Dart basics and Flutter widget architecture." },
      { title: "Offline-First & Local Storage", description: "Local databases and sync patterns for unreliable networks." },
      { title: "Native Integrations", description: "Push notifications, camera, location, and payment gateway APIs." },
      { title: "App Store Submission", description: "Building, testing, and submitting to the Play Store and App Store." },
    ],
    outcomes: [
      "Build and ship a cross-platform mobile app",
      "Understand offline-first architecture for low-connectivity environments",
      "Navigate the App Store and Play Store submission process",
      "Ready for junior/mid mobile developer roles",
    ],
    differentiators: [
      { title: "Built for African Network Realities", description: "Offline-first and low-bandwidth patterns taught as standard, not an afterthought." },
      { title: "Two Frameworks, One Course", description: "Exposure to both React Native and Flutter so graduates aren't locked into one ecosystem." },
      { title: "Real Store Submission Experience", description: "Students go through the actual app store submission process, not just local builds." },
    ],
    techStack: ["React Native", "Flutter", "Firebase", "SQLite", "Git"],
    faqs: [
      { question: "Should I learn React Native or Flutter?", answer: "The course covers both, so you can decide which ecosystem fits your goals — most web developers gravitate to React Native." },
      { question: "Do I need prior JavaScript experience?", answer: "Basic JavaScript or programming familiarity helps, but the course covers the fundamentals needed to keep up." },
      { question: "Will I publish an app to the App Store or Play Store?", answer: "You'll go through the full submission process as part of the capstone project." },
    ],
  },
  {
    slug: "data-analytics",
    category: "Data & AI",
    title: "Data Analytics",
    tagline: "Turn raw data into business decisions with SQL, Python, and Power BI.",
    description:
      "A practical data analytics course covering Excel, SQL, Python, and Power BI — teaching students to clean, analyze, and visualize real business data.",
    icon: BarChart3,
    image: "/Service Images/Data Analytics.jpeg",
    duration: "10 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Beginner to Job-Ready",
    price: "₦200,000 – ₦380,000",
    accentColor: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    gradientFrom: "from-teal-500/20",
    metaTitle: "Data Analytics Course Nigeria | SQL, Excel & Power BI | Zeplynk Academy",
    metaDescription:
      "Learn data analytics in Nigeria — Excel, SQL, Python, and Power BI. 10-week job-ready course at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "data analytics course Nigeria",
      "SQL course Nigeria",
      "Excel course Nigeria",
      "Power BI course Nigeria",
      "learn data analytics Nigeria",
      "data analyst training Nigeria",
    ],
    stats: [
      { value: "10wk", label: "Course Duration" },
      { value: "180+", label: "Analysts Trained" },
      { value: "80%", label: "Placement Rate" },
      { value: "0", label: "Prior Experience Required" },
    ],
    whoFor: [
      "Beginners targeting data analyst roles",
      "Finance, operations, and admin professionals upskilling",
      "Business owners who want to read their own data",
      "Career switchers moving into data-driven roles",
    ],
    curriculum: [
      { title: "Excel for Analysis", description: "Advanced formulas, pivot tables, and data cleaning in Excel." },
      { title: "SQL Fundamentals", description: "Querying, joins, and aggregations across relational databases." },
      { title: "Python for Data", description: "Pandas and NumPy for data manipulation and analysis." },
      { title: "Data Visualization", description: "Power BI dashboards and storytelling with data." },
      { title: "Statistics Basics", description: "Descriptive statistics and business metrics that matter." },
      { title: "Capstone Project", description: "End-to-end analysis of a real dataset, presented as a business report." },
    ],
    outcomes: [
      "Query and analyze data confidently with SQL",
      "Build interactive dashboards in Power BI",
      "Clean and transform messy real-world datasets",
      "Ready for junior/mid data analyst roles",
    ],
    differentiators: [
      { title: "Business-Outcome Focused", description: "Every module ties back to a business decision, not just technical skill for its own sake." },
      { title: "Real Datasets", description: "You work with real, messy business data — not clean textbook examples." },
      { title: "Fast, Focused Track", description: "10 weeks to a job-ready, portfolio-backed skillset." },
    ],
    techStack: ["Excel", "SQL", "Python", "Pandas", "Power BI"],
    faqs: [
      { question: "Do I need a math or statistics background?", answer: "No, the course teaches the statistics you need as part of the curriculum." },
      { question: "Is this course useful if I already use Excel at work?", answer: "Yes — most students already use Excel and this course takes that further into SQL, Python, and dashboarding." },
      { question: "What roles can I apply for after this course?", answer: "Graduates typically target data analyst, business analyst, and reporting analyst roles." },
    ],
  },
  {
    slug: "data-science",
    category: "Data & AI",
    title: "Data Science",
    tagline: "Python, statistics, and machine learning fundamentals for real problems.",
    description:
      "A rigorous data science course covering Python, statistical analysis, and machine learning fundamentals, applied to real Nigerian business and industry datasets.",
    icon: Database,
    image: "/Service Images/Data Analytics.jpeg",
    duration: "16 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Intermediate",
    price: "₦350,000 – ₦600,000",
    accentColor: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    gradientFrom: "from-teal-500/20",
    metaTitle: "Data Science Course Nigeria | Python & Machine Learning | Zeplynk Academy",
    metaDescription:
      "Learn data science in Nigeria — Python, Pandas, and machine learning fundamentals. 16-week course at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "data science course Nigeria",
      "machine learning course Nigeria",
      "Python data science Nigeria",
      "learn data science Nigeria",
      "data scientist training Nigeria",
    ],
    stats: [
      { value: "16wk", label: "Course Duration" },
      { value: "90+", label: "Data Scientists Trained" },
      { value: "75%", label: "Placement Rate" },
      { value: "5+", label: "ML Projects Built" },
    ],
    whoFor: [
      "Data analysts progressing into machine learning",
      "Developers moving into data science roles",
      "STEM graduates targeting data science careers",
      "Professionals with basic Python experience",
    ],
    curriculum: [
      { title: "Python for Data Science", description: "Pandas, NumPy, and data wrangling at scale." },
      { title: "Statistics & Probability", description: "The statistical foundations behind machine learning models." },
      { title: "Machine Learning Basics", description: "Regression, classification, and model evaluation with scikit-learn." },
      { title: "Data Visualization", description: "Matplotlib, Seaborn, and communicating model results." },
      { title: "Model Deployment Basics", description: "Packaging and serving a trained model via a simple API." },
      { title: "Capstone Project", description: "A full ML project from raw data to a working prediction model." },
    ],
    outcomes: [
      "Build and evaluate machine learning models in Python",
      "Apply statistical thinking to real business problems",
      "Communicate data science results to non-technical stakeholders",
      "Ready for junior data scientist or ML-adjacent roles",
    ],
    differentiators: [
      { title: "Applied, Not Theoretical", description: "Every model is trained on a real dataset with a real business question attached." },
      { title: "Deployment-Aware Curriculum", description: "Students learn to ship a model, not just train one in a notebook." },
      { title: "Small Cohort Mentorship", description: "Direct access to instructors for the harder statistical and modeling concepts." },
    ],
    techStack: ["Python", "Pandas", "NumPy", "scikit-learn", "Jupyter", "Matplotlib"],
    faqs: [
      { question: "Do I need to take Data Analytics before Data Science?", answer: "It's not required, but basic Python or SQL familiarity is strongly recommended before joining." },
      { question: "Does this course cover deep learning?", answer: "The core course focuses on classical machine learning; deep learning is covered at an introductory level with pointers for further specialization." },
      { question: "Is this course beginner-friendly?", answer: "It's intermediate-level — some prior programming exposure will help you keep pace." },
    ],
  },
  {
    slug: "ai-engineering",
    category: "Data & AI",
    title: "AI Engineering",
    tagline: "Build production LLM applications, agents, and prompt systems.",
    description:
      "Zeplynk Academy's AI Engineering course teaches students to build real, production-grade AI applications — LLM integrations, RAG systems, and autonomous agents — not just prompt experiments.",
    icon: Bot,
    image: "/Service Images/AI.jpeg",
    duration: "12 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Intermediate",
    price: "₦300,000 – ₦550,000",
    accentColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    gradientFrom: "from-purple-500/20",
    metaTitle: "AI Engineering Course Nigeria | LLMs, Agents & Prompt Engineering | Zeplynk Academy",
    metaDescription:
      "Learn AI engineering in Nigeria — LLM integration, RAG, and AI agent development. 12-week course at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "AI course Nigeria",
      "AI training Kaduna",
      "AI engineering course Nigeria",
      "prompt engineering course Nigeria",
      "learn AI Nigeria",
      "machine learning training Nigeria",
      "AI agents course Nigeria",
    ],
    stats: [
      { value: "12wk", label: "Course Duration" },
      { value: "60+", label: "AI Engineers Trained" },
      { value: "75%", label: "Placement Rate" },
      { value: "3+", label: "AI Apps Shipped" },
    ],
    whoFor: [
      "Developers who want to specialize in applied AI",
      "Backend engineers adding LLM integration skills",
      "Founders building AI features into their product",
      "Data professionals moving into applied AI engineering",
    ],
    curriculum: [
      { title: "LLM Fundamentals", description: "How large language models work, and how to use them reliably in software." },
      { title: "Prompt Engineering", description: "Structured prompting techniques for consistent, production-quality output." },
      { title: "RAG Systems", description: "Retrieval-augmented generation with vector databases like Pinecone." },
      { title: "AI Agents", description: "Building autonomous agents that execute multi-step tasks." },
      { title: "Chatbot & WhatsApp Integration", description: "Connecting AI systems to WhatsApp and web chat interfaces." },
      { title: "Capstone Project", description: "Design and ship a working AI product — agent, chatbot, or RAG application." },
    ],
    outcomes: [
      "Build and deploy production LLM-powered applications",
      "Design RAG pipelines using vector databases",
      "Build autonomous AI agents for real workflows",
      "Ready for AI engineer or applied-AI developer roles",
    ],
    differentiators: [
      { title: "Production, Not Demos", description: "Built by engineers who deploy AI systems for paying clients — the course reflects what actually ships." },
      { title: "Africa-Context AI", description: "Prompting and use cases grounded in Nigerian business problems, not generic examples." },
      { title: "WhatsApp-First Integration", description: "Direct focus on the channel Nigerian businesses actually use to reach customers." },
    ],
    techStack: ["OpenAI", "Anthropic Claude", "LangChain", "Python", "Pinecone", "n8n"],
    faqs: [
      { question: "Do I need a machine learning background for this course?", answer: "No, this is applied AI engineering — using existing models via APIs, not training models from scratch. Basic programming experience is enough." },
      { question: "Will this course teach me to build a WhatsApp AI chatbot?", answer: "Yes, WhatsApp and web chatbot integration is a core module." },
      { question: "Is this different from the Data Science course?", answer: "Yes — Data Science focuses on statistical modeling, while AI Engineering focuses on building applications with existing LLMs and AI agents." },
    ],
  },
  {
    slug: "cloud-computing",
    category: "Cloud & DevOps",
    title: "Cloud Computing",
    tagline: "AWS and Azure fundamentals for real infrastructure.",
    description:
      "A hands-on cloud computing course covering AWS and Azure fundamentals — compute, storage, networking, and security — for students who want to run and manage real cloud infrastructure.",
    icon: Cloud,
    image: "/Service Images/Digitalization.jpeg",
    duration: "12 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Beginner to Intermediate",
    price: "₦250,000 – ₦450,000",
    accentColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    gradientFrom: "from-sky-500/20",
    metaTitle: "Cloud Computing Course Nigeria | AWS & Azure | Zeplynk Academy",
    metaDescription:
      "Learn cloud computing in Nigeria — AWS and Azure fundamentals. 12-week course at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "cloud computing course Nigeria",
      "AWS course Nigeria",
      "Azure course Nigeria",
      "cloud training Nigeria",
      "learn cloud computing Nigeria",
    ],
    stats: [
      { value: "12wk", label: "Course Duration" },
      { value: "100+", label: "Cloud Practitioners Trained" },
      { value: "78%", label: "Placement Rate" },
      { value: "2", label: "Cloud Platforms Covered" },
    ],
    whoFor: [
      "IT professionals moving into cloud roles",
      "Developers who want infrastructure skills",
      "Sysadmins transitioning to cloud-native operations",
      "Beginners targeting cloud support or associate roles",
    ],
    curriculum: [
      { title: "Cloud Fundamentals", description: "Core concepts — compute, storage, networking, and the shared responsibility model." },
      { title: "AWS Core Services", description: "EC2, S3, RDS, and IAM fundamentals." },
      { title: "Azure Fundamentals", description: "Core Azure services and how they map to AWS equivalents." },
      { title: "Networking & Security", description: "VPCs, security groups, and cloud security basics." },
      { title: "Monitoring & Cost Management", description: "Observability tooling and controlling cloud spend." },
      { title: "Capstone Project", description: "Deploy and manage a small production workload on AWS." },
    ],
    outcomes: [
      "Deploy and manage workloads on AWS and Azure",
      "Understand core cloud networking and security",
      "Read and control cloud infrastructure costs",
      "Ready for junior cloud support or cloud associate roles",
    ],
    differentiators: [
      { title: "Two Clouds, One Course", description: "Coverage of both AWS and Azure so graduates aren't locked to one vendor." },
      { title: "Cost-Conscious Training", description: "Explicit focus on managing cloud costs — a skill most courses skip." },
      { title: "Hands-On Labs", description: "Real infrastructure deployed in real cloud accounts, not simulations." },
    ],
    techStack: ["AWS", "Microsoft Azure", "Linux", "Terraform basics"],
    faqs: [
      { question: "Do I need programming experience for this course?", answer: "Basic command-line familiarity helps, but heavy programming experience isn't required." },
      { question: "Does this course prepare me for AWS certification?", answer: "The curriculum covers foundational concepts aligned with AWS Cloud Practitioner-level knowledge." },
      { question: "Should I take this before or after DevOps Engineering?", answer: "Cloud Computing is a good foundation before DevOps Engineering, which builds on these concepts with CI/CD and automation." },
    ],
  },
  {
    slug: "devops-engineering",
    category: "Cloud & DevOps",
    title: "DevOps Engineering",
    tagline: "Docker, Kubernetes, and CI/CD for reliable software delivery.",
    description:
      "A practical DevOps course covering containerization, orchestration, and CI/CD pipelines — teaching students to automate the path from code commit to production deployment.",
    icon: Terminal,
    image: "/Service Images/DevOps.jpeg",
    duration: "16 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Intermediate",
    price: "₦300,000 – ₦550,000",
    accentColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    gradientFrom: "from-sky-500/20",
    metaTitle: "DevOps Engineering Course Nigeria | Docker, Kubernetes & CI/CD | Zeplynk Academy",
    metaDescription:
      "Learn DevOps engineering in Nigeria — Docker, Kubernetes, and CI/CD pipelines. 16-week course at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "DevOps course Nigeria",
      "Docker course Nigeria",
      "Kubernetes course Nigeria",
      "CI/CD training Nigeria",
      "DevOps training Nigeria",
    ],
    stats: [
      { value: "16wk", label: "Course Duration" },
      { value: "70+", label: "DevOps Engineers Trained" },
      { value: "78%", label: "Placement Rate" },
      { value: "5+", label: "Pipelines Built" },
    ],
    whoFor: [
      "Backend developers moving into DevOps roles",
      "Cloud practitioners deepening automation skills",
      "Sysadmins transitioning to modern infrastructure practices",
      "Engineers who want to own deployment pipelines",
    ],
    curriculum: [
      { title: "Containerization", description: "Docker fundamentals — images, containers, and multi-stage builds." },
      { title: "Kubernetes", description: "Orchestration, deployments, and scaling containerized applications." },
      { title: "CI/CD Pipelines", description: "GitHub Actions pipelines for automated testing and deployment." },
      { title: "Infrastructure as Code", description: "Terraform fundamentals for repeatable infrastructure." },
      { title: "Monitoring & Incident Response", description: "Logging, alerting, and basic on-call practices." },
      { title: "Capstone Project", description: "Build a full CI/CD pipeline deploying a containerized app to Kubernetes." },
    ],
    outcomes: [
      "Containerize and deploy applications with Docker and Kubernetes",
      "Build automated CI/CD pipelines",
      "Apply Infrastructure as Code with Terraform",
      "Ready for junior/mid DevOps engineer roles",
    ],
    differentiators: [
      { title: "Full Pipeline, Not Just Tools", description: "You build a complete path from commit to production, not isolated tool demos." },
      { title: "Real Incidents, Real Practice", description: "Simulated incident-response scenarios so graduates aren't caught off guard on the job." },
      { title: "Cloud-Computing Aligned", description: "Builds directly on the Cloud Computing course for students who want the full infrastructure track." },
    ],
    techStack: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "AWS", "Linux"],
    faqs: [
      { question: "Do I need cloud experience before this course?", answer: "Some familiarity with cloud basics helps; students without it can take Cloud Computing first or catch up in the early weeks." },
      { question: "Is Kubernetes hard to learn for beginners?", answer: "It has a learning curve, which is why the course dedicates significant time to it with hands-on labs rather than theory alone." },
      { question: "What roles does this course prepare me for?", answer: "Graduates typically target DevOps engineer, platform engineer, or site reliability engineering (SRE) roles." },
    ],
  },
  {
    slug: "cybersecurity",
    category: "Cloud & DevOps",
    title: "Cybersecurity",
    tagline: "Network security and ethical hacking for real-world defense.",
    description:
      "A hands-on cybersecurity course covering network security fundamentals and ethical hacking techniques, preparing students to identify and defend against real vulnerabilities.",
    icon: Shield,
    image: "/Service Images/Cyber Security1.jpeg",
    duration: "16 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Beginner to Intermediate",
    price: "₦300,000 – ₦550,000",
    accentColor: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    gradientFrom: "from-red-500/20",
    metaTitle: "Cybersecurity Course Nigeria | Ethical Hacking & Network Security | Zeplynk Academy",
    metaDescription:
      "Learn cybersecurity in Nigeria — network security and ethical hacking. 16-week course at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "cybersecurity course Nigeria",
      "ethical hacking course Nigeria",
      "penetration testing training Nigeria",
      "cybersecurity training Kaduna",
      "learn cybersecurity Nigeria",
    ],
    stats: [
      { value: "16wk", label: "Course Duration" },
      { value: "80+", label: "Security Practitioners Trained" },
      { value: "75%", label: "Placement Rate" },
      { value: "10+", label: "Lab Exercises" },
    ],
    whoFor: [
      "IT professionals moving into security roles",
      "Developers who want secure-coding and security fundamentals",
      "Beginners targeting SOC analyst or junior pentester roles",
      "Anyone responsible for their organization's security posture",
    ],
    curriculum: [
      { title: "Security Fundamentals", description: "CIA triad, threat modeling, and common attack vectors." },
      { title: "Network Security", description: "Firewalls, VPNs, and securing network infrastructure." },
      { title: "Ethical Hacking Basics", description: "Reconnaissance, scanning, and exploitation using Burp Suite and OWASP ZAP." },
      { title: "Web Application Security", description: "OWASP Top 10 vulnerabilities and how to identify and fix them." },
      { title: "Incident Response", description: "Detection, containment, and post-incident review processes." },
      { title: "Capstone Project", description: "A guided penetration test and full vulnerability report on a test environment." },
    ],
    outcomes: [
      "Identify and explain the OWASP Top 10 vulnerabilities",
      "Perform basic penetration tests using industry-standard tools",
      "Write a professional vulnerability assessment report",
      "Ready for junior SOC analyst or security-adjacent roles",
    ],
    differentiators: [
      { title: "Hands-On Labs, Not Just Theory", description: "Real exploitation exercises in safe, controlled lab environments." },
      { title: "Compliance Awareness", description: "NDPR and Nigerian regulatory context woven into the security curriculum." },
      { title: "Built by Practitioners", description: "Taught using the same tools and methodology Zeplynk uses in client penetration-testing engagements." },
    ],
    techStack: ["Burp Suite", "OWASP ZAP", "Wireshark", "Kali Linux", "Nmap"],
    faqs: [
      { question: "Is this course legal and ethical?", answer: "Yes — all hacking exercises are performed in isolated lab environments with explicit permission, following ethical hacking principles." },
      { question: "Do I need networking knowledge before this course?", answer: "Basic IT or networking familiarity helps, but the course covers the fundamentals needed to follow along." },
      { question: "What career paths does this course support?", answer: "Graduates typically target SOC analyst, junior penetration tester, or security analyst roles." },
    ],
  },
  {
    slug: "ui-ux-design",
    category: "Design & Product",
    title: "UI/UX Design",
    tagline: "Figma, prototyping, and user research for products people love.",
    description:
      "A practical UI/UX design course covering user research, wireframing, and high-fidelity prototyping in Figma — training students to design interfaces backed by real usability testing.",
    icon: PenTool,
    image: "/Service Images/UI_UX.jpeg",
    duration: "10 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Beginner to Job-Ready",
    price: "₦200,000 – ₦380,000",
    accentColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    gradientFrom: "from-pink-500/20",
    metaTitle: "UI/UX Design Course Nigeria | Figma & Product Design | Zeplynk Academy",
    metaDescription:
      "Learn UI/UX design in Nigeria — Figma, prototyping, and user research. 10-week job-ready course at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "UI UX design course Nigeria",
      "Figma course Nigeria",
      "product design course Nigeria",
      "learn UI UX design Nigeria",
      "UX design training Nigeria",
    ],
    stats: [
      { value: "10wk", label: "Course Duration" },
      { value: "150+", label: "Designers Trained" },
      { value: "80%", label: "Placement Rate" },
      { value: "5+", label: "Portfolio Projects" },
    ],
    whoFor: [
      "Beginners targeting UI/UX designer roles",
      "Graphic designers moving into product design",
      "Developers who want to design their own interfaces",
      "Founders designing their own product's first version",
    ],
    curriculum: [
      { title: "UX Research", description: "User interviews, personas, and journey mapping." },
      { title: "Information Architecture", description: "Structuring content and navigation before visual design." },
      { title: "Wireframing & Prototyping", description: "Low- to high-fidelity prototyping in Figma." },
      { title: "Visual & Brand Design", description: "Typography, color theory, and design systems." },
      { title: "Usability Testing", description: "Running and interpreting real usability tests." },
      { title: "Capstone Project", description: "Design a complete product from research through a tested, high-fidelity prototype." },
    ],
    outcomes: [
      "Conduct user research and translate it into design decisions",
      "Build high-fidelity, interactive Figma prototypes",
      "Run usability tests and iterate on real feedback",
      "Ready for junior/mid UI/UX designer roles",
    ],
    differentiators: [
      { title: "Research-Backed Design", description: "Every project starts with real user research, not just visual exploration." },
      { title: "Engineering-Ready Handoff", description: "Students learn to package designs the way developers actually need them." },
      { title: "Africa-Centric UX", description: "Design taught with local literacy, bandwidth, and context in mind." },
    ],
    techStack: ["Figma", "FigJam", "Adobe Creative Suite"],
    faqs: [
      { question: "Do I need to know how to draw or use design software already?", answer: "No prior design software experience is required — you'll learn Figma from the ground up." },
      { question: "Is this course more about visuals or research?", answer: "Both — the course balances visual design skills with the research and testing that make designs actually work." },
      { question: "Will I have a portfolio after this course?", answer: "Yes, you'll complete 5+ projects including a full capstone case study for your portfolio." },
    ],
  },
  {
    slug: "product-management",
    category: "Design & Product",
    title: "Product Management",
    tagline: "Agile, roadmapping, and strategy for building the right product.",
    description:
      "A practical product management course covering Agile methodology, roadmapping, and product strategy — preparing students to lead cross-functional teams and ship products that solve real problems.",
    icon: Briefcase,
    image: "/Service Images/Education.jpeg",
    duration: "8 Weeks",
    format: "Onsite (Kaduna) & Online",
    level: "Beginner to Intermediate",
    price: "₦180,000 – ₦350,000",
    accentColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    gradientFrom: "from-amber-500/20",
    metaTitle: "Product Management Course Nigeria | Agile & Product Strategy | Zeplynk Academy",
    metaDescription:
      "Learn product management in Nigeria — Agile, Scrum, and product strategy. 8-week course at Zeplynk Academy, Kaduna. Onsite and online.",
    keywords: [
      "product management course Nigeria",
      "Agile Scrum course Nigeria",
      "product manager training Nigeria",
      "learn product management Nigeria",
    ],
    stats: [
      { value: "8wk", label: "Course Duration" },
      { value: "60+", label: "PMs Trained" },
      { value: "75%", label: "Placement Rate" },
      { value: "3+", label: "Roadmaps Built" },
    ],
    whoFor: [
      "Developers or designers moving into product roles",
      "Founders who need structured product management skills",
      "Business analysts targeting product manager roles",
      "Team leads who need Agile/Scrum fluency",
    ],
    curriculum: [
      { title: "Product Fundamentals", description: "The role of a PM, product-market fit, and discovery basics." },
      { title: "Agile & Scrum", description: "Sprint planning, backlog management, and ceremonies that actually work." },
      { title: "Roadmapping & Prioritization", description: "Frameworks for deciding what to build next, and why." },
      { title: "Metrics & Analytics", description: "Defining and tracking the metrics that show if a product is working." },
      { title: "Stakeholder Communication", description: "Writing specs and communicating trade-offs to engineering and leadership." },
      { title: "Capstone Project", description: "Build a complete product strategy and roadmap for a real or simulated product." },
    ],
    outcomes: [
      "Run Agile/Scrum ceremonies confidently",
      "Build and defend a product roadmap",
      "Define and track meaningful product metrics",
      "Ready for junior/associate product manager roles",
    ],
    differentiators: [
      { title: "Built Around Real Engineering Teams", description: "Taught by people who work directly with engineering and design teams daily, not just theory." },
      { title: "Practical Frameworks", description: "Prioritization and roadmapping frameworks you can apply immediately, not academic models." },
      { title: "Cross-Functional Fluency", description: "Enough technical and design literacy to work credibly with both engineers and designers." },
    ],
    techStack: ["Jira", "Notion", "Figma (reading handoffs)", "Linear"],
    faqs: [
      { question: "Do I need a technical background to become a product manager?", answer: "No, though basic technical literacy is covered in the course to help you communicate effectively with engineering teams." },
      { question: "Is this course enough to get a PM job with no experience?", answer: "It gives you the frameworks, vocabulary, and a project to point to — most graduates use it alongside relevant work experience to move into associate PM roles." },
      { question: "How is this different from a general business course?", answer: "It's specifically focused on software product management — Agile delivery, roadmapping, and working with engineering and design teams." },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByCategory(): { category: string; items: Course[] }[] {
  const categories: string[] = [];
  for (const c of courses) {
    if (!categories.includes(c.category)) categories.push(c.category);
  }
  return categories.map((category) => ({
    category,
    items: courses.filter((c) => c.category === category),
  }));
}
