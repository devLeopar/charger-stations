'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation'; // For navigation, if needed later for actions

// Define the Simulation type based on Prisma schema and API response
interface Simulation {
  id: string;
  name: string | null;
  numChargers: number;
  powerKW: number;
  arrivalMultiplier: number;
  evConsumption: number;
  // simulationDurationTicks: number; // This was not in API select, removing unless needed for display
  createdAt: string;
  // Add other fields from your Simulation model that you want to display from the API select
  concurrencyFactor?: number; // Was in API select, add if needed
  actualMaxPowerDemandKW?: number; // Was in API select, add if needed
}

const SimulationsPage: React.FC = () => {
  const [simulations, setSimulations] = useState<Simulation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const router = useRouter(); // Removed as it's not used yet

  // Define fetchSimulations outside useEffect using useCallback
  const fetchSimulations = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/simulations');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to fetch simulations: ${response.statusText}`);
      }
      const data: Simulation[] = await response.json();
      setSimulations(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
      setSimulations([]); // Clear simulations on error
    } finally {
      setIsLoading(false);
    }
  }, []); // Empty dependency array means this function is created once

  useEffect(() => {
    fetchSimulations();
  }, [fetchSimulations]); // Call fetchSimulations when the component mounts or function reference changes

  const formatDateTime = (isoString: string) => {
    if (!isoString) return 'N/A';
    try {
      return new Date(isoString).toLocaleString();
    } catch {
      return 'Invalid Date';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">My Simulations</h1>
        <Link
          href="/simulate"
          className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          aria-label="Create new simulation"
        >
          + Create New Simulation
        </Link>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="ml-3 text-gray-600 dark:text-gray-300">Loading simulations...</p>
        </div>
      )}

      {error && (
        <div className="rounded-md bg-red-50 p-4 text-center shadow">
          <h3 className="text-sm font-medium text-red-800">Error fetching simulations</h3>
          <p className="mt-2 text-sm text-red-700">{error}</p>
          <button
            onClick={fetchSimulations} // Now correctly calls the function defined in the component scope
            className="mt-4 rounded-md bg-red-100 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Try again
          </button>
        </div>
      )}

      {!isLoading && !error && (
        <div className="overflow-x-auto rounded-lg bg-white shadow-lg dark:bg-gray-800">
          <table className="min-w-full table-auto text-left text-sm text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3 text-center">Chargers</th>
                <th scope="col" className="px-6 py-3 text-center">Power (kW)</th>
                <th scope="col" className="px-6 py-3 text-center">Arrival Rate Adj.</th>
                <th scope="col" className="px-6 py-3 text-center">EV Consumption (kWh/100km)</th>
                <th scope="col" className="px-6 py-3">Created At</th>
                <th scope="col" className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {simulations.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-gray-500 dark:text-gray-400">
                    No simulations found. Get started by{' '}
                    <Link href="/simulate" className="text-indigo-600 hover:underline dark:text-indigo-400">
                      creating one
                    </Link>
                    !
                  </td>
                </tr>
              ) : (
                simulations.map((sim) => (
                  <tr key={sim.id} className="border-b bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      <Link href={`/simulations/${sim.id}`} className="hover:underline" aria-label={`View details for simulation ${sim.id}`}>
                        {sim.id.substring(0, 8)}...
                      </Link>
                    </th>
                    <td className="px-6 py-4">{sim.name || 'N/A'}</td>
                    <td className="px-6 py-4 text-center">{sim.numChargers}</td>
                    <td className="px-6 py-4 text-center">{sim.powerKW}</td>
                    <td className="px-6 py-4 text-center">{sim.arrivalMultiplier}</td>
                    <td className="px-6 py-4 text-center">{sim.evConsumption}</td>
                    <td className="px-6 py-4">{formatDateTime(sim.createdAt)}</td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        href={`/simulations/${sim.id}`}
                        className="font-medium text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:text-indigo-400"
                        aria-label={`View details for simulation ${sim.id}`}
                      >
                        View
                      </Link>
                      {/* Add Delete button/action here later */}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SimulationsPage; 