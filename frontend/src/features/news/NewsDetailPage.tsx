"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Search, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const allNews = [
    {
        id: 1,
        tag: "Press",
        date: "2024.03.15",
        title: "SignalCraft raises Series A to expand Edge AI solutions",
        excerpt: "We are thrilled to announce our latest funding round led by Major Tech Ventures to accelerate our smart factory innovations...",
    },
    {
        id: 2,
        tag: "Technology",
        date: "2024.02.28",
        title: "Introducing 'Acoustic Net 2.0'",
        excerpt: "Our new model runs on low-power microcontrollers while delivering 99.9% accuracy in bearing fault detection...",
    },
    {
        id: 3,
        tag: "Case Study",
        date: "2024.01.10",
        title: "How K-Automotive reduced production stops by 40%",
        excerpt: "A deep dive into our partnership with Korea's leading auto parts manufacturer and the results achieved in just 3 months...",
    },
    {
        id: 4,
        tag: "Event",
        date: "2024.01.05",
        title: "Join us at Smart Factory Expo 2024",
        excerpt: "SignalCraft will be showcasing its live demo at Booth A-123. Come and see the sound of efficiency...",
    },
    {
        id: 5,
        tag: "Technology",
        date: "2023.12.20",
        title: "Understanding FFT vs Wavelet Transform in Industrial Audio",
        excerpt: "A technical deep dive into how we preprocess audio signals for maximum anomaly detection accuracy...",
    },
];

export function NewsDetailPage() {
    return (
        <div className="pt-24 pb-24">
            <section className="container mx-auto px-4 mb-16">
                <h1 className="text-5xl font-bold mb-6 text-center">Newsroom</h1>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                    Latest updates, press releases, and technical insights from the SignalCraft team.
                </p>

                {/* Search & Filter Bar */}
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-16">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        {['All', 'Press', 'Technology', 'Case Study', 'Event'].map((filter) => (
                            <button
                                key={filter}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${filter === 'All' ? 'bg-foreground text-background border-foreground' : 'bg-background hover:bg-muted border-border'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {allNews.map((item, i) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex flex-col group"
                        >
                            <Link href={`/news/${item.id}`} className="block overflow-hidden rounded-2xl mb-4">
                                <div className="aspect-[16/9] bg-muted relative">
                                    <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-border flex items-center gap-1">
                                            <Tag className="w-3 h-3" /> {item.tag}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                            </div>
                            <Link href={`/news/${item.id}`}>
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h2>
                            </Link>
                            <p className="text-muted-foreground mb-4 line-clamp-2">
                                {item.excerpt}
                            </p>
                            <div className="mt-auto">
                                <Link href={`/news/${item.id}`} className="text-blue-600 font-semibold flex items-center text-sm hover:translate-x-1 transition-transform w-fit">
                                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg">Load More Articles</Button>
                </div>
            </section>
        </div>
    );
}
