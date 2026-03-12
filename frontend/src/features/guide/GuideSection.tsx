"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, Zap, BarChart3, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/routing";

export function GuideSection() {
    const t = useTranslations("Guide");

    const steps = [
        {
            icon: Zap,
            key: "attach",
            color: "text-amber-500",
            bg: "bg-amber-500/10",
        },
        {
            icon: ShieldCheck,
            key: "connect",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            icon: CheckCircle2,
            key: "appInstall",
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
        {
            icon: BarChart3,
            key: "insight",
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        },
    ];

    return (
        <section id="guide" className="relative overflow-hidden bg-[#050505] py-20 md:py-32">
            {/* Soft Background Accents */}
            <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-blue-600/5 blur-[100px] md:h-96 md:w-96 md:blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/5 blur-[120px] md:h-[500px] md:w-[500px] md:blur-[160px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-5 font-display text-3xl font-black uppercase tracking-tighter text-white md:mb-6 md:text-5xl">
                            {t("title")}
                        </h2>
                        <p className="text-base font-medium leading-7 text-gray-400 break-keep md:text-xl md:leading-relaxed">
                            {t("description")}
                        </p>
                    </motion.div>
                </div>

                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
                    {/* Animated Tech Connector (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon Container with 3D Float */}
                                <div className="relative mb-10">
                                    <div className={`absolute inset-0 ${step.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-150`} />
                                    <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 backdrop-blur-xl md:h-32 md:w-32">
                                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-[10px] font-black italic flex items-center justify-center text-white ring-4 ring-[#050505]">
                                            {index + 1}
                                        </div>
                                        <Icon className={`w-12 h-12 ${step.color} group-hover:scale-110 transition-transform`} />
                                    </div>
                                </div>

                                <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-white md:mb-4 md:text-2xl">
                                    {t(`steps.${step.key}.title`)}
                                </h3>
                                <p className="mx-auto max-w-[280px] break-keep text-base leading-7 text-gray-400 md:text-lg md:leading-relaxed">
                                    {t(`steps.${step.key}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-14 text-center md:mt-24">
                    <Link
                        href="/guide"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 md:px-8 md:py-4 md:text-base"
                    >
                        {t("viewFull")}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-blue-500" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
