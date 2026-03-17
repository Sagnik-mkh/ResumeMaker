import { create } from "zustand";

type MobileMenu = {
	isMobileMenuOpen: boolean;
	toggleMenu: () => void;
	setMenu: (value: boolean) => void;
};

export const useIsMobileMenuOpenStore = create<MobileMenu>((set) => ({
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
}));
