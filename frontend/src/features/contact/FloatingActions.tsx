"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle, X, ChevronRight, Activity } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function FloatingActions() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("Index"); // Using Index or a specific namespace

    return (
        <>
            {/* FAB */}
            <div className="fixed bottom-6 right-6 z-50">
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)}
                    className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white pl-4 pr-6 py-3 rounded-full shadow-lg shadow-blue-500/20 transition-all"
                >
                    <div className="bg-white/20 p-1.5 rounded-full">
                        <Activity className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm">Quick Diagnosis</span>
                </motion.button>
            </div>

            {/* Drawer / Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background border-l border-border z-[70] shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <div>
                                    <h3 className="text-xl font-bold">Start Diagnosis</h3>
                                    <p className="text-sm text-muted-foreground">Select your equipment type</p>
                                </div>
                                <motion.button
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-accent rounded-full text-muted-foreground transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            </div>

                            {/* Body (Form) */}
                            <motion.div
                                className="flex-1 overflow-y-auto p-6 space-y-6"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.div className="space-y-4" variants={itemVariants}>
                                    <label className="block text-sm font-medium">Industry</label>
                                    <select className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-blue-500 outline-none">
                                        <option>Manufacturing</option>
                                        <option>Energy / Power</option>
                                        <option>Logistics</option>
                                        <option>Automotive</option>
                                    </select>
                                </motion.div>

                                <motion.div className="space-y-4" variants={itemVariants}>
                                    <label className="block text-sm font-medium">Equipment</label>
                                    <select className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-blue-500 outline-none">
                                        <option>Motor / Generator</option>
                                        <option>Gearbox</option>
                                        <option>Pump / Compressor</option>
                                        <option>Robot Arm</option>
                                    </select>
                                </motion.div>

                                <motion.div className="p-4 bg-muted/50 rounded-xl border border-dashed border-border text-center" variants={itemVariants}>
                                    <p className="text-sm text-muted-foreground mb-2">Upload Sound Sample (Optional)</p>
                                    <button className="text-blue-500 text-sm font-semibold hover:underline">Choose file...</button>
                                </motion.div>
                            </motion.div>

                            {/* Footer */}
                            <div className="p-6 border-t border-border bg-muted/10">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                                    Generate Report <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
