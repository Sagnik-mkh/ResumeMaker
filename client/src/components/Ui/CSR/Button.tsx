"use client";

type Props = {
	btnText?: string;
	btnSize?: string;
	OnClickHandler?: () => void;
	btnStyle?: string;
	style?: React.CSSProperties;
	btnIcon?: React.ReactNode;
};

export default function Button({
	btnText,
	btnSize = "btn-md",
	OnClickHandler,
	btnStyle = "theme-button-primary",
	style,
	btnIcon,
}: Props) {
	return (
		<button
			onClick={OnClickHandler}
			style={style}
			className={`btn ${btnSize} group relative overflow-hidden border-none ${btnStyle}`}
		>
			<span className="relative z-10">{btnText ? btnText : btnIcon}</span>
			<span className="theme-button-shine pointer-events-none absolute -left-40 top-0 h-full w-40 rotate-12 blur-md transition-all duration-700 group-hover:left-[120%]" />
		</button>
	);
}
