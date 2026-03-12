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
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pb-32 pt-24 md:pb-48">
            {/* Background VFX */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse duration-700"></div>
                {/* Mesh Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Audio Waveform Canvas */}
                <div className="pointer-events-none absolute inset-0 flex -translate-y-28 items-center justify-center opacity-60 md:-translate-y-10">
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
                        className="mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text py-2 font-display text-4xl font-bold leading-[1.05] tracking-tighter text-transparent whitespace-pre-line sm:text-5xl md:mb-10 md:py-4 md:text-8xl"
                    >
                        {t("title")}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mx-auto mb-10 max-w-2xl whitespace-pre-line text-base leading-7 text-gray-400 sm:text-lg md:mb-12 md:text-2xl md:leading-relaxed"
                    >
                        {t("subtitle")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
                    >
                        <Link href="#contact">
                            <Button
                                size="lg"
                                className="group h-14 rounded-full bg-blue-600 px-8 text-base font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95 md:px-10 md:text-lg"
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
