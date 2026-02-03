import { NewsArticleView } from "@/features/news/NewsArticleView";

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return <NewsArticleView id={id} />;
}
