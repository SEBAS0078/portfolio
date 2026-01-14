'use client'

import React, { useState } from 'react';
import { Download } from 'lucide-react';

export default function PantsAlterationApp() {
	const [currentMeasurements, setCurrentMeasurements] = useState({
		waist: 32,
		inseam: 32,
		legOpening: 8
	});

	const [desiredMeasurements, setDesiredMeasurements] = useState({
		waist: 32,
		inseam: 32,
		legOpening: 8
	});

	const [garmentType, setGarmentType] = useState('jeans');
	const [hoveredMeasurement, setHoveredMeasurement] = useState<string | null>(null);
	const [clickedMeasurement, setClickedMeasurement] = useState<string | null>(null);

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
			legOpening: desiredMeasurements.legOpening - currentMeasurements.legOpening
		};
	};

	const changes = calculateChanges();

	return (
		<div className="h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 overflow-auto">
			<div className="w-full h-full">
				<div className="text-center mb-4">
					<h1 className="text-3xl font-bold text-slate-800 mb-1"> Hemly </h1>
					<p className="text-slate-600 text-sm">Visualize and specify your alterations</p>
				</div>

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
					<div className="bg-white rounded-2xl shadow-lg p-4 overflow-auto" onClick={(e) => {
						if (e.target === e.currentTarget || !(e.target as Element).closest('g')) {
							setClickedMeasurement(null);
						}
					}}>
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
						<div className="flex justify-center items-center relative">
							<svg viewBox="0 0 399.01 927.07" className="w-full max-w-sm" style={{ maxHeight: '500px' }}>
								<g id="pant">
									{/* Original pants (dashed gray) */}
									<g opacity="0.3">
										<path d="M.5,915.12C26.28,619.64,50.28,324.64,74.49,29.98"
											fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
										<path d="M169.76,926.57c-56.02-2.2-113.01-8.21-169.26-11.45"
											fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
										<polyline points="169.76 926.57 200.76 248.51 207.62 332.35 211.4 412.14 214.16 510.12 218.34 611.36 221.7 737.55 227.15 877.04 229.46 923.41"
											fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
										<line x1="199.64" y1="29.2" x2="200.76" y2="248.51"
											stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
										<line x1="74.55" y1="31.68" x2="82.82" y2="2.9"
											stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
										<path d="M398.51,913.18c-25.78-295.48-49.78-590.48-73.99-885.14"
											fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
										<path d="M398.51,913.18c-55.83,5.08-113.12,6.5-169.32,10.58"
											fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
										<line x1="74.5" y1="31.68" x2="324.51" y2="27.67"
											stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
										<line x1="316.24" y1=".89" x2="324.51" y2="29.68"
											stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
										<line x1="82.41" y1="2.74" x2="316.71" y2=".5"
											stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
									</g>

									{/* Desired pants (solid blue) */}
									<path id="left_inseam" d="M.5,915.12C26.28,619.64,50.28,324.64,74.49,29.98"
										fill="none" stroke="#2563eb" strokeWidth="2.5" />
									<path id="left_bottom" d="M169.76,926.57c-56.02-2.2-113.01-8.21-169.26-11.45"
										fill="none" stroke="#2563eb" strokeWidth="2.5" />
									<polyline id="between_leg" points="169.76 926.57 200.76 248.51 207.62 332.35 211.4 412.14 214.16 510.12 218.34 611.36 221.7 737.55 227.15 877.04 229.46 923.41"
										fill="none" stroke="#2563eb" strokeWidth="2.5" />
									<line x1="199.64" y1="29.2" x2="200.76" y2="248.51"
										stroke="#2563eb" strokeWidth="2.5" />
									<line id="middle_line" x1="74.55" y1="31.68" x2="82.82" y2="2.9"
										stroke="#2563eb" strokeWidth="2.5" />
									<path id="right_inseam" d="M398.51,913.18c-25.78-295.48-49.78-590.48-73.99-885.14"
										fill="none" stroke="#2563eb" strokeWidth="2.5" />
									<path id="right_bottom" d="M398.51,913.18c-55.83,5.08-113.12,6.5-169.32,10.58"
										fill="none" stroke="#2563eb" strokeWidth="2.5" />
									<line id="seam_connector" x1="74.5" y1="31.68" x2="324.51" y2="27.67"
										stroke="#2563eb" strokeWidth="2.5" />
									<line id="right_upper_vertical_side_waiste" x1="316.24" y1=".89" x2="324.51" y2="29.68"
										stroke="#2563eb" strokeWidth="2.5" />
									<line id="upper_connector" x1="82.41" y1="2.74" x2="316.71" y2=".5"
										stroke="#2563eb" strokeWidth="2.5" />

									{/* Interactive labels */}
									{/* Waist label */}
									<g
										onMouseEnter={() => setHoveredMeasurement('waist')}
										onMouseLeave={() => setHoveredMeasurement(null)}
										onClick={() => setClickedMeasurement(clickedMeasurement === 'waist' ? null : 'waist')}

										style={{ cursor: 'pointer' }}
									>
										<circle cx="199" cy="15" r="25" fill={hoveredMeasurement || clickedMeasurement === 'waist' ? '#dbeafe' : 'transparent'} />
										<text x="199" y="12" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
											Waist
										</text>
										<text x="199" y="23" textAnchor="middle" fontSize="10" fill="#475569">
											{desiredMeasurements.waist}"
										</text>
									</g>

									{/* Inseam label (left side) */}
									<g
										onMouseEnter={() => setHoveredMeasurement('inseam')}
										onMouseLeave={() => setHoveredMeasurement(null)}
										style={{ cursor: 'pointer' }}
									>
										<circle cx="40" cy="470" r="30" fill={hoveredMeasurement === 'inseam' ? '#dbeafe' : 'transparent'} />
										<text x="40" y="467" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
											Inseam
										</text>
										<text x="40" y="478" textAnchor="middle" fontSize="10" fill="#475569">
											{desiredMeasurements.inseam}"
										</text>
									</g>

									{/* Leg Opening label */}
									<g
										onMouseEnter={() => setHoveredMeasurement('legOpening')}
										onMouseLeave={() => setHoveredMeasurement(null)}
										style={{ cursor: 'pointer' }}
									>
										<circle cx="199" cy="905" r="30" fill={hoveredMeasurement === 'legOpening' ? '#dbeafe' : 'transparent'} />
										<text x="199" y="900" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
											Leg
										</text>
										<text x="199" y="911" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
											Opening
										</text>
										<text x="199" y="922" textAnchor="middle" fontSize="10" fill="#475569">
											{desiredMeasurements.legOpening}"
										</text>
									</g>
								</g>

								{/* Legend */}
								<g transform="translate(20, 890)">
									<line x1="0" y1="0" x2="30" y2="0" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
									<text x="35" y="5" fontSize="11" fill="#64748b">Current</text>

									<line x1="100" y1="0" x2="130" y2="0" stroke="#2563eb" strokeWidth="2" />
									<text x="135" y="5" fontSize="11" fill="#64748b">Desired</text>
								</g>
							</svg>

							{/* Hover tooltip */}
							{(hoveredMeasurement || clickedMeasurement) && (
								<div className="absolute top-0 right-0 bg-white border-2 border-blue-500 rounded-lg p-3 shadow-xl z-10 max-w-xs">
									<h4 className="font-semibold text-slate-700 mb-2 capitalize text-sm">{hoveredMeasurement}</h4>
									<div className="space-y-2">
										<div className="text-xs">
											<span className="text-slate-600">Current: </span>
											<span className="font-semibold">{currentMeasurements[hoveredMeasurement as keyof typeof currentMeasurements]}"</span>
										</div>
										<div>
											<label className="block text-xs text-slate-600 mb-1">New Value (inches):</label>
											<input
												type="number"
												value={desiredMeasurements[hoveredMeasurement as keyof typeof desiredMeasurements]}
												onChange={(e) => handleDesiredChange(hoveredMeasurement, e.target.value)}
												step="0.5"
												className="w-full p-1.5 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											/>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
