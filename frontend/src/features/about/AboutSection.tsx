"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2, Award, Users } from "lucide-react";

export function AboutSection() {
    const t = useTranslations("About");
    const stats = [
        { key: "factories", value: "24h", icon: Building2 },
        { key: "accuracy", value: "10s", icon: Award },
        { key: "data", value: "Daily", icon: Users },
    ];

    return (
        <section id="about" className="bg-background pb-16 pt-24 md:pb-24 md:pt-40">
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
                        <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 shadow-2xl md:rounded-[2.5rem]">
                            {/* Backdrop VFX */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 group-hover:opacity-50 transition-opacity" />

                            <div className="absolute inset-0 flex flex-col justify-between p-6 md:hidden">
                                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                                    <span>Edge AI</span>
                                    <span className="text-blue-400">Live signal</span>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {[65, 88, 52].map((value, index) => (
                                        <div
                                            key={value}
                                            className="rounded-2xl border border-white/10 bg-black/30 p-3 text-center"
                                        >
                                            <div className="text-lg font-bold text-white">{value}%</div>
                                            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-gray-400">
                                                S{index + 1}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="rounded-[1.5rem] border border-blue-500/20 bg-blue-500/10 p-4">
                                    <div className="text-xs uppercase tracking-[0.2em] text-blue-300">
                                        Acoustic diagnostics
                                    </div>
                                    <div className="mt-3 flex items-end gap-2">
                                        {[28, 44, 36, 58, 42, 70, 48, 60].map((height) => (
                                            <span
                                                key={height}
                                                className="w-full rounded-full bg-gradient-to-t from-blue-500 via-cyan-300 to-white/80"
                                                style={{ height }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Spline 3D Iframe */}
                            <iframe
                                src='https://my.spline.design/retrofuturisticcircuitloop-UCsMjotTE2RPFLKQYwfnKAmi/'
                                frameBorder='0'
                                width='100%'
                                height='100%'
                                className="absolute inset-0 z-10 hidden h-[140%] w-[140%] origin-center -left-[8%] -top-[18%] scale-[0.92] md:block"
                                loading="lazy"
                            ></iframe>

                            {/* Overlay protection for scrolling */}
                            <div className="absolute inset-0 z-20 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[1.5rem] md:rounded-[2.5rem]" />
                        </div>
                    </motion.div>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 overflow-hidden border-t border-gray-800 pt-10 dark:border-white/10 md:mt-20">
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
    "KLT",
    "Jeonnam Bioindustry Foundation",
    "Odle Odle Inc.",
    "NullbyteWorks",
    "Underwater",
    "Korea Maritime & Ocean University",
];
