import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        Signal<span className="text-blue-500">Craft</span>
                    </Link>
                    <p className="mt-4 text-muted-foreground text-sm max-w-xs">
                        {t("mission")}
                        <br />
                        {t("description")}
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">{t("sitemap")}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-foreground transition-colors">{t("links.about")}</Link></li>
                        <li><Link href="/why-us" className="hover:text-foreground transition-colors">{t("links.technology")}</Link></li>
                        <li><Link href="/cases" className="hover:text-foreground transition-colors">{t("links.cases")}</Link></li>
                        <li><Link href="/news" className="hover:text-foreground transition-colors">{t("links.news")}</Link></li>
                        <li><Link href="/guide" className="hover:text-foreground transition-colors">{t("links.guide")}</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">{t("contact")}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/contact" className="hover:text-foreground transition-colors">{t("contactUs")}</Link></li>
                        <li>contact@signalcraft.ai</li>
                        <li>Seoul, Korea</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                <p>© 2026 SignalCraft. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-foreground transition-colors">{t("privacy")}</Link>
                    <Link href="/terms" className="hover:text-foreground transition-colors">{t("terms")}</Link>
                </div>
            </div>
        </footer>
    );
}
