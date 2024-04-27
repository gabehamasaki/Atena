import type { Metadata } from "next";
import Header from "./_components/header";
import Breadcrumb from "./_components/breadcrump";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function LoginLayout(props: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<div className="container flex flex-1 flex-col gap-4 p-8 pt-6">
				<Breadcrumb />
				{props.children}
			</div>
		</div>
	);
}
