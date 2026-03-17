import { BrandName, NavButton, NavItems } from "../constants/constants";
import {
	createNavBar,
	findNavBarByBrand,
} from "../repositories/seedNavBarRepository";
import { extractButtons, extractNavItems } from "../utils/utils";

export const navBarService = async () => {
	try {
		const existingNavBar = await findNavBarByBrand(BrandName);
		if (existingNavBar) {
			console.log("NavBar already exists. Skipping seeding.");
			return;
		}

		console.log("Create NavBar data");

		const navBarData = {
			brandName: BrandName,
			navItems: extractNavItems(NavItems),
			button: extractButtons(NavButton),
		};

		console.log("NavBar data created");

		console.log("Loading NavBar data in MongoDB");
		createNavBar(navBarData);
		console.log("NavBar data loaded in MongoDB");
	} catch (error) {
		console.log("Error seeding NavBar service", error);
		throw error;
	}
};

export const getNavBarService = async () => {
	try {
		const navBarData = await findNavBarByBrand(BrandName);
		if (!navBarData)
			navBarService();

		return navBarData;
	} catch (error) {
		console.log("Error fetching NavBar data", error);
		throw error;
	}
};
