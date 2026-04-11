import { newsItems } from "@/constants/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock, Share2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export async function generateStaticParams() {
    return newsItems.map((item) => ({
        slug: item.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = newsItems.find((item) => item.slug === params.slug);

    if (!post) {
        notFound();
    }

    // Suggested posts (excluding current)
    const suggestedPosts = newsItems
        .filter((item) => item.slug !== params.slug)
        .slice(0, 2);

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link href="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-zgreen-500 transition-colors mb-12 group">
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Insights
                </Link>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-400 text-xs font-bold uppercase tracking-widest">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                            <Clock className="h-3 w-3" />
                            6 min read
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">
                        {post.title}
                    </h1>
                </header>

                {/* Cover Image */}
                <ScrollReveal>
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 mb-16 group">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                </ScrollReveal>

                {/* Article Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 mb-24">
                    <article className="prose prose-invert prose-zinc max-w-none 
                        prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
                        prose-h2:text-3xl prose-h2:text-white prose-h2:mt-12 prose-h2:mb-6
                        prose-p:text-gray-300 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8 prose-p:font-medium
                        prose-strong:text-white prose-strong:font-bold
                        prose-blockquote:border-l-4 prose-blockquote:border-zgreen-500 prose-blockquote:bg-zgreen-500/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-xl
                        prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-300 prose-li:mb-2 prose-li:font-medium
                        prose-img:rounded-3xl prose-img:border prose-img:border-white/10
                    ">
                        {post.content ? (
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        ) : (
                            <>
                                <p>We are currently finalizing the deep-dive content for this article. Our researchers are compiling the latest data to provide you with the most accurate and actionable insights.</p>
                                <p>Check back shortly for the full technical breakdown, architectural patterns, and implementation strategies covered in this topic.</p>
                            </>
                        )}
                    </article>

                    {/* Sidebar / Tools */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32 space-y-8">
                            <div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-md">
                                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Share Insights</h4>
                                <div className="flex gap-4">
                                    <button className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-zgreen-500/50 transition-all">
                                        <Share2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 rounded-3xl bg-zgreen-600/10 border border-zgreen-500/20">
                                <h4 className="text-sm font-bold text-zgreen-500 mb-2">Need a Custom Solution?</h4>
                                <p className="text-xs text-gray-400 mb-4 font-medium">Talk to our lead engineers about your project.</p>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-zgreen-400 transition-colors">
                                    Schedule a Call <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Footer Section: Suggested Posts */}
                <section className="pt-24 border-t border-white/10">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight">More Insights</h2>
                        <Link href="/news" className="text-zgreen-500 font-bold text-sm hover:underline">
                            View All Articles
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {suggestedPosts.map((item) => (
                            <Link key={item.id} href={`/news/${item.slug}`} className="group block">
                                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[10px] font-bold text-zgreen-500 uppercase tracking-widest">{item.category}</span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-zgreen-400 transition-colors uppercase tracking-tight line-clamp-2">
                                    {item.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
