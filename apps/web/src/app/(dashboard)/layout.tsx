import Header from "./_components/header";

export default function DashboardLayout(props: { children: React.ReactNode }) {
	return (
		<body>
			<Header />
			<main className="flex-1">{props.children}</main>
		</body>
	);
}
