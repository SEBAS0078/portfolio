'use client'

import React from 'react';

interface MeasurementLabelsProps {
	hoveredMeasurement: string | null;
	clickedMeasurement: string | null;
	desiredMeasurements: {
		waist: number;
		inseam: number;
		legOpening: number;
		outseam: number;
		hip: number;
		thigh: number;
	};
	onHoverChange: (measurement: string | null) => void;
	onClick: (measurement: string) => void;
}

export default function MeasurementLabels({
	hoveredMeasurement,
	clickedMeasurement,
	desiredMeasurements,
	onHoverChange,
	onClick
}: MeasurementLabelsProps) {
	return (
		<>
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

			{/* Outseam label (right side) */}
			<g
				onMouseEnter={() => {
					if (!clickedMeasurement) {
						onHoverChange('outseam');
					}
				}}
				onMouseLeave={() => {
					if (!clickedMeasurement) {
						onHoverChange(null);
					}
				}}
				onClick={(e) => {
					e.stopPropagation();
					onClick('outseam');
				}}
				style={{ cursor: 'pointer' }}
			>
				<circle cx="532" cy="457" r="30" fill={hoveredMeasurement === 'outseam' || clickedMeasurement === 'outseam' ? '#dbeafe' : 'transparent'} />
				<text x="532" y="454" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
					Outseam
				</text>
				<text x="532" y="465" textAnchor="middle" fontSize="10" fill="#475569">
					{desiredMeasurements.outseam}"
				</text>
			</g>

			{/* Hip label */}
			<g
				onMouseEnter={() => {
					if (!clickedMeasurement) {
						onHoverChange('hip');
					}
				}}
				onMouseLeave={() => {
					if (!clickedMeasurement) {
						onHoverChange(null);
					}
				}}
				onClick={(e) => {
					e.stopPropagation();
					onClick('hip');
				}}
				style={{ cursor: 'pointer' }}
			>
				<circle cx="311" cy="244" r="30" fill={hoveredMeasurement === 'hip' || clickedMeasurement === 'hip' ? '#dbeafe' : 'transparent'} />
				<text x="311" y="241" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
					Hip
				</text>
				<text x="311" y="252" textAnchor="middle" fontSize="10" fill="#475569">
					{desiredMeasurements.hip}"
				</text>
			</g>

			{/* Thigh label */}
			<g
				onMouseEnter={() => {
					if (!clickedMeasurement) {
						onHoverChange('thigh');
					}
				}}
				onMouseLeave={() => {
					if (!clickedMeasurement) {
						onHoverChange(null);
					}
				}}
				onClick={(e) => {
					e.stopPropagation();
					onClick('thigh');
				}}
				style={{ cursor: 'pointer' }}
			>
				<circle cx="185" cy="338" r="30" fill={hoveredMeasurement === 'thigh' || clickedMeasurement === 'thigh' ? '#dbeafe' : 'transparent'} />
				<text x="185" y="335" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
					Thigh
				</text>
				<text x="185" y="346" textAnchor="middle" fontSize="10" fill="#475569">
					{desiredMeasurements.thigh}"
				</text>
			</g>
		</>
	);
}
