import { Link } from "@/i18n/routing";
import { CheckCircle, Download, BookOpen } from "lucide-react";

export default function GuidePage() {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4 inline-block">
                        Documentation
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Installation Guide</h1>
                    <p className="text-xl text-muted-foreground">
                        Get your SignalCraft sensors up and running in minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 border border-border rounded-2xl bg-card">
                        <BookOpen className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Quick Start Manual</h3>
                        <p className="text-muted-foreground mb-6">PDF guide for standard motor installation.</p>
                        <button className="flex items-center font-medium text-blue-500 hover:text-blue-600 transition-colors">
                            <Download className="w-4 h-4 mr-2" /> Download PDF (2.4MB)
                        </button>
                    </div>
                    <div className="p-8 border border-border rounded-2xl bg-card">
                        <BookOpen className="w-10 h-10 text-purple-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Network Configuration</h3>
                        <p className="text-muted-foreground mb-6">Setting up the Edge Gateway and Firewall rules.</p>
                        <button className="flex items-center font-medium text-purple-500 hover:text-purple-600 transition-colors">
                            <Download className="w-4 h-4 mr-2" /> Download PDF (1.8MB)
                        </button>
                    </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>Installation Steps</h2>
                    <div className="space-y-12 my-12">
                        {[
                            { title: "Unboxing & Pairing", desc: "Turn on the sensor and use the mobile app to scan the QR code for instant pairing." },
                            { title: "Mounting", desc: "Clean the surface of the motor casing. Apply the magnetic mount or use the provided epoxy for permanent installation." },
                            { title: "Calibration", desc: "The sensor will auto-calibrate within 60 seconds of the first run cycle." },
                            { title: "Dashboard Setup", desc: "Log in to the web console to visualize data streams immediately." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl font-bold">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                        <h3 className="text-lg font-bold mb-4">Need help?</h3>
                        <p className="mb-4">Our support team is available 24/7 for deployment assistance.</p>
                        <Link href="/contact" className="text-blue-500 font-medium hover:underline">Contact Support →</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
