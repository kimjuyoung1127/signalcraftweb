"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Tag, Share2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface NewsArticleViewProps {
    id: string;
}

export function NewsArticleView({ id }: NewsArticleViewProps) {
    const t = useTranslations("News");

    // In a real app, you'd fetch based on ID. 
    // Here we use the same key-based logic as the list.
    const itemKey = `item${id}`;

    return (
        <div className="pt-32 pb-24 bg-background">
            <article className="container mx-auto px-4 max-w-4xl">
                <Link
                    href="/news"
                    className="inline-flex items-center text-muted-foreground hover:text-blue-500 mb-12 transition-colors font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    {t("viewAll")}
                </Link>

                <header className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="px-4 py-1.5 bg-blue-500/10 text-blue-500 rounded-full text-xs font-bold border border-blue-500/20">
                                {t(`items.${itemKey}.tag`)}
                            </span>
                            <div className="flex items-center text-sm text-muted-foreground font-medium">
                                <Calendar className="w-4 h-4 mr-2" />
                                2025.12.15
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-display break-keep">
                            {t(`items.${itemKey}.title`)}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed break-keep">
                            {t(`items.${itemKey}.excerpt`)}
                        </p>
                    </motion.div>
                </header>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10"
                >
                    {id === "1" ? (
                        <Image
                            src="/KOIIA.jpg"
                            alt="News Cover"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-muted flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
                        </div>
                    )}
                </motion.div>

                <div className="flex flex-col md:flex-row gap-16">
                    <div className="flex-1 prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose break-keep">
                        {/* 
                            This is a placeholder for actual content. 
                            In a CMS-driven app, this would be rich text.
                        */}
                        <p>
                            시그널크래프트(SignalCraft)가 산업통상자원부 산하 한국산업지능화협회(KOIIA)에서 주관하는
                            <strong> 'AC 배치 프로그램 1기'</strong>에 최종 선정되었습니다.
                            이번 프로그램은 팁스(TIPS) 운영사인 협회가 직접 유망 스타트업을 발굴하고 육성하기 위한 전문 액셀러레이팅 과정입니다.
                        </p>
                        <p>
                            시그널크래프트는 독자적인 초음파 센싱 기술과 엣지 AI 분석 솔루션을 통해 제조업의
                            디지털 전환(DX)을 선도하는 기술력을 인정받았습니다. 이번 선정을 통해 협회로부터
                            직접 투자 및 후속 팁스 추천, 그리고 다양한 대중견기업과의 네트워킹 기회를 제공받게 됩니다.
                        </p>
                        <p>
                            "산업 현장의 소리를 인사이트로 바꾸는 우리의 기술이 공신력 있는 기관을 통해
                            검증받게 되어 기쁩니다." 시그널크래프트 관계자는 "이번 프로그램을 통해
                            국내외 스마트 팩토리 시장에서의 점유율을 공격적으로 확대할 계획"이라고 밝혔습니다.
                        </p>
                    </div>

                    <aside className="md:w-64 shrink-0 space-y-12">
                        <div className="p-6 rounded-2xl bg-muted/30 border border-white/5">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Share2 className="w-4 h-4 text-blue-500" /> Share
                            </h4>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center hover:bg-muted transition-colors cursor-pointer text-xs font-bold">K</div>
                                <div className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center hover:bg-muted transition-colors cursor-pointer text-xs font-bold">F</div>
                                <div className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center hover:bg-muted transition-colors cursor-pointer text-xs font-bold">T</div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-blue-600/5 border border-blue-500/10">
                            <h4 className="font-bold mb-2">Need a Demo?</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                                Experience the power of sound-based anomaly detection.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center text-blue-500 font-bold text-sm hover:underline"
                            >
                                Contact Sales <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </article>
        </div>
    );
}
