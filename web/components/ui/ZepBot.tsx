"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, Brain, GraduationCap } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const CONTACT_PHONE = "0806 726 3891";
const CONTACT_EMAIL = "zeplynk001@gmail.com";
const CONTACT_LINE = `You can reach the team directly on ${CONTACT_PHONE} or ${CONTACT_EMAIL} and we'll pick it up from there.`;

const ZepKnowledge = {
    introduction: "Hi! I'm ZepBot, your AI guide to Zeplynk. We specialize in Agentic AI, Digital Product Engineering, and Tech Education. How can I help you scale today?",

    solutions: {
        ai: "Our AI & Intelligent Systems expertise covers AI Strategy, Workflow Automation, Conversational AI, and Computer Vision. We help businesses integrate 'Agentic' capabilities into their daily operations. Explore /solutions/ai-automation for more.",
        engineering: "Zeplynk engineers high-performance web/mobile platforms, SaaS products, and enterprise-grade systems. We focus on scalability and architectural precision. See /solutions/web-engineering.",
        mobile: "We build native and cross-platform mobile apps with React Native and Flutter, from MVP to app-store launch. Check /solutions/mobile-apps.",
        backend: "Our backend & API team builds secure, scalable services and integrations — REST, GraphQL, databases, and third-party integrations. Visit /solutions/backend-api.",
        cloud: "We offer Cloud infrastructure, DevOps (CI/CD), migration, and serverless architecture to ensure your business is built for global hyper-growth. Check /solutions/cloud-devops.",
        enterprise: "Our Enterprise Systems integrate legacy processes with modern automation, including CRM and ERP solutions tailored for SMEs. Visit /solutions/enterprise-digitization.",
        design: "Our UI/UX & Product Design team handles research, prototyping in Figma, and interface design that converts. Visit /solutions/ui-ux-design.",
        security: "Cybersecurity is core to our engineering. We provide Penetration Testing, IAM, Application Security, and Compliance Governance. Secure your assets at /solutions/cybersecurity.",
        data: "Our Data & Analytics team builds high-speed data pipelines, real-time dashboards, and BI systems to turn raw data into strategic intelligence. Visit /solutions/data-bi."
    },

    academy: {
        mission: "Zeplynk Academy's mission is to train 1 million+ developers across Africa by 2030, bridging the talent gap in modern engineering and Agentic AI. Start your journey at /academy.",
        impact: "We have already trained over 2,000 students in Nigeria and our alumni contribute to leading global tech firms.",
        courses: "Academy tracks include Frontend, Backend & Full Stack Engineering, Mobile App Dev, Data Analytics & Data Science, AI Engineering, Cloud Computing, DevOps, Cybersecurity, UI/UX Design, and Product Management. Browse the full catalog at /academy.",
        corporate: "We also run Corporate Training for teams — custom upskilling programs in software engineering, AI, and cloud for your workforce. See /academy#corporate or reach out via /contact."
    },

    company: {
        about: "Zeplynk is a Nigerian tech solutions and education company founded in 2024 and based in Kaduna, building web engineering, AI automation, and software products while running Zeplynk Academy to train developers across Africa. More at /about.",
        founder: "Zeplynk was founded by Nash Ezekiel Pam, who serves as Founder & CEO.",
        impact: "Zeplynk has helped launch over 50 startups, automated 100+ business processes, and has a community footprint across Nigeria's 36 states.",
        values: "We are driven by Excellence, Innovation, Impact, and Accessibility. Every line of code is an investment in Africa's digital future.",
        industries: "We work across Recruitment & HR, Startups & SaaS, E-commerce, Education, and SMEs & Corporate businesses. See /industries for details.",
        work: "You can see real client work and case studies on our Portfolio page at /work.",
        insights: "We publish engineering and AI deep-dives on our blog — check out /insights for the latest posts.",
        reviews: "You can read (or leave) client feedback on our Reviews page at /reviews.",
        contact: `You can book a strategy call or hire our engineering team directly at /contact, or reach us on ${CONTACT_PHONE} / ${CONTACT_EMAIL}. We're ready to help you scale.`,
        pricing: "Zeplynk solutions are custom-engineered for specific business needs. We use value-based pricing, which is why we recommend a strategy call to provide an accurate quote based on your scale and requirements. Visit /contact to book yours."
    },

    general: {
        location: "Zeplynk is headquartered in Kaduna, Nigeria, with a presence across Jos, Abuja, and Lagos — and a mission to bring tech excellence to every state.",
        hiring: "We are always looking for visionary engineers! Check our About page or reach out via /contact for career opportunities."
    }
};

