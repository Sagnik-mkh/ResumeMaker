import mongoose, { Document, Schema, Types } from "mongoose";

export interface IWorkExperience {
	_id: Types.ObjectId;
	company: string;
	role: string;
	location?: string;
	startDate: Date;
	endDate?: Date;
	isCurrent: boolean;
	bulletPoints: string[];
	displayOrder: number;
}

export interface IEducation {
	_id: Types.ObjectId;
	institution: string;
	degree: string;
	fieldOfStudy?: string;
	startDate: Date;
	endDate?: Date | null;
	grade?: string;
	displayOrder: number;
}

export interface ISkill {
	_id: Types.ObjectId;
	category: string;
	name: string;
	displayOrder: number;
}

export interface IProject {
	_id: Types.ObjectId;
	name: string;
	url?: string | null;
	techStack?: string;
	bulletPoints: string[];
	displayOrder: number;
}

export interface ICertification {
	_id: Types.ObjectId;
	name: string;
	issuer?: string;
	issuedDate?: Date | null;
	expiryDate?: Date | null;
	credentialUrl?: string | null;
	displayOrder: number;
}

export interface IResume extends Document {
	_id: Types.ObjectId;
	userId: string;
	title: string;
	templateId: string;
	targetRole?: string;
	targetIndustry?: string;
	phone?: string;
	location?: string;
	linkedinUrl?: string;
	githubUrl?: string;
	websiteUrl?: string;
	summary?: string;
	workExperiences: IWorkExperience[];
	educations: IEducation[];
	skills: ISkill[];
	projects: IProject[];
	certifications: ICertification[];
	createdAt: Date;
	updatedAt: Date;
}

const workExperienceSchema = new Schema<IWorkExperience>(
	{
		company: { type: String, required: true },
		role: { type: String, required: true },
		location: { type: String },
		startDate: { type: Date, required: true },
		endDate: { type: Date, default: null },
		isCurrent: { type: Boolean, default: false },
		bulletPoints: [{ type: String }],
		displayOrder: { type: Number, default: 0 },
	},
	{ _id: true },
);

const educationSchema = new Schema<IEducation>(
	{
		institution: { type: String, required: true },
		degree: { type: String, required: true },
		fieldOfStudy: { type: String },
		startDate: { type: Date, required: true },
		endDate: { type: Date, default: null },
		grade: { type: String },
		displayOrder: { type: Number, default: 0 },
	},
	{ _id: true },
);

const skillSchema = new Schema<ISkill>(
	{
		category: { type: String, required: true },
		name: { type: String, required: true },
		displayOrder: { type: Number, default: 0 },
	},
	{ _id: true },
);

const projectSchema = new Schema<IProject>(
	{
		name: { type: String, required: true },
		url: { type: String, default: null },
		techStack: { type: String },
		bulletPoints: [{ type: String }],
		displayOrder: { type: Number },
	},
	{ _id: true },
);

const certificationSchema = new Schema<ICertification>(
	{
		name: { type: String, required: true },
		issuer: { type: String },
		issuedDate: { type: Date, default: null },
		expiryDate: { type: Date, default: null },
		credentialUrl: { type: String, default: null },
		displayOrder: { type: Number, default: 0 },
	},
	{ _id: true },
);

const resumeSchema = new Schema<IResume>(
	{
		userId: { type: String, required: true, index: true },
		title: { type: String, default: "Untitled Resume" },
		templateId: { type: String, default: "modern" },
		targetRole: { type: String },
		targetIndustry: { type: String },
		phone: { type: String },
		location: { type: String },
		linkedinUrl: { type: String },
		githubUrl: { type: String },
		websiteUrl: { type: String },
		summary: { type: String },
		workExperiences: [workExperienceSchema],
		educations: [educationSchema],
		skills: [skillSchema],
		projects: [projectSchema],
		certifications: [certificationSchema],
	},
	{ timestamps: true },
);

export default mongoose.model<IResume>("Resume", resumeSchema);
