import { ContactDetailPage } from "@/features/contact/ContactDetailPage";
import { generateStaticPageMetadata } from "../metadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return generateStaticPageMetadata("contact", locale);
}

export default function ContactPage() {
    return <ContactDetailPage />;
}
