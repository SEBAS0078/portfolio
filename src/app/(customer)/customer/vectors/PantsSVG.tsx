'use client'

import React from 'react';

interface PantsSVGProps {
	hoveredMeasurement: string | null;
	clickedMeasurement: string | null;
	desiredMeasurements: {
		waist: number;
		inseam: number;
		legOpening: number;
	};
	onHoverChange: (measurement: string | null) => void;
	onClick: (measurement: string) => void;
}

export default function PantsSVG({
	hoveredMeasurement,
	clickedMeasurement,
	desiredMeasurements,
	onHoverChange,
	onClick
}: PantsSVGProps) {
	return (
		<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 586.23 956.54" className="w-full max-w-sm" style={{ maxHeight: '500px' }}>
			<defs>
				<style>
					{`.cls-1 {
						stroke-dasharray: 11.92 11.92;
					}

					.cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9 {
						stroke-miterlimit: 10;
					}

					.cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-9 {
						fill: none;
					}

					.cls-1, .cls-4, .cls-6, .cls-7 {
						stroke-width: 5px;
					}

					.cls-1, .cls-4, .cls-7, .cls-8 {
						stroke: #16476A;
					}

					.cls-2, .cls-3, .cls-5, .cls-6, .cls-9 {
						stroke: #16476A;
					}

					.cls-2, .cls-3, .cls-5, .cls-6, .cls-9 {
						stroke-width: 4px;
					}

					.cls-3, .cls-8 {
						stroke-dasharray: 12;
					}
	
					.cls-8{
						stroke-width: 4px; 
					}

					.cls-6, .cls-10, .cls-7, .cls-8 {
						fill: #fff;
					}

					.cls-9 {
						stroke-dasharray: 12.61 12.61;
					}`}
				</style>
			</defs>
			<g id="all_included">
				<g id="inseam_selector">
					<line className="cls-10" x1="53.38" y1="266.57" x2="2.49" y2="908.57" />
					<g>
						<line className="cls-4" x1="53.38" y1="266.57" x2="52.91" y2="272.56" />
						<line className="cls-1" x1="51.97" y1="284.44" x2="3.44" y2="896.64" />
						<line className="cls-4" x1="2.97" y1="902.58" x2="2.49" y2="908.57" />
					</g>
				</g>
				<g id="pant">
					<line id="left_outerseam" className="cls-7" x1="111.28" y1="3.65" x2="53.92" y2="910.09" />
					<line id="left_hem" className="cls-7" x1="202.52" y1="920.18" x2="53.92" y2="910.09" />
					<line id="waist" className="cls-7" x1="465.27" y1="2.5" x2="110.83" y2="4.85" />
					<line id="left_inseam" className="cls-7" x1="288.08" y1="281.89" x2="202.52" y2="920.18" />
					<line id="right_inseam" className="cls-7" x1="288.08" y1="283.01" x2="373.55" y2="917.9" />
					<line id="right_hem" className="cls-7" x1="522.19" y1="908.52" x2="373.55" y2="917.9" />
					<line id="right_outerseam" className="cls-7" x1="464.83" y1="2.08" x2="522.19" y2="908.52" />
					<line id="lower_waist" className="cls-7" x1="108.35" y1="48.98" x2="468.25" y2="48.98" />
					<line id="middle_line" className="cls-6" x1="282.45" y1="6.39" x2="288.08" y2="281.89" />
					<g id="button">
						<circle className="cls-5" cx="299.97" cy="26.91" r="8.43" />
						<circle className="cls-5" cx="299.97" cy="26.91" r="11.39" />
						<circle className="cls-5" cx="299.97" cy="26.91" r="1.64" />
					</g>
					<rect id="left_bell_loop" className="cls-2" x="194.8" y="6.39" width="15.44" height="41.05" />
					<rect id="right_bell_loop" className="cls-2" x="373.55" y="6.39" width="15.44" height="41.05" />
					<path id="zipper_fly" className="cls-3" d="M288.46,198.64s20.7-5.28,22.3-29.73,0-117.44,0-117.44" />
				</g>
				<g id="hem_selector">
					<g>
						<line className="cls-2" x1="10.89" y1="943.63" x2="16.88" y2="943.95" />
						<line className="cls-9" x1="29.46" y1="944.64" x2="199.39" y2="953.87" />
						<line className="cls-2" x1="205.68" y1="954.21" x2="211.67" y2="954.54" />
					</g>
				</g>
				<line id="thigh_selector" className="cls-3" x1="288.08" y1="345.87" x2="82.6" y2="331.57" />
				<line id="outseam_selector" className="cls-8" x1="503.35" y1="3.65" x2="560.71" y2="910.09" />
				<line id="hip_selector" className="cls-3" x1="36.48" y1="244.5" x2="586.23" y2="244.5" />
			</g>

			{/* Interactive labels */}
			{/* Waist label */}
			<g
				onMouseEnter={() => {
					if (!clickedMeasurement) {
						onHoverChange('waist');
					}
				}}
				onMouseLeave={() => {
					if (!clickedMeasurement) {
						onHoverChange(null);
					}
				}}
				onClick={(e) => {
					e.stopPropagation();
					onClick('waist');
				}}
				style={{ cursor: 'pointer' }}
			>
				<circle cx="288" cy="25" r="30" fill={hoveredMeasurement === 'waist' || clickedMeasurement === 'waist' ? '#dbeafe' : 'transparent'} />
				<text x="288" y="20" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
					Waist
				</text>
				<text x="288" y="32" textAnchor="middle" fontSize="10" fill="#475569">
					{desiredMeasurements.waist}"
				</text>
			</g>

			{/* Inseam label (left side) */}
			<g
				onMouseEnter={() => {
					if (!clickedMeasurement) {
						onHoverChange('inseam');
					}
				}}
				onMouseLeave={() => {
					if (!clickedMeasurement) {
						onHoverChange(null);
					}
				}}
				onClick={(e) => {
					e.stopPropagation();
					onClick('inseam');
				}}
				style={{ cursor: 'pointer' }}
			>
				<circle cx="30" cy="587" r="30" fill={hoveredMeasurement === 'inseam' || clickedMeasurement === 'inseam' ? '#dbeafe' : 'transparent'} />
				<text x="30" y="584" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
					Inseam
				</text>
				<text x="30" y="595" textAnchor="middle" fontSize="10" fill="#475569">
					{desiredMeasurements.inseam}"
				</text>
			</g>

			{/* Leg Opening label */}
			<g
				onMouseEnter={() => {
					if (!clickedMeasurement) {
						onHoverChange('legOpening');
					}
				}}
				onMouseLeave={() => {
					if (!clickedMeasurement) {
						onHoverChange(null);
					}
				}}
				onClick={(e) => {
					e.stopPropagation();
					onClick('legOpening');
				}}
				style={{ cursor: 'pointer' }}
			>
				<circle cx="115" cy="949" r="30" fill={hoveredMeasurement === 'legOpening' || clickedMeasurement === 'legOpening' ? '#dbeafe' : 'transparent'} />
				<text x="115" y="944" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
					Leg
				</text>
				<text x="115" y="955" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
					Opening
				</text>
				<text x="115" y="966" textAnchor="middle" fontSize="10" fill="#475569">
					{desiredMeasurements.legOpening}"
				</text>
			</g>
		</svg>
	);
}
