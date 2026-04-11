import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import {
  ArrowRight,
  Zap,
  CheckCircle,
  Award,
  Users,
  Clock,
  BookOpen,
  Code,
  Database,
  Globe,
  Laptop,
  MessageCircle,
  Menu,
  X,
  Target,
  Star
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Academy() {


  return (
    <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Your First <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-600">3 Months</span>
            <span className="block mt-2">in Tech Start Here.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your career with our comprehensive 3-month program. Learn in-demand skills,
            build real projects, and get mentorship from industry professionals.
          </p>
          <Link to="/register">
            <Button className="h-14 px-8 text-lg bg-white text-black hover:bg-gray-200 transition-all rounded-full group">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Courses Offered</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive curriculum covering the most essential technologies in modern development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, color: "text-orange-500", bg: "bg-orange-500/10", title: "HTML", desc: "Structure websites with semantic HTML5.", items: ["Semantic markup", "Forms & validation", "Accessibility"] },
              { icon: BookOpen, color: "text-blue-500", bg: "bg-blue-500/10", title: "CSS", desc: "Design beautiful, responsive pages.", items: ["Flexbox & Grid", "Responsive design", "Animations"] },
              { icon: Code, color: "text-zyellow-500", bg: "bg-zyellow-500/10", title: "JavaScript", desc: "Add interactivity and logic.", items: ["ES6+ features", "DOM manipulation", "Async programming"] },
              { icon: Users, color: "text-purple-500", bg: "bg-purple-500/10", title: "Git & GitHub", desc: "Collaborate like a pro.", items: ["Version control", "Branching strategies", "Collaboration"] },
              { icon: Laptop, color: "text-red-500", bg: "bg-red-500/10", title: "Java", desc: "Build backend logic.", items: ["OOP", "Data structures", "Spring basics"] },
              { icon: Database, color: "text-gray-400", bg: "bg-white/10", title: "C++", desc: "Computing fundamentals.", items: ["Memory management", "Algorithms", "System programming"] }
            ].map((course) => (
              <div key={course.title} className="bg-black border border-white/10 rounded-2xl p-8 hover:border-zgreen-500/50 transition-all duration-300 hover:bg-white/5 group">
                <div className={`${course.bg} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <course.icon className={`h-8 w-8 ${course.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{course.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {course.desc}
                </p>
                <ul className="space-y-3">
                  {course.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-zgreen-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Program Highlights</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to succeed in your tech career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Hands-on Projects", desc: "Build real-world apps.", color: "text-zgreen-500", bg: "bg-zgreen-500/10" },
              { icon: Users, title: "Mentorship", desc: "Guidance from experts.", color: "text-zyellow-500", bg: "bg-zyellow-500/10" },
              { icon: Star, title: "Feedback", desc: "Regular code reviews.", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: Award, title: "Certificate", desc: "Industry recognized.", color: "text-purple-500", bg: "bg-purple-500/10" },
            ].map((item) => (
              <div key={item.title} className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-colors">
                <div className={`${item.bg} rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-10 w-10 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">3-Month Learning Path</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Structured progression from beginner to job-ready developer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { month: 1, title: "Foundation", color: "bg-zgreen-500", items: [{ week: "1-2", title: "HTML Mastery", desc: "Structure & accessibility" }, { week: "3-4", title: "CSS Design", desc: "Styling & layout" }] },
              { month: 2, title: "Interactive", color: "bg-zyellow-500", items: [{ week: "1-2", title: "JS Fundamentals", desc: "Variables & logic" }, { week: "3-4", title: "Git & Projects", desc: "Version control" }] },
              { month: 3, title: "Advanced", color: "bg-white", items: [{ week: "1-2", title: "Java", desc: "OOP & Algorithms" }, { week: "3-4", title: "C++ & Portfolio", desc: "Systems & Polish" }] }
            ].map((phase) => (
              <div key={phase.month} className="bg-zinc-900 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                <div className={`${phase.color} ${phase.month === 3 ? 'text-black' : 'text-white'} text-sm font-bold rounded-lg px-4 py-2 inline-block mb-6`}>
                  Month {phase.month}: {phase.title}
                </div>

                <div className="space-y-6">
                  {phase.items.map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <Clock className={`h-5 w-5 mr-3 mt-1 ${phase.month === 2 ? 'text-zyellow-500' : phase.month === 3 ? 'text-white' : 'text-zgreen-500'}`} />
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-zgreen-400 transition-colors">Week {item.week}: {item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zgreen-900/40 to-zyellow-900/40 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their careers through our comprehensive program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="h-14 px-8 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-lg text-lg font-semibold w-full sm:w-auto">
                  Register Now
                </Button>
              </Link>
              <Button variant="outline" className="h-14 px-8 border-white text-white hover:bg-white hover:text-black rounded-lg text-lg font-semibold w-full sm:w-auto bg-transparent">
                Download Curriculum
              </Button>
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
