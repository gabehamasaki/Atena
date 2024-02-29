import type Link from "next/link";
import type { ComponentProps } from "react";
import { NavLink } from "../nav-link";

export default function MenuLink(props: ComponentProps<typeof Link>) {
	return (
		<NavLink
			className="flex h-14 items-center border-b-2 border-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border data-[current=true]:border-purple-500 data-[current=true]:text-accent-foreground"
			{...props}
		/>
	);
}
