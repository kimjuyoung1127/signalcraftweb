"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactDetailPage() {
    return (
        <div className="pt-24 pb-24">
            <section className="container mx-auto px-4 mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-6"
                >
                    Get in <span className="text-blue-600">Touch</span>
                </motion.h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Ready to modernize your factory? Our experts are here to help you get started with a free consultation.
                </p>
            </section>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-12"
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Headquarters</h4>
                                    <p className="text-muted-foreground">123 Teheran-ro, Gangnam-gu<br />Seoul, South Korea 06234</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Email Us</h4>
                                    <p className="text-muted-foreground">contact@signalcraft.io</p>
                                    <p className="text-muted-foreground">support@signalcraft.io</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Call Us</h4>
                                    <p className="text-muted-foreground">+82 2-1234-5678</p>
                                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm KST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/50 p-8 rounded-2xl border border-border">
                        <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                                    Can I test before buying?
                                    <span className="transition group-open:rotate-180">▼</span>
                                </summary>
                                <p className="text-muted-foreground text-sm mt-2 pl-4 border-l-2 border-blue-500">
                                    Yes! We offer a 2-week pilot program for qualified enterprise clients.
                                </p>
                            </details>
                            <details className="group">
                                <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                                    Does it work offline?
                                    <span className="transition group-open:rotate-180">▼</span>
                                </summary>
                                <p className="text-muted-foreground text-sm mt-2 pl-4 border-l-2 border-blue-500">
                                    Our Edge AI models run locally on the device, so you don't need constant internet connection for detection.
                                </p>
                            </details>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card border border-border p-8 rounded-3xl shadow-sm"
                >
                    <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="john@company.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Reason for Contact</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                <option>Request Demo</option>
                                <option>Sales Inquiry</option>
                                <option>Technical Support</option>
                                <option>Partnership</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none min-h-[150px]" placeholder="Tell us about your project or needs..."></textarea>
                        </div>

                        <Button className="w-full py-6 text-lg">Send Message</Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
