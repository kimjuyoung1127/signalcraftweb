import { GuideDetailPage } from "@/features/guide/GuideDetailPage";
import { generateStaticPageMetadata } from "../metadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return generateStaticPageMetadata("guide", locale);
}

export default function GuidePage() {
    return <GuideDetailPage />;
}
