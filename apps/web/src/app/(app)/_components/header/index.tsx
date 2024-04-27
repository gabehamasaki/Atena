import { Separator } from "@atena/ui/separator";
import { ThemeToggle } from "@atena/ui/theme";
import MenuLink from "./menu-link";
import AvatarMenu from "./avatar";
import { AtenaBrand } from "@/components/atenaIcon";

export default function Header() {
	return (
		<header className="border-b">
			<div className="flex items-center justify-between px-16">
				<div className="flex items-center gap-4">
					<AtenaBrand />
					<Separator orientation="vertical" className="h-6" />
					<nav className="flex items-center space-x-2 lg:space-x-3">
						<MenuLink href="/">Dashboard</MenuLink>
						<MenuLink href="/products">Products</MenuLink>
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
