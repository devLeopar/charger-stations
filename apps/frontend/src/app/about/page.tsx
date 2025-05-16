'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 text-gray-800 dark:text-gray-100">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Understanding Your EV Charging Needs with Reonic Sim
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Reonic Sim is your partner in navigating the complexities of electric vehicle charging infrastructure.
        </p>
      </header>

      <section className="max-w-3xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            What is Reonic Sim?
          </h2>
          <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
            Reonic Sim is a powerful, easy-to-use simulation tool designed to help you model, analyze, and understand electric vehicle (EV) charging demand. It allows you to forecast energy needs and charger utilization based on a variety of customizable parameters, providing clear insights for effective planning and decision-making.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            What Can You Do with Reonic Sim?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg leading-7 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Explore Diverse Scenarios:</strong> Easily adjust parameters such as the number of chargers, individual charger power output, EV arrival rates (based on probabilistic models), and typical EV energy consumption to see how they impact overall demand.
            </li>
            <li>
              <strong>Forecast Power Demand:</strong> Gain clear insights into potential peak power demands on your electrical infrastructure throughout the day and identify concurrency factors.
            </li>
            <li>
              <strong>Visualize Charger Activity:</strong> Understand charger utilization patterns, see when chargers are busy or free, and identify potential bottlenecks or periods of underutilization.
            </li>
            <li>
              <strong>Make Data-Driven Decisions:</strong> Use the simulation results to make more informed choices when planning for EV charging station deployments, managing fleet electrification, or developing energy management strategies for your site.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Who Is It For?
          </h2>
          <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
            Reonic Sim is valuable for anyone involved in planning or managing EV charging infrastructure, including:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-lg text-gray-700 dark:text-gray-300">
            <li>Property Developers & Managers</li>
            <li>Fleet Operators & Managers</li>
            <li>Energy Consultants & Analysts</li>
            <li>Urban Planners</li>
            <li>Businesses considering EV charging for employees or customers</li>
            <li>Anyone curious about the dynamics of EV charging demand!</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link href="/simulate" className="inline-block rounded-md bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
            Create Your First Simulation
          </Link>
          <p className="mt-4">
            <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
              Or, view your Dashboard &rarr;
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
} 