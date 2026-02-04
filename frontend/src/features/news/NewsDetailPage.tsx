"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Search, Tag } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function NewsDetailPage() {
    const t = useTranslations("News");

    const allNews = [
        {
            id: 1,
            key: "item1",
            tagKey: "press",
            date: "2025.12.15",
            image: "/KOIIA.jpg",
        },
        {
            id: 2,
            key: "item2",
            tagKey: "tech",
            date: "2024.02.28",
        },
        {
            id: 3,
            key: "item3",
            tagKey: "event",
            date: "2024.01.12",
        },
        {
            id: 4,
            key: "item4",
            tagKey: "press",
            date: "2024.01.05",
        },
        {
            id: 5,
            key: "item5",
            tagKey: "tech",
            date: "2023.12.20",
        },
    ];

    const filters = ['all', 'press', 'tech', 'case', 'event'];

    return (
        <div className="pt-16 md:pt-24 pb-16 md:pb-24 bg-background">
            <section className="container mx-auto px-4 mb-12 md:mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-center font-display tracking-tight break-keep"
                >
                    {t("title_page")}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-12 break-keep"
                >
                    {t("description_page")}
                </motion.p>

                {/* Search & Filter Bar */}
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-12 md:mb-16">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 md:h-5 md:w-5 h-4" />
                        <input
                            type="text"
                            placeholder={t("search_placeholder")}
                            className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/10 bg-muted/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm md:text-base"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${filter === 'all'
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20'
                                    : 'bg-muted/50 hover:bg-muted border-white/5 text-muted-foreground'
                                    }`}
                            >
                                {t(`filters.${filter}`)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {allNews.map((item, i) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col group h-full"
                        >
                            <Link href={`/news/${item.id}`} className="block overflow-hidden rounded-3xl mb-6 relative border border-white/10 aspect-[16/9]">
                                {item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={t(`items.${item.key}.title`)}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors" />
                                )}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold border border-white/10 flex items-center gap-1.5 shadow-xl">
                                        <Tag className="w-3.5 h-3.5 text-blue-500" />
                                        {t(`filters.${item.tagKey}`)}
                                    </span>
                                </div>
                            </Link>

                            <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground mb-4">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                            </div>

                            <Link href={`/news/${item.id}`}>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-500 transition-colors font-display leading-tight break-keep">
                                    {t(`items.${item.key}.title`)}
                                </h2>
                            </Link>

                            <p className="text-muted-foreground text-lg mb-6 line-clamp-2 break-keep leading-relaxed flex-1">
                                {t(`items.${item.key}.excerpt`)}
                            </p>

                            <div className="mt-auto">
                                <Link
                                    href={`/news/${item.id}`}
                                    className="text-blue-600 font-bold flex items-center text-sm uppercase tracking-wider group-hover:gap-3 gap-2 transition-all"
                                >
                                    {t("readMore")} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <Button variant="outline" size="lg" className="rounded-full px-12 h-14 font-bold border-white/10 hover:bg-white/5">
                        {t("load_more")}
                    </Button>
                </div>
            </section>
        </div>
    );
}
