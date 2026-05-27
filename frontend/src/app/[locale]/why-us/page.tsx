import { WhyUsDetailPage } from "@/features/why-us/WhyUsDetailPage";
import { generateStaticPageMetadata } from "../metadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return generateStaticPageMetadata("whyUs", locale);
}

export default function WhyUsPage() {
    return <WhyUsDetailPage />;
}
