"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Star,
    User,
    Mail,
    MessageSquare,
    Send,
    ExternalLink,
    CheckCircle,
    Linkedin,
    Instagram,
    Facebook,
    Sparkles,
    Camera,
    X,
    Heart,
    Clock,
    Eye,
    Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GOOGLE_REVIEW_URL = "https://share.google/ojE6M4gtZJQPpxkng";
const REVIEW_EMAIL = "zeplynk001@gmail.com";

const SERVICE_OPTIONS = [
    "Web Engineering",
    "AI & Automation",
    "Mobile App Development",
    "Backend & API Development",
    "Enterprise Digitization",
    "Cloud & DevOps",
    "UI/UX & Product Design",
    "Data & Business Intelligence",
    "Cybersecurity & Compliance",
    "Tech Education (Academy)",
    "Other",
];

const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/zeplynk/", label: "LinkedIn", rgb: "10,102,194" },
    { icon: Instagram, href: "https://www.instagram.com/zeplynk/", label: "Instagram", rgb: "225,48,108" },
    { icon: Facebook, href: "https://www.facebook.com/share/1JghGYmUWr/", label: "Facebook", rgb: "24,119,242" },
];

const whyItMatters = [
    { icon: Heart, title: "Helps Us Grow", desc: "Public reviews are how new clients discover us.", rgb: "244,63,94" },
    { icon: Clock, title: "Takes 30 Seconds", desc: "A quick rating and a line or two is all it takes.", rgb: "59,130,246" },
    { icon: Eye, title: "We Read Every One", desc: "Your feedback directly shapes what we build next.", rgb: "34,197,94" },
];

