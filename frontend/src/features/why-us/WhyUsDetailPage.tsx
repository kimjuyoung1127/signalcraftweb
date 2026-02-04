"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Activity, BarChart3, Shield, Globe, ArrowRight, Layers } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyUsDetailPage() {
    const t = useTranslations("WhyUs");

    const highlightFeatures = [
        { key: "precision", icon: Activity, color: "text-blue-500", bg: "bg-blue-500/10" },
        { key: "edge", icon: Cpu, color: "text-purple-500", bg: "bg-purple-500/10" },
        { key: "nonInvasive", icon: Zap, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { key: "scalability", icon: Layers, color: "text-orange-500", bg: "bg-orange-500/10" },
    ];

    return (
        <div className="pt-20 md:pt-32 pb-16 md:pb-24 bg-background">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16 md:mb-24">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-500 text-xs md:text-sm font-bold mb-6 md:mb-8"
                    >
                        <Zap className="w-3 md:w-4 h-3 md:h-4" /> Why SignalCraft
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 font-display tracking-tight leading-tight break-keep"
                    >
                        {t("detail.title")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-muted-foreground leading-relaxed break-keep"
                    >
                        {t("detail.subtitle")}
                    </motion.p>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="container mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {highlightFeatures.map((feature, i) => (
                        <motion.div
                            key={feature.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-10 rounded-[2.5rem] bg-muted/30 border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-8 h-8 ${feature.color}`} />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 font-display">{t(`features.${feature.key}.title`)}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed break-keep">
                                {t(`features.${feature.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Deep Tech Section 1 */}
            <section className="container mx-auto px-4 mb-40">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 text-blue-500 font-bold tracking-widest uppercase text-sm">
                            <span className="w-12 h-px bg-blue-500" /> Technology 01
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display break-keep leading-tight">
                            {t("detail.beyondTitle")}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-loose break-keep">
                            {t("detail.beyondDesc")}
                        </p>
                        <div className="pt-4 grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-white">20kHz - 100kHz</div>
                                <div className="text-sm text-muted-foreground uppercase">{t("detail.specs.range")}</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-white">192kHz</div>
                                <div className="text-sm text-muted-foreground uppercase">{t("detail.specs.rate")}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full aspect-square relative group">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full group-hover:bg-blue-500/30 transition-colors" />
                        <div className="relative h-full w-full bg-muted/50 rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
                            {/* Abstract Visualization */}
                            <div className="flex gap-1 items-end h-40">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [20, 60 + Math.random() * 80, 20] }}
                                        transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                                        className="w-2 bg-blue-500/40 rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Tech Section 2 */}
            <section className="container mx-auto px-4 mb-40">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 text-purple-500 font-bold tracking-widest uppercase text-sm">
                            <span className="w-12 h-px bg-purple-500" /> Technology 02
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display break-keep leading-tight">
                            {t("detail.edgeTitle")}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-loose break-keep">
                            {t("detail.edgeDesc")}
                        </p>
                        <div className="pt-4 flex gap-12">
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 text-purple-500" />
                                <span className="font-bold">Zero Data Leak</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe className="w-6 h-6 text-purple-500" />
                                <span className="font-bold">Offline First</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full aspect-square relative group">
                        <div className="absolute inset-0 bg-purple-500/20 blur-[120px] rounded-full group-hover:bg-purple-500/30 transition-colors" />
                        <div className="relative h-full w-full bg-muted/50 rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
                            <Cpu className="w-32 h-32 text-purple-500/20 animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Specs Footer */}
            <section className="container mx-auto px-4">
                <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/5">
                    <h2 className="text-3xl font-bold mb-16 text-center font-display">{t("detail.specs.title")}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="space-y-4">
                            <div className="text-muted-foreground text-sm uppercase font-bold tracking-widest">{t("detail.specs.range")}</div>
                            <div className="text-2xl font-bold">1kHz - 100kHz</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-muted-foreground text-sm uppercase font-bold tracking-widest">{t("detail.specs.rate")}</div>
                            <div className="text-2xl font-bold">192 kHz</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-muted-foreground text-sm uppercase font-bold tracking-widest">{t("detail.specs.conn")}</div>
                            <div className="text-2xl font-bold">Wi-Fi 6 / LTE</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-muted-foreground text-sm uppercase font-bold tracking-widest">{t("detail.specs.battery")}</div>
                            <div className="text-2xl font-bold">3+ Years</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
