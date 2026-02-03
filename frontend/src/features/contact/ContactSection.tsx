"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="py-40 relative overflow-hidden bg-[#050505]">
            {/* Ultra-Premium Background VFX */}
            <div className="absolute inset-0 z-0">
                {/* Global Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1000px] bg-blue-600/10 rounded-full blur-[180px] opacity-50" />

                {/* Dynamic Aurora-like meshes */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-full h-full bg-blue-500/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -5, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-purple-500/10 rounded-full blur-[120px]"
                />

                {/* Tech Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Center Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "circOut" }}
                    >
                        {/* Dramatic Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-bold tracking-widest uppercase mb-12">
                            <Sparkles className="w-4 h-4" /> Ready to Scale?
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter font-display leading-[0.9] text-white break-keep italic">
                            {t("title")}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed break-keep font-medium">
                            {t("description")}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative group"
                                >
                                    {/* Shimmer Button Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                                    <Button
                                        size="lg"
                                        className="relative w-full sm:w-auto h-20 px-14 bg-blue-600 text-white rounded-full font-black text-2xl hover:bg-blue-700 transition-all flex items-center justify-center overflow-hidden border border-blue-400/20 group shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
                                    >
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                        {t("cta")} <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </motion.div>
                            </Link>

                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto h-20 px-14 border-white/10 text-white rounded-full font-bold text-2xl hover:bg-white/5 transition-all backdrop-blur-md flex items-center justify-center"
                                >
                                    <Mail className="mr-3 w-8 h-8 text-gray-500" /> {t("sales")}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
