"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Home,
    Layers,
    Building2,
    GraduationCap,
    MapPin,
    Newspaper,
    Bot,
    Smartphone,
    Server,
    Cloud,
    Palette,
    BarChart3,
    Shield,
    Code,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import type { NewsItem } from "@/constants/news";

interface SearchResult {
    title: string;
    subtitle?: string;
    href: string;
    icon: React.ElementType;
}

const pages: SearchResult[] = [
    { title: "Home", subtitle: "Back to the homepage", href: "/", icon: Home },
    { title: "Solutions", subtitle: "All Zeplynk services", href: "/solutions", icon: Layers },
    { title: "Industries", subtitle: "Sectors we serve", href: "/industries", icon: Building2 },
    { title: "Zeplynk Academy", subtitle: "Tech courses & training", href: "/academy", icon: GraduationCap },
    { title: "Our Work", subtitle: "Client portfolio & case studies", href: "/work", icon: Layers },
    { title: "About Zeplynk", subtitle: "Our story", href: "/about", icon: Building2 },
    { title: "Contact Us", subtitle: "Get in touch", href: "/contact", icon: Home },
    { title: "Insights", subtitle: "Engineering blog", href: "/insights", icon: Newspaper },
    { title: "Reviews", subtitle: "Leave feedback for Zeplynk", href: "/reviews", icon: Home },
    { title: "Register for Academy", subtitle: "Enrol in a course", href: "/register", icon: GraduationCap },
    { title: "Press & Media", subtitle: "Company fact sheet", href: "/press", icon: Newspaper },
];

const solutions: SearchResult[] = [
    { title: "Web Engineering", href: "/solutions/web-engineering", icon: Code },
    { title: "AI & Automation", href: "/solutions/ai-automation", icon: Bot },
    { title: "Mobile App Development", href: "/solutions/mobile-apps", icon: Smartphone },
    { title: "Backend & API Development", href: "/solutions/backend-api", icon: Server },
    { title: "Enterprise Digitization", href: "/solutions/enterprise-digitization", icon: Building2 },
    { title: "Cloud & DevOps", href: "/solutions/cloud-devops", icon: Cloud },
    { title: "UI/UX & Product Design", href: "/solutions/ui-ux-design", icon: Palette },
    { title: "Data & Business Intelligence", href: "/solutions/data-bi", icon: BarChart3 },
    { title: "Cybersecurity & Compliance", href: "/solutions/cybersecurity", icon: Shield },
    { title: "Tech Education (Academy)", href: "/solutions/tech-education", icon: GraduationCap },
];

const locations: SearchResult[] = [
    { title: "Zeplynk in Kaduna", href: "/kaduna", icon: MapPin },
    { title: "Zeplynk in Jos", href: "/jos", icon: MapPin },
    { title: "Zeplynk in Abuja", href: "/abuja", icon: MapPin },
    { title: "Zeplynk in Lagos", href: "/lagos", icon: MapPin },
];

interface SiteSearchProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function SiteSearch({ open, onOpenChange }: SiteSearchProps) {
    const router = useRouter();
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

    useEffect(() => {
        if (!open || newsItems.length > 0) return;
        fetch("/api/news")
            .then((res) => res.json())
            .then((data) => setNewsItems(data.items || []))
            .catch(() => {});
    }, [open, newsItems.length]);

    const news: SearchResult[] = newsItems.map((item) => ({
        title: item.title,
        subtitle: item.category,
        href: `/news/${item.slug}`,
        icon: Newspaper,
    }));

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                onOpenChange(!open);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onOpenChange]);

    const go = (href: string) => {
        onOpenChange(false);
        router.push(href);
    };

    const renderGroup = (heading: string, items: SearchResult[]) => (
        <CommandGroup
            heading={heading}
            className="[&_[cmdk-group-heading]]:text-zgreen-500 [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-[11px]"
        >
            {items.map((item) => (
                <CommandItem
                    key={item.href}
                    value={`${item.title} ${item.subtitle ?? ""}`}
                    onSelect={() => go(item.href)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-gray-300 data-[selected=true]:bg-zgreen-500/10 data-[selected=true]:text-white transition-colors"
                >
                    <item.icon className="h-4 w-4 text-zgreen-500 flex-shrink-0" />
                    <span className="flex-1 truncate">
                        <span className="font-semibold text-white">{item.title}</span>
                        {item.subtitle && (
                            <span className="text-gray-500 text-sm ml-2">{item.subtitle}</span>
                        )}
                    </span>
                </CommandItem>
            ))}
        </CommandGroup>
    );

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl top-[15%] translate-y-0 p-0 bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <Command className="bg-transparent" shouldFilter>
                    <CommandInput
                        placeholder="Search pages, solutions, insights..."
                        className="h-14 text-base text-white placeholder:text-gray-500"
                    />
                    <CommandList className="max-h-[420px] p-3">
                        <CommandEmpty className="py-10 text-gray-500">
                            No results found. Try "AI", "Academy", or "Kaduna".
                        </CommandEmpty>
                        {renderGroup("Pages", pages)}
                        {renderGroup("Solutions", solutions)}
                        {renderGroup("Locations", locations)}
                        {renderGroup("Insights & News", news)}
                    </CommandList>
                    <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 text-[11px] text-gray-500">
                        <span>Navigate with ↑ ↓, select with ↵</span>
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono">Esc</kbd>
                            to close
                        </span>
                    </div>
                </Command>
            </DialogContent>
        </Dialog>
    );
}
