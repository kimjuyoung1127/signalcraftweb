"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { ResponsiveImageSlot } from "@/components/ResponsiveImageSlot";

// Configuration for team images to make swapping easy
const TEAM_IMAGES: Record<string, string> = {
    ceo: "/images/team/ceo.jpg", // Placeholder until real image is available
    cto: "/images/team/cto.jpg",
    hw: "/images/team/hw.jpg",
    researcher: "/images/team/researcher.jpg",
    hr: "/images/team/hr.jpg"
};

const TEAM_KEYS = ['ceo', 'cto', 'hw', 'researcher', 'hr'];
const MILESTONE_KEYS = ['2023', '2024', '2025'];
const VALUE_KEYS = ['precision', 'edge', 'human'];

export function AboutDetailPage() {
    const t = useTranslations("About");

    return (
        <div className="pt-16 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-6"
                    dangerouslySetInnerHTML={{ __html: t.raw("hero.title") }}
                />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-3xl mx-auto"
                >
                    {t("hero.subtitle")}
                </motion.p>
            </section>

            {/* History / Values */}
            <section className="bg-muted/30 py-16 mb-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">{t("journey.title")}</h2>
                        <div className="space-y-6">
                            {MILESTONE_KEYS.map((year) => (
                                <div key={year} className="flex gap-4">
                                    <div className="font-bold text-blue-600 w-16">{t(`journey.milestones.${year}.year`)}</div>
                                    <div>
                                        <h4 className="font-semibold">{t(`journey.milestones.${year}.title`)}</h4>
                                        <p className="text-sm text-muted-foreground">{t(`journey.milestones.${year}.desc`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-background p-8 rounded-3xl border border-border shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">{t("values.title")}</h3>
                        <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                            {VALUE_KEYS.map((key) => (
                                <li key={key} dangerouslySetInnerHTML={{ __html: t.raw(`values.list.${key}`) }} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">{t("team.title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TEAM_KEYS.map((key, i) => {
                        // Safe property access using t.has checks implies we trust the keys list matches the json structure
                        // If a key is missing in JSON, next-intl returns the key string, which is safe but ugly.
                        // We assume keys exist as we just added them.
                        const name = t(`team.members.${key}.name`);
                        const email = t.has(`team.members.${key}.email`) ? t(`team.members.${key}.email`) : null;

                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <ResponsiveImageSlot
                                    src={TEAM_IMAGES[key]} // Points to configured path (currently placeholder)
                                    alt={name}
                                    className="mb-6 aspect-[4/5] bg-muted w-full"
                                />
                                <h3 className="text-xl font-bold">{name}</h3>
                                <p className="text-blue-600 font-medium mb-2">{t(`team.members.${key}.role`)}</p>
                                <p className="text-muted-foreground text-sm mb-4">{t(`team.members.${key}.bio`)}</p>
                                <div className="flex gap-3">
                                    {/* Placeholder social links - could be added to JSON if needed */}
                                    <button className="text-muted-foreground hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></button>
                                    {email && (
                                        <a href={`mailto:${email}`} className="text-muted-foreground hover:text-blue-500 transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
