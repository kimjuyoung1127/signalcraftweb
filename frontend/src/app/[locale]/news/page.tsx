import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar } from "lucide-react";

// Mock Data (Duplicated for consistency, ideally shared)
const news = [
    {
        id: "1",
        title: "SignalCraft Raises Series A Funding",
        date: "October 15, 2025",
        category: "Corporate",
        excerpt: "Investment will fuel R&D in next-generation acoustic AI models."
    },
    {
        id: "2",
        title: "Partnership with Global Logistics Giant",
        date: "September 02, 2025",
        category: "Partnership",
        excerpt: "Sensors to be deployed across 20 distribution centers worldwide."
    },
    {
        id: "3",
        title: "New Feature Release: Real-time Spectral Analysis",
        date: "August 20, 2025",
        category: "Product",
        excerpt: "Visualize raw acoustic data in high resonance for deeper diagnostics."
    }
];

export default function NewsPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
                    <p className="text-xl text-muted-foreground">Latest stories from the SignalCraft team.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <Link key={item.id} href={`/news/${item.id}`} className="group block h-full">
                            <div className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                                <div className="h-48 bg-muted flex items-center justify-center">
                                    <span className="text-muted-foreground font-medium">{item.category}</span>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {item.date}
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                                        {item.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-4 flex-1">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center text-blue-500 font-medium mt-auto">
                                        Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
