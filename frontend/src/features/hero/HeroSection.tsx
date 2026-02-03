"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { Link } from "@/i18n/routing";
import { TrustBar } from "./components/TrustBar";
import { HeroStats } from "./components/HeroStats";

const AudioWaveform = dynamic(
    () => import("@/features/hero/components/AudioWaveform"),
    {
        ssr: false,
        loading: () => {
            // Using a simpler approach to access translations to avoid hook usage inside another function
            return (
                <div
                    className="w-full h-full flex items-center justify-center bg-black/10 animate-pulse rounded-full border border-white/5"
                >
                </div>
            )
        }
    }
);

export function HeroSection() {
    const t = useTranslations("Index");

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-[#050505]">
            {/* Background VFX */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse duration-700"></div>
                {/* Mesh Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Audio Waveform Canvas */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
                    <AudioWaveform />
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 inline-flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                        <span className="text-xs font-semibold tracking-wider uppercase text-blue-200/80">
                            Acoustic Edge AI v2.0
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-10 py-4 leading-tight whitespace-pre-line tracking-tighter"
                    >
                        {t("title")}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed whitespace-pre-line max-w-2xl mx-auto"
                    >
                        {t("subtitle")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 items-center"
                    >
                        <Link href="#contact">
                            <Button
                                size="lg"
                                className="h-14 px-10 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xl shadow-blue-500/20 active:scale-95 group"
                            >
                                {t("cta")}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="w-full"
                    >
                        <HeroStats />
                    </motion.div>
                </div>
            </div>

            {/* Social Proof (Trust Bar) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-0 left-0 w-full"
            >
                <TrustBar />
            </motion.div>
        </section>
    );
}
