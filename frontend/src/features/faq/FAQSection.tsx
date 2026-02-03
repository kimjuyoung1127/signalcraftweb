"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-display tracking-tight"
                    >
                        {t("title")}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {questions.map((key, index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300"
                            >
                                <span className="text-xl font-bold text-foreground break-keep font-display">
                                    {t(`questions.${key}.q`)}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-blue-500 transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
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
                                <div className="px-8 pb-8 text-gray-400 text-lg leading-relaxed break-keep">
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