type Rule = { keywords: string[]; response: string };

const rules: Rule[] = [
    // High-priority pricing/cost match
    { keywords: ['cost', 'price', 'pricing', 'quote', 'budget', 'billing', 'payment', 'amount', 'expensive', 'cheap'], response: ZepKnowledge.company.pricing },

    // Solutions
    { keywords: ['ai ', ' ai', 'artificial intelligence', 'automation', 'intelligent', 'chatbot', 'agentic', 'llm'], response: ZepKnowledge.solutions.ai },
    { keywords: ['mobile', 'ios', 'android', 'flutter', 'react native'], response: ZepKnowledge.solutions.mobile },
    { keywords: ['backend', 'api', 'server side', 'integration'], response: ZepKnowledge.solutions.backend },
    { keywords: ['cloud', 'devops', 'infra', 'aws', 'azure', 'kubernetes', 'docker', 'deployment'], response: ZepKnowledge.solutions.cloud },
    { keywords: ['enterprise', 'erp', 'crm', 'digitization', 'legacy'], response: ZepKnowledge.solutions.enterprise },
    { keywords: ['design', 'ui', 'ux', 'figma', 'prototype', 'branding'], response: ZepKnowledge.solutions.design },
    { keywords: ['security', 'cyber', 'pentest', 'protect', 'compliance', 'hacking'], response: ZepKnowledge.solutions.security },
    { keywords: ['data', 'analytics', ' bi ', 'dashboard', 'business intelligence'], response: ZepKnowledge.solutions.data },
    { keywords: ['web', 'engineering', 'app', 'saas', 'website', 'platform', 'software'], response: ZepKnowledge.solutions.engineering },

    // Academy
    { keywords: ['corporate training', 'upskill', 'team training', 'workforce'], response: ZepKnowledge.academy.corporate },
    { keywords: ['course', 'curriculum', 'syllabus', 'track', 'program', 'programme', 'bootcamp'], response: ZepKnowledge.academy.courses },
    { keywords: ['academy', 'study', 'learn', 'student', 'enrol', 'enroll', 'register', 'training'], response: `${ZepKnowledge.academy.mission} ${ZepKnowledge.academy.impact}` },
    { keywords: ['mission', 'vision', '2030', 'goal'], response: ZepKnowledge.academy.mission },

    // Company
    { keywords: ['founder', 'ceo', 'nash', 'who runs', 'who owns'], response: ZepKnowledge.company.founder },
    { keywords: ['about zeplynk', 'who is zeplynk', 'what is zeplynk', 'what do you do', 'company', 'history', 'founded', 'when were you'], response: ZepKnowledge.company.about },
    { keywords: ['industr', 'sector', 'niche', 'who do you work with', 'clients'], response: ZepKnowledge.company.industries },
    { keywords: ['portfolio', 'case stud', 'previous work', 'projects you', 'examples'], response: ZepKnowledge.company.work },
    { keywords: ['blog', 'insight', 'article', 'news'], response: ZepKnowledge.company.insights },
    { keywords: ['review', 'testimonial', 'feedback', 'rating'], response: ZepKnowledge.company.reviews },
    { keywords: ['impact', 'startup', 'success', 'track record', 'results'], response: `${ZepKnowledge.company.impact} We've helped launch 50+ startups and automated over 100 business processes.` },
    { keywords: ['value', 'culture', 'why zeplynk', 'why choose'], response: ZepKnowledge.company.values },

    // Contact & Location
    { keywords: ['contact', 'hire', 'call', 'booking', 'meet', 'talk to', 'speak to', 'get in touch', 'reach you', 'reach out'], response: ZepKnowledge.company.contact },
    { keywords: ['location', 'where', 'nigeria', 'office', 'address', 'kaduna', 'jos', 'abuja', 'lagos'], response: ZepKnowledge.general.location },
    { keywords: ['job', 'hiring', 'career', 'join zeplynk', 'vacanc', 'employ'], response: ZepKnowledge.general.hiring },

    // Small talk
    { keywords: ['hello', 'hi ', 'hey', 'good morning', 'good afternoon', 'good evening'], response: "Hello! I'm ZepBot. I can tell you about our AI solutions, Web Engineering, Academy programs, or help you book a strategy call. What's on your mind?" },
    { keywords: ['thank', 'thanks', 'appreciate'], response: `You're welcome! If anything else comes up, ${CONTACT_LINE}` },
];