export default function ReviewsPage() {
    const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [avatarName, setAvatarName] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setAvatarName(file.name);
        const reader = new FileReader();
        reader.onload = () => setAvatarPreview(reader.result as string);
        reader.readAsDataURL(file);
    };

    const clearAvatar = () => {
        setAvatarPreview(null);
        setAvatarName("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`New ${rating}-Star Review from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email || "Not provided"}\nService: ${formData.service || "Not specified"}\nRating: ${rating} / 5\n${
                avatarName ? `\nReminder: attach photo/logo file "${avatarName}" before sending.\n` : ""
            }\nReview:\n${formData.message}`
        );

        window.location.href = `mailto:${REVIEW_EMAIL}?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">
            {/* Hero */}
            <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zyellow-500/20 rounded-full blur-[130px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zgreen-500/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-purple-500/10 rounded-full blur-[110px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyellow-500/15 border border-zyellow-500/30 mb-8 backdrop-blur-sm">
                        <Star className="h-4 w-4 text-zyellow-400 fill-zyellow-400" />
                        <span className="text-sm font-bold text-white tracking-wide uppercase">Reviews</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Loved Working <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zyellow-300 via-amber-400 to-zgreen-400">
                            With Zeplynk?
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Your feedback helps other businesses find us and helps our team keep raising the bar.
                        Leave a public review, follow along on social, or send your thoughts directly.
                    </p>
                </motion.div>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 space-y-8">
                {/* Google Review CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[2.5rem] border border-zyellow-500/40 bg-gradient-to-br from-zyellow-500/20 via-amber-600/10 to-zinc-900/80 p-10 md:p-14 text-center backdrop-blur-md"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-zyellow-500/20 rounded-full blur-[110px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="flex gap-1.5 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-8 w-8 fill-zyellow-400 text-zyellow-400 drop-shadow-[0_0_12px_rgba(255,193,7,0.5)]" />
                            ))}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Leave Us a Review on Google
                        </h2>
                        <p className="text-gray-300 max-w-xl leading-relaxed mb-8">
                            Public reviews are the single biggest way you can help us grow. If we delivered
                            for you, a quick Google review means the world.
                        </p>
                        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                            <Button className="h-14 px-8 bg-zyellow-500 hover:bg-zyellow-400 text-black rounded-2xl text-base font-bold shadow-[0_10px_40px_-8px_rgba(255,193,7,0.7)] transition-all hover:scale-[1.02] active:scale-95">
                                Review Us on Google
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Socials + Form: two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Left column: Socials + Why It Matters */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Socials */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative overflow-hidden rounded-[2.5rem] border border-white/25 bg-zinc-900/50 p-8 backdrop-blur-md text-center"
                        >
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-blue-600 opacity-70" />
                            <h2 className="text-xl font-bold text-white mb-2">Follow Zeplynk</h2>
                            <p className="text-gray-400 mb-8 text-sm">
                                Stay in the loop with our latest projects, academy updates, and engineering insights.
                            </p>
                            <div className="flex justify-center gap-4">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <span
                                            className="absolute inset-0 rounded-full border transition-all duration-300 group-hover:scale-110"
                                            style={{
                                                background: `rgba(${social.rgb}, 0.12)`,
                                                borderColor: `rgba(${social.rgb}, 0.35)`,
                                            }}
                                        />
                                        <social.icon
                                            className="relative h-6 w-6 transition-colors duration-300"
                                            style={{ color: `rgb(${social.rgb})` }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Why It Matters */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="rounded-[2.5rem] border border-white/25 bg-zinc-900/50 p-8 backdrop-blur-md space-y-6"
                        >
                            {whyItMatters.map((item) => (
                                <div key={item.title} className="flex items-start gap-4">
                                    <div
                                        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: `rgba(${item.rgb}, 0.15)` }}
                                    >
                                        <item.icon className="h-5 w-5" style={{ color: `rgb(${item.rgb})` }} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white mb-0.5">{item.title}</h3>
                                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right column: Review Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3 relative overflow-hidden rounded-[2.5rem] border border-white/25 bg-zinc-900/60 backdrop-blur-xl p-8 md:p-12"
                    >
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zgreen-500 via-zyellow-400 to-zgreen-500 opacity-70" />
                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="bg-zgreen-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                                    <CheckCircle className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
                                <p className="text-gray-300 leading-relaxed mb-8 max-w-md mx-auto">
                                    Your email client should now have your review ready to send. We read every
                                    single one — thank you for taking the time.
                                </p>
                                {avatarName && (
                                    <p className="text-zyellow-400 text-sm mb-6 max-w-md mx-auto">
                                        Don't forget to attach <span className="font-bold">{avatarName}</span> to the email before hitting send.
                                    </p>
                                )}
                                <p className="text-gray-500 text-sm mb-6">
                                    One more thing — a public review helps other businesses find us too.
                                </p>
                                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="border-zyellow-500/40 text-zyellow-400 hover:bg-zyellow-500/10 rounded-xl">
                                        <Star className="mr-2 h-4 w-4 fill-zyellow-400" />
                                        Also Post on Google
                                    </Button>
                                </a>
                            </div>
                        ) : (
                            <>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/15 border border-zgreen-500/30 mb-6">
                                    <Sparkles className="h-3.5 w-3.5 text-zgreen-400" />
                                    <span className="text-xs font-bold text-white tracking-wide uppercase">Direct Feedback</span>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">Send Us Your Review</h2>
                                <p className="text-gray-400 mb-8">
                                    Prefer to write to us directly? Fill this out and it'll open in your email app, ready to send.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-7">
                                    {/* Avatar / Logo Upload */}
                                    <div className="flex flex-col items-center gap-3 pb-7 border-b border-white/10">
                                        <label className="text-sm font-bold text-gray-200 self-center">
                                            Your Photo or Company Logo (Optional)
                                        </label>
                                        <div className="relative">
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/*"
                                                onChange={handleAvatarChange}
                                                className="hidden"
                                                id="avatar-upload"
                                            />
                                            <label
                                                htmlFor="avatar-upload"
                                                className="cursor-pointer flex items-center justify-center w-24 h-24 rounded-full border-2 border-dashed border-zgreen-500/40 bg-black/50 hover:border-zgreen-500/70 hover:bg-black/70 transition-all overflow-hidden"
                                            >
                                                {avatarPreview ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img src={avatarPreview} alt="Your upload preview" className="w-full h-full object-cover" />
                                                ) : (
                                                    <Camera className="h-7 w-7 text-zgreen-500/70" />
                                                )}
                                            </label>
                                            {avatarPreview && (
                                                <button
                                                    type="button"
                                                    onClick={clearAvatar}
                                                    aria-label="Remove photo"
                                                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center text-white transition-colors shadow-lg"
                                                >
                                                    <X className="h-3.5 w-3.5" />
                                                </button>
                                            )}
                                        </div>
                                        {avatarName ? (
                                            <p className="text-xs text-zyellow-400/90 text-center max-w-xs">
                                                Email apps can't auto-attach files — remember to attach{" "}
                                                <span className="font-bold">{avatarName}</span> before sending.
                                            </p>
                                        ) : (
                                            <p className="text-xs text-gray-500 text-center max-w-xs">
                                                Adds a face to your review. PNG or JPG works best.
                                            </p>
                                        )}
                                    </div>

                                    {/* Rating */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-200 ml-1">Your Rating</label>
                                        <div className="flex gap-2" onMouseLeave={() => setHoverRating(0)}>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    onMouseEnter={() => setHoverRating(star)}
                                                    className="p-1 transition-transform hover:scale-110"
                                                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                                                >
                                                    <Star
                                                        className={`h-8 w-8 transition-colors ${
                                                            star <= (hoverRating || rating)
                                                                ? "fill-zyellow-400 text-zyellow-400"
                                                                : "text-gray-700"
                                                        }`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-200 ml-1">Full Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-zgreen-500 transition-colors" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="w-full bg-black/50 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none hover:border-white/25 focus:border-zgreen-500/60 focus:ring-4 focus:ring-zgreen-500/10 transition-all font-friendly"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-200 ml-1">Email (Optional)</label>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-zgreen-500 transition-colors" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@company.com"
                                                    className="w-full bg-black/50 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none hover:border-white/25 focus:border-zgreen-500/60 focus:ring-4 focus:ring-zgreen-500/10 transition-all font-friendly"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-200 ml-1">What Service Did We Do For You?</label>
                                        <Select
                                            value={formData.service}
                                            onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                                        >
                                            <SelectTrigger className="group relative h-auto w-full bg-black/50 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-base text-white hover:border-white/25 focus:border-zgreen-500/60 focus:ring-4 focus:ring-zgreen-500/10 data-[state=open]:border-zgreen-500/60 data-[state=open]:ring-4 data-[state=open]:ring-zgreen-500/10 transition-all font-friendly [&>svg]:text-gray-400 [&>svg]:h-5 [&>svg]:w-5">
                                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-data-[state=open]:text-zgreen-500 transition-colors pointer-events-none" />
                                                <SelectValue placeholder="Select a service" className="text-gray-600" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-zinc-900 border-white/15 text-white rounded-2xl">
                                                {SERVICE_OPTIONS.map((service) => (
                                                    <SelectItem
                                                        key={service}
                                                        value={service}
                                                        className="rounded-lg py-2.5 pl-8 cursor-pointer focus:bg-zgreen-500/15 focus:text-zgreen-400 data-[state=checked]:text-zgreen-400"
                                                    >
                                                        {service}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-200 ml-1">Your Review</label>
                                        <div className="relative group">
                                            <MessageSquare className="absolute left-4 top-6 h-5 w-5 text-gray-400 group-focus-within:text-zgreen-500 transition-colors" />
                                            <textarea
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Tell us about your experience working with Zeplynk..."
                                                className="w-full bg-black/50 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none hover:border-white/25 focus:border-zgreen-500/60 focus:ring-4 focus:ring-zgreen-500/10 transition-all font-friendly resize-none"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-16 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl text-lg font-bold shadow-[0_10px_40px_-8px_rgba(34,197,94,0.7)] transition-all hover:scale-[1.02] active:scale-95"
                                    >
                                        Send Review <Send className="ml-2 h-5 w-5" />
                                    </Button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>

                {/* Back home */}
                <div className="text-center pt-4">
                    <Link href="/" className="text-gray-500 hover:text-zgreen-400 transition-colors text-sm font-medium">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
