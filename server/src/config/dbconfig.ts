import mongoose from "mongoose";
import { DB_URL } from "./serverConfig";

export default async function connectDB() {
	try {
		if (!DB_URL) throw new Error("DB_URL not defined");

		await mongoose.connect(DB_URL);
		console.log("Connected to DB");
	} catch (error) {
		console.log(error);
	}
}
