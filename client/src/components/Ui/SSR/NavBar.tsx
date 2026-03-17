import DropDown from "../CSR/DropDown";
import Brand from "../CSR/Brand";
import MobileButton from "../CSR/MobileButton";

type Props = {
	navbarBrand: string;
	navbarItems: React.ReactNode[];
	loginButton?: React.ReactNode;
	primaryButton?: React.ReactNode;
};

export default function NavBar({
	navbarBrand,
	navbarItems,
	loginButton,
	primaryButton,
}: Props) {
	return (
		<div className="sticky top-0 z-50 border-b theme-nav backdrop-blur-xl">
			<div className="container relative px-4 py-3 mx-auto">
				<div className="min-h-0 px-0 navbar">
					<div className="navbar-start">
						<Brand brandName={navbarBrand} />
					</div>
					<div className="hidden navbar-center lg:flex">
						<ul className="gap-2 px-1 text-base text-honeydew menu menu-horizontal">
							{navbarItems}
						</ul>
					</div>
					<div className="gap-2 navbar-end">
						<div className="hidden gap-2 lg:flex">
							{loginButton}
							{primaryButton}
						</div>
						<MobileButton />
					</div>
					<DropDown
						navbarItems={navbarItems}
						loginButton={loginButton}
						primaryButton={primaryButton}
					/>
				</div>
			</div>
		</div>
	);
}
