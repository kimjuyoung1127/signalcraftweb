"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight, Mail } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900 z-0">
                {/* Abstract Shapes */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Prevent failures before they happen.
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Join 50+ smart factories saving millions in downtime costs.
                            Start your free acoustic diagnosis today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center shadow-lg shadow-blue-900/20"
                            >
                                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
                            >
                                <Mail className="mr-2 w-5 h-5" /> Contact Sales
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
