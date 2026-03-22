import dotenv from "dotenv";

dotenv.config();

export const config = {
	port: parseInt(process.env.PORT ?? "4000", 10),
	db: {
		uri: process.env.MONGODB_URI ?? "URI not working from dotenv",
		name: process.env.DB_NAME ?? "ResumeMaker",
	},
	env: process.env.NODE_ENV,
};
