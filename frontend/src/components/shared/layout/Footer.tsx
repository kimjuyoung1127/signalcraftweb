"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
    const t = useTranslations("Index"); // Minimal fallback for now

    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        Signal<span className="text-blue-500">Craft</span>
                    </Link>
                    <p className="mt-4 text-muted-foreground text-sm max-w-xs">
                        Sound to Insight.
                        <br />
                        Revolutionizing smart factory monitoring with AI audio analysis.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Sitemap</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/why-us">Technology</Link></li>
                        <li><Link href="/cases">Cases</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>contact@signalcraft.ai</li>
                        <li>Seoul, Korea</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
                © 2026 SignalCraft. All rights reserved.
            </div>
        </footer>
    );
}
