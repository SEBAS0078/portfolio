'use client'

import React, { useState, useRef, useEffect } from 'react';
import PantsSVG from './vectors/PantsSVG';
import PantsSVGGray from './vectors/grayPantSvg';
import { useCurrentMeasurements, useDesiredtMeasurements } from './hooks/useMeasurements';

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

	const handleCurrentChange = (field: any, value: any) => {
		setCurrentMeasurements(prev => ({
			...prev,
			[field]: parseFloat(value) || 0
		}));
	};

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
					<div className='flex justify-center'>

						<div className="bg-white rounded-2xl shadow-lg p-4 overflow-auto w-[400px]">

							<h2 className="text-xl font-semibold text-slate-800 mb-4">Measurements</h2>

							{/* Garment Type Selection */}
							<div className="mb-4">
								<label className="block text-sm font-medium text-slate-700 mb-2">Garment Type</label>
								<select
									value={garmentType}
									onChange={(e) => setGarmentType(e.target.value)}
									className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
								>
									<option value="jeans">Jeans</option>
									<option value="dress-pants">Dress Pants</option>
									<option value="chinos">Chinos</option>
								</select>
							</div>

							{/* Current Measurements */}
							<div className="mb-4">
								<h3 className="text-base font-semibold text-slate-700 mb-3">Current Measurements</h3>

								<div className="space-y-3">
									<div>
										<label className="block text-sm font-medium text-slate-600 mb-1">Waist (inches)</label>
										<input
											type="number"
											value={currentMeasurements.waist}
											onChange={(e) => handleCurrentChange('waist', e.target.value)}
											step="0.5"
											className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-slate-600 mb-1">Inseam (inches)</label>
										<input
											type="number"
											value={currentMeasurements.inseam}
											onChange={(e) => handleCurrentChange('inseam', e.target.value)}
											step="0.5"
											className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-slate-600 mb-1">Leg Opening (inches)</label>
										<input
											type="number"
											value={currentMeasurements.legOpening}
											onChange={(e) => handleCurrentChange('legOpening', e.target.value)}
											step="0.25"
											className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
										/>
									</div>
								</div>
							</div>

							{/* Desired Measurements */}
							<div className="mb-4">
								<h3 className="text-base font-semibold text-slate-700 mb-3">Desired Measurements</h3>

								<div className="space-y-3">
									<div>
										<label className="block text-sm font-medium text-slate-600 mb-1">Waist (inches)</label>
										<input
											type="number"
											value={desiredMeasurements.waist}
											onChange={(e) => handleDesiredChange('waist', e.target.value)}
											step="0.5"
											className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-slate-600 mb-1">Inseam (inches)</label>
										<input
											type="number"
											value={desiredMeasurements.inseam}
											onChange={(e) => handleDesiredChange('inseam', e.target.value)}
											step="0.5"
											className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-slate-600 mb-1">Leg Opening (inches)</label>
										<input
											type="number"
											value={desiredMeasurements.legOpening}
											onChange={(e) => handleDesiredChange('legOpening', e.target.value)}
											step="0.25"
											className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Panel - Visual Representation */}
					<div className="bg-white rounded-2xl shadow-lg p-4 overflow-auto" ref={svgContainerRef}>
						<h2 className="text-xl font-semibold text-slate-800 mb-4">Visual Preview</h2>

						{/* Changes Summary */}
						<div className="mb-4 p-3 bg-slate-50 rounded-lg">
							<h3 className="font-semibold text-slate-700 mb-2 text-sm">Changes Required:</h3>
							<div className="space-y-1.5 text-xs">
								<div className="flex justify-between">
									<span className="text-slate-600">Waist:</span>
									<span className={`font-semibold ${changes.waist === 0 ? 'text-slate-500' : changes.waist > 0 ? 'text-red-600' : 'text-green-600'}`}>
										{changes.waist === 0 ? 'No change' : `${changes.waist > 0 ? '+' : ''}${changes.waist.toFixed(1)}"`}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-slate-600">Inseam:</span>
									<span className={`font-semibold ${changes.inseam === 0 ? 'text-slate-500' : changes.inseam > 0 ? 'text-red-600' : 'text-green-600'}`}>
										{changes.inseam === 0 ? 'No change' : `${changes.inseam > 0 ? '+' : ''}${changes.inseam.toFixed(1)}"`}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-slate-600">Leg Opening:</span>
									<span className={`font-semibold ${changes.legOpening === 0 ? 'text-slate-500' : changes.legOpening > 0 ? 'text-red-600' : 'text-green-600'}`}>
										{changes.legOpening === 0 ? 'No change' : `${changes.legOpening > 0 ? '+' : ''}${changes.legOpening.toFixed(1)}"`}
									</span>
								</div>
							</div>
						</div>

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
							/>

							<PantsSVGGray
								newMeasurements={desiredMeasurements}
								currentMeasurements={currentMeasurements}
							/>

							{/* Hover tooltip */}
							{(() => {
								const activeMeasurement = clickedMeasurement ?? hoveredMeasurement;
								if (!activeMeasurement) return null;

								// Position tooltip above each selector based on SVG coordinates
								// SVG viewBox: 0 0 586.23 956.54
								// Label positions: Waist (288, 25), Inseam (30, 587), Leg Opening (115, 949)
								// Outseam (532, 457), Hip (311, 244), Thigh (185, 338)
								const positions: Record<string, { left: string; top: string }> = {
									waist: { left: '49%', top: '2%' }, // Above waist (288/586.23 ≈ 49%, 25/956.54 ≈ 2.6%)
									inseam: { left: '20%', top: '58%' }, // Above inseam (30/586.23 ≈ 5%, 587/956.54 ≈ 61%)
									legOpening: { left: '20%', top: '96%' }, // Above leg opening (115/586.23 ≈ 20%, 949/956.54 ≈ 99%)
									outseam: { left: '75%', top: '45%' }, // Right side outseam (532/586.23 ≈ 91%, 457/956.54 ≈ 48%)
									hip: { left: '53%', top: '25%' }, // Above hip (311/586.23 ≈ 53%, 244/956.54 ≈ 25%)
									thigh: { left: '32%', top: '35%' } // Above thigh (185/586.23 ≈ 32%, 338/956.54 ≈ 35%)
								};
								const position = positions[activeMeasurement] || { left: '50%', top: '50%' };

								return (
									<div ref={selectedRef} onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
										<div
											className="absolute bg-white rounded-lg p-3 shadow-xl z-10 max-w-xs"
											style={{
												left: position.left,
												top: position.top,
												transform: 'translate(-50%, -100%)',
												marginTop: '-8px'
											}}
										>
											<h4 className="font-semibold text-slate-700 mb-2 capitalize text-sm">{activeMeasurement}</h4>
											<div className="space-y-2">
												<div className="text-xs">
													<span className="text-slate-600">Current: </span>
													<span className="font-semibold">{currentMeasurements[activeMeasurement as keyof typeof currentMeasurements]}"</span>
												</div>
												<div>
													<label className="block text-xs text-slate-600 mb-1">New Value (inches):</label>
													<input
														type="number"
														value={desiredMeasurements[activeMeasurement as keyof typeof desiredMeasurements]}
														onChange={(e) => handleDesiredChange(activeMeasurement, e.target.value)}
														step="0.5"
														className="w-full p-1.5 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-blue-500 focus:border-transparent"
													/>
												</div>
											</div>
										</div>
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
