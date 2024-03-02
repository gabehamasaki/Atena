import { Separator } from "@atena/ui/separator";
import { ThemeToggle } from "@atena/ui/theme";
import MenuLink from "./menu-link";
import AvatarMenu from "./avatar";
import { AtenaBrand } from "../atenaIcon";

export default function Header() {
	return (
		<header className="border-b">
			<div className="flex items-center justify-between px-8">
				<div className="flex items-center space-x-4">
					<AtenaBrand />
					<Separator orientation="vertical" className="h-6" />
					<nav className="flex items-center space-x-2 lg:space-x-3">
						<MenuLink href="/">Dashboard</MenuLink>
						<MenuLink href="/categories">Categories</MenuLink>
					</nav>
				</div>
				<div className="flex items-center gap-4">
					<Separator orientation="vertical" className="h-6" />
					<ThemeToggle />
					<AvatarMenu />
				</div>
			</div>
		</header>
	);
}
