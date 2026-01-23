import { Link } from "@/i18n/routing";
import { ArrowLeft, Calendar, FileText } from "lucide-react";

// Mock Data
const news = [
    {
        id: "1",
        title: "SignalCraft Raises Series A Funding",
        date: "October 15, 2025",
        category: "Corporate",
        content: `
            SignalCraft is proud to announce the successful closure of our Series A funding round, led by TechFrontier Ventures. 
            This investment of $12M will fuel our R&D efforts in next-generation acoustic AI models and expand our global operations.
            
            "The demand for predictive maintenance is skyrocketing," said CEO [Name]. "With this capital, we will accelerate our mission to make factories smarter and safer."
            
            Key areas of investment include:
            - Enhancing Edge AI processing capabilities
            - Expanding the engineering team
            - Establishing a new regional office in Singapore
        `
    },
    {
        id: "2",
        title: "Partnership with Global Logistics Giant",
        date: "September 02, 2025",
        category: "Partnership",
        content: `
            We have signed a strategic partnership agreement with [Logistics Company], one of the world's largest logistics providers.
            SignalCraft's sensors will be deployed across 20 distribution centers to monitor conveyor systems and automated sorting machinery.
            
            This rollout represents one of the largest deployments of acoustic predictive maintenance technology in the logistics sector to date.
        `
    },
    {
        id: "3",
        title: "New Feature Release: Real-time Spectral Analysis",
        date: "August 20, 2025",
        category: "Product",
        content: `
            Our latest software update (v2.4) introduces Real-time Spectral Analysis on the dashboard. 
            Engineers can now visualize the raw acoustic data in high resonance, allowing for deeper diagnostics of mechanical faults.
            
            The update also includes:
            - Customizable alert thresholds
            - Improved mobile responsiveness
            - Faster data export options
        `
    }
];

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = news.find((n) => n.id === id);

    if (!item) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                <Link href="/news" className="text-blue-500 hover:underline">Return to News</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <Link href="/news" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
                </Link>

                <article>
                    <div className="mb-8">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {item.date}</span>
                            <span className="px-2 py-0.5 bg-secondary rounded-md text-foreground">{item.category}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{item.title}</h1>
                    </div>

                    <div className="w-full h-80 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl mb-12 flex items-center justify-center">
                        <FileText className="w-16 h-16 text-gray-500" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none whitespace-pre-line text-muted-foreground">
                        {item.content}
                    </div>
                </article>
            </div>
        </div>
    );
}
