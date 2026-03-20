import { productPreviewFrontContent } from "@/constants/ContentConstants";

const ProductPreviewReview = function () {
	return (
		<div className="flex justify-center gap-2 mt-4">
			{productPreviewFrontContent.review.map((item, idx) => {
				return (
					<span
						className="px-1 text-xs font-semibold uppercase badge theme-pill-primary"
						key={idx}
					>
						{item}
					</span>
				);
			})}
		</div>
	);
};

export default ProductPreviewReview;
