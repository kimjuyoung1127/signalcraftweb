"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

const steps = [
    {
        icon: Zap,
        title: "1. Attach Sensor",
        description: "Simply attach the magnetic acoustic sensor to your equipment. No shutdown required.",
    },
    {
        icon: CheckCircle2,
        title: "2. Auto-Connect",
        description: "The Edge Gateway automatically pairs and begins secure data transmission immediately.",
    },
    {
        icon: BarChart3,
        title: "3. Real-time Insight",
        description: "Access the dashboard to see live acoustic fingerprints and receive anomaly alerts.",
    },
];

export function GuideSection() {
    return (
        <section id="guide" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Installation in Minutes</h2>
                    <p className="text-muted-foreground">
                        Zero downtime. Zero complex wiring. Just plug, play, and predict.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group bg-background p-6 rounded-2xl border border-transparent hover:border-border transition-colors shadow-sm hover:shadow-md"
                            >
                                <div className="w-24 h-24 rounded-full bg-background border-4 border-muted group-hover:border-blue-500 transition-colors flex items-center justify-center mb-6 z-10">
                                    <Icon className="w-10 h-10 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/guide" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
                        View Full Installation Guide <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
