"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2, Award, Users } from "lucide-react";

export function AboutSection() {
    const t = useTranslations("About");
    const stats = [
        { key: "factories", value: "50+", icon: Building2 },
        { key: "accuracy", value: "99.8%", icon: Award },
        { key: "data", value: "2M+", icon: Users },
    ];

    return (
        <section id="about" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6 md:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-secondary-foreground font-semibold tracking-wider uppercase mb-2 text-sm">{t("mission")}</h2>
                            <h3 className="text-3xl md:text-5xl font-bold leading-tight text-foreground break-keep font-display">
                                {t.rich("vision", {
                                    heartbeat: (chunks) => <span className="text-blue-600 font-display">{chunks}</span>,
                                    br: () => <br className="hidden md:block" />
                                })}
                            </h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-base md:text-lg text-muted-foreground leading-relaxed break-keep"
                        >
                            {t("description")}
                        </motion.p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-border">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex md:flex-col items-center md:items-start gap-4 md:gap-1"
                                >
                                    <div className="text-3xl font-bold text-foreground font-display min-w-[80px] md:min-w-0">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{t(`stats.${stat.key}`)}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 group shadow-2xl">
                            {/* Backdrop VFX */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 group-hover:opacity-50 transition-opacity" />

                            {/* Spline 3D Iframe */}
                            <iframe
                                src='https://my.spline.design/retrofuturisticcircuitloop-UCsMjotTE2RPFLKQYwfnKAmi/'
                                frameBorder='0'
                                width='100%'
                                height='100%'
                                className="absolute inset-0 w-[150%] h-[150%] -left-[12%] -top-[25%] scale-[0.9] z-10 origin-center"
                                loading="lazy"
                            ></iframe>

                            {/* Overlay protection for scrolling */}
                            <div className="absolute inset-0 z-20 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[1.5rem] md:rounded-[2.5rem]" />
                        </div>
                    </motion.div>
                </div>

                {/* Trust Badges */}
                <div className="mt-20 pt-10 border-t border-gray-800 dark:border-white/10 overflow-hidden">
                    <p className="text-center text-gray-500 dark:text-gray-400 mb-8 text-sm uppercase tracking-wider">
                        {t("trustedBy")}
                    </p>

                    <div className="flex overflow-hidden select-none w-full">
                        <motion.div
                            className="flex gap-16 items-center flex-nowrap pr-16 shrink-0"
                            animate={{ x: "-100%" }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30,
                            }}
                        >
                            {LOGO_LIST.map((company, index) => (
                                <span
                                    key={`l1-${index}`}
                                    className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap"
                                >
                                    {company}
                                </span>
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex gap-16 items-center flex-nowrap pr-16 shrink-0"
                            animate={{ x: "-100%" }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30,
                            }}
                        >
                            {LOGO_LIST.map((company, index) => (
                                <span
                                    key={`l2-${index}`}
                                    className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap"
                                >
                                    {company}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const LOGO_LIST = [
    "Samsung Electronics",
    "LG Energy Solution",
    "POSCO",
    "Hyundai Motor",
    "Hanwha Aerospace",
    "Doosan Enerbility",
    "KAI",
    "GS Caltex",
    "HD Hyundai",
];
