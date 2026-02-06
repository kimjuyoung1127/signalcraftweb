"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    Zap,
    ShieldCheck,
    Smartphone,
    CheckCircle2,
    Settings,
    Download,
    ChevronRight,
    Play,
    Image as ImageIcon
} from "lucide-react";
import { Link } from "@/i18n/routing";

export function GuideDetailPage() {
    const t = useTranslations("Guide.detail");
    const tGuide = useTranslations("Guide");

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-24">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter font-display italic uppercase">
                            {t("title")}
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed break-keep font-medium">
                            {t("subtitle")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Step 1: Hardware */}
            <section className="container mx-auto px-4 mb-32">
                <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black italic">1</div>
                                <h2 className="text-3xl font-bold font-display">{t("hardware.title")}</h2>
                            </div>

                            <ul className="space-y-6">
                                {[1, 2, 3].map((num) => (
                                    <li key={num} className="flex gap-4 group">
                                        <div className="shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                                            {num}
                                        </div>
                                        <p className="text-gray-400 group-hover:text-white transition-colors">
                                            {t(`hardware.step${num}`)}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="order-1 lg:order-2">
                            {/* Media Placeholder: Installation Image */}
                            <div className="aspect-video rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-white/10 transition-all overflow-hidden relative">
                                <ImageIcon className="w-12 h-12 text-gray-600 group-hover:scale-110 group-hover:text-blue-500 transition-all" />
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{t("placeholder.image")}</span>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 2: App Installation */}
            <section className="container mx-auto px-4 mb-32">
                <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/10 rounded-full blur-[120px] -ml-48 -mb-48" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            {/* Media Placeholder: App UI / QR Code mockup */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-[9/16] rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                                    <Smartphone className="w-10 h-10 mb-4 text-green-500" />
                                    <p className="text-xs font-bold text-gray-500">{t("app.features.monitoring")}</p>
                                </div>
                                <div className="aspect-[9/16] rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-6 text-center mt-8">
                                    <CheckCircle2 className="w-10 h-10 mb-4 text-green-500" />
                                    <p className="text-xs font-bold text-gray-500">{t("app.features.notifications")}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center font-black italic">2</div>
                                <h2 className="text-3xl font-bold font-display">{t("app.title")}</h2>
                            </div>

                            <p className="text-lg text-gray-400 mb-10 leading-relaxed break-keep">
                                {t("app.description")}
                            </p>

                            <div className="space-y-4">
                                <div className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                                    <span className="font-bold text-gray-400">{t("app.secured")}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    <span className="text-sm text-gray-400 italic">{t("app.mapping")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Guide Section */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 font-display uppercase tracking-tight">{t("placeholder.tutorials")}</h2>
                    <div className="aspect-video rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-6 group cursor-pointer hover:bg-white/10 transition-all relative overflow-hidden">
                        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform relative z-10">
                            <Play className="w-8 h-8 fill-white" />
                        </div>
                        <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors relative z-10">
                            {t("placeholder.video")}
                        </span>
                        <div className="absolute inset-0 bg-blue-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="mt-32 border-t border-white/10 py-24 text-center">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold mb-8">{t("support.title")}</h3>
                    <p className="text-gray-400 mb-12">{t("support.description")}</p>
                    <Link href="/contact" className="px-10 py-4 rounded-full bg-white text-black font-black italic uppercase hover:scale-105 transition-transform flex items-center gap-2 mx-auto w-fit">
                        {t("support.cta")}
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
