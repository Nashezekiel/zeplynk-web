"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap, Menu, X, ChevronDown, Search,
    Laptop, BarChart3,
    Bot, MessageSquare, Mail,
    Users, Briefcase, ShoppingBag, GraduationCap, Building2,
    ArrowRight, Layers, Cpu, Cloud, Database, Shield, Globe
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);

    const toggleMobileSection = (section: string) => {
        setActiveMobileSection(activeMobileSection === section ? null : section);
    };
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Comprehensive Navigation Data
    const navData = {
        solutions: [
            {
                id: "ai",
                title: "AI & Intelligent Systems",
                items: [
                    { name: "AI Strategy & Consulting", href: "/solutions#ai" },
                    { name: "Intelligent Automation", href: "/solutions#ai" },
                    { name: "Conversational AI", href: "/solutions#ai" },
                    { name: "Generative AI Solutions", href: "/solutions#ai" },
                    { name: "Computer Vision", href: "/solutions#ai" }
                ]
            },
            {
                id: "engineering",
                title: "Digital Product Engineering",
                items: [
                    { name: "Web Application Development", href: "/solutions#engineering" },
                    { name: "Mobile App Development", href: "/solutions#engineering" },
                    { name: "SaaS Product Development", href: "/solutions#engineering" },
                    { name: "API Development & Integration", href: "/solutions#engineering" },
                    { name: "UI/UX Engineering", href: "/solutions#engineering" }
                ]
            },
            {
                id: "cloud",
                title: "Cloud & DevOps",
                items: [
                    { name: "Cloud Infrastructure", href: "/solutions#cloud" },
                    { name: "DevOps & CI/CD", href: "/solutions#cloud" },
                    { name: "Cloud Migration", href: "/solutions#cloud" },
                    { name: "Serverless Architecture", href: "/solutions#cloud" },
                    { name: "Monitoring & Observability", href: "/solutions#cloud" }
                ]
            },
            {
                id: "enterprise",
                title: "Enterprise Systems",
                items: [
                    { name: "CRM & ERP Solutions", href: "/solutions#enterprise" },
                    { name: "Enterprise Integration", href: "/solutions#enterprise" },
                    { name: "Workflow Automation", href: "/solutions#enterprise" },
                    { name: "Data Warehousing", href: "/solutions#enterprise" }
                ]
            },
            {
                id: "security",
                title: "Cybersecurity",
                items: [
                    { name: "Application Security", href: "/solutions#security" },
                    { name: "Penetration Testing", href: "/solutions#security" },
                    { name: "Identity & Access Management", href: "/solutions#security" },
                    { name: "Compliance & Governance", href: "/solutions#security" }
                ]
            },
            {
                id: "data",
                title: "Data & Analytics",
                items: [
                    { name: "Business Intelligence", href: "/solutions#data" },
                    { name: "Real-Time Dashboards", href: "/solutions#data" },
                    { name: "Big Data Engineering", href: "/solutions#data" },
                    { name: "Customer Analytics", href: "/solutions#data" }
                ]
            }
        ],
        industries: [
            { name: "Financial Services & FinTech", href: "/industries#fintech" },
            { name: "Healthcare & MedTech", href: "/industries#healthcare" },
            { name: "Education & EdTech", href: "/industries#edtech" },
            { name: "Retail & E-commerce", href: "/industries#retail" },
            { name: "Government & Public Sector", href: "/industries#government" },
            { name: "Logistics & Supply Chain", href: "/industries#logistics" },
            { name: "Manufacturing", href: "/industries#manufacturing" },
            { name: "Telecoms & Media", href: "/industries#telecoms" }
        ],
        academy: [
            { name: "Front-End Development", href: "/academy#frontend" },
            { name: "Back-End Development", href: "/academy#backend" },
            { name: "UI/UX Design", href: "/academy#design" },
            { name: "Cloud Fundamentals", href: "/academy#cloud" },
            { name: "Corporate Training", href: "/academy#corporate" },
            { name: "Internship Programme", href: "/academy#internships" },
            { name: "Certifications", href: "/academy#certs" }
        ],
        about: [
            { name: "Our Story", href: "/about#story" },
            { name: "Team", href: "/about#team" },
            { name: "Careers", href: "/about#careers" },
            { name: "Blog", href: "/news" }
        ],
        contact: [
            { name: "Get a Quote", href: "/contact#quote" },
            { name: "Book a Call", href: "/contact#call" },
            { name: "Partner With Us", href: "/contact#partner" }
        ]
    };
    return (
        <>
            <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'top-0 bg-black/90 backdrop-blur-xl border-b border-white/10' : 'top-10 md:top-14 bg-transparent'
                } ${mobileMenuOpen || activeDropdown ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">

                        {/* Logo */}
                        <Link href="/" className="flex items-center group relative z-50">
                            <div className="relative w-10 h-10 md:w-12 md:h-12 mr-2 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src="/theLogo-removebg-preview.png"
                                    alt="ZEPLYNK Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                ZEPLYNK
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
                                        className="fixed top-20 left-0 w-full h-[70vh] bg-black/95 backdrop-blur-3xl border-b border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)] pointer-events-auto overflow-hidden"
                                    >
                                        <div className="max-w-7xl mx-auto h-full px-8 py-12 flex flex-col">
                                            
                                            {/* SOLUTIONS MEGA CONTENT */}
                                            {activeDropdown === 'solutions' && (
                                                <div className="flex-grow flex flex-col justify-center">
                                                    <div className="grid grid-cols-4 gap-x-8 gap-y-12">
                                                        {navData.solutions.map((cat, idx) => (
                                                            <div key={idx} className="group/cat">
                                                                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
                                                                    <div className="text-zgreen-500 group-hover/cat:scale-110 transition-transform">
                                                                        {cat.title.toLowerCase().includes('ai') && <Bot className="h-4 w-4" />}
                                                                        {cat.title.toLowerCase().includes('engineering') && <Cpu className="h-4 w-4" />}
                                                                        {cat.title.toLowerCase().includes('cloud') && <Cloud className="h-4 w-4" />}
                                                                        {cat.title.toLowerCase().includes('enterprise') && <Building2 className="h-4 w-4" />}
                                                                        {cat.title.toLowerCase().includes('security') && <Shield className="h-4 w-4" />}
                                                                        {cat.title.toLowerCase().includes('data') && <Database className="h-4 w-4" />}
                                                                    </div>
                                                                    <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em]">{cat.title}</h4>
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-3">
                                                                    {cat.items.slice(0, 4).map((item) => (
                                                                        <Link 
                                                                            key={item.name} 
                                                                            href={item.href}
                                                                            onClick={() => setActiveDropdown(null)}
                                                                            className="text-[14px] font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/item"
                                                                        >
                                                                            <span className="w-1 h-1 rounded-full bg-zgreen-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                                            {item.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                        
                                                        <div className="p-6 bg-zgreen-500/5 rounded-2xl border border-zgreen-500/10 hover:bg-zgreen-500/10 transition-all group/feat flex flex-col justify-between">
                                                            <div>
                                                                <div className="text-zgreen-500 mb-4 opacity-50 group-hover/feat:opacity-100 transition-opacity">
                                                                    <BarChart3 className="h-6 w-6" />
                                                                </div>
                                                                <h5 className="text-sm font-bold text-white mb-2">ROI Analytics</h5>
                                                                <p className="text-[11px] text-gray-500">Measure technical performance and business impact.</p>
                                                            </div>
                                                            <Link href="/solutions" onClick={() => setActiveDropdown(null)} className="text-[10px] font-black uppercase text-zgreen-500 flex items-center gap-2">
                                                                View Case Studies <ArrowRight className="h-3 w-3" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mt-10 p-5 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-xl bg-zgreen-500/10 flex items-center justify-center text-zgreen-500">
                                                                <Zap className="h-6 w-6" />
                                                            </div>
                                                            <div>
                                                                <h5 className="text-base font-bold text-white leading-none mb-1">Architecture That Scales</h5>
                                                                <p className="text-xs text-gray-500 font-medium tracking-tight">Enterprise-grade digital systems engineered for global performance.</p>
                                                            </div>
                                                        </div>
                                                        <Link href="/solutions" onClick={() => setActiveDropdown(null)}>
                                                            <Button size="sm" className="h-10 px-6 bg-white text-black hover:bg-zgreen-500 hover:text-white rounded-xl font-black uppercase text-[10px] tracking-widest transition-all">
                                                                Full Catalog <ArrowRight className="ml-2 h-3 w-3" />
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}

                                            {/* INDUSTRIES MEGA CONTENT */}
                                            {activeDropdown === 'industries' && (
                                                <div className="flex-grow flex flex-col justify-center">
                                                    <div className="grid grid-cols-4 gap-8">
                                                        {navData.industries.map((industry) => (
                                                            <Link 
                                                                key={industry.name} 
                                                                href={industry.href}
                                                                onClick={() => setActiveDropdown(null)}
                                                                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-zgreen-500/30 hover:bg-white/10 transition-all group/ind"
                                                            >
                                                                <h4 className="text-sm font-bold text-gray-300 group-hover/ind:text-white mb-2">{industry.name}</h4>
                                                                <p className="text-[11px] text-gray-500 group-hover/ind:text-zgreen-400 uppercase tracking-tighter font-black">Strategic Solutions</p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div className="mt-12 text-center">
                                                        <p className="text-gray-500 text-sm italic font-medium">Powering 12+ sectors with bespoke engineering intelligence.</p>
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
                                                                <p className="text-white/70 text-sm mb-8 leading-relaxed">Join 1,000+ developers training with ZEPLYNK experts in modern engineering.</p>
                                                                <Link href="/academy" onClick={() => setActiveDropdown(null)}>
                                                                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-xl px-6 h-12 font-bold">Start Learning</Button>
                                                                </Link>
                                                            </div>
                                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                                <Users className="h-40 w-40" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-2/3 grid grid-cols-2 gap-x-12 gap-y-8">
                                                        {navData.academy.map((course) => (
                                                            <Link 
                                                                key={course.name} 
                                                                href={course.href}
                                                                onClick={() => setActiveDropdown(null)}
                                                                className="flex items-center gap-4 group/course px-4 py-3 rounded-2xl hover:bg-white/5 transition-all"
                                                            >
                                                                <div className="w-2 h-2 rounded-full bg-zgreen-500 group-hover:scale-150 transition-transform" />
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
                                                                    <p className="text-white/80 text-[13px] font-medium leading-relaxed max-w-[180px]">Our mission is to engineer high-performance infrastructure for global hyper-growth.</p>
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
                                                        <div className="space-y-8">
                                                            <div>
                                                                <h5 className="text-[9px] font-black text-zgreen-500 uppercase tracking-[0.4em] mb-4">Our DNA</h5>
                                                                <div className="space-y-6">
                                                                    <Link href="/about#story" onClick={() => setActiveDropdown(null)} className="group/item block pb-3 border-b border-white/5">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <h6 className="text-xl font-bold text-gray-300 group-hover/item:text-white transition-colors">Our Story</h6>
                                                                            <ArrowRight className="h-4 w-4 text-zgreen-500 opacity-0 group-hover/item:opacity-100 transition-all" />
                                                                        </div>
                                                                        <p className="text-gray-500 text-xs font-medium leading-relaxed">How we built Zeplynk to solve modern engineering complexity.</p>
                                                                    </Link>
                                                                    <Link href="/about#team" onClick={() => setActiveDropdown(null)} className="group/item block pb-3 border-b border-white/5">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <h6 className="text-xl font-bold text-gray-300 group-hover/item:text-white transition-colors">The Team</h6>
                                                                            <ArrowRight className="h-4 w-4 text-zgreen-500 opacity-0 group-hover/item:opacity-100 transition-all" />
                                                                        </div>
                                                                        <p className="text-gray-500 text-xs font-medium leading-relaxed">Meet the world-class engineers behind our elite technology systems.</p>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="space-y-8">
                                                            <div>
                                                                <h5 className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] mb-4">Growth & Insights</h5>
                                                                <div className="space-y-6">
                                                                    <Link href="/about#careers" onClick={() => setActiveDropdown(null)} className="group/item block pb-3 border-b border-white/5">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <h6 className="text-xl font-bold text-gray-300 group-hover/item:text-white transition-colors">Careers</h6>
                                                                            <div className="px-1.5 py-0.5 rounded-md bg-zgreen-500/10 border border-zgreen-500/30 text-[8px] font-black text-zgreen-500 uppercase tracking-tighter">Hiring</div>
                                                                            <ArrowRight className="h-4 w-4 text-zgreen-500 opacity-0 group-hover/item:opacity-100 transition-all" />
                                                                        </div>
                                                                        <p className="text-gray-500 text-xs font-medium leading-relaxed">Join us in our mission to train 1M+ developers across Africa.</p>
                                                                    </Link>
                                                                    <Link href="/insights" onClick={() => setActiveDropdown(null)} className="group/item block pb-3 border-b border-white/5">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <h6 className="text-xl font-bold text-gray-300 group-hover/item:text-white transition-colors">Blog / Insights</h6>
                                                                            <ArrowRight className="h-4 w-4 text-zgreen-500 opacity-0 group-hover/item:opacity-100 transition-all" />
                                                                        </div>
                                                                        <p className="text-gray-500 text-xs font-medium leading-relaxed">Deep tech dives, case studies, and engineering best practices.</p>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeDropdown === 'contact-nav' && (
                                                <div className="flex-grow flex items-center justify-center">
                                                    <div className="max-w-4xl w-full grid grid-cols-2 gap-12">
                                                        {navData.contact.map((item) => (
                                                            <Link 
                                                                key={item.name} 
                                                                href={item.href}
                                                                onClick={() => setActiveDropdown(null)}
                                                                className="relative p-10 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-zgreen-500/50 hover:bg-zinc-800 transition-all group overflow-hidden"
                                                            >
                                                                <div className="relative z-10">
                                                                    <h4 className="text-2xl font-black text-white mb-3 transition-transform group-hover:-translate-y-1">{item.name}</h4>
                                                                    <div className="flex items-center gap-2 text-zgreen-500 font-bold uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                                        Get Started <ArrowRight className="h-3 w-3" />
                                                                    </div>
                                                                </div>
                                                                <div className="absolute bottom-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity translate-x-4 translate-y-4">
                                                                    <Mail className="h-16 w-16" />
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Right Area - Search & Mobile Toggle */}
                        <div className="flex items-center gap-2 relative z-50">
                            {/* Search Button */}
                            <button className="hidden lg:flex p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all group">
                                <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
                            </button>

                            <div className="lg:hidden">
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="text-white p-1.5 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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

                        <div className="flex flex-col h-full pt-[calc(2.5rem+4rem)] px-6 space-y-3 overflow-y-auto relative z-10">
                            <div className="space-y-4 pt-4 pb-32">

                                {/* Solutions Accordion */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => toggleMobileSection('solutions-mob')}
                                        className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all border ${activeMobileSection === 'solutions-mob' ? 'bg-zgreen-500/10 border-zgreen-500/30' : 'bg-white/5 border-white/5'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-zgreen-500/20 flex items-center justify-center text-zgreen-500">
                                                <Bot className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm font-bold text-white">Solutions</span>
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
                                                {navData.solutions.map((cat) => (
                                                    <Link
                                                        key={cat.title}
                                                        href={`/solutions#${cat.id}`}
                                                        className="bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 rounded-xl p-3 flex items-center justify-between group/cat"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest group-hover/cat:text-zgreen-500 transition-colors">{cat.title}</span>
                                                        <ArrowRight className="h-3 w-3 text-zgreen-500 opacity-0 group-hover/cat:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Industries Accordion */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => toggleMobileSection('industries-mob')}
                                        className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all border ${activeMobileSection === 'industries-mob' ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/5'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-500">
                                                <Building2 className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm font-bold text-white">Industries</span>
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
                                        className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all border ${activeMobileSection === 'academy-mob' ? 'bg-purple-500/10 border-purple-500/30' : 'bg-white/5 border-white/5'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-500">
                                                <GraduationCap className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm font-bold text-white">Academy</span>
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
                                        className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all border ${activeMobileSection === 'about-mob' ? 'bg-orange-500/10 border-orange-500/30' : 'bg-white/5 border-white/5'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-orange-500/20 flex items-center justify-center text-orange-500">
                                                <Users className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm font-bold text-white">About Us</span>
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
                                        className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-500">
                                                <MessageSquare className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm font-bold text-white">Insights</span>
                                        </div>
                                        <ArrowRight className="h-3 w-3 text-gray-500 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                                    </Link>

                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-between p-2.5 rounded-lg bg-zgreen-500/10 border border-zgreen-500/20 hover:bg-zgreen-500/20 transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-md bg-zgreen-500/20 flex items-center justify-center text-zgreen-500">
                                                <Mail className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm font-bold text-white">Contact</span>
                                        </div>
                                        <ArrowRight className="h-3 w-3 text-zgreen-500 group-hover:translate-x-1 transition-transform" />
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
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full h-12 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl text-base font-bold shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] transition-all">
                                        Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

