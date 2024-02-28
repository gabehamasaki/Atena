import "@atena/ui/styles.css";

import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google'

import { ThemeProvider, ThemeToggle } from "@atena/ui/theme";
import { Toaster } from "@atena/ui/sonner";
import { env } from "@atena/validators";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "@atena/ui";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://atena.gabrielhamasaki.engineer"
      : "http://localhost:3000",
  ),
  title: "Atena.IO",
  description: "Project Atena",
  openGraph: {
    title: "Atena.IO",
    description: "Project Atena",
    url: "https://atena.gabrielhamasaki.engineer",
    siteName: "Atena.IO",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(inter.className ,"min-h-screen bg-background text-foreground")}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
