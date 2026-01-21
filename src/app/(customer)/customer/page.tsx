'use client'

import React, { useState, useRef, useEffect } from 'react';
import PantsSVG from './vectors/PantsSVG';
import PantsSVGGray from './vectors/grayPantSvg';
import { useCurrentMeasurements, useDesiredtMeasurements } from './hooks/useMeasurements';
import DesiredForm from "./components/form"
import MeasurementTooltip from './components/MeasurementToolTip';

export default function PantsAlterationApp() {

	const { currentMeasurements, setCurrentMeasurements } = useCurrentMeasurements();
	const { desiredMeasurements, setDesiredMeasurements } = useDesiredtMeasurements();

	const [garmentType, setGarmentType] = useState('jeans');
	const [hoveredMeasurement, setHoveredMeasurement] = useState<string | null>(null);
	const [clickedMeasurement, setClickedMeasurement] = useState<string | null>(null);
	const selectedRef = useRef<HTMLDivElement | null>(null);
	const svgContainerRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside the tooltip to close it
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// If clicking on the tooltip itself, don't close
			if (selectedRef.current && selectedRef.current.contains(event.target as Node)) {
				return;
			}

			// Check if clicking on an interactive SVG label (g element with cursor pointer style)
			const target = event.target as HTMLElement;
			const gElement = target.closest('g');
			if (gElement) {
				const style = gElement.getAttribute('style');
				if (style && style.includes('cursor: pointer')) {
					return; // Don't close if clicking on a label
				}
			}

			// Close the tooltip if clicking anywhere else (including SVG background, other parts of the page, etc.)
			if (clickedMeasurement) {
				setClickedMeasurement(null);
				setHoveredMeasurement(null);
			}
		};

		if (clickedMeasurement) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [clickedMeasurement]);

	const handleDesiredChange = (field: any, value: any) => {
		setDesiredMeasurements(prev => ({
			...prev,
			[field]: parseFloat(value) || 0
		}));
	};

	const calculateChanges = () => {
		return {
			waist: desiredMeasurements.waist - currentMeasurements.waist,
			inseam: desiredMeasurements.inseam - currentMeasurements.inseam,
			legOpening: desiredMeasurements.legOpening - currentMeasurements.legOpening,
			outseam: desiredMeasurements.outseam - currentMeasurements.outseam,
			hip: desiredMeasurements.hip - currentMeasurements.hip,
			thigh: desiredMeasurements.thigh - currentMeasurements.thigh
		};
	};

	const changes = calculateChanges();

	return (
		<div className="h-screen p-4 overflow-auto">
			<div className="w-full h-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
					{/* Left Panel - Input Form */}
					<DesiredForm />
					{/* Right Panel - Visual Representation */}
					<div className="bg-white rounded-2xl shadow-lg p-4 overflow-auto" ref={svgContainerRef}>
						<h2 className="text-xl font-semibold text-slate-800 mb-4">Visual Preview</h2>

						{/* SVG Visualization */}
						<div className="flex justify-center items-center relative" ref={svgContainerRef}>
							<PantsSVG
								hoveredMeasurement={hoveredMeasurement}
								clickedMeasurement={clickedMeasurement}
								desiredMeasurements={desiredMeasurements}
								onHoverChange={setHoveredMeasurement}
								onClick={(measurement) => {
									setClickedMeasurement(measurement);
									setHoveredMeasurement(null);
								}}
								className="relative z-10"
							/>

							<PantsSVGGray
								newMeasurements={desiredMeasurements}
								currentMeasurements={currentMeasurements}
								className="absolute z-0"
							/>

							{/* Hover tooltip */}
							{(() => {
								const activeMeasurement = clickedMeasurement ?? hoveredMeasurement;
								if (!activeMeasurement) return null;

								return (
									<div ref={selectedRef}>
										<MeasurementTooltip
											measurement={activeMeasurement}
											currentValue={currentMeasurements[activeMeasurement as keyof typeof currentMeasurements]}
											desiredValue={desiredMeasurements[activeMeasurement as keyof typeof desiredMeasurements]}
											onDesiredChange={(value) => handleDesiredChange(activeMeasurement, value)}
										/>
									</div>
								);


							})()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
