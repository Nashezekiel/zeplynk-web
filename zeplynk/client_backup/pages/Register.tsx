import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  CreditCard,
  User,
  Mail,
  Phone,
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Copy,
  Check
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    paymentProof: null as File | null,
    additionalNote: ''
  });

  const [copied, setCopied] = useState({ diamond: false, opay: false });
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      paymentProof: file
    }));
  };

  const copyToClipboard = (text: string, type: 'diamond' | 'opay') => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setCopied(prev => ({ ...prev, [type]: false }));
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent('ZEPLYNK Academy Registration');
    const body = encodeURIComponent(`
Registration Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interest: ${formData.courseInterest}
Additional Note: ${formData.additionalNote}

Payment proof attached separately if provided.
    `);

    window.location.href = `mailto:zeplynk001@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 font-friendly">
        <div className="max-w-md w-full text-center">
          <div className="bg-zinc-900 border border-zgreen-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
            <div className="bg-zgreen-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-zgreen-500/20">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Registration Submitted!</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Thank you for your interest in ZEPLYNK Tech Academy. We'll review your application and contact you soon.
            </p>
            <Link to="/">
              <Button className="w-full bg-zgreen-600 hover:bg-zgreen-500 text-white py-6 text-lg rounded-xl">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Register for <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-600">ZEPLYNK Tech Academy</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Start your 3-month journey to becoming a skilled developer. Complete payment and fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Instructions */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CreditCard className="h-6 w-6 text-zgreen-500 mr-3" />
                Payment Instructions
              </h2>
              <div className="bg-zyellow-500/10 border border-zyellow-500/20 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-5 w-5 text-zyellow-500 mr-3" />
                  <p className="font-semibold text-zyellow-500">Complete payment before registration</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Please transfer the course fee to one of the accounts below, then fill out the registration form.
                </p>
              </div>
            </div>

            {/* Diamond Access Bank */}
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-zgreen-500/30 transition-colors">
              <h3 className="text-lg font-bold text-white mb-4">Diamond Access Bank</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-black rounded-lg border border-white/5">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Account Number</p>
                    <p className="font-mono text-lg font-semibold text-white tracking-wide">0097029187</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('0097029187', 'diamond')}
                    className="flex items-center px-4 py-2 bg-zgreen-500/10 text-zgreen-500 rounded-lg hover:bg-zgreen-500 hover:text-white transition-all duration-200"
                  >
                    {copied.diamond ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <div className="p-4 bg-black rounded-lg border border-white/5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Account Name</p>
                  <p className="font-semibold text-white">Nash Ezekiel Pam</p>
                </div>
              </div>
            </div>

            {/* Opay */}
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-zgreen-500/30 transition-colors">
              <h3 className="text-lg font-bold text-white mb-4">Opay</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-black rounded-lg border border-white/5">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Account Number</p>
                    <p className="font-mono text-lg font-semibold text-white tracking-wide">8067263891</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('8067263891', 'opay')}
                    className="flex items-center px-4 py-2 bg-zgreen-500/10 text-zgreen-500 rounded-lg hover:bg-zgreen-500 hover:text-white transition-all duration-200"
                  >
                    {copied.opay ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <div className="p-4 bg-black rounded-lg border border-white/5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Account Name</p>
                  <p className="font-semibold text-white">Nash Ezekiel Pam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <User className="h-6 w-6 text-zgreen-500 mr-3" />
              Registration Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-zgreen-500">*</span>
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-zgreen-500 transition-colors" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 pl-10 pr-4 py-3 border border-white/10 rounded-xl focus:border-zgreen-500 focus:ring-1 focus:ring-zgreen-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-600"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-zgreen-500">*</span>
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-zgreen-500 transition-colors" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 pl-10 pr-4 py-3 border border-white/10 rounded-xl focus:border-zgreen-500 focus:ring-1 focus:ring-zgreen-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-600"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-zgreen-500">*</span>
                </label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-zgreen-500 transition-colors" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 pl-10 pr-4 py-3 border border-white/10 rounded-xl focus:border-zgreen-500 focus:ring-1 focus:ring-zgreen-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-600"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Course Interest */}
              <div>
                <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Course Interest <span className="text-zgreen-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="courseInterest"
                    name="courseInterest"
                    required
                    value={formData.courseInterest}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 px-4 py-3 border border-white/10 rounded-xl focus:border-zgreen-500 focus:ring-1 focus:ring-zgreen-500 focus:outline-none transition-all duration-200 text-white appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-zinc-900 text-gray-500">Select your primary interest</option>
                    <option value="Web Development" className="bg-zinc-900">Web Development (HTML, CSS, JS)</option>
                    <option value="Backend Java" className="bg-zinc-900">Backend Programming (Java)</option>
                    <option value="System C++" className="bg-zinc-900">System Programming (C++)</option>
                    <option value="Complete Program" className="bg-zinc-900">Complete 3-Month Program</option>
                    <option value="Custom" className="bg-zinc-900">Custom Learning Path</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Payment Proof */}
              <div>
                <label htmlFor="paymentProof" className="block text-sm font-medium text-gray-300 mb-2">
                  Proof of Payment (Optional)
                </label>
                <div className="relative group">
                  <Upload className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-zgreen-500 transition-colors" />
                  <input
                    type="file"
                    id="paymentProof"
                    name="paymentProof"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="w-full bg-zinc-900 pl-10 pr-4 py-2.5 border border-white/10 rounded-xl focus:border-zgreen-500 focus:ring-1 focus:ring-zgreen-500 focus:outline-none transition-all duration-200 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-zgreen-500/10 file:text-zgreen-500 hover:file:bg-zgreen-500/20 cursor-pointer"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 ml-1">
                  Upload screenshot or receipt of payment (JPG, PNG, PDF)
                </p>
              </div>

              {/* Additional Note */}
              <div>
                <label htmlFor="additionalNote" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes
                </label>
                <div className="relative group">
                  <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-500 group-focus-within:text-zgreen-500 transition-colors" />
                  <textarea
                    id="additionalNote"
                    name="additionalNote"
                    rows={4}
                    value={formData.additionalNote}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 pl-10 pr-4 py-3 border border-white/10 rounded-xl focus:border-zgreen-500 focus:ring-1 focus:ring-zgreen-500 focus:outline-none transition-all duration-200 text-white placeholder-gray-600 resize-none"
                    placeholder="Any questions or special requirements?"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-zgreen-600 hover:bg-zgreen-500 text-white py-6 rounded-xl text-lg font-semibold shadow-lg shadow-zgreen-500/20 hover:shadow-zgreen-500/30 transition-all duration-200"
              >
                Submit Registration
              </Button>
            </form>

            {/* Notice */}
            <div className="mt-8 bg-black border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">What happens next?</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-zgreen-500 mr-3 mt-0.5" />
                  We'll verify your payment within 24 hours
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-zgreen-500 mr-3 mt-0.5" />
                  You'll receive course access details via email
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-zgreen-500 mr-3 mt-0.5" />
                  Classes begin within 3-5 business days
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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

      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4 z-50 group">
        <div className="relative">
          {/* Main button */}
          <a
            href="https://wa.me/2348067263891?text=Hello%20ZEPLYNK!%20I%20need%20help%20with%20registration."
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-105 flex items-center justify-center"
            title="Get registration help"
          >
            <MessageCircle className="h-5 w-5" />

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Get help
                <div className="absolute top-full right-2 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-black"></div>
              </div>
            </div>
          </a>

          {/* Online indicator */}
          <div className="absolute -top-0.5 -right-0.5 bg-green-400 border border-white rounded-full w-3 h-3"></div>
        </div>
      </div>
    </div>
  );
}
