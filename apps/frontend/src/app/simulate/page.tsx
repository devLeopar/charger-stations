'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// TODO: Later, import types from simulation-core or a shared types package
// For now, defining a simple structure for form state
interface SimulationFormParams {
  numChargers: string; // String to handle input, convert to number on submit
  chargerPowerKW: string;
  arrivalMultiplier: string;
  evConsumptionKWhPer100km: string;
  simulationName?: string;
  durationDays?: string;
  rngSeed?: string;
}

const SimulatePage: React.FC = () => {
  const router = useRouter();
  const [formParams, setFormParams] = useState<SimulationFormParams>({
    numChargers: '20',
    chargerPowerKW: '11',
    arrivalMultiplier: '100', // Representing 100%
    evConsumptionKWhPer100km: '18',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    const payload = {
      simulationName: formParams.simulationName || `Sim-${Date.now()}`,
      numChargers: parseInt(formParams.numChargers, 10),
      powerKW: parseFloat(formParams.chargerPowerKW),
      arrivalMultiplier: parseFloat(formParams.arrivalMultiplier) / 100, // Convert percentage to decimal
      consumption: parseFloat(formParams.evConsumptionKWhPer100km),
      ...(formParams.durationDays && { durationDays: parseInt(formParams.durationDays, 10) }),
      ...(formParams.rngSeed && { rngSeed: parseInt(formParams.rngSeed, 10) }),
    };

    // Basic validation (more robust validation should be added)
    if (isNaN(payload.numChargers) || payload.numChargers <= 0) {
      setError('Number of chargers must be a positive number.');
      setIsLoading(false);
      return;
    }
    if (isNaN(payload.powerKW) || payload.powerKW <= 0) {
      setError('Charging power must be a positive number.');
      setIsLoading(false);
      return;
    }
    if (isNaN(payload.arrivalMultiplier) || payload.arrivalMultiplier < 0.2 || payload.arrivalMultiplier > 2.0) {
      setError('Arrival multiplier must be between 20% and 200%.');
      setIsLoading(false);
      return;
    }
    if (isNaN(payload.consumption) || payload.consumption <= 0) {
      setError('EV consumption must be a positive number.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/simulations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(`Simulation "${result.data.name}" created successfully! ID: ${result.simulationId}`);
        router.push(`/simulations/${result.simulationId}`); // Redirect to the new simulation's detail page
      } else {
        setError(result.message || 'Failed to create simulation. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('An unexpected error occurred. Please check your network and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Create New Simulation</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl rounded-lg bg-white p-8 shadow-lg">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Number of Chargers */}
          <div className="mb-4">
            <label htmlFor="numChargers" className="mb-2 block text-sm font-medium text-gray-700">
              Number of Chargers
            </label>
            <input
              type="number"
              name="numChargers"
              id="numChargers"
              value={formParams.numChargers}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              min="1"
              required
              disabled={isLoading}
            />
          </div>

          {/* Charging Power per Charger */}
          <div className="mb-4">
            <label htmlFor="chargerPowerKW" className="mb-2 block text-sm font-medium text-gray-700">
              Charging Power (kW per charger)
            </label>
            {/* Using a select for predefined options as per TODO, can also be number input */}
            <select
              name="chargerPowerKW"
              id="chargerPowerKW"
              value={formParams.chargerPowerKW}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              disabled={isLoading}
            >
              <option value="11">11 kW (Standard AC)</option>
              <option value="22">22 kW (Fast AC)</option>
              <option value="50">50 kW (DC Fast Charger)</option>
            </select>
          </div>

          {/* Arrival Multiplier */}
          <div className="mb-4">
            <label htmlFor="arrivalMultiplier" className="mb-2 block text-sm font-medium text-gray-700">
              Arrival Multiplier (% of default)
            </label>
            <input
              type="number"
              name="arrivalMultiplier"
              id="arrivalMultiplier"
              value={formParams.arrivalMultiplier}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              min="20"
              max="200"
              step="1"
              required
              disabled={isLoading}
            />
            <p className="mt-1 text-xs text-gray-500">20% to 200% (default: 100%)</p>
          </div>

          {/* EV Consumption */}
          <div className="mb-4">
            <label htmlFor="evConsumptionKWhPer100km" className="mb-2 block text-sm font-medium text-gray-700">
              EV Consumption (kWh/100km)
            </label>
            <input
              type="number"
              name="evConsumptionKWhPer100km"
              id="evConsumptionKWhPer100km"
              value={formParams.evConsumptionKWhPer100km}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              step="0.1"
              min="5"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Optional: Simulation Name, Duration, Seed - Add these if desired */}
        {/* Example for Simulation Name */}
        {/* 
        <div className="mb-4 col-span-full">
          <label htmlFor="simulationName" className="mb-2 block text-sm font-medium text-gray-700">
            Simulation Name (Optional)
          </label>
          <input
            type="text"
            name="simulationName"
            id="simulationName"
            value={formParams.simulationName || ''}
            onChange={handleInputChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            disabled={isLoading}
          />
        </div>
        */}

        {/* Error and Success Messages */}
        {error && (
          <div className="my-4 rounded-md bg-red-50 p-4 text-sm text-red-700">
            <p>{error}</p>
          </div>
        )}
        {successMessage && (
          <div className="my-4 rounded-md bg-green-50 p-4 text-sm text-green-700">
            <p>{successMessage}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-8 border-t pt-6">
          <button
            type="submit"
            className={`w-full rounded-lg px-6 py-3 text-lg font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'}`}
            aria-label="Run simulation with the provided parameters"
            disabled={isLoading}
          >
            {isLoading ? 'Running Simulation...' : 'Run Simulation'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimulatePage; 