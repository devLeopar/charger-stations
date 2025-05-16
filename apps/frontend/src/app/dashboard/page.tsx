import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Summary Cards Section */}
      <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder Card 1: Total Energy */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-700">Total Energy Consumed</h2>
          <p className="text-3xl font-bold text-indigo-600">-- kWh</p>
          <p className="text-sm text-gray-500">Last simulation run</p>
        </div>

        {/* Placeholder Card 2: Peak Power */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-700">Peak Power Demand</h2>
          <p className="text-3xl font-bold text-indigo-600">-- kW</p>
          <p className="text-sm text-gray-500">Actual vs Theoretical (-- kW)</p>
        </div>

        {/* Placeholder Card 3: Concurrency Factor */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-700">Concurrency Factor</h2>
          <p className="text-3xl font-bold text-indigo-600">-- %</p>
          <p className="text-sm text-gray-500">Efficiency of charger usage</p>
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Placeholder Chart 1: Concurrency Over Time */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Concurrency Over Time</h2>
          <div className="flex h-64 items-center justify-center text-gray-400">
            <p>(Line chart placeholder)</p>
          </div>
        </div>

        {/* Placeholder Chart 2: Charger Usage Per Hour */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Charger Usage Per Hour</h2>
          <div className="flex h-64 items-center justify-center text-gray-400">
            <p>(Bar/heatmap chart placeholder)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage; 