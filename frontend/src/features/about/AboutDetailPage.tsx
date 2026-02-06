"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Mail, Zap, AudioLines, Activity, ShieldCheck, ChevronRight, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const TEAM_KEYS = ['ceo', 'cto', 'hw'];
const MILESTONE_KEYS = ['2025', '2026', '2027'];

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

            {/* global section */}
            <section className="py-32 overflow-hidden bg-black/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-blue-500 font-black tracking-tighter uppercase mb-4 text-xl italic"
                        >
                            {t("global.title")}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                        >
                            {t("global.subtitle")}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            {t("global.description")}
                        </motion.p>
                    </div>

                    {/* Authentic Korea Map Visualization */}
                    <div className="relative aspect-[2/3] md:aspect-[3/4] max-w-2xl mx-auto mb-20 group overflow-hidden rounded-3xl">
                        {/* Map Background (Authentic Korea SVG) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src="/korea-map.svg"
                                alt="Republic of Korea Map"
                                className="w-full h-full object-contain opacity-80 grayscale brightness-90 invert filter"
                            />
                        </div>

                        {/* Interactive Nodes (Korea Hubs) */}
                        <div className="absolute inset-0 z-10">
                            {/* Seoul Hub (Innovation) - Approx 32%, 18% */}
                            <div className="absolute top-[20%] left-[33%] group/node">
                                <div className="relative">
                                    <div className="w-5 h-5 rounded-full bg-blue-500 animate-ping absolute inset-0" />
                                    <div className="w-5 h-5 rounded-full bg-blue-500 relative z-10 border-2 border-white shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-56 opacity-0 group-hover/node:opacity-100 transition-all pointer-events-none transform translate-y-2 group-hover/node:translate-y-0 text-left">
                                        <div className="bg-black/90 backdrop-blur-2xl p-5 rounded-2xl border border-white/20 shadow-2xl">
                                            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Seoul Hub</p>
                                            <p className="text-lg font-bold">Innovation Center</p>
                                            <p className="text-xs text-gray-400 mt-1 mb-3">Data Intelligence & Global Bridge</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">HQ / KOIIA</span>
                                                <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full">Global Ops</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Yongin Node (infinior) - Southeast of Seoul */}
                            <div className="absolute top-[25%] left-[36%] group/node">
                                <div className="relative">
                                    <div className="w-4 h-4 rounded-full bg-orange-500 animate-pulse absolute inset-0 opacity-50" />
                                    <div className="w-4 h-4 rounded-full bg-orange-500 relative z-10 border-2 border-white shadow-[0_0_15px_rgba(249,115,22,0.5)]" />

                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-52 opacity-0 group-hover/node:opacity-100 transition-all pointer-events-none transform translate-y-2 group-hover/node:translate-y-0 text-left">
                                        <div className="bg-black/90 backdrop-blur-2xl p-5 rounded-2xl border border-white/20 shadow-2xl">
                                            <p className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2">Yongin Hub</p>
                                            <p className="text-lg font-bold">infinior HQ</p>
                                            <p className="text-xs text-gray-400 mt-1 mb-3">AI Solution & Embedded Tech (Giheung)</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full border border-orange-500/30">infinior</span>
                                                <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full">AI R&D</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Jeonnam Node (Manufacturing/Bio) - Approx 25%, 75% */}
                            <div className="absolute top-[65%] left-[30%] group/node">
                                <div className="relative">
                                    <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse absolute inset-0 opacity-50" />
                                    <div className="w-4 h-4 rounded-full bg-emerald-500 relative z-10 border-2 border-white shadow-[0_0_15px_rgba(16,185,129,0.5)]" />

                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-52 opacity-0 group-hover/node:opacity-100 transition-all pointer-events-none transform translate-y-2 group-hover/node:translate-y-0 text-left">
                                        <div className="bg-black/90 backdrop-blur-2xl p-5 rounded-2xl border border-white/20 shadow-2xl">
                                            <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">Jeonnam Hub</p>
                                            <p className="text-lg font-bold">Bio & Chemical</p>
                                            <p className="text-xs text-gray-400 mt-1 mb-3">Process Monitoring & Safety</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">JBF</span>
                                                <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full">Partners</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Busan Node (Heavy Tech) - Approx 62%, 78% */}
                            <div className="absolute top-[60%] left-[76%] group/node">
                                <div className="relative">
                                    <div className="w-4 h-4 rounded-full bg-purple-500 animate-pulse absolute inset-0 opacity-50" />
                                    <div className="w-4 h-4 rounded-full bg-purple-500 relative z-10 border-2 border-white shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-52 opacity-0 group-hover/node:opacity-100 transition-all pointer-events-none transform translate-y-2 group-hover/node:translate-y-0 text-left">
                                        <div className="bg-black/90 backdrop-blur-2xl p-5 rounded-2xl border border-white/20 shadow-2xl">
                                            <p className="text-purple-500 font-black text-[10px] uppercase tracking-widest mb-2">Busan Hub</p>
                                            <p className="text-lg font-bold">Heavy Industry</p>
                                            <p className="text-xs text-gray-400 mt-1 mb-3">Maritime & Industrial Infra</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">KLT / KMOU</span>
                                                <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full">Underwater</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Partner Grid - Responsive & Dynamic */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                        {[
                            "KLT", "전남바이오진흥원", "Odle Odle Inc.",
                            "NullbyteWorks", "Underwater", "infinior",
                            "한국해양대학교"
                        ].map((partner, i) => (
                            <motion.div
                                key={partner}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all flex items-center justify-center text-center group"
                            >
                                <span className="text-sm font-medium text-gray-500 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                                    {partner}
                                </span>
                            </motion.div>
                        ))}
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
