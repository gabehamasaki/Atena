import {
	Activity,
	CreditCard,
	DollarSign,
	Users,
} from "lucide-react"

import Card from "./_components/card"
import RecentSales from "./_components/recent-sales"
import Transactions from "./_components/transactions";

export default function Dashboard() {
	const cards = [
		{
			title: "Total Sales",
			value: 9999,
			percentage: "25",
			Icon: DollarSign,
			isMoney: true,
		},
		{
			title: "Total Customers",
			value: 1000,
			percentage: "10",
			Icon: Users,
		},
		{
			title: "Total Orders",
			value: 100,
			percentage: "5",
			Icon: Activity,
		},
		{
			title: "Total Revenue",
			value: 100000,
			percentage: "50",
			Icon: CreditCard,
			isMoney: true,
		},
	];
	return (
		<div className="flex min-h-screen w-full flex-col">
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
				<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
					{cards.map((card, index) => (
						<Card
							key={index}
							title={card.title}
							value={card.value}
							percentage={card.percentage}
							Icon={card.Icon}
							isMoney={card.isMoney}
						/>
					))}
				</div>
				<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
					<Transactions />
					<RecentSales />
				</div>
			</main>
		</div>
	)
}
