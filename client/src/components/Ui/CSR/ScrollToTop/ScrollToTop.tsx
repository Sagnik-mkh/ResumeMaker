"use client";

import React from "react";

type Props = {
	children: React.ReactElement<{
		onClick?: React.MouseEventHandler;
	}>;
};

function ScrollToTop({ children }: Props) {
	const handleScroll = function () {
		window.scroll({ top: 0, behavior: "smooth" });
	};

	return React.cloneElement(children, {
		onClick: (event) => {
			children.props.onClick?.(event);
			handleScroll();
		},
	});
}

export default ScrollToTop;
