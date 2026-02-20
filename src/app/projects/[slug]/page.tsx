"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { profile } from "@/content/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = profile.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <Link href="/projects" className="mb-8 inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <SectionHeader title={project.title} subtitle={project.period} />

                    <div className="mt-8 space-y-8">
                        <section>
                            <h3 className="mb-4 text-xl font-bold">Overview</h3>
                            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                {project.description}
                            </p>
                        </section>

                        {project.features && (
                            <section>
                                <h3 className="mb-4 text-xl font-bold">Key Features</h3>
                                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    {project.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <ChevronRight className="mr-2 h-5 w-5 shrink-0 text-blue-600" />
                                            <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                                <CardContent className="pt-6">
                                    <h3 className="mb-3 text-lg font-bold">Challenges</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {project.challenges}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-blue-50 dark:bg-blue-900/20 border-none text-blue-900 dark:text-blue-100">
                                <CardContent className="pt-6">
                                    <h3 className="mb-3 text-lg font-bold">What I Learned</h3>
                                    <p className="text-blue-800/80 dark:text-blue-200/80">
                                        {project.whatILearned}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                <aside className="space-y-6">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="mb-4 text-lg font-bold">Project Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <Badge key={tech}>{tech}</Badge>
                                        ))}
                                    </div>
                                </div>
                                {project.role && (
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Role</h4>
                                        <p className="font-medium">{project.role}</p>
                                    </div>
                                )}
                                <div className="pt-4 flex flex-col gap-3">
                                    {project.links?.live && project.links.live !== "#" && (
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                            <Button className="w-full pointer-events-none">
                                                View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </a>
                                    )}
                                    {project.links?.github && project.links.github !== "#" && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="w-full pointer-events-none">
                                                View the live code <Github className="ml-2 h-4 w-4" />
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    );
}
