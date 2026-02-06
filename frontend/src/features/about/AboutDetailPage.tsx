"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Mail, Zap, AudioLines, Activity, ShieldCheck, ChevronRight, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const TEAM_KEYS = ['ceo', 'cto', 'hw'];
const MILESTONE_KEYS = ['2023', '2024', '2025'];

function ImagePlaceholder({ label }: { label: string }) {
    return (
        <div className="aspect-[4/5] bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 group-hover:bg-white/10 transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <ChevronRight className="w-6 h-6 text-blue-500 rotate-45" />
            </div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{label}</span>
            {/* Decorative waves */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>
    );
}

export function AboutDetailPage() {
    const t = useTranslations("About");
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    return (
        <div ref={containerRef} className="bg-[#050505] text-white selection:bg-blue-500/30">
            {/* Cinematic Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="container mx-auto px-4 z-10 text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-8 inline-block"
                    >
                        {t("mission")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black mb-12 leading-[1.1] tracking-tighter"
                        dangerouslySetInnerHTML={{ __html: t.raw("hero.title") }}
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        {t("hero.subtitle")}
                    </motion.p>
                </motion.div>

                {/* Animated Background VFX */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#050505] to-transparent" />
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
                </div>
            </section>



            {/* Interactive Journey Timeline */}
            <section className="py-32 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-6xl font-black mb-24 tracking-tighter text-center">{t("journey.title")}</h2>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

                        <div className="space-y-32">
                            {MILESTONE_KEYS.map((year, i) => (
                                <motion.div
                                    key={year}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="flex-1 text-center md:text-right">
                                        {i % 2 === 0 ? (
                                            <>
                                                <span className="text-6xl font-black text-white/10 mb-2 block">{year}</span>
                                                <h3 className="text-3xl font-bold mb-4">{t(`journey.milestones.${year}.title`)}</h3>
                                                <p className="text-gray-400">{t(`journey.milestones.${year}.desc`)}</p>
                                            </>
                                        ) : null}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 ring-8 ring-blue-500/20" />
                                    </div>

                                    <div className="flex-1 text-center md:text-left">
                                        {i % 2 !== 0 ? (
                                            <>
                                                <span className="text-6xl font-black text-white/10 mb-2 block">{year}</span>
                                                <h3 className="text-3xl font-bold mb-4">{t(`journey.milestones.${year}.title`)}</h3>
                                                <p className="text-gray-400">{t(`journey.milestones.${year}.desc`)}</p>
                                            </>
                                        ) : null}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32 container mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-black tracking-tighter mb-6">{t("team.title")}</h2>
                    <p className="text-xl text-gray-400">Pioneering the future of acoustic intelligence.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {TEAM_KEYS.map((key, i) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
                        >
                            <ImagePlaceholder label={t("team.preparing")} />
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold mb-2">{t(`team.members.${key}.name`)}</h3>
                                <p className="text-blue-500 font-bold mb-4">{t(`team.members.${key}.role`)}</p>
                                <p className="text-gray-400 mb-8 font-light leading-relaxed">{t(`team.members.${key}.bio`)}</p>

                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Global Reach / Reach Out */}
            <section className="py-32 container mx-auto px-4 text-center border-t border-white/10">
                <Globe className="w-20 h-20 text-blue-500/30 mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl font-bold mb-4">Protecting Global Infrastructure</h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-12">From Seoul to San Francisco, SignalCraft is the voice of industrial reliability.</p>
            </section>
        </div>
    );
}
