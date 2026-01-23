import { Link } from "@/i18n/routing";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Mock Data
const cases = [
    {
        id: "1",
        client: "H-Mart Logistics",
        industry: "Logistics Automation",
        title: "Preventing Conveyor Motor Failure",
        result: "Reduced downtime by 85%",
        content: `
            In large-scale logistics centers, conveyor belt motors are critical assets. 
            A sudden failure can halt the entire sorting line, leading to significant delays and revenue loss.
            
            SignalCraft installed its non-invasive acoustic sensors on 50 key motors. 
            Within two weeks, the AI detected an abnormal frequency pattern in Motor #42, indicating early-stage bearing wear.
            
            Maintenance teams were alerted immediately and replaced the bearing during a scheduled break, preventing a potential 4-hour unplanned outage.
        `,
        stats: [
            { label: "Downtime Prevented", value: "4 Hours" },
            { label: "Cost Saving", value: "$45,000" },
            { label: "Detection Time", value: "< 0.1s" }
        ]
    },
    {
        id: "2",
        client: "P-Chemical",
        industry: "Petrochemical Processing",
        title: "Leak Detection in High-Pressure Valves",
        result: "Saved $2.5M in potential damages",
        content: `
            High-pressure valves in petrochemical plants are prone to micro-leaks that are invisible to the naked eye and inaudible to human ears.
            These leaks can be hazardous and costly.
            
            SignalCraft's ultrasonic analysis identified a high-frequency hiss from Valve V-209 that deviated from the standard operating profile.
            Verification confirmed a seal breach. Early intervention prevented a hazardous chemical spill and ensured compliance with safety regulations.
        `,
        stats: [
            { label: "Risk Mitigated", value: "Critical" },
            { label: "Asset Protected", value: "$2.5M" },
            { label: "Compliance", value: "100%" }
        ]
    },
    {
        id: "3",
        client: "T-Energy",
        industry: "Wind Power Generation",
        title: "Turbine Gearbox Diagnostics",
        result: "Extended asset life by 3 years",
        content: `
            Wind turbine gearboxes operate under extreme stress. Traditional vibration monitoring often misses subtle initial faults.
            
            By analyzing the acoustic signature of the gearbox, SignalCraft identified gear mesh misalignment months before it would cause vibration alarms.
            Remote adjustments were made to the control parameters, reducing stress on the gearbox and extending its estimated operational life by 3 years.
        `,
        stats: [
            { label: "Life Extension", value: "3 Years" },
            { label: "ROI", value: "1200%" },
            { label: "Maintenance", value: "Predictive" }
        ]
    },
];

export default async function CaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const caseStudy = cases.find((c) => c.id === id);

    if (!caseStudy) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Case Not Found</h1>
                <Link href="/cases" className="text-blue-500 hover:underline">Return to Cases</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Button */}
                <Link href="/cases" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cases
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium border border-blue-500/20">
                        {caseStudy.industry}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">{caseStudy.client}: {caseStudy.title}</h1>
                    <p className="text-2xl text-muted-foreground">{caseStudy.result}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {caseStudy.stats.map((stat, index) => (
                        <div key={index} className="p-6 bg-card border border-border rounded-2xl">
                            <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-2xl font-bold mb-4">The Challenge & Solution</h2>
                    <div className="whitespace-pre-line text-lg leading-relaxed text-muted-foreground">
                        {caseStudy.content}
                    </div>

                    <h3 className="text-xl font-bold mt-12 mb-6">Key Technologies Used</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                        {["Acoustic Signature Analysis", "Edge AI Processing", "Real-time Anomaly Detection", "Predictive maintenance Dashboard"].map((tech, i) => (
                            <li key={i} className="flex items-center p-4 bg-secondary/50 rounded-xl">
                                <CheckCircle2 className="w-5 h-5 mr-3 text-blue-500" />
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-20 p-10 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl text-center border border-white/10">
                    <h3 className="text-2xl font-bold mb-4">Ready to optimize your operations?</h3>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors">
                            Request Demo
                        </Link>
                        <Link href="/cases" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-colors">
                            View More Cases
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
