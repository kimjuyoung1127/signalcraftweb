"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CalendarDays, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export function NewsSection() {
    const t = useTranslations("News");

    const newsItems = [
        {
            id: 1,
            key: "item1",
            date: "2025.12.15",
            image: "/KOIIA.jpg",
        },
        {
            id: 2,
            key: "item2",
            date: "2024.02.28",
        },
        {
            id: 3,
            key: "item3",
            date: "2024.01.12",
        },
    ];

    return (
        <section id="news" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 font-display">{t("title")}</h2>
                        <p className="text-muted-foreground">{t("description")}</p>
                    </div>
                    <Link href="/news" className="hidden md:flex items-center text-sm font-semibold hover:text-blue-500 transition-colors">
                        {t("viewAll")} <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            <div className="aspect-[16/9] rounded-2xl bg-muted mb-6 overflow-hidden relative border border-white/10">
                                {item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={t(`items.${item.key}.title`)}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-blue-600/5 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/10 blur-xl" />
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-white dark:bg-black/80 backdrop-blur-md rounded-full text-xs font-semibold shadow-sm border border-white/10">
                                        {t(`items.${item.key}.tag`)}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 flex-1 flex flex-col">
                                <div className="flex items-center text-xs text-muted-foreground">
                                    <CalendarDays className="mr-1 w-3 h-3" />
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors font-display break-keep">
                                    {t(`items.${item.key}.title`)}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2 break-keep flex-1">
                                    {t(`items.${item.key}.excerpt`)}
                                </p>
                                <div className="pt-4 mt-auto">
                                    <Link href={`/news/${item.id}`} className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                                        {t("readMore")} <ExternalLink className="ml-1 w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/news" className="inline-flex items-center text-sm font-semibold hover:text-blue-500">
                        {t("viewAll")} <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
