import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

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
                        <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                        <li><Link href="/why-us" className="hover:text-foreground transition-colors">Technology</Link></li>
                        <li><Link href="/cases" className="hover:text-foreground transition-colors">Cases</Link></li>
                        <li><Link href="/news" className="hover:text-foreground transition-colors">News</Link></li>
                        <li><Link href="/guide" className="hover:text-foreground transition-colors">Installation Guide</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
                        <li>contact@signalcraft.ai</li>
                        <li>Seoul, Korea</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                <p>© 2026 SignalCraft. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
