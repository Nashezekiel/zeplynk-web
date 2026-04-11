import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import {
  Zap,
  Target,
  Globe,
  Award,
  Users,
  TrendingUp,
  Heart,
  MessageCircle,
  Menu,
  X,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function About() {


  return (
    <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-600">ZEPLYNK</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            ZEPLYNK is a full-service technology company dedicated to empowering Africa through digital transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              { title: "Web Development", desc: "Custom websites, web apps, and e-commerce solutions using React, Webflow, and modern frameworks." },
              { title: "AI Automation", desc: "Intelligent agents, workflow automation, and business process optimization for startups and enterprises." },
              { title: "Tech Education", desc: "Our Academy delivers hands-on programming courses (HTML, CSS, JavaScript, Java, C++) and mentorship." },
              { title: "Consulting & Support", desc: "Strategic tech consulting, project management, and ongoing support for businesses and NGOs." }
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-zgreen-500/30 transition-all duration-300">
              <div className="bg-zgreen-500/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-zgreen-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                To democratize access to technology education and services across Africa,
                creating pathways for digital transformation in underserved communities while
                delivering world-class solutions to businesses globally.
              </p>
              <ul className="space-y-3">
                {[
                  "Accessible tech education for all",
                  "Bridging the digital divide",
                  "Empowering local communities"
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-zgreen-500 mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 hover:border-zyellow-500/30 transition-all duration-300">
              <div className="bg-zyellow-500/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-zyellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                To be Africa's leading catalyst for technological innovation and education,
                creating a generation of skilled developers and innovators who will shape
                the future of the digital economy.
              </p>
              <ul className="space-y-3">
                {[
                  "1 million+ trained developers by 2030",
                  "Presence in all 36 Nigerian states",
                  "Leading African tech education platform"
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-zyellow-500 mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-xl text-gray-400">
              From humble beginnings to ambitious dreams
            </p>
          </div>

          <div className="bg-gradient-to-br from-zgreen-900/20 to-zyellow-900/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              ZEPLYNK was born from a simple yet powerful observation: while technology was rapidly advancing worldwide, many talented individuals in Africa lacked access to quality tech education and opportunities to showcase their skills.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Founded by passionate technologists with global experience and local insight, ZEPLYNK set out to create a bridge – linking ambitious learners and businesses to greatness in technology. Our founders have worked with Fortune 500 companies, led award-winning projects, and mentored hundreds of students.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <b className="text-zgreen-400">Impact Stories:</b> We've helped launch over 50 startups, automated business processes for SMEs, and trained more than 2,000 students in Nigeria. Our alumni work at leading tech firms and contribute to open-source projects worldwide.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today, we're proud to serve students and businesses across Nigeria and beyond, combining cutting-edge curriculum with real-world application, and always staying true to our mission of making technology accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", desc: "We maintain world-class standards in everything we do.", color: "text-zgreen-500", bg: "bg-zgreen-500/10" },
              { icon: Users, title: "Accessibility", desc: "Education available to everyone, regardless of background.", color: "text-zyellow-500", bg: "bg-zyellow-500/10" },
              { icon: TrendingUp, title: "Innovation", desc: "We embrace cutting-edge technologies and methods.", color: "text-purple-500", bg: "bg-purple-500/10" },
              { icon: Heart, title: "Impact", desc: "Measured by positive impact on students and communities.", color: "text-red-500", bg: "bg-red-500/10" },
            ].map((value) => (
              <div key={value.title} className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-colors">
                <div className={`${value.bg} rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`h-10 w-10 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join the ZEPLYNK Movement
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you're ready to start your tech journey, need development services,
              or want to partner with us for social impact, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/academy"
                className="bg-zgreen-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zgreen-500 transition-colors duration-200"
              >
                Start Learning
              </Link>
              <Link
                to="/services"
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Our Services
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
