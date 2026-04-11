import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft, Zap, Construction } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {


  return (
    <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-md w-full text-center relative z-10">
          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(34,197,94,0.1)] backdrop-blur-sm">
            <div className="bg-zgreen-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Construction className="h-8 w-8 text-zgreen-500" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-4">
              {title}
            </h1>

            <p className="text-gray-400 mb-8 leading-relaxed">
              {description}
            </p>

            <p className="text-sm text-gray-500 mb-6 font-mono border-t border-dashed border-white/10 pt-4">
              This page is currently under development.
            </p>

            <div className="space-y-4">
              <Link to="/">
                <Button className="w-full bg-zgreen-600 hover:bg-zgreen-500 text-white py-6 text-lg rounded-xl">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>

              <Button variant="outline" className="w-full border-white/10 bg-transparent text-gray-400 hover:bg-white/5 hover:text-white py-6">
                Request Development
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
