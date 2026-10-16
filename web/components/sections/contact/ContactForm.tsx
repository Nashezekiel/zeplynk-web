"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Briefcase, CheckCircle, AlertCircle, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HONEYPOT_FIELD } from "@/lib/validate-submission-input";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.name.trim()) {
        errors.name = "Please enter your name.";
    }

    if (!data.email.trim()) {
        errors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }

    if (!data.message.trim()) {
        errors.message = "Please tell us a bit about your goals.";
    } else if (data.message.trim().length < 10) {
        errors.message = "Please add a few more details (at least 10 characters).";
    }

    return errors;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "Project Inquiry",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const honeypotRef = useRef<HTMLInputElement>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Read what is actually in the fields: anything typed before the page finished
        // loading is in the inputs but never reached React state.
        const fields = new FormData(e.currentTarget);
        const current: FormData = {
            name: String(fields.get("name") ?? ""),
            email: String(fields.get("email") ?? ""),
            subject: String(fields.get("subject") ?? formData.subject),
            message: String(fields.get("message") ?? ""),
        };
        setFormData(current);

        const validationErrors = validate(current);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSending(true);
        setSubmitError(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...current, [HONEYPOT_FIELD]: honeypotRef.current?.value }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || "We couldn't send your message. Please try again.");
            setIsSubmitted(true);
        } catch (err) {
            setSubmitError(err instanceof Error ? err.message : "We couldn't send your message. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900/60 backdrop-blur-xl border border-zgreen-500/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-center"
            >
                <div className="bg-zgreen-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-zgreen-500/20">
                    <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-h3 font-bold text-white mb-3">Message sent!</h3>
                <p className="text-gray-200 font-medium">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                    onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "Project Inquiry", message: "" });
                    }}
                    className="mt-8 text-zgreen-400 font-bold hover:text-zgreen-300 transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/60 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        >
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Honeypot: hidden from people, filled in by bots. */}
                <input
                    ref={honeypotRef}
                    type="text"
                    name={HONEYPOT_FIELD}
                    data-lpignore="true"
                    data-1p-ignore="true"
                    data-form-type="other"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-gray-200 ml-1">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-zgreen-500 transition-colors" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                defaultValue={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined}
                                className={`w-full bg-black/40 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:ring-4 transition-all font-friendly ${
                                    errors.name
                                        ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/10"
                                        : "border-white/10 focus:border-zgreen-500/50 focus:ring-zgreen-500/10"
                                }`}
                            />
                        </div>
                        {errors.name && (
                            <p id="name-error" className="flex items-center gap-1.5 text-sm text-red-400 font-medium ml-1">
                                <AlertCircle className="h-4 w-4 shrink-0" /> {errors.name}
                            </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-gray-200 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-zgreen-500 transition-colors" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                defaultValue={formData.email}
                                onChange={handleChange}
                                placeholder="john@company.com"
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                className={`w-full bg-black/40 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:ring-4 transition-all font-friendly ${
                                    errors.email
                                        ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/10"
                                        : "border-white/10 focus:border-zgreen-500/50 focus:ring-zgreen-500/10"
                                }`}
                            />
                        </div>
                        {errors.email && (
                            <p id="email-error" className="flex items-center gap-1.5 text-sm text-red-400 font-medium ml-1">
                                <AlertCircle className="h-4 w-4 shrink-0" /> {errors.email}
                            </p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-gray-200 ml-1">Subject</label>
                    <div className="relative group">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-zgreen-500 transition-colors" />
                        <select
                            id="subject"
                            name="subject"
                            defaultValue={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-zgreen-500/50 focus:ring-4 focus:ring-zgreen-500/10 transition-all appearance-none font-friendly"
                        >
                            <option className="bg-zinc-900">Project Inquiry</option>
                            <option className="bg-zinc-900">Academy Enrollment</option>
                            <option className="bg-zinc-900">AI & Automation</option>
                            <option className="bg-zinc-900">Partnership</option>
                            <option className="bg-zinc-900">Other</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-200 ml-1">Your Message</label>
                    <div className="relative group">
                        <MessageSquare className="absolute left-4 top-6 h-5 w-5 text-gray-400 group-focus-within:text-zgreen-500 transition-colors" />
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            defaultValue={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your goals..."
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? "message-error" : undefined}
                            className={`w-full bg-black/60 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:ring-4 transition-all font-friendly resize-none ${
                                errors.message
                                    ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/10"
                                    : "border-white/20 focus:border-zgreen-500/50 focus:ring-zgreen-500/10"
                            }`}
                        ></textarea>
                    </div>
                    {errors.message && (
                        <p id="message-error" className="flex items-center gap-1.5 text-sm text-red-400 font-medium ml-1">
                            <AlertCircle className="h-4 w-4 shrink-0" /> {errors.message}
                        </p>
                    )}
                </div>

                {submitError && (
                    <p role="alert" className="flex items-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300 font-medium">
                        <AlertCircle className="h-4 w-4 shrink-0" /> {submitError}
                    </p>
                )}

                <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full h-16 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl text-lg font-bold shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
                >
                    {isSending ? (
                        <>
                            Sending <LoaderCircle className="ml-2 h-5 w-5 animate-spin" />
                        </>
                    ) : (
                        <>
                            Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                    )}
                </Button>
            </form>
        </motion.div>
    );
}
