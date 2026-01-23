"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const newsItems = [
    {
        id: 1,
        tag: "Press",
        date: "2024.03.15",
        title: "SignalCraft raises Series A to expand Edge AI solutions",
        excerpt: "We are thrilled to announce our latest funding round led by Major Tech Ventures to accelerate our smart factory innovations.",
        image: "/images/news-1.jpg", // Placeholder
    },
    {
        id: 2,
        tag: "Technology",
        date: "2024.02.28",
        title: "Introducing 'Acoustic Net 2.0': faster, lighter, and more accurate",
        excerpt: "Our new model runs on low-power microcontrollers while delivering 99.9% accuracy in bearing fault detection.",
        image: "/images/news-2.jpg", // Placeholder
    },
    {
        id: 3,
        tag: "Case Study",
        date: "2024.01.10",
        title: "How K-Automotive reduced production stops by 40%",
        excerpt: "A deep dive into our partnership with Korea's leading auto parts manufacturer and the results achieved in just 3 months.",
        image: "/images/news-3.jpg", // Placeholder
    },
];

export function NewsSection() {
    return (
        <section id="news" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Latest Updates</h2>
                        <p className="text-muted-foreground">Stay tuned with SignalCraft's journey.</p>
                    </div>
                    <Link href="/news" className="hidden md:flex items-center text-sm font-semibold hover:text-blue-500 transition-colors">
                        View Newsroom <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-video bg-muted relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60" />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded-md">
                                        {item.tag}
                                    </span>
                                </div>
                                {/* Simulated Image */}
                                <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                    <CalendarDays className="w-3 h-3" />
                                    {item.date}
                                </div>
                                <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                                    {item.excerpt}
                                </p>
                                <Link href={`/news/${item.id}`} className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                                    Read More <ExternalLink className="ml-1 w-3 h-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/news" className="inline-flex items-center text-sm font-semibold hover:text-blue-500">
                        View Newsroom <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
