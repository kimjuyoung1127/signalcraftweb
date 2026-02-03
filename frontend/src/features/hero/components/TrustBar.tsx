"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
];

export function TrustBar() {
    const t = useTranslations("About"); // Reusing "trustedBy" translation

    return (
        <div className="w-full py-8 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 font-medium">
                    {t("trustedBy")}
                </p>

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
