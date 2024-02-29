import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Summary",
};

export default async function HomePage() {
	return (
		<>
			<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-2">
					<span>Hello World</span>
				</div>
			</div>
		</>
	);
}
