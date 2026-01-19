'use client'

export type newMeasurementsProp = {
	newMeasurements: {
		waist: number;
		inseam: number;
		legOpening: number;
		outseam: number;
		hip: number;
		thigh: number;
	},
	currentMeasurements: {
		waist: number;
		inseam: number;
		legOpening: number;
		outseam: number;
		hip: number;
		thigh: number;
	}
}

export default function PantsSVGGray({ newMeasurements, currentMeasurements }: newMeasurementsProp) {
	// Calculate scale factors
	const waistScale = newMeasurements.waist / currentMeasurements.waist;
	const inseamScale = newMeasurements.inseam / currentMeasurements.inseam;
	const legOpeningScale = newMeasurements.legOpening / currentMeasurements.legOpening;
	const outseamScale = newMeasurements.outseam / currentMeasurements.outseam;

	// Center points for symmetric scaling
	const centerX = 288; // Approximate center of pants
	const waistY = 3.65; // Top of pants
	const hemY = 920; // Bottom of pants

	// Helper function to scale X coordinate from center (for width changes)
	const scaleX = (x: number, scaleFactor: number) => {
		return centerX + (x - centerX) * scaleFactor;
	};

	// Helper function to scale Y coordinate (for length changes)
	const scaleY = (y: number, scaleFactor: number, fromPoint: number = waistY) => {
		return fromPoint + (y - fromPoint) * scaleFactor;
	};

	// Waist coordinates (scaled horizontally)
	const waistLeft = scaleX(110.83, waistScale);
	const waistRight = scaleX(465.27, waistScale);
	const lowerWaistLeft = scaleX(108.35, waistScale);
	const lowerWaistRight = scaleX(468.25, waistScale);

	// Outseam coordinates (scaled for outseam length)
	const leftOuterseamTop = { x: scaleX(111.28, waistScale), y: 3.65 };
	const leftOuterseamBottom = { x: scaleX(53.92, legOpeningScale), y: scaleY(910.09, outseamScale) };
	const rightOuterseamTop = { x: scaleX(464.83, waistScale), y: 2.08 };
	const rightOuterseamBottom = { x: scaleX(522.19, legOpeningScale), y: scaleY(908.52, outseamScale) };

	// Hem coordinates (scaled for leg opening)
	const leftHemInner = { x: scaleX(202.52, legOpeningScale), y: scaleY(920.18, inseamScale) };
	const leftHemOuter = { x: scaleX(53.92, legOpeningScale), y: scaleY(910.09, outseamScale) };
	const rightHemInner = { x: scaleX(373.55, legOpeningScale), y: scaleY(917.9, inseamScale) };
	const rightHemOuter = { x: scaleX(522.19, legOpeningScale), y: scaleY(908.52, outseamScale) };

	// Inseam coordinates (scaled for inseam length)
	const inseamTop = { x: centerX, y: scaleY(281.89, 1) }; // Keep crotch position relative
	const leftInseamBottom = leftHemInner;
	const rightInseamBottom = rightHemInner;

	// Middle line
	const middleLineTop = { x: scaleX(282.45, waistScale), y: 6.39 };
	const middleLineBottom = inseamTop;

	// Belt loops (scaled with waist)
	const leftBeltLoop = { x: scaleX(194.8, waistScale), y: 6.39 };
	const rightBeltLoop = { x: scaleX(373.55, waistScale), y: 6.39 };

	return (
		<svg id="Layer_2_Gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 586.23 956.54" className="w-full max-w-sm" style={{ maxHeight: '500px' }}>
			<defs>
				<style>
					{`.gray-cls-1 {
						stroke-dasharray: 11.92 11.92;
					}
					.gray-cls-1, .gray-cls-2, .gray-cls-3, .gray-cls-4, .gray-cls-5, .gray-cls-6, .gray-cls-7, .gray-cls-8, .gray-cls-9 {
						stroke-miterlimit: 10;
					}
					.gray-cls-1, .gray-cls-2, .gray-cls-3, .gray-cls-4, .gray-cls-5, .gray-cls-9 {
						fill: none;
					}
					.gray-cls-1, .gray-cls-4, .gray-cls-6, .gray-cls-7 {
						stroke-width: 5px;
					}
					.gray-cls-1, .gray-cls-4, .gray-cls-7, .gray-cls-8 {
						stroke: #999;
					}
					.gray-cls-2, .gray-cls-3, .gray-cls-5, .gray-cls-6, .gray-cls-9 {
						stroke: #999;
					}
					.gray-cls-2, .gray-cls-3, .gray-cls-5, .gray-cls-6, .gray-cls-9 {
						stroke-width: 4px;
					}
					.gray-cls-3, .gray-cls-8 {
						stroke-dasharray: 12;
					}
					.gray-cls-8{
						stroke-width: 4px; 
					}
					.gray-cls-6, .gray-cls-10, .gray-cls-7, .gray-cls-8 {
						fill: #fff;
					}
					.gray-cls-9 {
						stroke-dasharray: 12.61 12.61;
					}`}
				</style>
			</defs>
			<g id="all_included_gray">
				<g id="pant_gray">
					<line id="left_outerseam_gray" className="gray-cls-7"
						x1={leftOuterseamTop.x} y1={leftOuterseamTop.y}
						x2={leftOuterseamBottom.x} y2={leftOuterseamBottom.y} />
					<line id="left_hem_gray" className="gray-cls-7"
						x1={leftHemInner.x} y1={leftHemInner.y}
						x2={leftHemOuter.x} y2={leftHemOuter.y} />
					<line id="waist_gray" className="gray-cls-7"
						x1={waistRight} y1="2.5"
						x2={waistLeft} y2="4.85" />
					<line id="left_inseam_gray" className="gray-cls-7"
						x1={inseamTop.x} y1={inseamTop.y}
						x2={leftInseamBottom.x} y2={leftInseamBottom.y} />
					<line id="right_inseam_gray" className="gray-cls-7"
						x1={inseamTop.x} y1={inseamTop.y + 1.12}
						x2={rightInseamBottom.x} y2={rightInseamBottom.y} />
					<line id="right_hem_gray" className="gray-cls-7"
						x1={rightHemOuter.x} y1={rightHemOuter.y}
						x2={rightHemInner.x} y2={rightInseamBottom.y} />
					<line id="right_outerseam_gray" className="gray-cls-7"
						x1={rightOuterseamTop.x} y1={rightOuterseamTop.y}
						x2={rightOuterseamBottom.x} y2={rightOuterseamBottom.y} />
					<line id="lower_waist_gray" className="gray-cls-7"
						x1={lowerWaistLeft} y1="48.98"
						x2={lowerWaistRight} y2="48.98" />
					<line id="middle_line_gray" className="gray-cls-6"
						x1={middleLineTop.x} y1={middleLineTop.y}
						x2={middleLineBottom.x} y2={middleLineBottom.y} />
					<g id="button_gray">
						<circle className="gray-cls-5" cx={centerX + 11.52 * waistScale} cy="26.91" r="8.43" />
						<circle className="gray-cls-5" cx={centerX + 11.52 * waistScale} cy="26.91" r="11.39" />
						<circle className="gray-cls-5" cx={centerX + 11.52 * waistScale} cy="26.91" r="1.64" />
					</g>
					<rect id="left_bell_loop_gray" className="gray-cls-2"
						x={leftBeltLoop.x} y={leftBeltLoop.y}
						width="15.44" height="41.05" />
					<rect id="right_bell_loop_gray" className="gray-cls-2"
						x={rightBeltLoop.x} y={rightBeltLoop.y}
						width="15.44" height="41.05" />
					<path id="zipper_fly_gray" className="gray-cls-3"
						d={`M${centerX},198.64s${20.7 * waistScale},-5.28,${22.3 * waistScale},-29.73,0,-117.44,0,-117.44`} />
				</g>
			</g>
		</svg>
	);
}
