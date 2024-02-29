import Image from "next/image";
import Logo from "public/atena-dark.svg";
import LogoLight from "public/atena-light.svg";
import Brand from "public/brand-dark.svg";
import BrandLight from "public/brand-light.svg";

export function AtenaBrand() {
	return (
		<>
			<Image
				src={Brand}
				className="hidden dark:block"
				alt="Atena"
				width={24}
				height={24}
			/>
			<Image
				src={BrandLight}
				className="block dark:hidden"
				alt="Atena"
				width={24}
				height={24}
			/>
		</>
	);
}

export function AtenaLogo() {
	return (
		<>
			<Image
				src={Logo}
				className="hidden dark:block"
				alt="Atena"
				width={512}
				height={328}
			/>
			<Image
				src={LogoLight}
				className="block dark:hidden"
				alt="Atena"
				width={512}
				height={328}
			/>
		</>
	);
}
