import React from 'react';
import Link from 'next/link'; // For "View" button if we link to detail pages

// Placeholder data type - replace with actual Simulation data type from backend/types later
interface MockSimulation {
  id: string;
  date: string;
  numChargers: number;
  chargerPowerKW: number;
  arrivalMultiplier: string;
}

const mockSimulations: MockSimulation[] = [
  { id: 'sim-001', date: '2024-07-28', numChargers: 20, chargerPowerKW: 11, arrivalMultiplier: '100%' },
  { id: 'sim-002', date: '2024-07-27', numChargers: 15, chargerPowerKW: 22, arrivalMultiplier: '120%' },
  { id: 'sim-003', date: '2024-07-26', numChargers: 25, chargerPowerKW: 11, arrivalMultiplier: '80%'  },
];

const SimulationsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Simulations</h1>
        <Link href="/simulate" className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          + Create New Simulation
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
        <table className="min-w-full table-auto text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">Simulation ID</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3 text-center">Chargers</th>
              <th scope="col" className="px-6 py-3 text-center">Power (kW)</th>
              <th scope="col" className="px-6 py-3 text-center">Arrival Multiplier</th>
              <th scope="col" className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockSimulations.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-500">
                  No simulations found. Get started by creating one!
                </td>
              </tr>
            ) : (
              mockSimulations.map((sim) => (
                <tr key={sim.id} className="border-b bg-white hover:bg-gray-50">
                  <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                    {sim.id}
                  </th>
                  <td className="px-6 py-4">{sim.date}</td>
                  <td className="px-6 py-4 text-center">{sim.numChargers}</td>
                  <td className="px-6 py-4 text-center">{sim.chargerPowerKW}</td>
                  <td className="px-6 py-4 text-center">{sim.arrivalMultiplier}</td>
                  <td className="px-6 py-4 text-center">
                    <Link href={`/simulations/${sim.id}`} className="font-medium text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400">
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
    </div>
  );
};

export default SimulationsPage; 