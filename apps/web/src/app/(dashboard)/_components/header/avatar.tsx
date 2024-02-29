import { Avatar, AvatarImage } from "@atena/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@atena/ui/dropdown-menu";
import { auth } from "@atena/auth";
import Link from "next/link";

export default async function AvatarMenu() {
	const session = await auth();

	return (
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
				<DropdownMenuItem asChild>
					<Link href="/settings">Settings</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/api/auth/logout">Logout</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
