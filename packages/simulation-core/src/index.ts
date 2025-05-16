import { runSimulation } from './simulation';
import type { SimulationConfig, SimulationResult } from './types';

// Default configuration based on Task 1 specifications
const defaultConfig: SimulationConfig = {
  numChargers: 14,
  chargerPowerKW: 11,
  evConsumptionKWhPer100km: 18,
  arrivalProbabilityMultiplier: 1.0, // 100% default
  durationTicks: 365 * 24 * 4, // 35,040 ticks for one non-leap year
  // rngSeed: 12345, // Optional: for deterministic testing, can be uncommented
};

const main = () => {
  console.log("Starting EV Charging Simulation with config:", defaultConfig);

  const startTime = Date.now();
  const result: SimulationResult = runSimulation(defaultConfig);
  const endTime = Date.now();

  console.log("\n--- Simulation Results ---");
  console.log(`Simulation completed in ${(endTime - startTime) / 1000} seconds.`);
  console.log("Input Configuration:", result.config);
  console.log("-------------------------------------");
  console.log(`Total Energy Consumed: ${result.totalEnergyConsumedKWh.toFixed(2)} kWh`);
  console.log(`Theoretical Max Power Demand: ${result.theoreticalMaxPowerKW.toFixed(2)} kW`);
  console.log(`Actual Max Power Demand: ${result.actualMaxPowerDemandKW.toFixed(2)} kW`);
  console.log(`Concurrency Factor: ${(result.concurrencyFactor * 100).toFixed(2)}%`);
  console.log(`Total Charging Events: ${result.totalChargingEvents}`);
  console.log("-------------------------------------");

  // Optionally, print power demand for a few ticks if needed for debugging
  // For example, the first 10 ticks:
  // console.log("\nPower Demand for first 10 ticks:");
  // for (let i = 0; i < Math.min(10, defaultConfig.durationTicks); i++) {
  //   console.log(`Tick ${i}: ${result.powerDemandPerTickKW[i]?.toFixed(2) ?? 0} kW`);
  // }

  // Check if results are within expected ranges mentioned in the task
  // Actual maximum demand should be around 77-121 kW
  // Concurrency factor should be between 35-55%
  if (result.actualMaxPowerDemandKW >= 77 && result.actualMaxPowerDemandKW <= 121) {
    console.log("Actual Max Power Demand is within the expected range (77-121 kW).");
  } else {
    console.warn("WARNING: Actual Max Power Demand is OUTSIDE the expected range (77-121 kW).");
  }
  if (result.concurrencyFactor >= 0.35 && result.concurrencyFactor <= 0.55) {
    console.log("Concurrency Factor is within the expected range (35-55%).");
  } else {
    console.warn("WARNING: Concurrency Factor is OUTSIDE the expected range (35-55%).");
  }
};

// Run the simulation
main(); 