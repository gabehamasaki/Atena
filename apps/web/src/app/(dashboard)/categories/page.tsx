import CreateCategory from "./create-category-dialog";
import CategoriesTable from "./table-categories";

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
