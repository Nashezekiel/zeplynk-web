"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, Brain, GraduationCap, Code2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const ZepKnowledge = {
    introduction: "Hi! I'm ZepBot, your AI guide to ZEPLYNK. We specialize in Agentic AI, Digital Product Engineering, and Tech Education. How can I help you scale today?",
    
    solutions: {
        ai: "Our AI & Intelligent Systems expertise covers AI Strategy, Workflow Automation, Conversational AI, and Computer Vision. We help businesses integrate 'Agentic' capabilities into their daily operations. Explore /solutions#ai for more.",
        engineering: "ZEPLYNK engineers high-performance web/mobile platforms, SaaS products, and enterprise-grade systems. We focus on scalability and architectural precision. See our work at /solutions#engineering.",
        cloud: "We offer Cloud infrastructure, DevOps (CI/CD), migration, and serverless architecture to ensure your business is built for global hyper-growth. Check /solutions#cloud.",
        enterprise: "Our Enterprise Systems integrate legacy processes with modern automation, including CRM and ERP solutions tailored for SMEs. Visit /solutions#enterprise.",
        security: "Cybersecurity is core to our engineering. We provide Penetration Testing, IAM, Application Security, and Compliance Governance. Secure your assets at /solutions#security.",
        data: "Our Data & Analytics team builds high-speed data pipelines, real-time dashboards, and BI systems to turn raw data into strategic intelligence. Visit /solutions#data."
    },
    
    academy: {
        mission: "ZEPLYNK Academy's mission is to train 1 million+ developers across Africa by 2030, bridging the talent gap in modern engineering and Agentic AI. Start your journey at /academy.",
        impact: "We have already trained over 2,000 students in Nigeria and our alumni contribute to leading global tech firms."
    },

    company: {
        impact: "ZEPLYNK has helped launch over 50 startups, automated 100+ business processes, and has a community footprint across Nigeria's 36 states.",
        values: "We are driven by Excellence, Innovation, Impact, and Accessibility. Every line of code is an investment in Africa's digital future.",
        contact: "You can book a strategy call or hire our engineering team directly at /contact. We're ready to help you scale.",
        pricing: "ZEPLYNK solutions are custom-engineered for specific business needs. We use value-based pricing, which is why we recommend a strategy call to provide an accurate quote based on your scale and requirements. Visit /contact to book yours."
    },

    general: {
        location: "ZEPLYNK is physically present across Nigeria, with a mission to bring tech excellence to every state.",
        hiring: "We are always looking for visionary engineers! Check our About page or reach out via /contact for career opportunities."
    }
};

const getBotResponse = (input: string): string => {
    const q = input.toLowerCase();
    
    // High-priority pricing/cost match
    if (q.includes('cost') || q.includes('price') || q.includes('quote') || q.includes('budget') || q.includes('billing') || q.includes('payment') || q.includes('amount')) {
        return ZepKnowledge.company.pricing;
    }

    // Complex match for AI/Solutions
    if (q.includes('ai') || q.includes('automation') || q.includes('intelligent') || q.includes('bot')) return ZepKnowledge.solutions.ai;
    if (q.includes('web') || q.includes('engineering') || q.includes('app') || q.includes('saas')) return ZepKnowledge.solutions.engineering;
    if (q.includes('cloud') || q.includes('devops') || q.includes('infra')) return ZepKnowledge.solutions.cloud;
    if (q.includes('enterprise') || q.includes('erp') || q.includes('crm') || q.includes('business')) return ZepKnowledge.solutions.enterprise;
    if (q.includes('security') || q.includes('cyber') || q.includes('pentest') || q.includes('protect')) return ZepKnowledge.solutions.security;
    if (q.includes('data') || q.includes('analytics') || q.includes('bi') || q.includes('insight')) return ZepKnowledge.solutions.data;
    
    // Mission & Academy
    if (q.includes('academy') || q.includes('course') || q.includes('study') || q.includes('learn') || q.includes('student')) {
        return `${ZepKnowledge.academy.mission} ${ZepKnowledge.academy.impact}`;
    }
    if (q.includes('mission') || q.includes('future') || q.includes('goal')) return ZepKnowledge.academy.mission;
    
    // Impact & Results
    if (q.includes('impact') || q.includes('startup') || q.includes('success') || q.includes('track record')) {
        return `${ZepKnowledge.company.impact} We've helped launch 50+ startups and automated over 100 business processes.`;
    }
    
    // Contact & Location
    if (q.includes('contact') || q.includes('hire') || q.includes('call') || q.includes('booking') || q.includes('meet')) return ZepKnowledge.company.contact;
    if (q.includes('location') || q.includes('where') || q.includes('nigeria') || q.includes('office')) return ZepKnowledge.general.location;
    if (q.includes('job') || q.includes('hir') || q.includes('career') || q.includes('join')) return ZepKnowledge.general.hiring;

    if (q.includes('hello') || q.includes('hi ') || q.includes('hey')) return "Hello! I'm ZepBot. I can tell you about our AI solutions, Web Engineering, Academy mission, or help you book a strategy call. What's on your mind?";

    return "I'm not exactly sure about that, but I can assist with AI Solutions, Product Engineering, or details about the ZEPLYNK Academy. Would you like to see our Solutions catalog?";
};

export default function ZepBot() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: ZepKnowledge.introduction, sender: 'bot', timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

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
        { label: "Start Project", icon: Send, action: () => handleSend("How can I hire ZEPLYNK?") }
    ];

    return (
        <div className="fixed bottom-28 right-6 z-[100] font-friendly">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-[90vw] sm:w-[400px] h-[420px] bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
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
                        {mounted && (
                            <div className="absolute -top-3 -right-3 h-5 w-5 bg-white text-zgreen-600 text-[10px] font-black rounded-full flex items-center justify-center border-2 border-zgreen-500 animate-bounce">
                                1
                            </div>
                        )}
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
