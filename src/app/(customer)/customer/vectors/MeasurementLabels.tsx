'use client'

import React from 'react';

interface MeasurementLabelProps {
	name: string;
	displayName: string;
	displayNameLine2?: string;
	value: number;
	x: number;
	y: number;
	isHovered: boolean;
	isClicked: boolean;
	hasClickedMeasurement: boolean;
	onHoverChange: (measurement: string | null) => void;
	onClick: (measurement: string) => void;
}

function MeasurementLabel({
	name,
	displayName,
	displayNameLine2,
	value,
	x,
	y,
	isHovered,
	isClicked,
	hasClickedMeasurement,
	onHoverChange,
	onClick
}: MeasurementLabelProps) {
	const yOffset = displayNameLine2 ? -3 : 0;

	return (
		<g
			onMouseEnter={() => {
				if (!hasClickedMeasurement) {
					onHoverChange(name);
				}
			}}
			onMouseLeave={() => {
				if (!hasClickedMeasurement) {
					onHoverChange(null);
				}
			}}
			onClick={(e) => {
				e.stopPropagation();
				onClick(name);
			}}
			style={{ cursor: 'pointer' }}
		>
			<circle
				cx={x}
				cy={y}
				r="30"
				fill={isHovered || isClicked ? '#dbeafe' : 'transparent'}
			/>
			<text
				x={x}
				y={y + yOffset - 5}
				textAnchor="middle"
				fontSize="11"
				fill="#1e40af"
				fontWeight="bold"
			>
				{displayName}
			</text>
			{displayNameLine2 && (
				<text
					x={x}
					y={y + yOffset + 6}
					textAnchor="middle"
					fontSize="11"
					fill="#1e40af"
					fontWeight="bold"
				>
					{displayNameLine2}
				</text>
			)}
			<text
				x={x}
				y={y + (displayNameLine2 ? 17 : 7)}
				textAnchor="middle"
				fontSize="10"
				fill="#475569"
			>
				{value}"
			</text>
		</g>
	);
}

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
	const labels = [
		{ name: 'waist', displayName: 'Waist', x: 288, y: 25 },
		{ name: 'inseam', displayName: 'Inseam', x: 30, y: 587 },
		{ name: 'legOpening', displayName: 'Leg', displayNameLine2: 'Opening', x: 115, y: 949 },
		{ name: 'outseam', displayName: 'Outseam', x: 532, y: 457 },
		{ name: 'hip', displayName: 'Hip', x: 311, y: 244 },
		{ name: 'thigh', displayName: 'Thigh', x: 185, y: 338 }
	];

	return (
		<>
			{labels.map((label) => (
				<MeasurementLabel
					key={label.name}
					name={label.name}
					displayName={label.displayName}
					displayNameLine2={label.displayNameLine2}
					value={desiredMeasurements[label.name as keyof typeof desiredMeasurements]}
					x={label.x}
					y={label.y}
					isHovered={hoveredMeasurement === label.name}
					isClicked={clickedMeasurement === label.name}
					hasClickedMeasurement={!!clickedMeasurement}
					onHoverChange={onHoverChange}
					onClick={onClick}
				/>
			))}
		</>
	);
}
