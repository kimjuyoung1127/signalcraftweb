"use client";

import { motion } from "framer-motion";
import { Building2, Award, Users } from "lucide-react";

const stats = [
    { label: "Partner Factories", value: "50+", icon: Building2 },
    { label: "Diagnosis Accuracy", value: "99.8%", icon: Award },
    { label: "Data Points/Day", value: "2M+", icon: Users },
];

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-secondary-foreground font-semibold tracking-wider uppercase mb-2">Our Mission</h2>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                                Listening to the <br />
                                <span className="text-blue-600">Heartbeat</span> of Industry
                            </h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            SignalCraft transforms the chaotic noise of industrial machinery into clear, actionable insights. By combining advanced ultrasonic sensors with edge computing, we detect anomalies weeks before they cause failure.
                        </motion.p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual/Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
                            {/* Abstract Visual: Noise to Line */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-blue-500/10 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    <h4 className="relative z-10 text-2xl font-mono font-bold text-foreground/80">Sound <br /> to <br /> Insight</h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Badges Marquee */}
                <div className="mt-24 pt-12 border-t border-border/50">
                    <p className="text-center text-sm font-medium text-muted-foreground mb-8">Trusted by Industry Leaders</p>
                    <div className="flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Mock Logos */}
                        {['Samsung', 'LG Energy', 'Hyundai', 'SK On', 'Posco'].map(brand => (
                            <div key={brand} className="text-xl font-bold">{brand}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
