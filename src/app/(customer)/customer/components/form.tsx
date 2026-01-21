import React, { useState, useRef, useEffect } from 'react';

export type Measurements = {
	waist: number;
	inseam: number;
	legOpening: number;
	outseam: number;
	hip: number;
	thigh: number;
};

export type NewMeasurementsProps = {
	currentMeasurements: Measurements;
	desiredMeasurements: Measurements;

	setCurrentMeasurements: React.Dispatch<
		React.SetStateAction<Measurements>
	>;
	setDesiredMeasurements: React.Dispatch<
		React.SetStateAction<Measurements>
	>;

  setGarmentType: React.Dispatch<
		React.SetStateAction<string>
	>;

	garmentType: string;
	className?: string;
};

type MeasurementKey = keyof Measurements;
  
const DesiredFrom = ({ desiredMeasurements, 
  currentMeasurements, 
  setDesiredMeasurements, 
  setCurrentMeasurements, 
  garmentType,
  setGarmentType, 
  className
 }: NewMeasurementsProps) => {

  const [alterationType, setAlterationType] = useState('Hemming');
  const CURRENT_MEASUREMENTS: Record<
  string,
  MeasurementKey[]
  > = {
    Hemming: ['inseam', 'waist'],
    Tapering: ['inseam', 'waist', 'thigh', 'legOpening'],
  };

  const DESIRED_MEASUREMENTS: Record<
    string,
    MeasurementKey[]
  > = {
    Hemming: ['inseam', 'waist'],
    Tapering: ['inseam', 'waist', 'thigh', 'legOpening'],
  };

const renderMeasurementInputs = (
	fields: MeasurementKey[],
	measurements: Measurements,
	onChange: (field: MeasurementKey, value: string) => void,
	focusColor: string
) =>
	fields.map(field => (
		<div key={field}>
			<label className="block text-sm font-medium text-slate-600 mb-1">
				{field.replace(/([A-Z])/g, ' $1')} (inches)
			</label>

			<input
				type="number"
				value={measurements[field]}
				onChange={e => onChange(field, e.target.value)}
				step="0.25"
				className={`w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-${focusColor}-500`}
			/>
		</div>
	));



    const handleCurrentChange = (
      field: MeasurementKey,
      value: string
    ) => {
      const num = parseFloat(value) || 0;

      setCurrentMeasurements(prev => ({
        ...prev,
        [field]: num,
      }));

      setDesiredMeasurements(prev => ({
        ...prev,
        [field]: num,
      }));
    };
    
  return (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6 space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Measurements
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Provide details to help your tailor get the perfect fit
        </p>
      </div>

      {/* Garment Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">
          Garment Type
        </label>
        <select
          value={garmentType}
          onChange={(e) => setGarmentType(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="jeans">Jeans</option>
          <option value="dress-pants">Dress Pants</option>
          <option value="chinos">Chinos</option>
        </select>
      </div>

      {/* Alteration Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">
          Alteration Type
        </label>
        <select
          value={alterationType}
          onChange={(e) => setAlterationType(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="Hemming">Hemming</option>
          <option value="Tapering">Tapering</option>
        </select>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200" />

      {/* Current Measurements */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
          Current Measurements
        </h3>
        <div className="space-y-3">
          {renderMeasurementInputs(
            CURRENT_MEASUREMENTS[alterationType] || [],
            currentMeasurements,
            handleCurrentChange,
            'blue'
          )}
        </div>
      </div>
        
      {/* Divider */}
      <div className="border-t border-slate-200" />
      {/* Changes Summary */}
      <div>
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
          Desired Change
        </h3>
        <p className="mb-3  text-sm font-small text-slate-600">Keep in mind that we can only shorter your garment</p>
        <div className="space-y-1.5 text-s">
          {DESIRED_MEASUREMENTS[alterationType]?.map((field) => {
	          const change =
		        desiredMeasurements[field] - currentMeasurements[field];

            return (
              <div className="flex justify-between" key={field}>
                <span className="text-slate-600">
                  {field.replace(/([A-Z])/g, ' $1')}
                </span>
                <span
                  className={`font-semibold ${
                    change === 0
                      ? 'text-slate-500'
                      : change > 0
                      ? 'text-red-600'
                      : 'text-green-600'
                  }`}
                >
                  {change === 0
                    ? 'No change'
                    : `${change > 0 ? '+' : ''}${change.toFixed(1)}"`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);
};

export default DesiredFrom; 