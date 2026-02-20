"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {profile.basics.name}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-2">
                    <ul className="flex items-center space-x-6">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                                        pathname === item.href
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-slate-600 dark:text-slate-400"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>


                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="sm" className="w-10 px-0">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="text-left">{profile.basics.name}</SheetTitle>
                            </SheetHeader>
                            <ul className="mt-8 space-y-4">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "text-lg font-medium",
                                                pathname === item.href
                                                    ? "text-blue-600 dark:text-blue-400"
                                                    : "text-slate-700 dark:text-slate-300"
                                            )}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="absolute bottom-6 left-6">
                                <ThemeToggle />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
