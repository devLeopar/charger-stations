'use client'; // Recharts components are client-side

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
} from 'recharts';
import { ChargerActivityLog } from '@reonic/simulation-core/dist/types';
import type { Prisma } from '@/generated/prisma-client';

// Helper function to format tick to HH:MM
const formatTickToHourMinute = (tick: number): string => {
  // Modulo 96 for ticks per day to keep time within a 24-hour format for display
  const displayTickInDay = tick % 96; 
  const hours = Math.floor((displayTickInDay * 15) / 60);
  const minutes = (displayTickInDay * 15) % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

// Types for API data
interface SimulationListItem {
  id: string;
  name: string | null;
  createdAt: string;
  numChargers: number;
  powerKW: number;
  arrivalMultiplier: number;
  evConsumption: number;
  concurrencyFactor: number | null;
  actualMaxPowerDemandKW: number | null;
}

// Represents the full simulation data from /api/simulations/[id]
// We only define fields we know we'll use for now, plus the JSON data.

type FullSimulationData = Omit<Prisma.SimulationGetPayload<object>, 'concurrencyTimelineData' | 'chargerActivityData'> & {
  concurrencyTimelineData?: Record<string, number>; // Tick (string) -> Power (kW)
  chargerActivityData?: ChargerActivityLog; // Tick (string) -> ChargerId (string) -> ChargerTickInfo
  totalEnergyConsumedKWh: number;
  actualMaxPowerDemandKW: number;
  theoreticalMaxPowerKW: number;
  concurrencyFactor: number;
};


// Types for chart data
interface ConcurrencyChartPoint {
  name: string; // Formatted tick, e.g., "00:15"
  power: number;
}

export default function DashboardPage() {
  const [simulationsListLoading, setSimulationsListLoading] = useState(true);
  const [simulationDetailLoading, setSimulationDetailLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [latestSimulationFullData, setLatestSimulationFullData] = useState<FullSimulationData | null>(null);

  const [concurrencyChartDataProcessed, setConcurrencyChartDataProcessed] = useState<ConcurrencyChartPoint[]>([]);

  const processConcurrencyData = useCallback((
    timelineData?: Record<string, number>
  ): ConcurrencyChartPoint[] => {
    if (!timelineData) return [];
    const data: ConcurrencyChartPoint[] = [];
    for (let i = 0; i < 96; i++) {
      const tickKey = String(i);
      data.push({
        name: formatTickToHourMinute(i),
        power: timelineData[tickKey] || 0,
      });
    }
    return data;
  }, []);

  const fetchSimulationDetails = useCallback(async (id: string) => {
    setSimulationDetailLoading(true);
    setErrorMsg(null);
    try {
      const response = await fetch(`/api/simulations/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch simulation details for ID: ${id}`);
      }
      const data: FullSimulationData = await response.json();
      setLatestSimulationFullData(data);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'An unknown error occurred while fetching simulation details.');
      setLatestSimulationFullData(null);
    } finally {
      setSimulationDetailLoading(false);
    }
  }, []);

  const fetchLatestSimulationId = useCallback(async () => {
    setSimulationsListLoading(true);
    setErrorMsg(null);
    try {
      const response = await fetch('/api/simulations');
      if (!response.ok) {
        throw new Error('Failed to fetch simulations list');
      }
      const simulations: SimulationListItem[] = await response.json();
      if (simulations.length > 0) {
        return simulations[0].id; // API returns sorted by createdAt desc
      }
      return null;
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'An unknown error occurred while fetching simulations list.');
      return null;
    } finally {
      setSimulationsListLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLatestSimulationId().then(latestId => {
      if (latestId) {
        fetchSimulationDetails(latestId);
      } else if (!errorMsg) {
        // No error from fetching list, and no simulations found handled in JSX
      }
    });
  }, [fetchLatestSimulationId, fetchSimulationDetails, errorMsg]);
  
   useEffect(() => {
    if (latestSimulationFullData) {
      setConcurrencyChartDataProcessed(
        processConcurrencyData(latestSimulationFullData.concurrencyTimelineData)
      );
    } else {
      setConcurrencyChartDataProcessed([]);
    }
  }, [latestSimulationFullData, processConcurrencyData]);


  if (simulationsListLoading || simulationDetailLoading) {
    return (
      <div className="flex items-center justify-center h-full p-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">Loading dashboard data...</p>
      </div>
    );
  }

  if (errorMsg && !latestSimulationFullData) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <p className="text-lg text-red-500 dark:text-red-400">{errorMsg}</p>
        <button 
           onClick={() => { 
             fetchLatestSimulationId().then((id: string | null) => { // Explicitly type id
               if (id) {
                 fetchSimulationDetails(id);
               } else if (!errorMsg) {
                  // This case (no simulations found after retry) will be handled by the next conditional block
               }
             });
           }} 
           className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Try Again
        </button>
         <Link href="/simulate" passHref className="mt-2">
            <a className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-100 dark:text-indigo-400 dark:border-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Run New Simulation
            </a>
          </Link>
      </div>
    );
  }
  
  if (!latestSimulationFullData && !simulationsListLoading && !simulationDetailLoading && !errorMsg) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">No simulation data available.</p>
        <p className="text-md text-gray-500 dark:text-gray-400 mb-4">
          Run a simulation to populate the dashboard.
        </p>
        <Link href="/simulate" passHref>
          <a className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Create New Simulation
          </a>
        </Link>
      </div>
    );
  }
  

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100">Dashboard Overview</h2>
      </div>
      {latestSimulationFullData && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Displaying data for the latest simulation: {latestSimulationFullData.name || `ID: ${latestSimulationFullData.id.substring(0,8)}...`} (Completed: {new Date(latestSimulationFullData.createdAt).toLocaleString()})
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Concurrency Chart Card */}
        <div className="col-span-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Concurrency Over Time (First 24 Hours)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Total power demand from all chargers over the first day of the latest simulation.
            </p>
          </div>
          <div className="pl-2 pr-2 pb-6">
            {concurrencyChartDataProcessed.length > 0 && latestSimulationFullData ? (
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={concurrencyChartDataProcessed}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                  <XAxis
                    dataKey="name"
                    stroke="#A0AEC0" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#A0AEC0"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value} kW`}
                    label={{ value: 'Power Demand (kW)', angle: -90, position: 'insideLeft', fill: '#A0AEC0', fontSize: 12, dx: -5 }}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value.toFixed(2)} kW`, 'Power Demand']}
                    labelFormatter={(label: string) => `Time: ${label}`}
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.5rem', borderColor: '#CBD5E0' }}
                    labelStyle={{ color: '#2D3748' }}
                    itemStyle={{ color: '#2D3748' }}
                  />
                  <Legend wrapperStyle={{ color: '#4A5568' }}/>
                  <Line
                    type="monotone"
                    dataKey="power"
                    strokeWidth={2}
                    stroke="#667EEA" // Indigo
                    activeDot={{ r: 6, fill: '#667EEA', stroke: '#FFF' }}
                    dot={false}
                    name="Total Power Demand"
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 py-10">
                {latestSimulationFullData ? 'No concurrency data available.' : 'Loading data...'}
              </p>
            )}
          </div>
        </div>

        {/* Latest Simulation Highlights Card */}
        <div className="col-span-4 lg:col-span-3 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Latest Simulation Highlights</h3>
            {latestSimulationFullData ? (
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Total Energy Consumed:</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{latestSimulationFullData.totalEnergyConsumedKWh.toFixed(2)} kWh</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Actual Peak Power:</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{latestSimulationFullData.actualMaxPowerDemandKW.toFixed(2)} kW</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Concurrency Factor:</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{(latestSimulationFullData.concurrencyFactor * 100).toFixed(2)}%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Number of Chargers:</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{latestSimulationFullData.numChargers}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Charger Power (each):</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{latestSimulationFullData.powerKW} kW</span>
                </li>
                 <li className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Theoretical Max Power:</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{latestSimulationFullData.theoreticalMaxPowerKW.toFixed(2)} kW</span>
                </li>
              </ul>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 py-10">No simulation data loaded.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 