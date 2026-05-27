import { CasesDetailPage } from "@/features/case-studies/CasesDetailPage";
import { generateStaticPageMetadata } from "../metadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return generateStaticPageMetadata("cases", locale);
}

export default function CasesPage() {
    return <CasesDetailPage />;
}
