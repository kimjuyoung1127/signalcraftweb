"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, User, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactDetailPage() {
    const t = useTranslations("Contact");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        reason: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/ContactDetailPage", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", reason: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
            <section className="container mx-auto px-4 mb-12 md:mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 break-keep"
                >
                    {t.rich("title", {
                        span: (chunks) => <span className="text-blue-600">{chunks}</span>
                    })}
                </motion.h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto break-keep">
                    {t("description")}
                </p>
            </section>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-12"
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-6">{t("info.title")}</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">{t("info.address.label")}</h4>
                                    <p className="text-muted-foreground whitespace-pre-line">{t("info.address.value")}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">{t("info.email.label")}</h4>
                                    <p className="text-muted-foreground">{t("info.email.value")}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">{t("info.phone.label")}</h4>
                                    <p className="text-muted-foreground">{t("info.phone.value")}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{t("info.phone.sub")}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">{t("info.ceo.label")}</h4>
                                    <p className="text-muted-foreground">{t("info.ceo.value")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/50 p-8 rounded-2xl border border-border">
                        <h3 className="text-xl font-bold mb-4">{t("faq.title")}</h3>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                                    {t("faq.q1.q")}
                                    <span className="transition group-open:rotate-180">▼</span>
                                </summary>
                                <p className="text-muted-foreground text-sm mt-2 pl-4 border-l-2 border-blue-500">
                                    {t("faq.q1.a")}
                                </p>
                            </details>
                            <details className="group">
                                <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                                    {t("faq.q2.q")}
                                    <span className="transition group-open:rotate-180">▼</span>
                                </summary>
                                <p className="text-muted-foreground text-sm mt-2 pl-4 border-l-2 border-blue-500">
                                    {t("faq.q2.a")}
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
                    className="bg-card border border-border p-8 rounded-3xl shadow-sm relative overflow-hidden"
                >
                    <h3 className="text-2xl font-bold mb-6">{t("form.title")}</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t("form.firstName")}</label>
                                <input
                                    required
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder={t("form.placeholder.firstName")}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t("form.lastName")}</label>
                                <input
                                    required
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder={t("form.placeholder.lastName")}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t("form.email")}</label>
                            <input
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder={t("form.placeholder.email")}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t("form.reason")}</label>
                            <select
                                required
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="">Select a reason</option>
                                <option>{t("form.placeholder.reasons.demo")}</option>
                                <option>{t("form.placeholder.reasons.sales")}</option>
                                <option>{t("form.placeholder.reasons.support")}</option>
                                <option>{t("form.placeholder.reasons.partner")}</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t("form.message")}</label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500 focus:outline-none min-h-[150px]"
                                placeholder={t("form.placeholder.message")}
                            ></textarea>
                        </div>

                        <Button
                            disabled={status === "loading"}
                            className="w-full py-6 text-lg flex items-center justify-center gap-2"
                        >
                            {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                            {t("form.submit")}
                        </Button>
                    </form>

                    {/* Feedback Modal Overlay */}
                    <AnimatePresence>
                        {status !== "idle" && status !== "loading" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="bg-card border border-border p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center"
                                >
                                    {status === "success" ? (
                                        <>
                                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                                <CheckCircle2 className="w-12 h-12" />
                                            </div>
                                            <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                                            <p className="text-muted-foreground mb-8">We'll get back to you as soon as possible via email.</p>
                                            <Button className="w-full" onClick={() => setStatus("idle")}>Close</Button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 mx-auto mb-6">
                                                <AlertCircle className="w-12 h-12" />
                                            </div>
                                            <h4 className="text-2xl font-bold mb-2">Delivery Failed</h4>
                                            <p className="text-muted-foreground mb-8">Something went wrong. Please check your connection or try again later.</p>
                                            <Button variant="outline" className="w-full" onClick={() => setStatus("idle")}>Try Again</Button>
                                        </>
                                    )}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
