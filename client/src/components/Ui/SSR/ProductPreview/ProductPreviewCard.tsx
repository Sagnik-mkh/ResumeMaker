import { motion } from "framer-motion";
import ProductPreviewBack from "./ProductPreviewBack";
import ProductPreviewFront from "./ProductPreviewFront";

export default function HeroProductPreview() {
	const sideFaceClassName =
		"preview-card-face preview-card-side theme-product-preview relative overflow-hidden border border-dark-accent/28";

	return (
		<motion.div
			className="relative w-full max-w-2xl mx-auto"
			initial={{ opacity: 0, x: 36, scale: 0.98 }}
			animate={{ opacity: 1, x: 0, scale: 1 }}
			transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
		>
			<div className="absolute w-32 h-32 rounded-full preview-glow preview-glow-left left-4 top-8 bg-primary/16 blur-3xl sm:left-8 sm:h-44 sm:w-44" />
			<div className="absolute right-0 w-40 h-40 rounded-full preview-glow preview-glow-right top-20 bg-dark-accent/16 blur-3xl sm:h-52 sm:w-52" />
			<div className="absolute rounded-full preview-glow preview-glow-bottom bottom-2 left-1/3 h-28 w-28 bg-dark-accent/22 blur-3xl sm:h-40 sm:w-40" />

			<div className="preview-spin-stage relative overflow-hidden rounded-[1.75rem] border border-dark-accent/50 bg-dark-accent/30 p-2 backdrop-blur-3xl theme-shadow sm:rounded-4xl sm:p-4">
				<motion.div
					className="preview-spin-card relative min-h-136 sm:min-h-160 lg:min-h-176"
					animate={{ rotateY: [0, 0, 180, 180, 360, 360] }}
					transition={{
						duration: 12,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
						times: [0, 0.125, 0.375, 0.625, 0.875, 1],
					}}
				>
					<ProductPreviewFront />
					<ProductPreviewBack />
					<div
						className={`${sideFaceClassName} preview-card-right rounded-r-[1.75rem] sm:rounded-r-4xl`}
					>
						<div className="absolute inset-y-0 w-px -translate-x-1/2 left-1/2 bg-secondary/18" />
						<div className="absolute inset-x-0 top-0 h-full bg-linear-to-b from-secondary/8 via-accent/8 to-primary/10" />
					</div>
					<div
						className={`${sideFaceClassName} preview-card-left rounded-l-[1.75rem] sm:rounded-l-4xl`}
					>
						<div className="absolute inset-y-0 w-px -translate-x-1/2 left-1/2 bg-secondary/14" />
						<div className="absolute inset-x-0 top-0 h-full bg-linear-to-b from-background/10 via-dark-accent/20 to-primary/12" />
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
