import app from "./app.js";
import connectDB from "./config/dbconfig.js";
import { config } from "./config/serverConfig";

async function bootstrap(): Promise<void> {
	await connectDB();
	app.listen(config.port, () => {
		console.log(
			`Server running on http://localhost:${config.port} [${config.env}]`,
		);
	});
}

bootstrap().catch((err) => {
	console.error("Failed to start server:", err);
	process.exit(1);
});