const getBotResponse = (input: string): string => {
    const q = ` ${input.toLowerCase()} `;

    for (const rule of rules) {
        if (rule.keywords.some((keyword) => q.includes(keyword))) {
            return rule.response;
        }
    }

    return `I don't have a solid answer for that one yet, but I don't want to leave you stuck — ${CONTACT_LINE} In the meantime, I can also tell you about our AI Solutions, Web Engineering, or the Zeplynk Academy.`;
};

export default function ZepBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: ZepKnowledge.introduction, sender: 'bot', timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), text, sender: 'user', timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulation of AI processing
        setTimeout(() => {
            const botResponse = getBotResponse(text);
            const botMsg: Message = { id: (Date.now() + 1).toString(), text: botResponse, sender: 'bot', timestamp: new Date() };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    const quickActions = [
        { label: "AI Solutions", icon: Brain, action: () => handleSend("Tell me about your AI solutions") },
        { label: "Our Mission", icon: GraduationCap, action: () => handleSend("What is your 2030 mission?") },
        { label: "Success Stories", icon: Sparkles, action: () => handleSend("What impact have you made?") },
        { label: "Start Project", icon: Send, action: () => handleSend("How can I hire Zeplynk?") }
    ];

    return (
        <div className="fixed bottom-[5.5rem] right-6 z-[100] font-friendly">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-[90vw] sm:w-[400px] h-[min(420px,calc(100dvh-13rem))] bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 bg-zgreen-500/10 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-2xl bg-zgreen-500 flex items-center justify-center text-white relative">
                                    <Bot className="h-6 w-6" />
                                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-zgreen-400 rounded-full border-2 border-zinc-950 animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold leading-none">ZepBot</h3>
                                    <span className="text-[10px] text-zgreen-400 uppercase tracking-widest font-black">AI Consultant</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-3xl text-sm ${msg.sender === 'user'
                                        ? 'bg-zgreen-600 text-white rounded-tr-none shadow-[0_4px_15px_rgba(34,197,94,0.3)]'
                                        : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-4 rounded-3xl rounded-tl-none border border-white/5">
                                        <div className="flex gap-1">
                                            <div className="h-1.5 w-1.5 bg-zgreen-500 rounded-full animate-bounce" />
                                            <div className="h-1.5 w-1.5 bg-zgreen-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <div className="h-1.5 w-1.5 bg-zgreen-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        {messages.length === 1 && (
                            <div className="px-6 py-2 flex flex-wrap gap-2">
                                {quickActions.map((action) => (
                                    <button
                                        key={action.label}
                                        onClick={action.action}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs hover:bg-zgreen-500/20 hover:border-zgreen-500/40 hover:text-zgreen-400 transition-all"
                                    >
                                        <action.icon className="h-3.5 w-3.5" />
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-zinc-950/40 border-t border-white/5">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                                className="relative flex items-center"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask anything..."
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white focus:outline-none focus:border-zgreen-500/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-1.5 p-2 bg-zgreen-500 hover:bg-zgreen-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-white rounded-full transition-all"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                            <p className="text-[10px] text-center text-white/20 mt-3 font-medium uppercase tracking-[0.2em]">Powered by ZepBot v1.0</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`h-16 w-16 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all duration-500 group ${isOpen
                    ? 'bg-zinc-900 border border-white/10 rotate-90'
                    : 'bg-zgreen-500 hover:bg-zgreen-400 shadow-[0_0_30px_rgba(34,197,94,0.4)]'
                    }`}
            >
                {isOpen ? (
                    <X className="h-7 w-7 text-white" />
                ) : (
                    <div className="relative">
                        <MessageSquare className="h-7 w-7 text-white group-hover:hidden" />
                        <Sparkles className="h-7 w-7 text-white hidden group-hover:block animate-pulse" />
                        <div className="absolute -top-3 -right-3 h-5 w-5 bg-white text-zgreen-600 text-[10px] font-black rounded-full flex items-center justify-center border-2 border-zgreen-500 animate-bounce">
                            1
                        </div>
                    </div>
                )}
            </motion.button>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}
