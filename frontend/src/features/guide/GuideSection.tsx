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
        <section id="guide" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[160px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter font-display italic text-white uppercase">
                            {t("title")}
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed break-keep font-medium">
                            {t("description")}
                        </p>
                    </motion.div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                                    <div className="w-32 h-32 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl shadow-2xl">
                                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-[10px] font-black italic flex items-center justify-center text-white ring-4 ring-[#050505]">
                                            {index + 1}
                                        </div>
                                        <Icon className={`w-12 h-12 ${step.color} group-hover:scale-110 transition-transform`} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white font-display tracking-tight">
                                    {t(`steps.${step.key}.title`)}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed break-keep max-w-[280px] mx-auto">
                                    {t(`steps.${step.key}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-24 text-center">
                    <Link
                        href="/guide"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all group"
                    >
                        {t("viewFull")}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-blue-500" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
