import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import { AtenaLogo } from "@/components/atenaIcon";
import { SignInButton } from "./sign-in-button";

export const metadata: Metadata = {
	title: "Login",
};

export default async function Login() {
	return (
		<main className="container flex flex-col items-center justify-center h-screen py-16 gap-8">
			<Starfield starCount={2500} speedFactor={0.01} />
			<AtenaLogo />
			<SignInButton />
		</main>
	);
}
