"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart, Clock, Factory } from "lucide-react";
import Image from "next/image";

const cases = [
    {
        id: 1,
        client: "H-Mart Logistics",
        industry: "Logistics",
        title: "Preventing Conveyor Motor Failure",
        description: "H-Mart Logistics faced frequent downtime due to unexpected motor failures in their sorting facility. SignalCraft deployed acoustic sensors to monitor 500+ motors.",
        result: "Reduced downtime by 85% and saved $1.2M annually.",
        metrics: [
            { label: "ROI", value: "320%" },
            { label: "Downtime", value: "-85%" },
            { label: "Savings", value: "$1.2M" }
        ],
        image: "bg-blue-900",
    },
    {
        id: 2,
        client: "P-Chemical",
        industry: "Petrochemical",
        title: "Leak Detection in High-Pressure Valves",
        description: "Early detection of gas leaks is critical for safety. Our AI analyzed ultrasonic frequencies to detect minute leaks that manual inspections missed.",
        result: "Prevented 3 potential hazardous incidents.",
        metrics: [
            { label: "Safety Incidents", value: "0" },
            { label: "Detection Time", value: "<1s" },
            { label: "Coverage", value: "100%" }
        ],
        image: "bg-purple-900",
    },
    {
        id: 3,
        client: "T-Energy",
        industry: "Wind Power",
        title: "Turbine Gearbox Diagnostics",
        description: "Offshore wind turbines are expensive to maintain. We implemented predictive maintenance to schedule repairs only when necessary.",
        result: "Extended asset life by 3 years and optimized maintenance schedules.",
        metrics: [
            { label: "Asset Life", value: "+3 yrs" },
            { label: "Maintenance", value: "-40%" },
            { label: "Uptime", value: "99.9%" }
        ],
        image: "bg-emerald-900",
    },
];

export function CasesDetailPage() {
    return (
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
            <section className="container mx-auto px-4 mb-12 md:mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-6 break-keep"
                >
                    Success <span className="text-blue-600">Stories</span>
                </motion.h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto break-keep">
                    See how Global 500 companies are transforming their maintenance operations with SignalCraft.
                </p>
            </section>

            <section className="container mx-auto px-4 space-y-16 md:space-y-24">
                {cases.map((story, i) => (
                    <motion.div
                        key={story.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2">
                            <div className={`aspect-video rounded-2xl md:rounded-3xl ${story.image} bg-opacity-10 relative overflow-hidden shadow-2xl`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/40" />
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 text-white text-xs md:text-sm font-semibold">
                                    {story.client}
                                </div>
                                {/* Placeholder Visuals */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                    <Factory className="w-16 h-16 md:w-24 md:h-24 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                            <div className="text-blue-600 font-bold uppercase tracking-wider text-[10px] md:text-sm flex items-center gap-2">
                                <span className="w-6 md:w-8 h-[2px] bg-blue-600 inline-block"></span>
                                {story.industry}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight break-keep">{story.title}</h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed break-keep">
                                {story.description}
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 md:py-6 border-y border-border">
                                {story.metrics.map((metric, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <div className="text-xl md:text-2xl font-bold text-foreground">{metric.value}</div>
                                        <div className="text-[10px] md:text-xs text-muted-foreground uppercase">{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <p className="font-semibold text-blue-600 mb-4">{story.result}</p>
                                <button className="flex items-center font-bold hover:gap-2 transition-all">
                                    Read Full Case Study <ArrowUpRight className="ml-2 w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
