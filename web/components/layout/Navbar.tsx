"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap, Menu, X, ChevronDown, Search,
    BarChart3, Bot, MessageSquare, Mail,
    Users, GraduationCap, Building2,
    ArrowRight, Layers, Cloud, Shield,
    Code, Smartphone, Server, Palette, Star
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SiteSearch from "@/components/layout/SiteSearch";
import { CALENDLY_URL } from "@/lib/constants";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleMobileSection = (section: string) => {
        setActiveMobileSection(activeMobileSection === section ? null : section);
    };
    const pathname = usePathname();

    const isSectionActive = (href: string) => {
        const base = href.split("#")[0];
        if (base === "/") return pathname === "/";
        return pathname === base || pathname.startsWith(base + "/");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock background scroll while the mobile menu is open so touch-scroll
    // gestures go to the menu's own list instead of the page behind it.
    useEffect(() => {
        if (!mobileMenuOpen) return;

        const scrollY = window.scrollY;
        const { body } = document;
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";

        return () => {
            body.style.position = "";
            body.style.top = "";
            body.style.left = "";
            body.style.right = "";
            body.style.width = "";
            window.scrollTo(0, scrollY);
        };
    }, [mobileMenuOpen]);

    // Comprehensive Navigation Data
    const navData = {
        solutions: [
            {
                id: "web-engineering",
                title: "Web Engineering",
                icon: Code,
                items: [
                    { name: "Custom Web Applications", href: "/solutions/web-engineering" },
                    { name: "SaaS Platforms", href: "/solutions/web-engineering" },
                    { name: "E-commerce Engines", href: "/solutions/web-engineering" },
                    { name: "Corporate Websites", href: "/solutions/web-engineering" }
                ]
            },
            {
                id: "ai-automation",
                title: "AI & Automation",
                icon: Bot,
                items: [
                    { name: "AI Strategy & Consulting", href: "/solutions/ai-automation" },
                    { name: "Intelligent Automation", href: "/solutions/ai-automation" },
                    { name: "Conversational AI", href: "/solutions/ai-automation" },
                    { name: "Generative AI Solutions", href: "/solutions/ai-automation" }
                ]
            },
            {
                id: "mobile-apps",
                title: "Mobile App Development",
                icon: Smartphone,
                items: [
                    { name: "iOS Native App Dev", href: "/solutions/mobile-apps" },
                    { name: "Android Native App Dev", href: "/solutions/mobile-apps" },
                    { name: "Cross-Platform Dev", href: "/solutions/mobile-apps" },
                    { name: "Offline-First Sync", href: "/solutions/mobile-apps" }
                ]
            },
            {
                id: "backend-api",
                title: "Backend & API Development",
                icon: Server,
                items: [
                    { name: "Custom API Development", href: "/solutions/backend-api" },
                    { name: "Database Schema Design", href: "/solutions/backend-api" },
                    { name: "Payment & Auth Integrations", href: "/solutions/backend-api" },
                    { name: "Microservices Architecture", href: "/solutions/backend-api" }
                ]
            },
            {
                id: "enterprise-digitization",
                title: "Enterprise Digitization",
                icon: Building2,
                items: [
                    { name: "ERP & CRM Customization", href: "/solutions/enterprise-digitization" },
                    { name: "Custom Business Portals", href: "/solutions/enterprise-digitization" },
                    { name: "Legacy Modernization", href: "/solutions/enterprise-digitization" },
                    { name: "Process Digitization", href: "/solutions/enterprise-digitization" }
                ]
            },
            {
                id: "cloud-devops",
                title: "Cloud & DevOps",
                icon: Cloud,
                items: [
                    { name: "AWS & GCP Hosting Setup", href: "/solutions/cloud-devops" },
                    { name: "CI/CD Pipeline Automation", href: "/solutions/cloud-devops" },
                    { name: "Infrastructure as Code", href: "/solutions/cloud-devops" },
                    { name: "Cloud Cost Optimization", href: "/solutions/cloud-devops" }
                ]
            },
            {
                id: "ui-ux-design",
                title: "UI/UX & Product Design",
                icon: Palette,
                items: [
                    { name: "User Research & Audits", href: "/solutions/ui-ux-design" },
                    { name: "Wireframing & Prototyping", href: "/solutions/ui-ux-design" },
                    { name: "Brand Visual Guidelines", href: "/solutions/ui-ux-design" },
                    { name: "Design System Libraries", href: "/solutions/ui-ux-design" }
                ]
            },
            {
                id: "data-bi",
                title: "Data & Business Intelligence",
                icon: BarChart3,
                items: [
                    { name: "BI Dashboard Analytics", href: "/solutions/data-bi" },
                    { name: "Data Warehousing Setup", href: "/solutions/data-bi" },
                    { name: "ETL Data Pipeline Automation", href: "/solutions/data-bi" },
                    { name: "Predictive Analytics", href: "/solutions/data-bi" }
                ]
            },
            {
                id: "cybersecurity",
                title: "Cybersecurity & Compliance",
                icon: Shield,
                items: [
                    { name: "Penetration Testing Audits", href: "/solutions/cybersecurity" },
                    { name: "App Security Audits", href: "/solutions/cybersecurity" },
                    { name: "Zero-Trust IAM Systems", href: "/solutions/cybersecurity" },
                    { name: "NDPR Compliance Setup", href: "/solutions/cybersecurity" }
                ]
            },
            {
                id: "tech-education",
                title: "Tech Education (Academy)",
                icon: GraduationCap,
                items: [
                    { name: "Coding Bootcamps", href: "/solutions/tech-education" },
                    { name: "AI & ML Certification", href: "/solutions/tech-education" },
                    { name: "Corporate Upskilling Sprints", href: "/solutions/tech-education" },
                    { name: "Tech Mentorship Programs", href: "/solutions/tech-education" }
                ]
            }
        ],
        industries: [
            { name: "Recruitment & HR", href: "/industries/hr-recruitment" },
            { name: "Startups & SaaS", href: "/industries/startups-saas" },
            { name: "E-commerce", href: "/industries/ecommerce" },
            { name: "Education & EdTech", href: "/industries/education" },
            { name: "SMEs & Corporate", href: "/industries/sme-corporate" }
        ],
        academy: [
            { name: "Frontend Engineering", href: "/academy/frontend-engineering" },
            { name: "Backend Development", href: "/academy/backend-development" },
            { name: "Full Stack Development", href: "/academy/full-stack-development" },
            { name: "Mobile App Development", href: "/academy/mobile-app-development" },
            { name: "AI Engineering", href: "/academy/ai-engineering" },
            { name: "Data Analytics", href: "/academy/data-analytics" },
            { name: "Cybersecurity", href: "/academy/cybersecurity" },
            { name: "UI/UX Design", href: "/academy/ui-ux-design" },
            { name: "Corporate Training", href: "/academy#corporate" }
        ],
        about: [
            { name: "Our Story", href: "/about#story" },
            { name: "Team", href: "/about#team" },
            { name: "Careers", href: "/about#careers" },
            { name: "Blog", href: "/news" }
        ],
        contact: [
            { name: "Get a Quote", href: "/contact#quote" },
            { name: "Book a Call", href: CALENDLY_URL, external: true },
            { name: "Partner With Us", href: "/contact#partner" }
        ]
    };
    return (
        <>
            <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'top-0 bg-black/90 backdrop-blur-xl border-b border-white/10' : 'top-10 md:top-14 bg-transparent'
                } ${mobileMenuOpen || activeDropdown ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : ''}`}>
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-[4.5rem] md:h-20">

                        {/* Logo */}
                        <Link
                            href="/"
                            onClick={(e) => {
                                if (pathname === "/") {
                                    e.preventDefault();
                                    setMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            }}
                            className="flex items-center group relative z-50"
                        >
                            <div className="relative w-11 h-11 md:w-12 md:h-12 mr-3 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src="/theLogo-removebg-preview.png"
                                    alt="Zeplynk Logo"
                                    fill
                                    sizes="48px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-2xl md:text-2xl font-bold text-white tracking-tight">
                                Zeplynk
                            </span>
                        </Link>

                        {/* Desktop Navigation - CENTERED */}
                        <div className="hidden lg:flex flex-1 justify-center items-center gap-8 px-4 h-full">
                            {[
                                { name: 'Solutions', id: 'solutions', href: '/solutions' },
                                { name: 'Industries', id: 'industries', href: '/industries' },
                                { name: 'Academy', id: 'academy', href: '/academy' },
                                { name: 'About', id: 'about', href: '/about' },
                                { name: 'Contact', id: 'contact-nav', href: '/contact' }
                            ].map((nav) => (
                                <div
                                    key={nav.id}
                                    className="h-full flex items-center relative group/nav"
                                    onMouseEnter={() => setActiveDropdown(nav.id)}
                                >
                                    <div className="flex items-center gap-1.5 cursor-pointer py-8">
                                        <Link
                                            href={nav.href}
                                            className={`text-[15px] font-black uppercase tracking-widest transition-all ${activeDropdown === nav.id || pathname.startsWith(nav.href)
                                                ? 'text-zgreen-500'
                                                : 'text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            {nav.name}
                                        </Link>
                                        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === nav.id ? 'rotate-180 text-zgreen-500' : 'text-gray-500'}`} />
                                        {(pathname.startsWith(nav.href)) && (
                                            <motion.div layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-zgreen-500 rounded-full" />
                                        )}
                                    </div>
                                </div>
                            ))}

                            <Link
                                href="/insights"
                                onClick={() => setActiveDropdown(null)}
                                className="text-[15px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                            >
                                Insights
                            </Link>

                            <Link
                                href="/reviews"
                                onClick={() => setActiveDropdown(null)}
                                className="text-[15px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                            >
                                Reviews
                            </Link>
                        </div>

                        {/* Mega Menu Container - 100% Width, 70vh Height */}
                        <div 
                            className="absolute top-0 left-0 w-full pointer-events-none"
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <AnimatePresence>
                                {activeDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="fixed top-20 left-0 w-full h-[70vh] bg-black border-b border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)] pointer-events-auto overflow-hidden"
                                    >
                                        <div className="max-w-7xl mx-auto h-full px-8 py-12 flex flex-col">

                                            {/* SOLUTIONS MEGA CONTENT */}
                                            {activeDropdown === 'solutions' && (
                                                <div className="flex-grow flex items-center gap-16">

                                                    {/* Left: gradient hero card — same style as Academy */}
                                                    <div className="w-1/3">
                                                        <div className="p-10 bg-gradient-to-br from-zgreen-600 to-emerald-900 rounded-[2.5rem] relative overflow-hidden group">
                                                            <div className="relative z-10">
                                                                <Zap className="h-12 w-12 text-white mb-6" />
                                                                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                                                                    Engineering <br /> Excellence. <br /> Delivered.
                                                                </h4>
                                                                <p className="text-white/70 text-caption mb-8 leading-relaxed">
                                                                    10 practice areas. One accountable partner. From AI to cloud — we engineer outcomes.
                                                                </p>
                                                                <Link href="/solutions" onClick={() => setActiveDropdown(null)}>
                                                                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-xl px-6 h-12 font-bold">
                                                                        View All Services
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            {/* Decorative bg icon */}
                                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                                <Layers className="h-40 w-40" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Right: 2-col grid — same style as Academy */}
                                                    <div className="w-2/3 grid grid-cols-2 gap-x-6 gap-y-1">
                                                        {navData.solutions.map((cat) => (
                                                            <Link
                                                                key={cat.id}
                                                                href={`/solutions/${cat.id}`}
                                                                onClick={() => setActiveDropdown(null)}
                                                                className="flex items-center gap-3 group/course px-3 py-2 rounded-xl hover:bg-white/5 transition-all"
                                                            >
                                                                <div className="w-2 h-2 rounded-full bg-zgreen-500 group-hover:scale-150 transition-transform flex-shrink-0" />
                                                                <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors">
                                                                    {cat.title}
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* INDUSTRIES MEGA CONTENT */}
                                            {activeDropdown === 'industries' && (
                                                <div className="flex-grow flex items-center gap-16">
                                                    {/* Left: gradient hero card — same style as Solutions/Academy */}
                                                    <div className="w-1/3">
                                                        <div className="p-10 bg-gradient-to-br from-zgreen-600 to-emerald-900 rounded-[2.5rem] relative overflow-hidden group">
                                                            <div className="relative z-10">
                                                                <Building2 className="h-12 w-12 text-white mb-6" />
                                                                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                                                                    Solutions For <br /> Every Sector.
                                                                </h4>
                                                                <p className="text-white/70 text-caption mb-8 leading-relaxed">
                                                                    Powering 12+ sectors with bespoke engineering intelligence.
                                                                </p>
                                                                <Link href="/industries" onClick={() => setActiveDropdown(null)}>
                                                                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-xl px-6 h-12 font-bold">
                                                                        Explore Industries
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                                <BarChart3 className="h-40 w-40" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Right: 2-col grid — same style as Solutions/Academy */}
                                                    <div className="w-2/3 grid grid-cols-2 gap-x-12 gap-y-2">
                                                        {navData.industries.map((industry) => (
                                                            <Link
                                                                key={industry.name}
                                                                href={industry.href}
                                                                onClick={() => setActiveDropdown(null)}
                                                                className="flex items-center gap-4 group/ind px-4 py-2.5 rounded-2xl hover:bg-white/5 transition-all"
                                                            >
                                                                <div className="w-2 h-2 rounded-full bg-zgreen-500 group-hover/ind:scale-150 transition-transform flex-shrink-0" />
                                                                <span className="text-lg font-bold text-gray-400 group-hover/ind:text-white transition-colors">
                                                                    {industry.name}
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* ACADEMY MEGA CONTENT */}
                                            {activeDropdown === 'academy' && (
                                                <div className="flex-grow flex items-center gap-16">
                                                    <div className="w-1/3">
                                                        <div className="p-10 bg-gradient-to-br from-zgreen-600 to-emerald-900 rounded-[2.5rem] relative overflow-hidden group">
                                                            <div className="relative z-10">
                                                                <GraduationCap className="h-12 w-12 text-white mb-6" />
                                                                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">Master The <br /> Future Of Code</h4>
                                                                <p className="text-white/70 text-caption mb-8 leading-relaxed">Join 1,000+ developers training with Zeplynk experts in modern engineering.</p>
                                                                <Link href="/academy" onClick={() => setActiveDropdown(null)}>
                                                                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-xl px-6 h-12 font-bold">Start Learning</Button>
                                                                </Link>
                                                            </div>
                                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                                <Users className="h-40 w-40" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-2/3 grid grid-cols-2 gap-x-6 gap-y-1">
                                                        {navData.academy.map((course) => (
                                                            <Link
                                                                key={course.name}
                                                                href={course.href}
                                                                onClick={() => setActiveDropdown(null)}
                                                                className="flex items-center gap-3 group/course px-3 py-2 rounded-xl hover:bg-white/5 transition-all"
                                                            >
                                                                <div className="w-2 h-2 rounded-full bg-zgreen-500 group-hover:scale-150 transition-transform flex-shrink-0" />
                                                                <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors">{course.name}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* ABOUT MEGA CONTENT */}
                                            {activeDropdown === 'about' && (
                                                <div className="flex-grow flex items-center gap-12">
                                                    <div className="w-1/4 h-full">
                                                        <div className="h-full p-6 bg-gradient-to-br from-zgreen-600 to-emerald-900 rounded-[2rem] relative overflow-hidden group/aboutHero">
                                                            <div className="relative z-10 flex flex-col h-full justify-between">
                                                                <div>
                                                                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6">
                                                                        <Layers className="h-6 w-6" />
                                                                    </div>
                                                                    <h4 className="text-2xl font-black text-white mb-3 leading-tight tracking-tight">Designing The <br />Digital Future.</h4>
                                                                    <p className="text-white/80 text-caption font-medium leading-relaxed max-w-[180px]">Our mission is to engineer high-performance infrastructure for global hyper-growth.</p>
                                                                </div>
                                                                <Link href="/about" onClick={() => setActiveDropdown(null)}>
                                                                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-xl px-6 h-11 text-[13px] font-black transition-all">Learn Our Story</Button>
                                                                </Link>
                                                            </div>
                                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/aboutHero:opacity-10 transition-opacity">
                                                                <Zap className="h-32 w-32" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="w-2/3 grid grid-cols-2 gap-8 h-full">
                                                        <div>
                                                            <h5 className="text-[9px] font-black text-zgreen-500 uppercase tracking-[0.4em] mb-4 ml-4">Our DNA</h5>
                                                            <div className="space-y-2">
                                                                <Link href="/about#story" onClick={() => setActiveDropdown(null)} className="flex items-center gap-4 group/item px-4 py-2.5 rounded-2xl hover:bg-white/5 transition-all">
                                                                    <div className="w-2 h-2 rounded-full bg-zgreen-500 group-hover/item:scale-150 transition-transform flex-shrink-0" />
                                                                    <span className="text-lg font-bold text-gray-400 group-hover/item:text-white transition-colors">Our Story</span>
                                                                </Link>
                                                                <Link href="/about#team" onClick={() => setActiveDropdown(null)} className="flex items-center gap-4 group/item px-4 py-2.5 rounded-2xl hover:bg-white/5 transition-all">
                                                                    <div className="w-2 h-2 rounded-full bg-zgreen-500 group-hover/item:scale-150 transition-transform flex-shrink-0" />
                                                                    <span className="text-lg font-bold text-gray-400 group-hover/item:text-white transition-colors">The Team</span>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h5 className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] mb-4 ml-4">Growth & Insights</h5>
                                                            <div className="space-y-2">
                                                                <Link href="/about#careers" onClick={() => setActiveDropdown(null)} className="flex items-center gap-4 group/item px-4 py-2.5 rounded-2xl hover:bg-white/5 transition-all">
                                                                    <div className="w-2 h-2 rounded-full bg-zgreen-500 group-hover/item:scale-150 transition-transform flex-shrink-0" />
                                                                    <span className="text-lg font-bold text-gray-400 group-hover/item:text-white transition-colors">Careers</span>
                                                                    <div className="px-1.5 py-0.5 rounded-md bg-zgreen-500/10 border border-zgreen-500/30 text-[8px] font-black text-zgreen-500 uppercase tracking-tighter">Hiring</div>
                                                                </Link>
                                                                <Link href="/insights" onClick={() => setActiveDropdown(null)} className="flex items-center gap-4 group/item px-4 py-2.5 rounded-2xl hover:bg-white/5 transition-all">
                                                                    <div className="w-2 h-2 rounded-full bg-zgreen-500 group-hover/item:scale-150 transition-transform flex-shrink-0" />
                                                                    <span className="text-lg font-bold text-gray-400 group-hover/item:text-white transition-colors">Blog / Insights</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeDropdown === 'contact-nav' && (
                                                <div className="flex-grow flex items-center gap-16">
                                                    {/* Left: gradient hero card — same style as Solutions/Academy/Industries */}
                                                    <div className="w-1/3">
                                                        <div className="p-10 bg-gradient-to-br from-zgreen-600 to-emerald-900 rounded-[2.5rem] relative overflow-hidden group">
                                                            <div className="relative z-10">
                                                                <Mail className="h-12 w-12 text-white mb-6" />
                                                                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                                                                    Let's Start The <br /> Conversation.
                                                                </h4>
                                                                <p className="text-white/70 text-caption mb-8 leading-relaxed">
                                                                    Whichever way you reach out, we typically reply within 24 hours.
                                                                </p>
                                                                <Link href="/contact" onClick={() => setActiveDropdown(null)}>
                                                                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-xl px-6 h-12 font-bold">
                                                                        Get In Touch
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                                <MessageSquare className="h-40 w-40" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Right: list — same style as Solutions/Academy/Industries */}
                                                    <div className="w-2/3 space-y-2">
                                                        {navData.contact.map((item) => {
                                                            const content = (
                                                                <>
                                                                    <div className="w-2 h-2 rounded-full bg-zgreen-500 group-hover/item:scale-150 transition-transform flex-shrink-0" />
                                                                    <span className="text-lg font-bold text-gray-400 group-hover/item:text-white transition-colors">
                                                                        {item.name}
                                                                    </span>
                                                                </>
                                                            );
                                                            return item.external ? (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    onClick={() => setActiveDropdown(null)}
                                                                    className="flex items-center gap-4 group/item px-4 py-2.5 rounded-2xl hover:bg-white/5 transition-all"
                                                                >
                                                                    {content}
                                                                </a>
                                                            ) : (
                                                                <Link
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    onClick={() => setActiveDropdown(null)}
                                                                    className="flex items-center gap-4 group/item px-4 py-2.5 rounded-2xl hover:bg-white/5 transition-all"
                                                                >
                                                                    {content}
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Right Area - Search & Mobile Toggle */}
                        <div className="flex items-center gap-3 relative z-50">
                            {/* Search Button */}
                            <button
                                onClick={() => setSearchOpen(true)}
                                aria-label="Search"
                                className="hidden lg:flex p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all group"
                            >
                                <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
                            </button>

                            <div className="lg:hidden">
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                                    className="text-white p-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-40 lg:hidden overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-zgreen-900/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex flex-col h-full pt-[calc(2.5rem+4.5rem)] px-6 space-y-3 overflow-y-auto overscroll-contain relative z-10">
                            <div className="space-y-4 pt-4 pb-32">

                                {/* Solutions Accordion */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => toggleMobileSection('solutions-mob')}
                                        className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all border ${activeMobileSection === 'solutions-mob' || isSectionActive('/solutions') ? 'bg-zgreen-500/10 border-zgreen-500/30' : 'bg-white/5 border-white/5'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-zgreen-500/20 flex items-center justify-center text-zgreen-500">
                                                <Bot className="h-3 w-3" />
                                            </div>
                                            <span className={`text-sm font-bold ${isSectionActive('/solutions') ? 'text-zgreen-500' : 'text-white'}`}>Solutions</span>
                                            {isSectionActive('/solutions') && <span className="w-1.5 h-1.5 rounded-full bg-zgreen-500" />}
                                        </div>
                                        <ChevronDown className={`h-3 w-3 text-gray-500 transition-transform duration-300 ${activeMobileSection === 'solutions-mob' ? 'rotate-180 text-zgreen-500' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {activeMobileSection === 'solutions-mob' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden pl-2 pr-1 space-y-2 pb-4 pt-2"
                                            >
                                                {navData.solutions.map((cat) => {
                                                    const catActive = isSectionActive(`/solutions/${cat.id}`);
                                                    return (
                                                        <Link
                                                            key={cat.title}
                                                            href={`/solutions/${cat.id}`}
                                                            className={`border rounded-xl p-3 flex items-center justify-between group/cat transition-all ${catActive ? 'bg-zgreen-500/10 border-zgreen-500/30' : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/5'}`}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                         >
                                                            <span className={`text-[13px] font-black uppercase tracking-widest transition-colors ${catActive ? 'text-zgreen-500' : 'text-gray-400 group-hover/cat:text-zgreen-500'}`}>{cat.title}</span>
                                                            <ArrowRight className={`h-3 w-3 text-zgreen-500 transition-all transform ${catActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover/cat:opacity-100'}`} />
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Industries Accordion */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => toggleMobileSection('industries-mob')}
                                        className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all border ${activeMobileSection === 'industries-mob' || isSectionActive('/industries') ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/5'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-500">
                                                <Building2 className="h-3 w-3" />
                                            </div>
                                            <span className={`text-sm font-bold ${isSectionActive('/industries') ? 'text-blue-400' : 'text-white'}`}>Industries</span>
                                            {isSectionActive('/industries') && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                                        </div>
                                        <ChevronDown className={`h-3 w-3 text-gray-500 transition-transform duration-300 ${activeMobileSection === 'industries-mob' ? 'rotate-180 text-blue-500' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {activeMobileSection === 'industries-mob' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden space-y-2 pb-4 pt-2"
                                            >
                                                {navData.industries.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="flex items-center text-gray-300 hover:text-white transition-colors text-[14px] font-medium py-2.5 px-5 bg-white/5 border border-white/5 rounded-2xl"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Academy Accordion */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => toggleMobileSection('academy-mob')}
                                        className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all border ${activeMobileSection === 'academy-mob' || isSectionActive('/academy') ? 'bg-purple-500/10 border-purple-500/30' : 'bg-white/5 border-white/5'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-500">
                                                <GraduationCap className="h-3 w-3" />
                                            </div>
                                            <span className={`text-sm font-bold ${isSectionActive('/academy') ? 'text-purple-400' : 'text-white'}`}>Academy</span>
                                            {isSectionActive('/academy') && <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />}
                                        </div>
                                        <ChevronDown className={`h-3 w-3 text-gray-500 transition-transform duration-300 ${activeMobileSection === 'academy-mob' ? 'rotate-180 text-purple-500' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {activeMobileSection === 'academy-mob' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden space-y-2 pb-4 pt-2"
                                            >
                                                {navData.academy.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="flex items-center text-gray-300 hover:text-white transition-colors text-[14px] font-medium py-2.5 px-5 bg-white/5 border border-white/5 rounded-2xl"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* About Accordion */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => toggleMobileSection('about-mob')}
                                        className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all border ${activeMobileSection === 'about-mob' || isSectionActive('/about') ? 'bg-orange-500/10 border-orange-500/30' : 'bg-white/5 border-white/5'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-orange-500/20 flex items-center justify-center text-orange-500">
                                                <Users className="h-3 w-3" />
                                            </div>
                                            <span className={`text-sm font-bold ${isSectionActive('/about') ? 'text-orange-400' : 'text-white'}`}>About Us</span>
                                            {isSectionActive('/about') && <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                                        </div>
                                        <ChevronDown className={`h-3 w-3 text-gray-500 transition-transform duration-300 ${activeMobileSection === 'about-mob' ? 'rotate-180 text-orange-500' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {activeMobileSection === 'about-mob' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden space-y-2 pb-4 pt-2"
                                            >
                                                {navData.about.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="flex items-center text-gray-300 hover:text-white transition-colors text-[14px] font-medium py-2.5 px-5 bg-white/5 border border-white/5 rounded-2xl"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Insights & Contact */}
                                <div className="grid grid-cols-1 gap-2 pt-2">
                                    <Link
                                        href="/insights"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center justify-between p-2.5 rounded-lg border transition-all group ${isSectionActive('/insights') ? 'bg-purple-500/10 border-purple-500/30' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-500">
                                                <MessageSquare className="h-3 w-3" />
                                            </div>
                                            <span className={`text-sm font-bold ${isSectionActive('/insights') ? 'text-purple-400' : 'text-white'}`}>Insights</span>
                                            {isSectionActive('/insights') && <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />}
                                        </div>
                                        <ArrowRight className="h-3 w-3 text-gray-500 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                                    </Link>

                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center justify-between p-2.5 rounded-lg border transition-all group ${isSectionActive('/contact') ? 'bg-zgreen-500/20 border-zgreen-500/40' : 'bg-zgreen-500/10 border-zgreen-500/20 hover:bg-zgreen-500/20'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-zgreen-500/20 flex items-center justify-center text-zgreen-500">
                                                <Mail className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm font-bold text-white">Contact</span>
                                            {isSectionActive('/contact') && <span className="w-1.5 h-1.5 rounded-full bg-zgreen-500" />}
                                        </div>
                                        <ArrowRight className="h-3 w-3 text-zgreen-500 group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    <Link
                                        href="/reviews"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center justify-between p-2.5 rounded-lg border transition-all group ${isSectionActive('/reviews') ? 'bg-zyellow-500/10 border-zyellow-500/30' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-zyellow-500/20 flex items-center justify-center text-zyellow-500">
                                                <Star className="h-3 w-3" />
                                            </div>
                                            <span className={`text-sm font-bold ${isSectionActive('/reviews') ? 'text-zyellow-400' : 'text-white'}`}>Reviews</span>
                                            {isSectionActive('/reviews') && <span className="w-1.5 h-1.5 rounded-full bg-zyellow-500" />}
                                        </div>
                                        <ArrowRight className="h-3 w-3 text-gray-500 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Bottom Actions */}
                        <div className="fixed bottom-0 left-0 w-full p-6 bg-black border-t border-white/5 z-50">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full h-12 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl text-base font-bold shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] transition-all">
                                        Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
        </>
    );
}

