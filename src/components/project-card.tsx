"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Project {
    title: string;
    slug: string;
    description: string;
    stack: string[];
    isPublic?: boolean;
    features?: string[];
    challenges?: string;
    whatILearned?: string;
    links?: {
        github: string;
        live: string;
    };
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                        <div className="flex space-x-2">
                            {project.links?.github && project.links.github !== "#" && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0 pointer-events-none">
                                        <Github className="h-4 w-4" />
                                    </Button>
                                </a>
                            )}
                            {project.links?.live && project.links.live !== "#" && (
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0 pointer-events-none">
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.isPublic && (
                            <Badge className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800">
                                Public
                            </Badge>
                        )}
                        {project.stack.map((tech) => (
                            <Badge key={tech} className="bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardHeader>
                <CardContent className="flex-1">
                    <CardDescription className="text-slate-600 dark:text-slate-400 line-clamp-3">
                        {project.description}
                    </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                    <Link href={`/projects/${project.slug}`} className="w-full">
                        <Button variant="outline" className="w-full">View Details</Button>
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
