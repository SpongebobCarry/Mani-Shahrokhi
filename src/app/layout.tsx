import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { profile } from "@/content/profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.basics.name} | ${profile.basics.headline}`,
  description: profile.basics.summary,
  openGraph: {
    title: `${profile.basics.name} | Portfolio`,
    description: profile.basics.summary,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider defaultTheme="system">
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-slate-200 py-6 dark:border-slate-800">
              <div className="container mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} {profile.basics.name}. Built with Next.js & Tailwind.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
