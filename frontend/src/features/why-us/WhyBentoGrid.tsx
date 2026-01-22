"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Wifi, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const features = [
    {
        key: "precision",
        icon: Activity,
        colSpan: "md:col-span-1",
        bg: "bg-blue-500/10",
        iconColor: "text-blue-500",
    },
    {
        key: "edge",
        icon: Cpu,
        colSpan: "md:col-span-2",
        bg: "bg-purple-500/10",
        iconColor: "text-purple-500",
    },
    {
        key: "nonInvasive",
        icon: Wifi,
        colSpan: "md:col-span-3",
        bg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
    },
];

export function WhyBentoGrid() {
    const t = useTranslations("Index"); // Using Index namespace for now or fallback

    return (
        <section id="why-us" className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight mb-4"
                    >
                        Why SignalCraft?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        We combine advanced acoustics with Edge AI to deliver the most reliable predictive maintenance solution.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {features.map((feature, index) => (
                        <BentoCard key={feature.key} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BentoCard({ feature, index }: { feature: any; index: number }) {
    const Icon = feature.icon;

    return (
        <Link href="/why-us" className={`${feature.colSpan} block h-full`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`w-full h-full group relative rounded-3xl border border-border bg-card p-8 flex flex-col justify-between overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300`}
            >
                {/* Dynamic Background */}
                <div className={`absolute inset-0 ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon 3D Effect */}
                <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                        {feature.key === "precision" && "Acoustic Precision"}
                        {feature.key === "edge" && "On-Device Edge AI"}
                        {feature.key === "nonInvasive" && "Zero-Downtime Installation"}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        {feature.key === "precision" && "Detects micro-fractures in bearings using ultrasonic analysis beyond human hearing range."}
                        {feature.key === "edge" && "Real-time processing without cloud latency. Secure, fast, and bandwidth-efficient."}
                        {feature.key === "nonInvasive" && "Magnetic mounting system allows installation in seconds without stopping the production line."}
                    </p>
                </div>

                {/* Hover Action */}
                <div className="relative z-10 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>

                {/* Decorational Circle */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gradient-to-br from-white/5 to-white/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
        </Link>
    );
}
