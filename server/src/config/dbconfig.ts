import { config } from "./serverConfig";
import mongoose from "mongoose";

export default async function connectDB(): Promise<void> {
	try {
		await mongoose.connect(config.db.uri, { dbName: config.db.name });
		console.log(`MongoDB connected -> ${config.db.name}`);
	} catch (error) {
		console.log(error);
	}
}
