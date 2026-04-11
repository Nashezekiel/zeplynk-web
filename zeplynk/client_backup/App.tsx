import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Academy from "./pages/Academy";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import AiPage from "./pages/AiPage";
import WebPage from "./pages/WebPage";

// Components
import { PageTransition } from "./components/PageTransition";

const queryClient = new QueryClient();

// Analytics and SEO helper component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Update page title based on route
    const titles: Record<string, string> = {
      '/': 'ZEPLYNK - Link to Greatness in Tech | Web Development, AI Automation & Tech Education',
      '/services': 'Our Services - ZEPLYNK | Web Development, AI Agents, Educational Outreach',
      '/academy': 'ZEPLYNK Tech Academy | 3-Month Programming Course - HTML, CSS, JavaScript, Java, C++',
      '/register': 'Register for ZEPLYNK Academy | Start Your Tech Journey Today',
      '/contact': 'Contact ZEPLYNK | Get in Touch for Services and Academy Inquiries',
      '/about': 'About ZEPLYNK | Our Mission to Democratize Tech Education in Africa',
      '/privacy': 'Privacy Policy - ZEPLYNK | Your Data Security and Privacy Rights'
    };

    const title = titles[pathname] || 'ZEPLYNK - Tech Education and Development Services';
    document.title = title;

    // Update meta description based on route
    const descriptions: Record<string, string> = {
      '/': 'ZEPLYNK brings world-class tech education and development services across Nigeria. Learn HTML, CSS, JavaScript, Java, C++ in our 3-month academy or get custom web development and AI automation solutions.',
      '/services': 'Professional web development, Webflow design, AI agent creation, and educational outreach services. Custom solutions for startups, businesses, and NGOs across Nigeria and Africa.',
      '/academy': 'Join ZEPLYNK Tech Academy - comprehensive 3-month programming course covering HTML, CSS, JavaScript, Git, Java, and C++. Hands-on projects, mentorship, and certificate included.',
      '/register': 'Register for ZEPLYNK Tech Academy today. Payment options available via Diamond Access Bank and Opay. Start your journey to becoming a skilled developer.',
      '/contact': 'Contact ZEPLYNK for tech education, development services, or partnership opportunities. Email, phone, and WhatsApp support available.',
      '/about': 'Learn about ZEPLYNK\'s mission to democratize technology education across Africa. Our story, values, and vision for empowering the next generation of African developers.',
      '/privacy': 'ZEPLYNK Privacy Policy - Learn how we protect your personal information, data security measures, and your rights regarding data usage and protection.'
    };

    const description = descriptions[pathname] || 'ZEPLYNK - Technology education and development services across Africa';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/ai" element={<PageTransition><AiPage /></PageTransition>} />
          <Route path="/web" element={<PageTransition><WebPage /></PageTransition>} />
          <Route path="/academy" element={<PageTransition><Academy /></PageTransition>} />
          <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />

          {/* Legal & Support Pages */}
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />

          {/* Alternative route names for SEO */}
          <Route path="/courses" element={<PageTransition><Academy /></PageTransition>} />
          <Route path="/training" element={<PageTransition><Academy /></PageTransition>} />
          <Route path="/web-development" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/ai-automation" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/tech-education" element={<PageTransition><Academy /></PageTransition>} />

          {/* Legacy/Alternative routes */}
          <Route path="/home" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/join" element={<PageTransition><Register /></PageTransition>} />
          <Route path="/enroll" element={<PageTransition><Register /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><Register /></PageTransition>} />

          {/* Catch-all 404 route - MUST BE LAST */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
