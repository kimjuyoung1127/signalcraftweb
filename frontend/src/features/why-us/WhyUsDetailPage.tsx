"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, BarChart3, CloudCog, Cpu } from "lucide-react";

const features = [
    {
        title: "Real-time Anomaly Detection",
        description: "Our AI model detects anomalies in milliseconds, preventing catastrophic failures.",
        icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Edge Processing",
        description: "Process data locally on the device for ultra-low latency and security.",
        icon: <Cpu className="w-6 h-6 text-purple-500" />
    },
    {
        title: "Enterprise Grade Security",
        description: "End-to-end encryption ensures your proprietary data remains safe.",
        icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
        title: "Predictive Analytics",
        description: "Forecast maintenance needs weeks in advance with 98% accuracy.",
        icon: <BarChart3 className="w-6 h-6 text-orange-500" />
    },
    {
        title: "Cloud Integration",
        description: "Seamlessly sync with AWS, Azure, or your private cloud infrastructure.",
        icon: <CloudCog className="w-6 h-6 text-sky-500" />
    },
    {
        title: "24/7 Monitoring",
        description: "Automated alerts sent directly to your maintenance team's devices.",
        icon: <CheckCircle2 className="w-6 h-6 text-teal-500" />
    }
];

export function WhyUsDetailPage() {
    return (
        <div className="pt-24 pb-24">
            <section className="container mx-auto px-4 mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-6"
                >
                    Why Choose <span className="text-blue-600">SignalCraft</span>?
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-3xl mx-auto"
                >
                    We combine cutting-edge acoustics AI with robust industrial hardware to deliver
                    unmatched reliability for your manufacturing lines.
                </motion.p>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-4 p-3 bg-muted/50 w-fit rounded-xl">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-muted/30 py-24 mt-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-6 bg-background rounded-xl">
                            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                        </div>
                        <div className="p-6 bg-background rounded-xl">
                            <div className="text-4xl font-bold text-blue-600 mb-2">&lt;10ms</div>
                            <div className="text-sm text-muted-foreground">Detection Latency</div>
                        </div>
                        <div className="p-6 bg-background rounded-xl">
                            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-sm text-muted-foreground">Supported Sensors</div>
                        </div>
                        <div className="p-6 bg-background rounded-xl">
                            <div className="text-4xl font-bold text-blue-600 mb-2">ISO</div>
                            <div className="text-sm text-muted-foreground">27001 Certified</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
