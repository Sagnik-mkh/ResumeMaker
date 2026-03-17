import { Request, Response } from "express";
import { getNavBarService, navBarService } from "../services/navBarService";

export const seedNavBarController = async (req: Request, res: Response) => {
	try {
		const result = await navBarService();

		return res.status(201).json({
			success: true,
			message: "NavBar data loaded successfully",
			data: result,
		});
	} catch (error) {
		console.log("Error seeding NavBar controller", error);
		return res.status(501).json({
			success: false,
			message: "NavBar data load failed",
		});
	}
};

export const getNavBarController = async (req: Request, res: Response) => {
	try {
		const result = await getNavBarService();

		return res.status(201).json({
			success: true,
			message: "NavBar data loaded successfully",
			data: result,
		});
	} catch (error) {
		console.log("Error getting NavBar controller", error);
		return res.status(501).json({
			success: false,
			message: "Error getting NavBar controller",
		});
	}
};
