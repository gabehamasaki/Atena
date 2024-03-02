import { Button } from "@atena/ui/button";
import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import { ArrowRightIcon, XOctagon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default async function NotFound() {
  return (
    <main className="container flex flex-col items-center justify-center h-screen py-16 gap-8">
      <Starfield starCount={2500} speedFactor={0.009} />
      <XOctagon size={100} className="text-red-900" />
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Unfortunately we were unable to find the requested page
        </p>
      </div>
      <Button asChild variant="ghost" type="button" className="">
        <Link href="/">
          Back
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </main>
  );
}
