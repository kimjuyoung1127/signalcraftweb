"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";

const cases = [
    {
        id: 1,
        client: "H-Mart Logistics",
        industry: "Logistics Automation",
        title: "Preventing Conveyor Motor Failure",
        result: "Reduced downtime by 85%",
        image: "bg-blue-900/20", // Placeholder color
    },
    {
        id: 2,
        client: "P-Chemical",
        industry: "Petrochemical Processing",
        title: "Leak Detection in High-Pressure Valves",
        result: "Saved $2.5M in potential damages",
        image: "bg-purple-900/20",
    },
    {
        id: 3,
        client: "T-Energy",
        industry: "Wind Power Generation",
        title: "Turbine Gearbox Diagnostics",
        result: "Extended asset life by 3 years",
        image: "bg-emerald-900/20",
    },
];

export function CaseStories() {
    return (
        <section id="cases" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Proven Impact</h2>
                        <p className="text-muted-foreground">See how industry leaders secure their operations.</p>
                    </div>
                    <Link href="/cases" className="hidden md:flex items-center text-sm font-semibold hover:text-blue-500 transition-colors">
                        View All Cases <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((story, i) => (
                        <Link key={story.id} href={`/cases/${story.id}`} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer min-h-[400px] flex flex-col h-full"
                            >
                                {/* Image Placeholder */}
                                <div className={`w-full h-64 rounded-2xl mb-6 overflow-hidden ${story.image} relative`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/20">
                                            {story.industry}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                                        {story.client}
                                    </h3>
                                    <p className="text-foreground/80 mb-4 flex-1">
                                        {story.title}
                                    </p>
                                    <div className="pt-4 border-t border-border mt-auto">
                                        <p className="text-sm font-semibold text-blue-600">
                                            Result: {story.result}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/cases" className="inline-flex items-center text-sm font-semibold hover:text-blue-500">
                        View All Cases <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
