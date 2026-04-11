import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Layout

// Layout
import Navbar from "@/components/layout/Navbar";

// Section Components
import Hero from "@/components/sections/Hero";
import SolutionsSlider from "@/components/sections/SolutionsSlider";
import AiSolutions from "@/components/sections/AiSolutions";
import Industries from "@/components/sections/Industries";
import ProcessMap from "@/components/sections/ProcessMap";
import TechStack from "@/components/sections/TechStack";
import CaseStudyBlock from "@/components/sections/CaseStudyBlock";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 overflow-x-hidden font-friendly">

      <Navbar />

      {/* Main Content Components */}
      <main>
        <Hero />

        <ScrollReveal width="100%">
          <SolutionsSlider />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <AiSolutions />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <Industries />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <ProcessMap />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <CaseStudyBlock />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <FAQ />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <Newsletter />
        </ScrollReveal>

        {/* Strategic CTA */}
        {/* Strategic CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900 border-t border-white/5 text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Transform <br />
                <span className="text-zgreen-500">Your Digital Infrastructure?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full h-16 px-10 text-xl font-bold w-full sm:w-auto">
                    Schedule a Strategy Call
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full h-16 px-10 text-xl font-bold w-full sm:w-auto">
                    Talk to an AI Consultant
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                {/* Logo text reused from Navbar or just simple text since logo icon might be needed */}
                <span className="text-2xl font-bold text-white">ZEPLYNK</span>
              </Link>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Engineering intelligent digital systems for modern businesses.
                We design, build, and automate scalable web platforms and AI solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {["Services", "Academy", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Connect</h4>
              <ul className="space-y-4">
                <li className="text-gray-400">zeplynk001@gmail.com</li>
                <li className="text-gray-400">08067263891</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2024 ZEPLYNK. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2348067263891?text=Hello%20ZEPLYNK!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-zgreen-600 hover:bg-zgreen-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
