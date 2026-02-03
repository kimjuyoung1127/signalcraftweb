"use client";

import { motion, useSpring, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

interface StatItemProps {
    value: number;
    suffix: string;
    label: string;
    delay?: number;
}

function Counter({ value, suffix, label, delay = 0 }: StatItemProps) {
    const countRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2,
            delay,
            ease: "easeOut",
            onUpdate(value) {
                if (countRef.current) {
                    countRef.current.textContent = value.toFixed(value % 1 === 0 ? 0 : 1);
                }
            },
        });
        return () => controls.stop();
    }, [value, delay]);

    return (
        <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                <span ref={countRef}>0</span>
                {suffix}
            </div>
            <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-widest break-keep text-center">
                {label}
            </div>
        </div>
    );
}

export function HeroStats() {
    const t = useTranslations("Hero.stats");

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 mt-20 md:mt-24 w-full max-w-4xl border-t border-white/5 pt-12">
            <Counter
                value={85}
                suffix="%"
                label={t("downtime")}
                delay={0.6}
            />
            <Counter
                value={99.9}
                suffix="%"
                label={t("accuracy")}
                delay={0.8}
            />
            <Counter
                value={24}
                suffix="/7"
                label={t("monitoring")}
                delay={1.0}
            />
        </div>
    );
}
