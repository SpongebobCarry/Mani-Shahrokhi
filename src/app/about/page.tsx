"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, User } from "lucide-react";
import { profile } from "@/content/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <SectionHeader
                title="About Me"
                subtitle="My educational background, skills, and professional journey so far."
            />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {/* Left Column: Education & Background */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <div className="flex items-center space-x-2 mb-6">
                            <GraduationCap className="h-6 w-6 text-blue-600" />
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Education</h3>
                        </div>
                        <div className="space-y-6">
                            {profile.education.map((edu, index) => (
                                <Card key={index} className="border-none bg-slate-50 dark:bg-slate-900 overflow-hidden">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="text-lg">{edu.institution}</CardTitle>
                                                <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
                                            </div>
                                            <Badge variant="outline">{edu.period}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{edu.location}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center space-x-2 mb-6">
                            <BookOpen className="h-6 w-6 text-blue-600" />
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Experience & Extracurriculars</h3>
                        </div>
                        <div className="space-y-6">
                            {profile.experience.map((exp, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 pb-8 last:pb-0">
                                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950" />
                                    <div className="mb-1 flex items-center justify-between">
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{exp.role}</h4>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">{exp.period}</span>
                                    </div>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{exp.company}</p>
                                    <ul className="space-y-2">
                                        {(exp.highlights ?? []).map((highlight, hIndex) => (
                                            <li key={hIndex} className="text-slate-600 dark:text-slate-400 text-sm flex items-start">
                                                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Skills Sidebar */}
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <User className="h-5 w-5 text-blue-600" />
                                <span>Quick Bio</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Currently a Computer Science major at {profile.education[0].institution}, focusing on AI automation and modern web technologies. I enjoy bridging the gap between technical implementation and business strategy.
                            </p>
                        </CardContent>
                    </Card>

                    {profile.skills.map((group) => (
                        <Card key={group.category}>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">{group.category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
