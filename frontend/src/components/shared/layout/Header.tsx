"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
    const t = useTranslations("Header.nav");
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Scroll Listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { key: "about", href: "/about" },
        { key: "whyUs", href: "/why-us" },
        { key: "guide", href: "/guide" },
        { key: "cases", href: "/cases" },
        { key: "news", href: "/news" },
        { key: "contact", href: "/contact" },
    ];

    const toggleLanguage = () => {
        // usePathname from next-intl already returns the path without the locale prefix
        // so we just need to switch the locale
        const nextLocale = pathname.startsWith('/ko') ? 'en' : 'ko';
        // NOTE: Actually usePathname from navigation wrapper returns cleaner path. 
        // We need to inspect how next-intl handles current locale.
        // A better way is to check the current locale from params or context, 
        // but here let's assume we can derive it or just toggle.
        // However, standard `usePathname` from `i18n` removes the locale prefix.
        // So we can just push to the same pathname with different locale.

        // Let's rely on a simpler toggle: 
        // We know we are in [locale] layout. 
        // Ideally we should get `locale` from params or hook.
        // But for now, we can check document.cookie or just toggle based on URL if we used native hook.
        // Since we use `usePathname()` from `navigation`, it returns `/about`.
        // To toggle, we need to know current locale. 
    };

    // Correct approach for verify current locale with `useLocale` if available, or just Pass it as prop.
    // But let's look at how we can implement language switcher properly.

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                ? "bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-white/10 shadow-sm"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
                    Signal<span className="text-blue-500">Craft</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className="relative group text-sm font-medium text-foreground/80 hover:text-blue-500 transition-colors py-2"
                        >
                            {t(link.key)}
                            {/* Sound Wave Hover Effect */}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Utilities */}
                <div className="flex items-center gap-4">
                    {/* Language Toggle */}
                    <Link
                        href={pathname}
                        locale="en"
                        className="text-sm font-bold p-2 text-foreground/80 hover:text-blue-500 transition-colors"
                    >
                        EN
                    </Link>
                    <span className="text-foreground/30">|</span>
                    <Link
                        href={pathname}
                        locale="ko"
                        className="text-sm font-bold p-2 text-foreground/80 hover:text-blue-500 transition-colors"
                    >
                        KO
                    </Link>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.key}
                                    href={link.href}
                                    className="text-lg font-medium p-2 hover:bg-accent rounded-md"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t(link.key)}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
