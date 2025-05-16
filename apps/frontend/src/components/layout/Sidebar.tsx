import Link from 'next/link';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 z-10 flex h-screen w-64 flex-col bg-gray-800 text-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">Reonic Sim</h1>
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="block rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              aria-label="Go to Dashboard page"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/simulations"
              className="block rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              aria-label="Go to Simulations page"
            >
              Simulations
            </Link>
          </li>
          <li>
            <Link
              href="/simulate"
              className="block rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              aria-label="Go to Create Simulation page"
            >
              Create New
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              aria-label="Go to About page"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <p className="text-xs text-gray-400">© 2024 Reonic</p>
      </div>
    </aside>
  );
};

export default Sidebar; 