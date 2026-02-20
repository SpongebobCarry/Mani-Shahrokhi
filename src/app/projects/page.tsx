"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { profile } from "@/content/profile";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    const allTech = Array.from(
        new Set(profile.projects.flatMap((p) => p.stack))
    ).sort();

    const filteredProjects = profile.projects.filter((project) => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTech = selectedTech ? project.stack.includes(selectedTech) : true;
        return matchesSearch && matchesTech;
    });

    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <SectionHeader
                title="My Projects"
                subtitle="A comprehensive list of my software development and AI automation projects."
            />

            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
                {/* Search */}
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="h-10 w-full rounded-md border border-slate-200 bg-white pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Tech Filtering */}
                <div className="flex flex-wrap gap-2">
                    <Badge
                        className={cn(
                            "cursor-pointer px-3 py-1",
                            selectedTech === null
                                ? "bg-blue-600 text-white dark:bg-blue-500"
                                : "bg-transparent text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800"
                        )}
                        onClick={() => setSelectedTech(null)}
                    >
                        All
                    </Badge>
                    {allTech.map((tech) => (
                        <Badge
                            key={tech}
                            className={cn(
                                "cursor-pointer px-3 py-1",
                                selectedTech === tech
                                    ? "bg-blue-600 text-white dark:bg-blue-500"
                                    : "bg-transparent text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800"
                            )}
                            onClick={() => setSelectedTech(tech)}
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full py-24 text-center">
                        <p className="text-lg text-slate-500">No projects found matching your criteria.</p>
                    </div>
                )}
            </div>

            {/* Additional Projects List */}
            <div className="mt-24 rounded-2xl bg-slate-50 p-8 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">Other Completed Works</h3>
                <div className="flex flex-wrap gap-3">
                    {profile.additionalProjects.map((proj) => (
                        <Badge key={proj} variant="secondary" className="px-4 py-1.5 text-sm">
                            {proj}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}


