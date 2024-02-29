import { auth } from "@atena/auth";
import { Avatar, AvatarImage } from "@atena/ui/avatar";
import { Separator } from "@atena/ui/separator";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@atena/ui/dropdown-menu";
import Link from "next/link";
import Logout from "./logout";
import Menu from "./menu";
import { ThemeToggle } from "@atena/ui/theme";
import { AtenaBrand } from "~/app/_components/atenaIcon";

export default async function Header() {
	const session = await auth();

	const menu = [
		{
			label: "Summary",
			href: "/",
		},
		{
			label: "Services",
			href: "/services",
		},
		{
			label: "Clients",
			href: "/clients",
		},
		{
			label: "Orders",
			href: "/orders",
		},
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="flex w-full h-full items-center gap-4">
					<Link href="/" className="select-none">
						<AtenaBrand />
					</Link>
					<Separator orientation="vertical" className="max-h-8" />
					<Menu items={menu} />
				</div>
				<div className="w-full flex justify-end gap-4">
					<ThemeToggle />
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-2">
							<Avatar className="w-8 h-8 select-none">
								<AvatarImage
									src={session?.user.image ?? ""}
									alt={session?.user.name ?? ""}
								/>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<Logout />
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}
