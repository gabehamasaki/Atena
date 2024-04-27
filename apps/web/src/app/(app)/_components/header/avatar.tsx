import { Avatar } from "@atena/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@atena/ui/dropdown-menu";
import { auth, signOut } from "@atena/auth";
import Link from "next/link";
import Image from "next/image";
import { Cog, LogOut } from "lucide-react";

export default async function AvatarMenu() {
	const session = await auth();

	const handleSignOut = async () => {
		"use server";
		await signOut();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-2">
				<Avatar>
					<Image
						className="aspect-square size-full"
						width={32}
						height={32}
						src={session?.user.image ?? ""}
						alt={session?.user.name ?? ""}
					/>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem className="flex items-center gap-2" asChild>
					<Link href="/settings" className="w-full">
						<Cog className="size-4" />
						Settings
					</Link>
				</DropdownMenuItem>
				<form>
					<DropdownMenuItem className="flex items-center gap-2" asChild>
						<button formAction={handleSignOut} type="submit" className="w-full">
							<LogOut className="size-4" />
							Sign out
						</button>
					</DropdownMenuItem>
				</form>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
