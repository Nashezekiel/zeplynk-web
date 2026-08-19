

export interface NewsItem {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content?: string;
    image: string;
    category: string;
    date: string;
    aspectRatio: "aspect-square" | "aspect-video" | "aspect-[3/4]" | "aspect-[4/3]";
}

export const newsItems: NewsItem[] = [
    {
        id: "12",
        slug: "best-coding-bootcamp-kaduna-what-to-look-for",
        title: "Best Coding Bootcamp in Kaduna: What to Look for Before Enrolling",
        excerpt: "Choosing a coding bootcamp is a big commitment. Here's what actually predicts whether you'll come out job-ready.",
        content: `
            <p>Kaduna's tech education scene has grown fast — which is great for learners, but it also means more noise to cut through when picking a bootcamp. Not all programs are built the same, and the difference shows up months later, when you're either job-ready or still stuck at "I built a to-do app."</p>

            <h2>Start with the curriculum, not the marketing</h2>
            <p>A lot of bootcamp pages lead with promises. Ask instead: what will I actually build, week by week? A serious program should be able to show you a curriculum, not just a list of buzzwords. Look for a progression from fundamentals to a real, deployed capstone project — not just isolated exercises.</p>

            <h3>Questions worth asking before you enroll</h3>
            <ul>
                <li><strong>Who teaches the classes?</strong> Practicing engineers who ship code, or instructors reading from slides?</li>
                <li><strong>What do graduates actually build?</strong> Ask to see real, deployed projects — not screenshots.</li>
                <li><strong>Is there a placement track record?</strong> A program confident in its outcomes will share numbers.</li>
                <li><strong>Onsite, online, or both?</strong> Kaduna-based learners benefit from in-person mentorship; others need a solid remote experience.</li>
            </ul>

            <blockquote>
                "The best predictor of a good bootcamp isn't the syllabus PDF — it's whether current students are shipping real, working software before graduation."
            </blockquote>

            <h2>What a strong program looks like in practice</h2>
            <p>At <a href="/academy">Zeplynk Academy</a> in Kaduna, every track — from <a href="/academy/frontend-engineering">Frontend Engineering</a> to <a href="/academy/full-stack-development">Full Stack Development</a> — is built around shipping deployed projects from week one, with direct mentorship from engineers who build production software for Zeplynk's own clients. That's a deliberate choice: bootcamps that only simulate real work produce graduates who freeze the first time a client changes requirements mid-project.</p>

            <p>If you're evaluating options in Kaduna or online across Nigeria, ask to sit in on a class, review a syllabus in detail, and talk to a recent graduate if you can. A good bootcamp will welcome the scrutiny.</p>
        `,
        image: "/Service Images/Digitalization.jpeg",
        category: "Academy",
        date: "Aug 15, 2026",
        aspectRatio: "aspect-video",
    },
    {
        id: "11",
        slug: "how-to-build-school-management-system-nigeria",
        title: "How to Build a School Management System in Nigeria",
        excerpt: "A practical breakdown of what actually goes into a school management platform — from admissions to results, for Nigerian schools moving off paper.",
        content: `
            <p>Most Nigerian schools still run on a patchwork of paper registers, Excel sheets, and WhatsApp groups. It works, until it doesn't — a lost result sheet, a fee dispute with no record, or a parent who has no way to check attendance without calling the school office.</p>

            <h2>The core modules every school system needs</h2>
            <p>A school management system isn't one feature — it's a set of connected modules that replace specific paper processes:</p>
            <ul>
                <li><strong>Admissions & student records:</strong> a single source of truth for enrollment, class assignment, and student history.</li>
                <li><strong>Attendance tracking:</strong> daily records that feed directly into reports, instead of being re-transcribed from a register.</li>
                <li><strong>Results & grading:</strong> term-based grading aligned to how Nigerian schools actually structure report cards.</li>
                <li><strong>Fee management:</strong> tracking payments and balances, ideally tied to a payment gateway like Paystack.</li>
                <li><strong>Parent & student portals:</strong> so parents can check attendance, results, and balances without a phone call.</li>
            </ul>

            <h3>Where most schools get it wrong</h3>
            <p>The common mistake is buying a generic, foreign-built platform that assumes a grading and term structure that doesn't match Nigerian schools, then spending months fighting the software instead of using it. A system built around your actual academic calendar and grading scale adopts far faster.</p>

            <blockquote>
                "The schools that succeed with digitization don't try to change everything at once — they digitize one painful process first, prove it works, then expand."
            </blockquote>

            <h2>How Zeplynk approaches this</h2>
            <p>Our <a href="/industries/education">Education & EdTech</a> team builds school management systems around a Nigerian institution's existing academic calendar and grading system, not the other way around. We handle data migration from paper or spreadsheets, train administrative staff directly, and build parent-facing portals that work reliably even on modest mobile connections. Most rollouts take 6–8 weeks from kickoff to go-live.</p>

            <p>If your school is still relying on paper records and Excel, the fastest path forward is usually to digitize the single most painful process first — often results or fee tracking — rather than attempting a full system overhaul in one go.</p>
        `,
        image: "/Service Images/Education.jpeg",
        category: "EdTech",
        date: "Aug 8, 2026",
        aspectRatio: "aspect-[4/3]",
    },
    {
        id: "10",
        slug: "cybersecurity-audit-checklist-nigerian-smes",
        title: "Cybersecurity Audit Checklist for Nigerian SMEs",
        excerpt: "Most Nigerian SMEs don't need an enterprise security program — they need to close the five or six gaps that actually get exploited.",
        content: `
            <p>Cybersecurity often gets treated as an enterprise-only concern in Nigeria — something for banks and telcos, not a 20-person business running on WhatsApp and a website. That's a mistake. Smaller businesses are frequently easier targets precisely because no one has checked the basics.</p>

            <h2>The checklist</h2>
            <ul>
                <li><strong>Password hygiene:</strong> Are staff reusing passwords across business and personal accounts? Is multi-factor authentication (MFA) enabled on email and admin accounts?</li>
                <li><strong>Software updates:</strong> Are your website, CMS, and server software patched, or running outdated versions with known vulnerabilities?</li>
                <li><strong>Access control:</strong> Does every former employee still have access to shared drives, admin panels, or company email?</li>
                <li><strong>Data backups:</strong> If your systems were encrypted by ransomware tomorrow, do you have a recent, tested backup?</li>
                <li><strong>Payment and customer data handling:</strong> Is customer data stored and transmitted securely, in line with NDPR expectations?</li>
                <li><strong>Website vulnerabilities:</strong> Has your website or web application ever been scanned for common vulnerabilities like SQL injection or exposed admin panels?</li>
            </ul>

            <h3>Why this matters more than it seems</h3>
            <p>A single compromised admin account can mean a defaced website, stolen customer data, or a business email compromise scam that costs real money — all from gaps that a half-day audit would have caught. The cost of prevention is almost always smaller than the cost of an incident.</p>

            <blockquote>
                "You don't need a Fortune 500 security budget. You need someone to actually check the six things on this list."
            </blockquote>

            <h2>Where Zeplynk fits in</h2>
            <p>Our <a href="/solutions/cybersecurity">Cybersecurity & Compliance</a> team runs practical security audits for Nigerian SMEs and corporates — penetration testing, access control review, and NDPR-aware compliance checks — sized to the business, not an enterprise price tag. If you run a growing business under our <a href="/industries/sme-corporate">SMEs & Corporate</a> coverage, a basic audit is often the highest-ROI security spend you can make this year.</p>
        `,
        image: "/Service Images/Cyber Security1.jpeg",
        category: "Cybersecurity",
        date: "Jul 30, 2026",
        aspectRatio: "aspect-square",
    },
    {
        id: "9",
        slug: "custom-software-development-kaduna-buyers-guide",
        title: "Custom Software Development in Kaduna: A Buyer's Guide",
        excerpt: "Thinking about commissioning custom software in Kaduna? Here's how to scope the project, budget realistically, and avoid the common traps.",
        content: `
            <p>Custom software is a different purchase than a website. It's not a one-time expense you can price by looking at a template — it's closer to commissioning a building. Getting it right starts with knowing what you're actually buying.</p>

            <h2>Step 1: Separate "nice to have" from "must have"</h2>
            <p>Every custom software project balloons in scope if you let it. Before talking to any developer, write down the two or three problems the software absolutely must solve on day one. Everything else — the extra dashboard, the mobile app, the fancy analytics — can come in a version two.</p>

            <h2>Step 2: Understand what drives the cost</h2>
            <p>Custom software pricing in Nigeria depends heavily on a few factors:</p>
            <ul>
                <li><strong>Number of user roles</strong> (admin, staff, customer each add complexity)</li>
                <li><strong>Integrations required</strong> (payment gateways, SMS, existing systems)</li>
                <li><strong>Data migration</strong> from old spreadsheets or legacy systems</li>
                <li><strong>Whether it needs to work offline</strong> or on unreliable connections</li>
            </ul>
            <p>A focused internal tool might be built in 4–6 weeks. A multi-role platform with payment integration and reporting typically runs 8–16 weeks.</p>

            <h3>Step 3: Ask about ownership</h3>
            <p>Confirm upfront that you'll own the full source code and IP when the project is delivered — not just a license to use software the vendor still controls. This matters enormously if you ever want to switch developers or bring the work in-house later.</p>

            <blockquote>
                "The best custom software projects start with a painfully specific problem statement, not a wishlist."
            </blockquote>

            <h2>Building in Kaduna, specifically</h2>
            <p>Working with a <a href="/kaduna">Kaduna-based development team</a> means faster feedback loops, in-person check-ins when needed, and a partner who understands the local business context — from payment habits to connectivity realities. Our <a href="/solutions/web-engineering">Web Engineering</a> and <a href="/industries/sme-corporate">SME digitization</a> teams work through a structured discovery phase before any code is written, specifically to avoid the scope creep that derails most custom software projects.</p>

            <p>If you're weighing a custom build, start with a scoping conversation rather than a quote request — the price only means something once the problem is actually defined.</p>
        `,
        image: "/Service Images/Backend.jpeg",
        category: "Software Development",
        date: "Jul 22, 2026",
        aspectRatio: "aspect-[3/4]",
    },
    {
        id: "8",
        slug: "website-cost-nigeria-2026-pricing-guide",
        title: "How Much Does a Website Cost in Nigeria? A 2026 Pricing Guide",
        excerpt: "A realistic breakdown of what Nigerian businesses actually pay for websites in 2026 — and what drives the price up or down.",
        content: `
            <p>"How much for a website?" is one of the hardest questions to answer honestly, because the real answer is "it depends" — and vague answers erode trust. Here's a clearer breakdown of what actually drives website pricing in Nigeria in 2026.</p>

            <h2>The rough price bands</h2>
            <ul>
                <li><strong>Simple business website (5–8 pages):</strong> from ₦150,000 — a professional online presence with contact forms and basic SEO.</li>
                <li><strong>Custom-designed corporate website:</strong> ₦350,000–₦800,000 — bespoke design, CMS for your team to update content, stronger SEO foundation.</li>
                <li><strong>E-commerce store:</strong> from ₦600,000 — product catalog, Paystack/Flutterwave checkout, inventory management.</li>
                <li><strong>Web application / SaaS MVP:</strong> ₦800,000–₦3,500,000+ — custom logic, user accounts, and a real backend, not just pages.</li>
            </ul>

            <h3>What actually moves the price</h3>
            <p>Three things drive most of the variance: how custom the design needs to be, how many integrations are required (payments, SMS, third-party APIs), and whether there's a real backend involved versus a mostly static site. A five-page site with a contact form is a very different build from a ten-page site with a booking system, live chat, and a customer portal.</p>

            <blockquote>
                "The cheapest website is rarely the cheapest option once you count the redesign you'll need in a year."
            </blockquote>

            <h2>Questions to ask before you accept a quote</h2>
            <ul>
                <li>Does the price include mobile responsiveness and basic SEO, or are those extras?</li>
                <li>Will I own the source code, or does the developer retain control?</li>
                <li>What happens after launch — is there a maintenance plan, or are you on your own?</li>
                <li>How long will the build actually take, with milestones you can check?</li>
            </ul>

            <p>At Zeplynk, a simple website typically takes 1–2 weeks, and a custom web application or SaaS MVP takes 4–12 weeks depending on scope. Every project starts with a free consultation and a fixed quote — no open-ended hourly billing. Explore our <a href="/solutions/web-engineering">Web Engineering</a> services or browse <a href="/industries">industry-specific builds</a> to see what's typical for a business like yours.</p>
        `,
        image: "/Service Images/web.jpeg",
        category: "Business",
        date: "Jul 15, 2026",
        aspectRatio: "aspect-video",
    },
    {
        id: "7",
        slug: "ai-automation-for-nigerian-businesses",
        title: "AI Automation for Nigerian Businesses: WhatsApp, Customer Support, and Lead Qualification",
        excerpt: "A practical look at where AI automation actually pays off for Nigerian businesses right now — starting with the channel your customers already use.",
        content: `
            <p>AI automation gets pitched as a sweeping transformation, but the businesses actually getting value from it in Nigeria today are doing something much simpler: automating the specific, repetitive conversations that eat up their team's time.</p>

            <h2>Start where your customers already are</h2>
            <p>For most Nigerian businesses, that's WhatsApp. A well-built <a href="/ai/whatsapp-chatbots">WhatsApp AI chatbot</a> can answer pricing questions, track orders, and book appointments 24/7 — without losing the conversational feel customers expect. The businesses that get this wrong deploy a rigid keyword bot that frustrates people into hanging up. The ones that get it right combine structured flows with an LLM layer, so the bot handles both scripted questions and the messy, real ones.</p>

            <h3>Customer support that doesn't feel automated</h3>
            <p>Beyond WhatsApp, <a href="/ai/ai-chatbot-development">custom AI chatbots</a> trained on your actual documentation and policies can resolve a large share of support tickets before a human ever sees them — not by guessing, but by retrieving answers from your real content.</p>

            <h2>The next step: lead qualification and workflow automation</h2>
            <p>Once the conversational layer works, the bigger win is often what happens after the conversation. <a href="/ai/ai-agents">AI agents</a> can research an inbound lead, score it, and draft a first outreach message — work that used to sit in a sales rep's inbox for a day. Combine that with <a href="/ai/workflow-automation">workflow automation</a> connecting your CRM, payment tools, and spreadsheets, and the manual copy-paste work that slows Nigerian teams down largely disappears.</p>

            <blockquote>
                "The organizations that win with AI automation don't chase the flashiest use case — they automate the process that's currently costing them the most hours per week."
            </blockquote>

            <h2>Where to actually start</h2>
            <p>If you're not sure where AI creates the most value in your specific business, that's what an <a href="/ai/ai-consulting">AI readiness audit</a> is for — an honest look at your data, processes, and team before recommending anything. Most engagements start narrow: one WhatsApp flow, one automated report, one lead-qualification step — proven, then expanded.</p>
        `,
        image: "/Service Images/AI.jpeg",
        category: "AI & Automation",
        date: "Aug 19, 2026",
        aspectRatio: "aspect-[3/4]",
    },
    {
        id: "1",
        slug: "future-of-ai",
        title: "The Future of AI Automation in modern Enterprises",
        excerpt: "Exploring how AI agents are redefining productivity and operational efficiency in 2026.",
        content: `
            <p>Artificial Intelligence is no longer just a buzzword; it's the core engine driving the next generation of enterprise efficiency. As we move further into 2026, the shift from "tools you use" to "agents that work for you" is becoming the standard.</p>
            
            <h2>The Shift to Agentic AI</h2>
            <p>Unlike traditional automation, which follows rigid protocols, agentic AI can reason, plan, and execute multi-step workflows. This means your CRM doesn't just record a lead; an AI agent can research the lead, draft a personalized outreach, and schedule the follow-up without human intervention.</p>
            
            <blockquote>
                "The organizations that win in 2026 are those that view AI not as a cost-cutting measure, but as a workforce multiplier."
            </blockquote>

            <h3>Key Trends for 2026</h3>
            <ul>
                <li><strong>Hyper-Personalization:</strong> AI models trained on proprietary data delivering unique customer experiences.</li>
                <li><strong>Autonomous Supply Chains:</strong> Predictive logistics that clear bottlenecks before they happen.</li>
                <li><strong>Zero-Trust Security:</strong> AI-driven threat detection that evolves faster than the exploits it stops.</li>
            </ul>

            <p>At Zeplynk, we're helping our partners bridge the gap between legacy systems and this autonomous future. The roadmap is complex, but the impact is undeniable.</p>
        `,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        category: "AI & Future",
        date: "Feb 24, 2026",
        aspectRatio: "aspect-[3/4]",
    },
    {
        id: "2",
        slug: "scaling-engineering",
        title: "Scaling Digital Engineering teams for Hyper-growth",
        excerpt: "Strategies for managing complex software systems while maintaining velocity and quality.",
        content: `
            <p>Hyper-growth is the ultimate stress test for an engineering organization. What works for a team of 10 often breaks catastrophically at 100.</p>
            
            <h2>Architecture for Velocity</h2>
            <p>To maintain speed at scale, engineers must move away from monolithic thinking. Modular architectures, strictly enforced API contracts, and robust CI/CD pipelines are not optional—they are the lifeblood of a scaling startup.</p>

            <h3>The Human Component</h3>
            <p>Scaling isn't just about code; it's about people. Creating a culture of high ownership and low friction is the only way to prevent the "Big Ball of Mud" scenario as you add more contributors.</p>
        `,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        category: "Engineering",
        date: "Feb 20, 2026",
        aspectRatio: "aspect-square",
    },
    {
        id: "3",
        slug: "academy-launch",
        title: "Zeplynk Academy: Launching New AI Certification",
        excerpt: "Bridging the talent gap with our specialized curriculum in agentic AI and cloud engineering.",
        content: `
            <p>We are thrilled to announce the launch of our new Advanced AI & Cloud Engineering Certification. This isn't your standard boot camp—it's a rigorous, hands-on immersion into the tools that are building the future.</p>
        `,
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        category: "Academy",
        date: "Feb 18, 2026",
        aspectRatio: "aspect-video",
    },
    {
        id: "4",
        slug: "nextjs-15-enterprise",
        title: "Next.js 15: What Enterprises Need to Know",
        excerpt: "Deep dive into the latest performance optimizations and server components evolution.",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
        category: "Tech Stack",
        date: "Feb 15, 2026",
        aspectRatio: "aspect-[4/3]",
    },
    {
        id: "5",
        slug: "specialized-ai",
        title: "The Rise of Specialized AI Models",
        excerpt: "Why domain-specific LLMs are outperforming generalist models in niche industrial applications.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        category: "Research",
        date: "Feb 12, 2026",
        aspectRatio: "aspect-[3/4]",
    },
    {
        id: "6",
        slug: "sustainable-tech",
        title: "Sustainable Tech: Greening the Data Center",
        excerpt: "How Zeplynk is helping partners reduce their digital carbon footprint through optimization.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
        category: "Sustainability",
        date: "Feb 10, 2026",
        aspectRatio: "aspect-square",
    },
];
