import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import {
  ArrowRight,
  Zap,
  Code,
  Globe,
  Bot,
  GraduationCap,
  Users,
  Building,
  Heart,
  TrendingUp,
  MessageCircle,
  CheckCircle,
  Target,
  Menu,
  X,
  Briefcase
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Services() {


  return (
    <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-600">Services</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions that drive growth, innovation, and social impact.
            From cutting-edge development to educational empowerment.
          </p>
        </div>
      </section>

      {/* Web Development Service */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-zgreen-500/10 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-zgreen-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Web Development</h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Custom web applications, e-commerce platforms, and responsive websites built with modern technologies.
                We create digital solutions that scale with your business.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { title: "Custom Web Applications", desc: "Tailored to your exact specs" },
                  { title: "E-commerce Platforms", desc: "Online stores with payment integration" },
                  { title: "Dashboard & Analytics", desc: "Data visualization tools" }
                ].map((item) => (
                  <li key={item.title} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-zgreen-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-full px-8 py-6 text-lg">
                Start Your Project
              </Button>
            </div>
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-zgreen-500/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "⚛️", name: "React" },
                  { icon: "🟢", name: "Node.js" },
                  { icon: "🐍", name: "Python" },
                  { icon: "☁️", name: "AWS" }
                ].map((tech) => (
                  <div key={tech.name} className="text-center p-6 bg-black border border-white/10 rounded-xl hover:border-zgreen-500/50 transition-colors">
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <p className="font-medium text-gray-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webflow Jobs Service */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-black rounded-2xl p-8 border border-white/10 hover:border-zyellow-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Webflow?</h3>
              <div className="space-y-6">
                {[
                  { icon: TrendingUp, title: "Faster Development", desc: "Launch 3x faster" },
                  { icon: Target, title: "Design Freedom", desc: "Pixel-perfect designs" },
                  { icon: Users, title: "Client-Friendly", desc: "Easy content management" }
                ].map((item) => (
                  <div key={item.title} className="flex items-center group">
                    <div className="bg-zyellow-500/10 rounded-full p-3 mr-4 group-hover:bg-zyellow-500/20 transition-colors">
                      <item.icon className="h-5 w-5 text-zyellow-500" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-zyellow-500/10 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-zyellow-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Webflow Jobs</h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                No-code website design using Webflow for startups, creators, and businesses looking for rapid deployment.
                Beautiful, responsive sites without the complexity.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { title: "Landing Pages", desc: "High-converting marketing pages" },
                  { title: "Business Websites", desc: "Professional CMS integration" },
                  { title: "Portfolio Sites", desc: "Stunning showcases" }
                ].map((item) => (
                  <li key={item.title} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-zyellow-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="bg-zyellow-500 hover:bg-zyellow-600 text-black rounded-full px-8 py-6 text-lg">
                Get Webflow Site
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Creation Service */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-purple-500/10 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Bot className="h-8 w-8 text-purple-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">AI Agent Creation</h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Build custom AI agents for auto-posting, chat support, content scheduling, and workflow automation.
                Harness the power of artificial intelligence to streamline your operations.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { title: "Social Media Automation", desc: "Auto-posting & engagement bots" },
                  { title: "Customer Support Bots", desc: "24/7 intelligent chat support" },
                  { title: "Content Scheduling", desc: "AI-powered content management" }
                ].map((item) => (
                  <li key={item.title} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg">
                Build AI Agent
              </Button>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">AI Capabilities</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Bot, title: "Natural Language Processing", desc: "Understand human language" },
                  { icon: TrendingUp, title: "Machine Learning", desc: "Continuous improvement" },
                  { icon: Target, title: "Automation Workflows", desc: "Complex task integration" }
                ].map((cap) => (
                  <div key={cap.title} className="bg-black rounded-lg p-5 border border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center mb-2">
                      <cap.icon className="h-5 w-5 text-purple-500 mr-3" />
                      <p className="font-medium text-white">{cap.title}</p>
                    </div>
                    <p className="text-sm text-gray-500 ml-8">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Outreach Service */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Educational Outreach</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Making technology education accessible in underserved communities across Africa.
              Partner with us to create lasting social impact through education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: "In-Person Teaching", desc: "Direct impact in schools & communities.", color: "text-zgreen-500", bg: "bg-zgreen-500/10", items: ["Mobile tech labs", "Computer literacy", "Coding workshops"] },
              { icon: Building, title: "CSR Partnerships", desc: "Scale impact with corporate goals.", color: "text-zyellow-500", bg: "bg-zyellow-500/10", items: ["Custom programs", "Impact measurement", "Community partners"] },
              { icon: Heart, title: "Sponsor Benefits", desc: "Visibility & meaningful impact.", color: "text-red-500", bg: "bg-red-500/10", items: ["Impact reports", "Brand publicity", "Tax benefits"] }
            ].map((service) => (
              <div key={service.title} className="bg-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group">
                <div className={`${service.bg} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-400 text-sm">
                      <CheckCircle className={`h-4 w-4 mr-3 ${service.color}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-lg px-8 py-6 text-lg">
              Become a Partner
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-lg px-8 py-6 text-lg bg-transparent">
              View Impact Report
            </Button>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zgreen-900/40 to-zyellow-900/40 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you need development services, want to sponsor educational programs,
              or are looking to transform communities, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-lg px-8 py-6 text-lg w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-zyellow-500 hover:bg-zyellow-600 text-black rounded-lg px-8 py-6 text-lg w-full sm:w-auto">
                  Join Academy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-6 w-6 text-zgreen-500 mr-2" />
            <span className="text-2xl font-bold text-white">ZEPLYNK</span>
          </div>
          <p className="text-gray-500 mb-8">
            📧 zeplynk001@gmail.com | 📞 08067263891, 07063695334
          </p>
          <p className="text-gray-600 font-medium">
            &copy; 2024 ZEPLYNK. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
