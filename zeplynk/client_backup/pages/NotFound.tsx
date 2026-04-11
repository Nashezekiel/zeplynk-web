import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Zap, Home, Search, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {


  return (
    <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      {/* 404 Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-md w-full text-center relative z-10">
          <div className="mb-8">
            <div className="bg-zinc-900/50 border border-white/10 rounded-full p-8 w-32 h-32 mx-auto mb-8 flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.1)]">
              <Search className="h-16 w-16 text-zgreen-500" />
            </div>

            <h1 className="text-8xl font-bold text-white mb-4 tracking-tighter">404</h1>
            <h2 className="text-2xl font-bold text-zgreen-500 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Oops! The page you're looking for seems to have gone on a tech adventure.
              Let's get you back on track to greatness.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <Link to="/">
              <Button className="w-full bg-zgreen-600 hover:bg-zgreen-500 text-white py-6 text-lg rounded-xl mb-4">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/academy">
                <Button variant="outline" className="w-full border-white/10 bg-zinc-900/50 text-white hover:bg-white/5 hover:text-white py-6">
                  View Courses
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="w-full border-white/10 bg-zinc-900/50 text-white hover:bg-white/5 hover:text-white py-6">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="font-semibold text-white mb-3">Popular Pages</h3>
            <div className="space-y-2 text-sm">
              <Link to="/academy" className="block text-gray-400 hover:text-zgreen-500 transition-colors duration-200">
                → ZEPLYNK Tech Academy
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-zgreen-500 transition-colors duration-200">
                → Web Development Services
              </Link>
              <Link to="/register" className="block text-gray-400 hover:text-zgreen-500 transition-colors duration-200">
                → Course Registration
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-zgreen-500 transition-colors duration-200">
                → Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Still can't find what you're looking for?
            </p>
            <a
              href="https://wa.me/2348067263891?text=Hello%20ZEPLYNK!%20I%20couldn't%20find%20the%20page%20I%20was%20looking%20for."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-zgreen-500 hover:text-zgreen-400 transition-colors duration-200 font-medium"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-zgreen-500 mr-2" />
            <span className="text-xl font-bold text-white">ZEPLYNK</span>
          </div>
          <p className="text-gray-500 text-sm">
            📧 zeplynk001@gmail.com | 📞 08067263891, 07063695334
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
