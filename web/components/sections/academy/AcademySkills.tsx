"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import {
    Code2,
    Globe,
    Layers,
    Server,
    Terminal,
    Database,
    Cloud,
    Smartphone,
    Bot,
    Shield,
    PenTool,
    Boxes,
} from "lucide-react";

const skillLogos = [
    { node: <Code2 />, title: "React", color: "text-blue-400" },
    { node: <Globe />, title: "Next.js", color: "text-white" },
    { node: <Layers />, title: "Tailwind CSS", color: "text-cyan-400" },
    { node: <Server />, title: "Node.js", color: "text-green-500" },
    { node: <Terminal />, title: "Python", color: "text-yellow-400" },
    { node: <Database />, title: "PostgreSQL", color: "text-blue-300" },
    { node: <Smartphone />, title: "React Native", color: "text-sky-400" },
    { node: <Bot />, title: "AI & LLMs", color: "text-purple-400" },
    { node: <Cloud />, title: "AWS", color: "text-orange-500" },
    { node: <Boxes />, title: "Docker", color: "text-blue-500" },
    { node: <Shield />, title: "Cybersecurity", color: "text-red-400" },
    { node: <PenTool />, title: "Figma", color: "text-pink-400" },
];

export default function AcademySkills() {
    return (
        <section className="pt-2 pb-8 border-y border-white/10 bg-zinc-900/60 backdrop-blur-md">
            <LogoLoop logos={skillLogos} speed={16} direction="left" iconSize="text-4xl" />
        </section>
    );
}
