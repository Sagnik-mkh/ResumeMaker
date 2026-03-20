import { productPreviewFrontContent } from "@/constants/ContentConstants";

const LandingQualityMatrix = productPreviewFrontContent.ats.qualityMetrics.map(
	(metric) => (
		<div key={metric.label}>
			<div className="text-secondary/78 mb-2 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em]">
				<span>{metric.label}</span>
				<span>{metric.value}%</span>
			</div>
			<div className="bg-accent/16 h-2.5 rounded-full">
				<div
					className="bg-linear-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full"
					style={{ width: `${metric.value}%` }}
				/>
			</div>
		</div>
	),
);

export default LandingQualityMatrix;
