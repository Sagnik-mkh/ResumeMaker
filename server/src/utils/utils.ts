export const extractNavItems = function (
	navItems: { title: string; path?: string }[],
) {
	return navItems.map((item, idx) => {
		return {
			title: item.title,
			path: item.path,
			order: idx + 1,
		};
	});
};

export const extractButtons = function (
	navButtons: { text: string; type: string }[],
) {
	return navButtons.map((item, idx) => {
		return {
			text: item.text,
			path: "/",
			type: item.type,
			order: idx + 1,
		};
	});
};
