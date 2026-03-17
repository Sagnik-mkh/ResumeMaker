import NavBar from "../schema/navBar";

export const findNavBarByBrand = async (brandName: string) => {
	try {
		const findNavData = await NavBar.findOne({ brandName });
		console.log("NavBar data found:", findNavData);
		return findNavData;
	} catch (error) {
		console.log(error);
	}
};

export const createNavBar = async (createNavBarObject: object) => {
	try {
		console.log("Seeding NavBar data");
		return await NavBar.create(createNavBarObject);
	} catch (error) {
		console.log(error);
		throw error;
	}
};
