import mongoose from "mongoose";
// import path from "node:path";

const { Schema } = mongoose;

const navItemSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		maxlength: 100,
		minlength: 1,
	},
	path: {
		type: String,
		required: false,
	},
	order: {
		type: Number,
		required: true,
		unique: true,
		min: 1,
	},
});

const navButtonSchema = new Schema({
	text: {
		type: String,
		required: true,
		trim: true,
		maxlength: 50,
		minlength: 1,
	},
	path: {
		type: String,
		required: false,
	},
	type: {
		type: String,
		required: true,
		enum: ["primary", "secondary"],
	},
	order: {
		type: Number,
		required: true,
	},
});

const navBarSchema = new Schema({
	brandName: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		maxlength: 100,
		minlength: 1,
	},
	navItems: [navItemSchema],
	button: [navButtonSchema],
});

export default mongoose.model("NavBar", navBarSchema);
