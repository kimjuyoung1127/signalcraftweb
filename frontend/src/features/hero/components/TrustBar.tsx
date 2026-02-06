"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const LOGO_LIST = [
    "KLT",
    "Jeonnam Bioindustry Foundation",
    "Odle Odle Inc.",
    "NullbyteWorks",
    "Underwater",
    "infinior",
    "Korea Maritime & Ocean University",
];

export function TrustBar() {
    const t = useTranslations("About"); // Reusing "trustedBy" translation

    return (
        <div className="w-full py-8 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] md:text-xs font-bold text-blue-400 mb-4 inline-flex items-center gap-1.5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Social Venture Certified
                    </motion.div>
                    <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                        {t("trustedBy")}
                    </p>
                </div>

                <div className="relative flex overflow-hidden select-none">
                    <motion.div
                        className="flex shrink-0 items-center justify-around gap-16 min-w-full"
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                    >
                        {LOGO_LIST.map((company, index) => (
                            <span
                                key={`l1-${index}`}
                                className="text-sm md:text-base font-bold text-gray-400/30 hover:text-gray-300 transition-colors whitespace-nowrap"
                            >
                                {company}
                            </span>
                        ))}
                    </motion.div>
                    {/* Duplicate for infinite loop */}
                    <motion.div
                        className="flex shrink-0 items-center justify-around gap-16 min-w-full"
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                    >
                        {LOGO_LIST.map((company, index) => (
                            <span
                                key={`l2-${index}`}
                                className="text-sm md:text-base font-bold text-gray-400/30 hover:text-gray-300 transition-colors whitespace-nowrap"
                            >
                                {company}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
