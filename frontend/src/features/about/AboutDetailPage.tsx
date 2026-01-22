"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const team = [
    {
        name: "Dr. Sarah Kim",
        role: "CEO & Co-Founder",
        bio: "Ph.D. in Acoustics from KAIST. 15 years in industrial noise analysis.",
        image: "/images/team-1.jpg", // Placeholder
    },
    {
        name: "James Lee",
        role: "CTO",
        bio: "Ex-Samsung Electronics AI Researcher. Specialist in Edge Computing.",
        image: "/images/team-2.jpg", // Placeholder
    },
    {
        name: "Elena Park",
        role: "Head of Product",
        bio: "Product strategist focusing on UX for industrial tools.",
        image: "/images/team-3.jpg", // Placeholder
    },
];

export function AboutDetailPage() {
    return (
        <div className="pt-16 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-6"
                >
                    We Decode the <span className="text-blue-600">Sound of Industry</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-3xl mx-auto"
                >
                    SignalCraft was founded on a simple belief: Every machine has a voice.
                    By listening carefully, we can prevent failures before they happen.
                </motion.p>
            </section>

            {/* History / Values */}
            <section className="bg-muted/30 py-16 mb-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="font-bold text-blue-600 w-16">2023</div>
                                <div>
                                    <h4 className="font-semibold">Founded in Seoul</h4>
                                    <p className="text-sm text-muted-foreground">Started as a research lab at KAIST.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="font-bold text-blue-600 w-16">2024</div>
                                <div>
                                    <h4 className="font-semibold">Seed Funding</h4>
                                    <p className="text-sm text-muted-foreground">Secured $1M to build the MVP.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="font-bold text-blue-600 w-16">2025</div>
                                <div>
                                    <h4 className="font-semibold">Series A & Global Expansion</h4>
                                    <p className="text-sm text-muted-foreground">Deployed in 50+ factories worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background p-8 rounded-3xl border border-border shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">Core Values</h3>
                        <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                            <li><strong className="text-foreground">Precision First:</strong> Data accuracy is our obsession.</li>
                            <li><strong className="text-foreground">Edge Native:</strong> We process where the data lives.</li>
                            <li><strong className="text-foreground">Human Centric:</strong> AI should empower, not replace.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">Meet the Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-[4/5] bg-muted rounded-2xl mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 transition-transform duration-500 group-hover:scale-105" />
                                {/* Placeholder for Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                    [Img: {member.name}]
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                            <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                            <div className="flex gap-3">
                                <button className="text-muted-foreground hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></button>
                                <button className="text-muted-foreground hover:text-blue-500 transition-colors"><Mail className="w-5 h-5" /></button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
