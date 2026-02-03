"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
    const t = useTranslations("FAQ");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = [
        "installation",
        "accuracy",
        "security",
        "environment"
    ];

    return (
        <section id="faq" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background VFX */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] opacity-50" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] opacity-30" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
                            <HelpCircle className="w-3 h-3" /> Support
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white font-display tracking-tighter italic uppercase">
                            {t("title")}
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {questions.map((key, index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-[2rem] overflow-hidden bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-3xl"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-8 flex items-center justify-between text-left transition-all duration-300"
                            >
                                <span className="text-xl font-bold text-white break-keep font-display tracking-tight group-hover:text-blue-400 transition-colors pr-4">
                                    {t(`questions.${key}.q`)}
                                </span>
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? "bg-blue-600 rotate-180" : "bg-white/5"}`}>
                                    <ChevronDown
                                        className={`w-6 h-6 ${openIndex === index ? "text-white" : "text-blue-500"}`}
                                    />
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden"
                            >
                                <div className="px-8 pb-8 text-gray-400 text-lg leading-relaxed break-keep border-t border-white/5 pt-6 mx-8">
                                    {t(`questions.${key}.a`)}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
