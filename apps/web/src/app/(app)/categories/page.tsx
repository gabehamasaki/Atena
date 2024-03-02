import type { Metadata } from "next";
import CreateCategory from "./create-category-dialog";
import CategoriesTable from "./table-categories";

export const metadata: Metadata = {
	title: "Categories",
};

export default function HomePage() {
	return (
		<>
			<div className="flex justify-between items-center">
				<h2 className="text-3xl font-bold tracking-tight">Categories</h2>
				<CreateCategory />
			</div>
			<CategoriesTable />
		</>
	);
}
