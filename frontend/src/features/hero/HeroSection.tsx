"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "@/components/ui/Button";

const AudioWaveform = dynamic(
    () => import("@/features/hero/components/AudioWaveform"),
    {
        ssr: false,
        loading: () => (
            <div className="absolute inset-0 z-0 bg-neutral-900 flex items-center justify-center">
                <div className="text-neutral-700 font-mono animate-pulse">
                    Initializing Visualizer...
                </div>
            </div>
        )
    }
);

export function HeroSection() {
    const t = useTranslations("Index");

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
            {/* Background WebGL */}
            <Suspense fallback={null}>
                <AudioWaveform />
            </Suspense>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6">
                    {t("title")}
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Detect mechanical screams before they fail.
                    <br />
                    AI-powered acoustic monitoring for smart factories.
                </p>
                <Button
                    size="lg"
                    className="rounded-full font-semibold transition-all hover:scale-105"
                >
                    Start Diagnosis
                </Button>
            </div>
        </section>
    );
}
