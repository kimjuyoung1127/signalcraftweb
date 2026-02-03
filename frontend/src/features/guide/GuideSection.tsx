"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export function GuideSection() {
    const t = useTranslations("Guide");

    const steps = [
        {
            icon: Zap,
            key: "attach",
        },
        {
            icon: CheckCircle2,
            key: "connect",
        },
        {
            icon: BarChart3,
            key: "insight",
        },
    ];

    return (
        <section id="guide" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
                    <p className="text-muted-foreground">
                        {t("description")}
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group bg-background p-6 rounded-2xl border border-transparent hover:border-border transition-colors shadow-sm hover:shadow-md"
                            >
                                <div className="w-24 h-24 rounded-full bg-background border-4 border-muted group-hover:border-blue-500 transition-colors flex items-center justify-center mb-6 z-10">
                                    <Icon className="w-10 h-10 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{t(`steps.${step.key}.title`)}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {t(`steps.${step.key}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/guide" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
                        {t("viewFull")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
