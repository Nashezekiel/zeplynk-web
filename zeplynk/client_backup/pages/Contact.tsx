import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import {
  Zap,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {


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
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to start your tech journey or partner with us? We'd love to hear from you.
            Reach out for services, academy inquiries, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-black border border-white/10 rounded-2xl p-8 text-center hover:border-zgreen-500/50 transition-all duration-300 group hover:bg-white/5">
              <div className="bg-zgreen-500/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="h-10 w-10 text-zgreen-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Send us a detailed message and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:zeplynk001@gmail.com"
                className="text-zgreen-500 font-semibold hover:text-zgreen-400 transition-colors duration-200"
              >
                zeplynk001@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-black border border-white/10 rounded-2xl p-8 text-center hover:border-zyellow-500/50 transition-all duration-300 group hover:bg-white/5">
              <div className="bg-zyellow-500/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="h-10 w-10 text-zyellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Speak directly with our team for immediate assistance and consultation.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+2348067263891"
                  className="block text-zgreen-500 font-semibold hover:text-zgreen-400 transition-colors duration-200"
                >
                  08067263891
                </a>
                <a
                  href="tel:+2347063695334"
                  className="block text-zgreen-500 font-semibold hover:text-zgreen-400 transition-colors duration-200"
                >
                  07063695334
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-black border border-white/10 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300 group hover:bg-white/5">
              <div className="bg-green-500/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Chat with us instantly for quick questions and real-time support.
              </p>
              <a
                href="https://wa.me/2348067263891"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Response Time */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-zyellow-500 mr-3" />
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white font-semibold">Emergency Only</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  <span className="text-zyellow-500 font-semibold">Note:</span> WhatsApp support available 24/7 for urgent inquiries.
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-zgreen-900/20 to-zyellow-900/20 rounded-2xl p-8 border border-zgreen-500/30">
              <div className="flex items-center mb-6">
                <Send className="h-8 w-8 text-zgreen-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">Response Time</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-black/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-zgreen-500 mr-3" />
                  <div>
                    <p className="font-semibold text-white">Email Inquiries</p>
                    <p className="text-gray-400 text-sm">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-black/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-zgreen-500 mr-3" />
                  <div>
                    <p className="font-semibold text-white">WhatsApp Messages</p>
                    <p className="text-gray-400 text-sm">Within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-black/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-zgreen-500 mr-3" />
                  <div>
                    <p className="font-semibold text-white">Phone Calls</p>
                    <p className="text-gray-400 text-sm">Immediate response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Contact Us?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're here to help with all your technology and education needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-zinc-900 rounded-xl p-6 border border-white/10 hover:border-zgreen-500 transition-all duration-300">
                <div className="bg-zgreen-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-zgreen-500" />
                </div>
                <h3 className="font-bold text-white mb-2">Academy Registration</h3>
                <p className="text-gray-400 text-sm">
                  Questions about courses, pricing, or enrollment process
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-zinc-900 rounded-xl p-6 border border-white/10 hover:border-zyellow-500 transition-all duration-300">
                <div className="bg-zyellow-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-zyellow-500" />
                </div>
                <h3 className="font-bold text-white mb-2">Development Services</h3>
                <p className="text-gray-400 text-sm">
                  Custom projects, Webflow sites, or AI automation needs
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-zinc-900 rounded-xl p-6 border border-white/10 hover:border-purple-500 transition-all duration-300">
                <div className="bg-purple-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="font-bold text-white mb-2">Partnership Opportunities</h3>
                <p className="text-gray-400 text-sm">
                  Corporate sponsorship, NGO collaboration, or CSR programs
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-zinc-900 rounded-xl p-6 border border-white/10 hover:border-blue-500 transition-all duration-300">
                <div className="bg-blue-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-bold text-white mb-2">General Inquiries</h3>
                <p className="text-gray-400 text-sm">
                  Any questions about ZEPLYNK or our mission
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zinc-900 to-black rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait – your tech journey or next project can begin today.
              Choose the option that best fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-lg px-8 py-6 text-lg w-full sm:w-auto h-auto">
                  Join Academy
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-zyellow-500 hover:bg-zyellow-600 text-black rounded-lg px-8 py-6 text-lg w-full sm:w-auto h-auto">
                  View Services
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
