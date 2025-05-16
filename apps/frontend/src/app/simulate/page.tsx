'use client';
import React, { useState } from 'react';

// TODO: Later, import types from simulation-core or a shared types package
// For now, defining a simple structure for form state
interface SimulationFormParams {
  numChargers: string; // String to handle input, convert to number on submit
  chargerPowerKW: string;
  arrivalMultiplier: string;
  evConsumptionKWhPer100km: string;
}

const SimulatePage: React.FC = () => {
  // Basic state for form fields - will be expanded with validation, etc.
  const [formParams, setFormParams] = useState<SimulationFormParams>({
    numChargers: '20',
    chargerPowerKW: '11',
    arrivalMultiplier: '100', // Representing 100%
    evConsumptionKWhPer100km: '18',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form validation and submission logic
    // This would involve converting string values to numbers,
    // calling the backend API (POST /simulations),
    // and then likely redirecting to the results page or simulations list.
    console.log('Form Submitted with params:', {
      ...formParams,
      numChargers: parseInt(formParams.numChargers, 10) || 0,
      chargerPowerKW: parseFloat(formParams.chargerPowerKW) || 0,
      arrivalMultiplier: (parseInt(formParams.arrivalMultiplier, 10) || 100) / 100,
      evConsumptionKWhPer100km: parseFloat(formParams.evConsumptionKWhPer100km) || 0,
    });
    alert('Simulation submitted (mocked)! Check console.');
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
              step="10"
              required
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
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 border-t pt-6">
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            aria-label="Run simulation with the provided parameters"
          >
            Run Simulation
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimulatePage; 