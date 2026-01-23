import { CaseStories } from "@/features/case-studies/CaseStories";

export default function CasesPage() {
    return (
        <div className="pt-20">
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Real-world examples of how SignalCraft is transforming industrial maintenance.
                </p>
            </div>
            <CaseStories />
        </div>
    );
}
