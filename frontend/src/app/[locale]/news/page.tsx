import { NewsDetailPage } from "@/features/news/NewsDetailPage";
import { generateStaticPageMetadata } from "../metadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return generateStaticPageMetadata("news", locale);
}

export default function NewsPage() {
    return <NewsDetailPage />;
}
