"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Wifi, ArrowRight, Layers } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const features = [
    {
        key: "precision",
        icon: Activity,
        colSpan: "md:col-span-2 md:row-span-2",
        bg: "bg-blue-500/10",
        iconColor: "text-blue-500",
    },
    {
        key: "edge",
        icon: Cpu,
        colSpan: "md:col-span-1 md:row-span-1",
        bg: "bg-purple-500/10",
        iconColor: "text-purple-500",
    },
    {
        key: "nonInvasive",
        icon: Wifi,
        colSpan: "md:col-span-1 md:row-span-1",
        bg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
    },
    {
        key: "scalability",
        icon: Layers,
        colSpan: "md:col-span-3 md:row-span-1",
        bg: "bg-orange-500/10",
        iconColor: "text-orange-500",
    },
];

export function WhyBentoGrid() {
    const t = useTranslations("WhyUs");

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
                        {t("title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        {t("description")}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min md:auto-rows-[280px]">
                    {features.map((feature, index) => (
                        <BentoCard key={feature.key} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BentoCard({ feature, index }: { feature: any; index: number }) {
    const t = useTranslations("WhyUs");
    const Icon = feature.icon;

    return (
        <Link href="/why-us" className={`${feature.colSpan} block h-full`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`w-full min-h-full group relative rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 flex flex-col justify-between overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300`}
            >
                {/* Dynamic Background */}
                <div className={`absolute inset-0 ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon 3D Effect */}
                <div className="relative z-10">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${feature.bg} flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10`}>
                        <Icon className={`w-6 h-6 md:w-8 md:h-8 ${feature.iconColor}`} />
                    </div>

                    <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white font-display tracking-tight break-keep">
                        {t(`features.${feature.key}.title`)}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed break-keep mb-8 md:mb-0">
                        {t(`features.${feature.key}.description`)}
                    </p>
                </div>

                {/* Hover Action */}
                <div className="relative z-10 flex items-center text-xs md:text-sm font-medium text-primary opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 mt-4 md:mt-0">
                    {t("learnMore")} <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                </div>

                {/* Decorational Circle */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gradient-to-br from-white/5 to-white/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
        </Link>
    );
}
