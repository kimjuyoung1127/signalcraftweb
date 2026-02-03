"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-[#050505]">
            {/* Dramatic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-blue-600/20 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter font-display break-keep">
                            {t("title")}
                        </h2>
                        <p className="text-xl md:text-2xl text-blue-100/70 mb-12 max-w-3xl mx-auto leading-relaxed break-keep">
                            {t("description")}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto h-16 px-12 bg-white text-blue-600 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl shadow-blue-500/20 active:scale-95 flex items-center justify-center"
                                >
                                    {t("cta")} <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto h-16 px-12 border-white/20 text-white rounded-full font-semibold text-xl hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center"
                                >
                                    <Mail className="mr-2 w-6 h-6" /> {t("sales")}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
