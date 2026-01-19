'use client'

import { useState } from "react"

export const useCurrentMeasurements = () => {
	const [currentMeasurements, setCurrentMeasurements] = useState({
		waist: 32,
		inseam: 32,
		legOpening: 8,
		outseam: 34,
		hip: 36,
		thigh: 24
	});

	return { currentMeasurements, setCurrentMeasurements }
}

export const useDesiredtMeasurements = () => {
	const [desiredMeasurements, setDesiredMeasurements] = useState({
		waist: 32,
		inseam: 32,
		legOpening: 8,
		outseam: 34,
		hip: 36,
		thigh: 24
	});

	return { desiredMeasurements, setDesiredMeasurements }
}


