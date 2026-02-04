"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, FileText, Terminal, Video } from "lucide-react";

export function GuideDetailPage() {
    return (
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
            <section className="container mx-auto px-4 mb-12 md:mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-6 break-keep"
                >
                    Implementation <span className="text-blue-600">Guide</span>
                </motion.h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto break-keep">
                    Everything you need to integrate SignalCraft into your existing infrastructure.
                    From hardware setup to API references.
                </p>
            </section>

            <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation Sidebar */}
                <div className="hidden md:block col-span-1 space-y-2">
                    <h3 className="font-bold mb-4 px-2">Documentation</h3>
                    {['Getting Started', 'Hardware Setup', 'API Reference', 'SDKs', 'Troubleshooting'].map((item) => (
                        <button key={item} className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                            {item}
                        </button>
                    ))}
                </div>

                {/* Main Content */}
                <div className="col-span-2 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-background border border-border p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                            <h2 className="text-2xl font-bold">Quick Start</h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground mb-4">
                                Install the SignalCraft sensor on your machinery. Ensure it is connected to the
                                local network and has a stable power supply.
                            </p>
                            <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                                $ curl -sL https://api.signalcraft.io/install | sudo bash
                            </div>
                            <p className="text-muted-foreground">
                                This script will register the device with your dashboard and begin not streaming calibration data.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 border border-border rounded-xl hover:border-blue-500 transition-colors cursor-pointer group">
                            <Video className="w-8 h-8 mb-4 text-purple-500 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold mb-2">Video Tutorials</h3>
                            <p className="text-sm text-muted-foreground">Step-by-step video guides for hardware installation.</p>
                        </div>
                        <div className="p-6 border border-border rounded-xl hover:border-blue-500 transition-colors cursor-pointer group">
                            <Terminal className="w-8 h-8 mb-4 text-green-500 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold mb-2">CLI Tools</h3>
                            <p className="text-sm text-muted-foreground">Command line utilities for advanced configuration.</p>
                        </div>
                        <div className="p-6 border border-border rounded-xl hover:border-blue-500 transition-colors cursor-pointer group">
                            <Code className="w-8 h-8 mb-4 text-orange-500 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold mb-2">API Reference</h3>
                            <p className="text-sm text-muted-foreground">Complete REST & GraphQL API documentation.</p>
                        </div>
                        <div className="p-6 border border-border rounded-xl hover:border-blue-500 transition-colors cursor-pointer group">
                            <FileText className="w-8 h-8 mb-4 text-blue-500 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold mb-2">Whitepapers</h3>
                            <p className="text-sm text-muted-foreground">Deep dives into our acoustic analysis algorithms.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
