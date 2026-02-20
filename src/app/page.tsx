"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

interface Project {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  features?: string[];
  challenges?: string;
  whatILearned?: string;
  links?: {
    github: string;
    live: string;
  };
}

interface SkillGroup {
  category: string;
  items: string[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <section className="mb-24 flex flex-col items-center text-center">
        <motion.div
          {...fadeInUp}
          className="mb-6 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        >
          Open to roles for General 2024/2025
        </motion.div>
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl"
        >
          Hi, I am <span className="text-blue-600 dark:text-blue-500">{profile.basics.name}</span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="mb-8 max-w-[700px] text-lg text-slate-600 dark:text-slate-400 md:text-xl"
        >
          {profile.basics.headline}. {profile.basics.summary}
        </motion.p>
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/projects">
            <Button size="lg" className="rounded-full">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="rounded-full">
              Contact Me
            </Button>
          </Link>
        </motion.div>
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center space-x-4"
        >
          <a href={profile.basics.github} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="pointer-events-none"><Github className="h-5 w-5" /></Button>
          </a>
          <a href={profile.basics.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="pointer-events-none"><Linkedin className="h-5 w-5" /></Button>
          </a>
          {/* <a href={`mailto:${profile.basics.email}`}>
          <Button variant="ghost" size="sm" className="pointer-events-none"><Mail className="h-5 w-5" /></Button>
          </a> */}
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title="Featured Projects" subtitle="A selection of my recent work in web development and AI automation." />
          <Link href="/projects" className="hidden md:block">
            <Button variant="ghost">View all projects <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.slice(0, 3).map((project: Project, index: number) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="mb-24">
        <SectionHeader title="Technical Skills" subtitle="Technologies and tools I work with to build modern applications." />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {profile.skills.map((skillGroup: SkillGroup, index: number) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill: string) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
