import { AboutDetailPage } from "@/features/about/AboutDetailPage";
import { generateStaticPageMetadata } from "../metadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return generateStaticPageMetadata("about", locale);
}

export default function AboutPage() {
    return <AboutDetailPage />;
}
