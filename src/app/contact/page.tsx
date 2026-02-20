"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/content/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <SectionHeader
                title="Get in Touch"
                subtitle="Have a project in mind or just want to say hi? Feel free to reach out!"
            />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Contact info */}
                <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* <Card className="border-none bg-slate-50 dark:bg-slate-900">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                                <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-slate-100">Email</h3>
                                <p className="text-sm text-slate-500">{profile.basics.email}</p>
                            </CardContent>
                        </Card> */}
                        {/* <Card className="border-none bg-slate-50 dark:bg-slate-900">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                                <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-slate-100">Location</h3>
                                <p className="text-sm text-slate-500">{profile.basics.location}</p>
                            </CardContent>
                        </Card> */}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href={profile.basics.github} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="rounded-full w-12 h-12 p-0 pointer-events-none">
                                    <Github className="h-5 w-5" />
                                </Button>
                            </a>
                            <a href={profile.basics.linkedin} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="rounded-full w-12 h-12 p-0 pointer-events-none">
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <Card>
                        <CardContent className="p-8">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <input
                                            id="name"
                                            placeholder="Your Name"
                                            className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Your Email"
                                            className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <input
                                        id="subject"
                                        placeholder="Inquiry about..."
                                        className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Your message here..."
                                        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950"
                                    />
                                </div>
                                <Button className="w-full h-12">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card> */}
                </motion.div>
            </div>
        </div>
    );
}
