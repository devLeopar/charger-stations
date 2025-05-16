'use client'; // Required for using useParams

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // To get the [id] from the URL
import Link from 'next/link';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface TickDataPoint {
  tick: number;
  power: number;
}

// Interface matching the Prisma Simulation model and API response for a single simulation
interface SimulationDetailsData {
  id: string;
  createdAt: string; // ISO string format
  name: string | null;
  numChargers: number;
  powerKW: number;
  arrivalMultiplier: number;
  evConsumption: number;
  durationDays: number;
  rngSeed: number | null;
  totalEnergyConsumedKWh: number;
  actualMaxPowerDemandKW: number;
  theoreticalMaxPowerKW: number;
  concurrencyFactor: number;
  concurrencyTimelineData?: Record<string, number>; // From DB (JSON, keys are stringified ticks)
  // Add other fields if they are returned by the API endpoint for a single simulation
}

const SimulationDetailPage: React.FC = () => {
  const params = useParams();
  const simulationId = params.id as string; // id will be a string or string[]

  const [simulationDetails, setSimulationDetails] = useState<SimulationDetailsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [chartData, setChartData] = useState<TickDataPoint[]>([]);

  useEffect(() => {
    if (!simulationId) return;

    const fetchSimulationDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/simulations/${simulationId}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Failed to fetch simulation details: ${response.statusText}`);
        }
        const data: SimulationDetailsData = await response.json();
        setSimulationDetails(data);

        if (data.concurrencyTimelineData) {
          const transformedData: TickDataPoint[] = Object.entries(
            data.concurrencyTimelineData
          )
          .map(([tickStr, power]) => ({
            tick: parseInt(tickStr, 10),
            power: power,
          }))
          .sort((a, b) => a.tick - b.tick) // Ensure data is sorted by tick
          .slice(0, 96); // Show first 96 ticks (1 day)
          setChartData(transformedData);
        }

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred while fetching simulation details.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimulationDetails();
  }, [simulationId]);

  const formatDateTime = (isoString: string) => {
    if (!isoString) return 'N/A';
    try {
      return new Date(isoString).toLocaleString();
    } catch {
      return 'Invalid Date';
    }
  };
  
  const formatTickToHour = (tick: number) => {
    const hour = Math.floor((tick % 96) / 4); // 96 ticks in a day, 4 ticks per hour
    const minute = (tick % 4) * 15;
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  };

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="ml-3 text-lg text-gray-600 dark:text-gray-300">Loading simulation details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/simulations" className="text-indigo-600 hover:text-indigo-800 hover:underline">
            &larr; Back to Simulations List
          </Link>
        </div>
        <div className="rounded-md bg-red-100 p-6 text-center shadow-lg">
          <h2 className="text-xl font-semibold text-red-700">Error Loading Simulation</h2>
          <p className="mt-2 text-red-600">{error}</p>
          <Link href="/simulations" className="mt-4 inline-block rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
            Go to Simulations List
          </Link>
        </div>
      </div>
    );
  }

  if (!simulationDetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/simulations" className="text-indigo-600 hover:text-indigo-800 hover:underline">
            &larr; Back to Simulations List
          </Link>
        </div>
        <p className="text-center text-xl text-gray-500">Simulation not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 text-gray-800 dark:text-gray-100">
      <div className="mb-6">
        <Link 
          href="/simulations" 
          className="text-indigo-600 hover:text-indigo-800 hover:underline dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          &larr; Back to Simulations List
        </Link>
      </div>
      <h1 className="mb-2 text-3xl font-bold">
        {simulationDetails.name || `Simulation ${simulationDetails.id.substring(0,8)}...`}
      </h1>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        ID: {simulationDetails.id} &bull; Created: {formatDateTime(simulationDetails.createdAt)}
      </p>

      {/* Configuration Details */}
      <section className="mb-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Configuration</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Number of Chargers</p>
            <p className="text-lg font-semibold">{simulationDetails.numChargers}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Charger Power (kW)</p>
            <p className="text-lg font-semibold">{simulationDetails.powerKW} kW</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Arrival Multiplier</p>
            <p className="text-lg font-semibold">{(simulationDetails.arrivalMultiplier * 100).toFixed(0)}%</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">EV Consumption</p>
            <p className="text-lg font-semibold">{simulationDetails.evConsumption} kWh/100km</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</p>
            <p className="text-lg font-semibold">{simulationDetails.durationDays} days</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">RNG Seed</p>
            <p className="text-lg font-semibold">{simulationDetails.rngSeed ?? 'N/A'}</p>
          </div>
        </div>
      </section>

      {/* Result Metrics */}
      <section className="mb-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Simulation Results</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Energy Consumed</p>
            <p className="text-lg font-semibold">{simulationDetails.totalEnergyConsumedKWh.toFixed(2)} kWh</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Actual Peak Power Demand</p>
            <p className="text-lg font-semibold">{simulationDetails.actualMaxPowerDemandKW.toFixed(2)} kW</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Theoretical Max Power</p>
            <p className="text-lg font-semibold">{simulationDetails.theoreticalMaxPowerKW.toFixed(2)} kW</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Concurrency Factor</p>
            <p className="text-lg font-semibold">{(simulationDetails.concurrencyFactor * 100).toFixed(2)}%</p>
          </div>
        </div>
      </section>

      {/* Chart for Power Demand Over Exemplary Day */}
      <section className="mb-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
          Power Demand Over First Day (First 96 Ticks)
        </h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="tick" 
                tickFormatter={formatTickToHour}
                label={{ value: 'Time of Day', position: 'insideBottomRight', offset: -10, dy: 10 }}
              />
              <YAxis 
                label={{ value: 'Power Demand (kW)', angle: -90, position: 'insideLeft', dx: -5 }}
                allowDecimals={false} 
              />
              <Tooltip 
                labelFormatter={formatTickToHour}
                formatter={(value: number) => [`${value.toFixed(2)} kW`, 'Power Demand']}
              />
              <Legend />
              <Line type="monotone" dataKey="power" stroke="#8884d8" strokeWidth={2} dot={false} name="Power Demand" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-64 items-center justify-center text-gray-400 dark:text-gray-500">
            <p>
              {simulationDetails?.concurrencyTimelineData 
                ? 'No power demand data to display for the first day.' 
                : 'Power demand timeline data not available for this simulation.'}
            </p>
          </div>
        )}
      </section>

      {/* Placeholder for Charger Utilization Map */}
      <section className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Charger Utilization Map (SVG)</h2>
        <div className="flex h-64 items-center justify-center text-gray-400 dark:text-gray-500">
          <p>(SVG Grid map placeholder - Data not yet available in this view)</p>
        </div>
      </section>

      {/* Placeholder for Raw Data or Event Log if needed */}
      <section className="mt-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Detailed Event Log / Tick Data</h2>
        <p className="text-gray-500 dark:text-gray-400">
          (Placeholder - This data is not currently stored or retrieved from the backend.)
        </p>
      </section>
    </div>
  );
};

export default SimulationDetailPage; 