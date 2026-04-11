import LogoLoop from "@/components/ui/LogoLoop";
import { Code2, Database, Cloud, Terminal, Cpu, Globe, Server, Layers } from "lucide-react";

// Fallback to Lucide icons until server restart picks up react-icons
const techLogos = [
    { node: <Code2 />, title: "React", href: "https://react.dev" },
    { node: <Globe />, title: "Next.js", href: "https://nextjs.org" },
    { node: <Code2 />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <Layers />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <Server />, title: "Node.js", href: "https://nodejs.org" },
    { node: <Terminal />, title: "Python", href: "https://www.python.org" },
    { node: <Cpu />, title: "Java", href: "https://www.java.com" },
    { node: <Database />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <Database />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <Cloud />, title: "Docker", href: "https://www.docker.com" },
    { node: <Cloud />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <Cpu />, title: "OpenAI", href: "https://openai.com" },
];

export default function TechStack() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Built With Modern Technology</h2>
                <p className="text-gray-500">Enterprise-grade infrastructure for every project.</p>
            </div>

            <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
            />
        </section>
    );
}
