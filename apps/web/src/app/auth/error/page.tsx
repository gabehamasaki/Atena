import { Button } from "@atena/ui/button";
import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import { AtenaLogo } from "@/components/atenaIcon";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Login",
};

export default async function Login() {
	return (
		<main className="container flex flex-col items-center justify-center h-screen py-16 gap-8">
			<Starfield starCount={2500} speedFactor={0.01} />
			<AtenaLogo />
      <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access denied!
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              It looks like an error has ocurred while you were trying to
              authenticate.
            </p>
          </div>
          <Button asChild variant="ghost" type="button" className="">
            <Link href="/auth/sign-in">
              Try again
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
		</main>
	);
}
