import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Linkedin, Twitter, Instagram, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-transparent pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative z-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src="/theLogo-removebg-preview.png"
                                    alt="ZEPLYNK Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">ZEPLYNK</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                            Engineering intelligent digital systems for modern businesses.
                            We design, build, and automate scalable web platforms and AI solutions.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/company/zeplynk", label: "LinkedIn" },
                                { icon: Twitter, href: "https://twitter.com/zeplynk", label: "Twitter" },
                                { icon: Instagram, href: "https://www.instagram.com/zeplynk", label: "Instagram" },
                                { icon: Github, href: "https://github.com/zeplynk", label: "GitHub" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-zgreen-500 hover:bg-zgreen-500/10 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Solutions", href: "/solutions" },
                                { label: "Academy", href: "/academy" },
                                { label: "Our Work", href: "/work" },
                                { label: "About", href: "/about" },
                                { label: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Connect</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400 hover:text-white transition-colors cursor-default">
                                <span className="block text-xs uppercase text-gray-600 mb-1">Email</span>
                                zeplynk001@gmail.com
                            </li>
                            <li className="text-gray-400 hover:text-white transition-colors cursor-default">
                                <span className="block text-xs uppercase text-gray-600 mb-1">Phone</span>
                                08067263891
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ZEPLYNK. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/2348067263891?text=Hello%20ZEPLYNK!"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-zgreen-600 hover:bg-zgreen-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
                <MessageCircle className="h-6 w-6" />
            </a>
        </footer>
    );
}
