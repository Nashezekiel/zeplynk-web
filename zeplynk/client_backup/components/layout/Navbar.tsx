import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap, Menu, X, ChevronDown,
    Code, Laptop, Database, ArrowRight,
    Bot, MessageSquare, BarChart3,
    Users, Briefcase, ShoppingBag, GraduationCap, Building2,
    FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Dropdown Data
    const solutions = {
        engineering: [
            { text: "Web Engineering", sub: "Corporate websites & apps" },
            { text: "Product Development", sub: "MVP & Scalable Tech" },
            { text: "System Architecture", sub: "Backend & Cloud" }
        ],
        business: [
            { text: "Internal Portals", sub: "HR & Admin Dashboards" },
            { text: "Operational Automation", sub: "CRM & Workflows" },
            { text: "Data Infrastructure", sub: "BI & Reporting" }
        ]
    };

    const aiSolutions = {
        capabilities: [
            { text: "AI Strategy", icon: Bot },
            { text: "Intelligent Automation", icon: Laptop },
            { text: "Conversational AI", icon: MessageSquare },
            { text: "Predictive Analytics", icon: BarChart3 }
        ]
    };

    const industries = [
        { text: "Recruitment & HR", icon: Users },
        { text: "Startups & SaaS", icon: Briefcase },
        { text: "E-commerce", icon: ShoppingBag },
        { text: "Education", icon: GraduationCap },
        { text: "SMEs & Enterprise", icon: Building2 }
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen || activeDropdown ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo */}
                        <Link to="/" className="flex items-center group relative z-50">
                            <div className="bg-zgreen-500/10 p-2 rounded-lg mr-3 group-hover:bg-zgreen-500/20 transition-colors">
                                <Zap className="h-6 w-6 text-zgreen-500" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                ZEPLYNK
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-6">

                            {/* Solutions Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('solutions')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeDropdown === 'solutions' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                                    Solutions <ChevronDown className="h-4 w-4" />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === 'solutions' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full -left-20 w-[600px] pt-4"
                                        >
                                            <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden p-6 grid grid-cols-3 gap-6">
                                                {/* Col 1 */}
                                                <div>
                                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Digital Engineering</h4>
                                                    <ul className="space-y-4">
                                                        {solutions.engineering.map(item => (
                                                            <li key={item.text} className="group/item">
                                                                <a
                                                                    href={`/web#${item.text.includes('System') ? 'systems' : item.text.includes('Product') ? 'product' : 'engineering'}`}
                                                                    className="block text-sm font-semibold text-white group-hover/item:text-zgreen-500 transition-colors"
                                                                >
                                                                    {item.text}
                                                                </a>
                                                                <span className="text-xs text-gray-500">{item.sub}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Col 2 */}
                                                <div>
                                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Business Systems</h4>
                                                    <ul className="space-y-4">
                                                        {solutions.business.map(item => (
                                                            <li key={item.text} className="group/item">
                                                                <Link to="/services" className="block text-sm font-semibold text-white group-hover/item:text-zgreen-500 transition-colors">
                                                                    {item.text}
                                                                </Link>
                                                                <span className="text-xs text-gray-500">{item.sub}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Col 3: Value Prop */}
                                                <div className="bg-white/5 rounded-xl p-4 flex flex-col justify-center text-center border border-white/5">
                                                    <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                                                        We design scalable, performance-driven digital systems tailored to your growth.
                                                    </p>
                                                    <Link to="/contact">
                                                        <Button size="sm" className="w-full bg-zgreen-600 hover:bg-zgreen-500 text-white">Start a Project</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* AI Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('ai')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeDropdown === 'ai' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                                    AI <ChevronDown className="h-4 w-4" />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === 'ai' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full -left-10 w-[450px] pt-4"
                                        >
                                            <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden p-6 grid grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                    {aiSolutions.capabilities.map((item) => (
                                                        <a
                                                            key={item.text}
                                                            href={`/ai#${item.text.includes('Predictive') ? 'analytics' : item.text.includes('Strategy') ? 'strategy' : 'automation'}`}
                                                            className="flex items-center gap-3 group/item"
                                                        >
                                                            <div className="p-2 bg-white/5 rounded-lg text-white group-hover/item:text-zgreen-500 transition-colors">
                                                                <item.icon className="h-4 w-4" />
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">
                                                                {item.text}
                                                            </span>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="flex flex-col justify-center border-l border-white/10 pl-6">
                                                    <h4 className="text-white font-bold mb-2">AI for Impact</h4>
                                                    <p className="text-xs text-gray-500 mb-4">Reduced costs. Faster execution. Smarter Decisions.</p>
                                                    <Link to="/contact" className="text-xs text-zgreen-500 font-medium hover:underline flex items-center">
                                                        Consult an Expert <ArrowRight className="ml-1 h-3 w-3" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Industries Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('industries')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeDropdown === 'industries' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                                    Industries <ChevronDown className="h-4 w-4" />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === 'industries' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full -left-10 w-[240px] pt-4"
                                        >
                                            <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden p-2">
                                                {industries.map(item => (
                                                    <Link key={item.text} to="/services" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-colors group/item">
                                                        <item.icon className="h-4 w-4 text-gray-500 group-hover/item:text-white transition-colors" />
                                                        <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">{item.text}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link to="/web" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                Web Engineering
                            </Link>

                            {/* Academy Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('academy')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeDropdown === 'academy' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                                    Academy <ChevronDown className="h-4 w-4" />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === 'academy' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full -left-4 w-[200px] pt-4"
                                        >
                                            <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden p-2">
                                                {['Programs', 'Corporate Training', 'Internships'].map(item => (
                                                    <a key={item} href={`/academy#${item.toLowerCase() === 'programs' ? 'highlights' : 'curriculum'}`} className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                                        {item}
                                                    </a>
                                                ))}
                                                <div className="h-px bg-white/10 my-1" />
                                                <Link to="/register" className="block px-4 py-2 text-sm text-zgreen-500 hover:bg-zgreen-500/10 rounded-lg transition-colors">
                                                    Apply Now
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* About Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('about')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeDropdown === 'about' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                                    About <ChevronDown className="h-4 w-4" />
                                </button>
                                <AnimatePresence>
                                    {activeDropdown === 'about' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full right-0 w-[180px] pt-4"
                                        >
                                            <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden p-2">
                                                {['Our Story', 'Our Process', 'Careers', 'Partnerships'].map(item => (
                                                    <Link key={item} to="/about" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                                        {item}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </div>

                        {/* Mobile Toggle */}
                        <div className="lg:hidden relative z-50">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 lg:hidden overflow-y-auto pt-28 pb-32 px-6"
                    >
                        <div className="space-y-10">
                            {/* Navigation Links */}
                            <div className="space-y-6">
                                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-4xl font-bold text-white hover:text-zgreen-500 transition-colors">Home</Link>

                                <div className="space-y-4 pl-4 border-l-2 border-white/10">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Our Expertise</p>
                                    <Link to="/web" onClick={() => setMobileMenuOpen(false)} className="block text-2xl text-gray-300 hover:text-white transition-colors">Web Engineering</Link>
                                    <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-2xl text-gray-300 hover:text-white transition-colors">Business Systems</Link>
                                    <Link to="/ai" onClick={() => setMobileMenuOpen(false)} className="block text-2xl text-gray-300 hover:text-white transition-colors">AI & Automation</Link>
                                </div>

                                <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-3xl font-bold text-white hover:text-zgreen-500 transition-colors">Industries</Link>
                                <Link to="/academy" onClick={() => setMobileMenuOpen(false)} className="block text-3xl font-bold text-white hover:text-zgreen-500 transition-colors">Academy</Link>
                                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-3xl font-bold text-white hover:text-zgreen-500 transition-colors">About</Link>
                                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-3xl font-bold text-white hover:text-zgreen-500 transition-colors">Contact</Link>
                            </div>
                        </div>

                        {/* Sticky Bottom Actions */}
                        <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-50 border-t border-white/10">
                            <div className="flex flex-col gap-3">
                                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full h-14 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                        Book a Strategy Call
                                    </Button>
                                </Link>
                                <div className="flex justify-center gap-6 pt-2">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter</a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
