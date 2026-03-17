import express from "express";
import {
	getNavBarController,
	seedNavBarController,
} from "../controllers/navBarController";

const router = express.Router();

router.post("/seed-navbar", seedNavBarController);

router.get("/", getNavBarController);

export default router;
