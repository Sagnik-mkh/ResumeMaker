import { create } from "zustand";

type MobileMenu = {
	isMobileMenuOpen: boolean;
	toggleMenu: () => void;
	setMenu: (value: boolean) => void;
	sectionRefs: Record<string, HTMLElement | null>;
	setSectionRef: (sectionId: string, element: HTMLElement | null) => void;
	scrollToSection: (sectionId: string) => void;
};

export const useIsMobileMenuOpenStore = create<MobileMenu>((set, get) => ({
	isMobileMenuOpen: false,
	toggleMenu: () =>
		set((state) => {
			return {
				...state,
				isMobileMenuOpen: !state.isMobileMenuOpen,
			};
		}),
	setMenu: (updVal) =>
		set((state) => {
			return {
				...state,
				isMobileMenuOpen: updVal,
			};
		}),
	sectionRefs: {},
	setSectionRef: (sectionId, element) =>
		set((state) => ({
			...state,
			sectionRefs: {
				...state.sectionRefs,
				[sectionId]: element,
			},
		})),
	scrollToSection: (sectionId) => {
		get().sectionRefs[sectionId]?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	},
}));
