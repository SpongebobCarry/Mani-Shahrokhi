import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
    return (
        <div className={cn("space-y-2 mb-8", className)}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-slate-500 dark:text-slate-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
