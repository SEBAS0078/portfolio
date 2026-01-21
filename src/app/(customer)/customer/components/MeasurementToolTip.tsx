import React from 'react';

interface MeasurementTooltipProps {
    measurement: string;
    currentValue: number;
    desiredValue: number;
    onDesiredChange: (value: string) => void;
}

const TOOLTIP_POSITIONS: Record<string, { left: string; top: string }> = {
    waist: { left: '49%', top: '2%' },
    inseam: { left: '20%', top: '58%' },
    legOpening: { left: '20%', top: '96%' },
    outseam: { left: '75%', top: '45%' },
    hip: { left: '53%', top: '25%' },
    thigh: { left: '32%', top: '35%' }
};

export default function MeasurementTooltip({
    measurement,
    currentValue,
    desiredValue,
    onDesiredChange
}: MeasurementTooltipProps) {
    const position = TOOLTIP_POSITIONS[measurement] || { left: '50%', top: '50%' };

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
        >
            <div
                className="absolute bg-white rounded-lg p-3 shadow-xl z-10 max-w-xs"
                style={{
                    left: position.left,
                    top: position.top,
                    transform: 'translate(-50%, -100%)',
                    marginTop: '-8px'
                }}
            >
                <h4 className="font-semibold text-slate-700 mb-2 capitalize text-sm">
                    {measurement}
                </h4>
                <div className="space-y-2">
                    <div className="text-xs">
                        <span className="text-slate-600">Current: </span>
                        <span className="font-semibold">{currentValue}"</span>
                    </div>
                    <div>
                        <label className="block text-xs text-slate-600 mb-1">
                            New Value (inches):
                        </label>
                        <input
                            type="number"
                            value={desiredValue}
                            onChange={(e) => onDesiredChange(e.target.value)}
                            step="0.5"
                            className="w-full p-1.5 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
