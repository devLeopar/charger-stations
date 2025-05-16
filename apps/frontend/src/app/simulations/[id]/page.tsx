'use client'; // Required for using useParams

import React from 'react';
import { useParams } from 'next/navigation'; // To get the [id] from the URL
import Link from 'next/link';

const SimulationDetailPage: React.FC = () => {
  const params = useParams();
  const simulationId = params.id as string; // id will be a string or string[]

  // TODO: Fetch simulation details based on simulationId when backend is ready
  // For now, just display the ID and placeholder content.

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/simulations" className="text-indigo-600 hover:text-indigo-800 hover:underline">
          &larr; Back to Simulations List
        </Link>
      </div>
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Simulation Details: <span className="text-indigo-600">{simulationId}</span>
      </h1>

      {/* Placeholder for Summary Metrics */}
      <section className="mb-8 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Summary</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <p><strong>Total Energy:</strong> -- kWh</p>
          <p><strong>Peak Power:</strong> -- kW</p>
          <p><strong>Concurrency:</strong> -- %</p>
          <p><strong>Chargers:</strong> --</p>
          <p><strong>Charger Power:</strong> -- kW</p>
          <p><strong>Arrival Multiplier:</strong> --%</p>
        </div>
      </section>

      {/* Placeholder for Charts (e.g., power demand over time, charger utilization map) */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Power Demand Over Exemplary Day</h2>
          <div className="flex h-64 items-center justify-center text-gray-400">
            <p>(Line chart placeholder)</p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Charger Utilization Map (SVG)</h2>
          <div className="flex h-64 items-center justify-center text-gray-400">
            <p>(SVG Grid map placeholder - light/dark green per power level)</p>
          </div>
        </div>
      </section>

      {/* Placeholder for Raw Data or Event Log if needed */}
      <section className="mt-8 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Detailed Data / Events</h2>
        <p className="text-gray-500">
          (Placeholder for tables or logs, e.g., charging events per day/week/month or power values per chargepoint at useful aggregation).
        </p>
      </section>
    </div>
  );
};

export default SimulationDetailPage; 