"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck, Server } from "lucide-react";

export function WhyDetailPage() {
    return (
        <div className="pt-24 pb-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        The <span className="text-blue-600">Technological Edge</span>
                    </motion.h1>
                    <p className="text-xl text-muted-foreground">
                        Why SignalCraft outperforms traditional vibration analysis.
                    </p>
                </div>

                {/* Feature 1: Ultrasonic vs Vibration */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
                    <div className="flex-1">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Beyond Human Hearing</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Mechanical friction creates ultrasonic waves (20kHz+) long before visible vibration damages occur.
                            SignalCraft's sensors capture this early warning signal, giving you weeks of lead time instead of hours.
                        </p>
                    </div>
                    <div className="flex-1 bg-muted rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                        <span className="text-muted-foreground font-mono">[Diagram: Frequency Spectrum]</span>
                    </div>
                </div>

                {/* Feature 2: Edge AI */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32">
                    <div className="flex-1">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Processing at the Edge</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            We don't just send raw data to the cloud. Our proprietary neural engine runs directly on the gateway,
                            filtering out background noise and compressing insights by 99%.
                            This means lower bandwidth costs and real-time security.
                        </p>
                    </div>
                    <div className="flex-1 bg-muted rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                        <span className="text-muted-foreground font-mono">[Diagram: Edge Architecture]</span>
                    </div>
                </div>

                {/* Specs Grid */}
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-8 text-center">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="space-y-2">
                            <div className="font-semibold text-muted-foreground">Frequency Range</div>
                            <div className="text-2xl font-bold">1kHz - 100kHz</div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-muted-foreground">Sampling Rate</div>
                            <div className="text-2xl font-bold">192 kHz</div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-muted-foreground">Connectivity</div>
                            <div className="text-2xl font-bold">Wi-Fi 6 / LTE</div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-muted-foreground">Battery Life</div>
                            <div className="text-2xl font-bold">3+ Years</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
