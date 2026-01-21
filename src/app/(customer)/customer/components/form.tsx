import React, { useState, useRef, useEffect } from 'react';

const ComponentName = () => {
    const [garmentType, setGarmentType] = useState('jeans');
    const [alterationType, setAlterationType] = useState('Hemming');
    const CURRENT_MEASUREMENTS: Record<string, string[]> = {
        Hemming: ['Inseam', "Waist"],
        Tapering: ['Inseam', "Waist", 'Thigh', 'Knee', 'LegOpening'],
    };

    const DESIRED_MEASUREMENTS = {
        Hemming: ['Inseam', "Waist"],
        Tapering: ['Inseam', "Waist", 'Thigh', 'Knee', 'LegOpening'],
    };

    const [currentMeasurements, setCurrentMeasurements] = useState<string | any>({
        Thigh: 24, 
        Waist: 32,
        Inseam: 32,
        LegOpening: 8,
        Knee: 10, 
        Outseam: 34,
        Hip: 36,
    });
    const [desiredMeasurements, setDesiredMeasurements] = useState<string | any>({
        Thigh: 24, 
        Waist: 32,
        Inseam: 32,
        LegOpening: 8,
        Knee: 10, 
        Outseam: 34,
        Hip: 36,
    });

    

const renderMeasurementInputs = (
  fields: string[],
  measurements: any,
  onChange: (field: string, value: any) => void,
  focusColor: string
) =>
  fields.map((field) => (
    <div key={field}>
      <label className="block text-sm font-medium text-slate-600 mb-1">
        {field.replace(/([A-Z])/g, ' $1')} (inches)
      </label>
      
      <input
        type="number"
        value={measurements[field] ?? ''}
        onChange={(e) => onChange(field, e.target.value)}
        step="0.25"
        className={`w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-${focusColor}-500 focus:border-transparent text-sm`}
      />
    </div>
  ));



  

    const handleCurrentChange = (field: any, value: any) => {
        setCurrentMeasurements((prev:any) => ({
            ...prev,
            [field]: parseFloat(value) || 0
        }));
      setDesiredMeasurements((prev:any) => ({
            ...prev,
            [field]: parseFloat(value) || 0
        }));
    };

    const handleDesiredChange = (field: any, value: any) => {
        setDesiredMeasurements((prev:any) => ({
            ...prev,
            [field]: parseFloat(value) || 0
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
      <div />
      {/* Changes Summary */}
      <div>
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
          Desired Change
        </h3>
        <div className="space-y-1.5 text-xs">
          { DESIRED_MEASUREMENTS[alterationType as keyof typeof DESIRED_MEASUREMENTS].map((field : any) => {
            const change = desiredMeasurements[field] - currentMeasurements[field];
            return (
              <div className="flex justify-between" key={field}>
                <span className="text-slate-600">{field ?? ''}</span>
                <span className={`font-semibold ${
                  change === 0
                    ? 'text-slate-500'
                    : change > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {change === 0 ? 'No change' : `${change > 0 ? '+' : ''}${change.toFixed(1)}"`}
                </span>
              </div>
            );
          })}

        </div>
      </div>
      {/* Desired Measurements
      <div className="space-y-4">
        <div className="space-y-3">
          {renderMeasurementInputs(
            DESIRED_MEASUREMENTS[alterationType] || [],
            desiredMeasurements,
            handleDesiredChange,
            'green'
          )}
        </div>
      </div> */}

    </div>
  </div>
);
};

export default ComponentName;
