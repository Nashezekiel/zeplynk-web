"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, ArrowRight, LoaderCircle } from "lucide-react";

export default function AdminLoginPage() {
    return (
        <Suspense fallback={null}>
            <AdminLoginForm />
        </Suspense>
    );
}

function AdminLoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || "Login failed.");
                setLoading(false);
                return;
            }
            const next = searchParams.get("next") || "/admin";
            router.push(next);
            router.refresh();
        } catch {
            setError("Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-zinc-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-xl bg-zgreen-500/10 border border-zgreen-500/20 flex items-center justify-center">
                        <Lock className="h-5 w-5 text-zgreen-500" />
                    </div>
                    <div>
                        <h1 className="text-lg font-black uppercase tracking-tight">Admin Access</h1>
                        <p className="text-xs text-gray-500">Zeplynk CMS</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            Password
                        </label>
                        <input
                            type="password"
                            autoFocus
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all"
                        />
                    </div>

                    {error && <p className="text-sm text-red-400">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading || !password}
                        className="w-full flex items-center justify-center gap-2 bg-zgreen-600 hover:bg-zgreen-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold h-12 rounded-xl transition-all"
                    >
                        {loading ? (
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                        ) : (
                            <>
                                Sign In <ArrowRight className="h-4 w-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </main>
    );
}
