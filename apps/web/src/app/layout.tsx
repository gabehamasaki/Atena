import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider, ThemeToggle } from "@atena/ui/theme";
import { Toaster } from "@atena/ui/sonner";
import { env } from "@atena/validators";

import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";
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

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-sans text-foreground antialiased", GeistMono.className, GeistSans.className)}
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
