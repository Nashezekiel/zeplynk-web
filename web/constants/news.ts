import { Calendar, Tag } from "lucide-react";

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
