import { ResumeData, ResumeStore } from "@/types/resume";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialResumeData: ResumeData = {
	personalInfo: {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		linkedin: "",
		github: "",
	},
	summary: "",
	experience: [],
	education: [],
	projects: [],
	skills: [],
};

export const useResumeStore = create<ResumeStore>()(
	persist(
		(set) => ({
			resumeData: initialResumeData,
			updateSection: (data) =>
				set((state) => ({
					resumeData: {
						...state.resumeData,
						...data,
					},
				})),
			resetResume: () =>
				set({
					resumeData: initialResumeData,
				}),
		}),
		{
			name: "resume-maker-data",
		},
	),
);
