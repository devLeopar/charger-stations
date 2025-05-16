import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">About This Project</h1>
      
      <div className="max-w-2xl rounded-lg bg-white p-8 shadow-lg">
        <p className="mb-4 text-gray-700">
          This is the Reonic EV Charging Simulation take-home task. 
          The goal of this project is to simulate electric vehicle charger usage to understand power demands and energy consumption.
        </p>
        <p className="mb-4 text-gray-700">
          The simulation core (Task 1) calculates various metrics based on configurable parameters. 
          This frontend application (Task 2a) aims to provide a user-friendly interface to:
        </p>
        <ul className="mb-4 ml-6 list-disc text-gray-700">
          <li>Configure and run new simulations.</li>
          <li>View past simulation results.</li>
          <li>Analyze data through charts and summaries on a dashboard.</li>
        </ul>
        <p className="text-gray-700">
          The project is built using Next.js, React, TypeScript, and Tailwind CSS for the frontend, 
          and a TypeScript-based simulation engine. A backend (Task 2b) would typically handle data persistence and API services.
        </p>
        <h2 className="mt-6 mb-3 text-xl font-semibold text-gray-700">Technology Stack Highlights:</h2>
        <ul className="ml-6 list-disc text-gray-700">
            <li>Simulation Core: Pure TypeScript</li>
            <li>Frontend: Next.js (App Router), React, TypeScript, Tailwind CSS</li>
            <li>(Potential) Backend: Express.js, Prisma, PostgreSQL</li>
            <li>Styling: Tailwind CSS (no component libraries like MUI/Mantine as per instructions)</li>
            <li>Charting: To be chosen (e.g., Recharts, ApexCharts)</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage; 