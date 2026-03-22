import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";

function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	if (err instanceof ApiError) {
		res.status(err.statusCode).json({
			success: false,
			message: err.message,
			errors: err.errors,
		});
		return;
	}

	if (err.name === "CastError") {
		res.status(409).json({
			success: false,
			message: "Duplicate Entry",
		});
		return;
	}

	console.log("Unhandled error : ", err);
	res.status(500).json({
		success: false,
		message: "Internal server error",
	});
}

export default errorHandler;
