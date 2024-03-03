import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
	title: "Dasboard",
};

export default function LoginLayout(props: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<div className="container flex flex-1 flex-col gap-4 p-8 pt-6">
				{props.children}
			</div>
		</div>
	);
}
