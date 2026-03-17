import express from "express";
// import emailRouter from "./routes/emailRoutes";
import connectDB from "./config/dbconfig";
import navBarRouter from "./routes/navBarRouter";
import cors from "cors";
import { navBarService } from "./services/navBarService";

const PORT = 3001;

const app = express();
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	}),
);
app.use(express.json());

// app.use("/api", emailRouter);
app.use("/api/navbar", navBarRouter);

app.get("/ping", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
	connectDB();
	navBarService();
});
