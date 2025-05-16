'use client'; // Recharts components are client-side

import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { ValueType, NameType, Payload } from 'recharts/types/component/DefaultTooltipContent';

// Mock data structure similar to SimulationResult from simulation-core
interface MockDashboardData {
  totalEnergyConsumedKWh: number;
  actualMaxPowerDemandKW: number;
  theoreticalMaxPowerKW: number;
  concurrencyFactor: number;
  lastRunDate: string;
  // Mock data for the concurrency over time chart
  concurrencyTimeline: { time: string; concurrency: number }[];
  chargerUsageHourly?: { hour: string; activeChargers: number; totalChargers: number }[]; // Made optional
}

// Step 1: Initialize mockData without chargerUsageHourly (or with it as undefined)
const mockData: MockDashboardData = {
  totalEnergyConsumedKWh: 60832.75,
  actualMaxPowerDemandKW: 77.00,
  theoreticalMaxPowerKW: 220.00, // This will be used for numChargersForHourlyCalc
  concurrencyFactor: 0.35, // 35%
  lastRunDate: '2024-07-29',
  concurrencyTimeline: [
    { time: '00:00', concurrency: 10 }, { time: '01:00', concurrency: 12 },
    { time: '02:00', concurrency: 9 },  { time: '03:00', concurrency: 11 },
    { time: '04:00', concurrency: 15 }, { time: '05:00', concurrency: 18 },
    { time: '06:00', concurrency: 25 }, { time: '07:00', concurrency: 30 },
    { time: '08:00', concurrency: 45 }, { time: '09:00', concurrency: 55 },
    { time: '10:00', concurrency: 60 }, { time: '11:00', concurrency: 62 },
    { time: '12:00', concurrency: 65 }, { time: '13:00', concurrency: 70 },
    { time: '14:00', concurrency: 77 }, { time: '15:00', concurrency: 75 },
    { time: '16:00', concurrency: 70 }, { time: '17:00', concurrency: 68 },
    { time: '18:00', concurrency: 60 }, { time: '19:00', concurrency: 45 },
    { time: '20:00', concurrency: 35 }, { time: '21:00', concurrency: 25 },
    { time: '22:00', concurrency: 18 }, { time: '23:00', concurrency: 15 },
  ],
  // chargerUsageHourly will be populated in Step 2
};

// Step 2: Populate chargerUsageHourly. Now mockData and mockData.concurrencyTimeline are defined.
const numChargersForHourlyCalc = mockData.theoreticalMaxPowerKW / 11; // Assuming 11kW per charger
mockData.chargerUsageHourly = Array.from({ length: 24 }, (_, i) => {
  const hourStr = i.toString().padStart(2, '0');
  // mockData.concurrencyTimeline is now accessible
  const timelineEntry = mockData.concurrencyTimeline.find(c => c.time.startsWith(hourStr));
  const concurrencyForHour = timelineEntry ? timelineEntry.concurrency : 30; // Default to 30%

  let active = Math.floor(numChargersForHourlyCalc * (concurrencyForHour / 100) * (0.8 + Math.random() * 0.4));
  active = Math.min(numChargersForHourlyCalc, Math.max(0, active));
  
  return {
    hour: `${hourStr}:00`,
    activeChargers: active,
    totalChargers: numChargersForHourlyCalc,
  };
});

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Summary Cards Section */}
      <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-700">Total Energy Consumed</h2>
          <p className="text-3xl font-bold text-indigo-600">
            {mockData.totalEnergyConsumedKWh.toFixed(2)} kWh
          </p>
          <p className="text-sm text-gray-500">Last simulation run: {mockData.lastRunDate}</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-700">Peak Power Demand</h2>
          <p className="text-3xl font-bold text-indigo-600">
            {mockData.actualMaxPowerDemandKW.toFixed(2)} kW
          </p>
          <p className="text-sm text-gray-500">
            Actual vs Theoretical ({mockData.theoreticalMaxPowerKW.toFixed(2)} kW)
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-700">Concurrency Factor</h2>
          <p className="text-3xl font-bold text-indigo-600">
            {(mockData.concurrencyFactor * 100).toFixed(2)} %
          </p>
          <p className="text-sm text-gray-500">Efficiency of charger usage</p>
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="h-[400px] rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Concurrency Over Time (Mock Daily)</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.concurrencyTimeline}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}> {/* Adjusted margins */}
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis 
                label={{ 
                  value: 'Concurrency %', 
                  angle: -90, 
                  position: 'insideLeft', 
                  offset: -5, // Adjusted offset
                  style: {fontSize: '0.875rem', fill: '#4A5568'} // Added style
                }} 
                unit="%" // Added unit to YAxis for clarity
              />
              <Tooltip formatter={(value: ValueType) => {
                if (typeof value === 'number') {
                  return `${value.toFixed(0)}%`; // Format to whole number percentage
                }
                return value as React.ReactNode;
              }} />
              <Legend />
              <Line type="monotone" dataKey="concurrency" stroke="#4f46e5" strokeWidth={2} activeDot={{ r: 8 }} name="Concurrency" unit="%" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[400px] rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Charger Usage Per Hour (Mock Daily)</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={mockData.chargerUsageHourly}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }} // Adjusted margins
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis 
                allowDecimals={false} 
                label={{ 
                  value: 'Active Chargers', 
                  angle: -90, 
                  position: 'insideLeft', 
                  offset: -5, // Adjusted offset
                  style: {fontSize: '0.875rem', fill: '#4A5568'} // Added style
                }} 
              />
              <Tooltip formatter={(value: ValueType, name: NameType, item: Payload<ValueType, NameType>) => {
                const dataPoint = item.payload;
                if (dataPoint && dataPoint.totalChargers !== undefined && name === 'activeChargers') {
                  return [`${value} / ${dataPoint.totalChargers}`, 'Active / Total'];
                }
                // Fallback for other potential data keys or if totalChargers is not present
                return [value as React.ReactNode, name as React.ReactNode]; 
              }} />
              <Legend />
              <Bar dataKey="activeChargers" fill="#818cf8" name="Active Chargers" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage; 