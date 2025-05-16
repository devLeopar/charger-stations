import { runSimulation } from './simulation';
import type { SimulationConfig, SimulationResult } from './types';

// Default configuration based on Task 1 specifications
const defaultConfig: SimulationConfig = {
  numChargers: 20,
  chargerPowerKW: 11,
  evConsumptionKWhPer100km: 18,
  arrivalProbabilityMultiplier: 1.0, // 100% default
  durationTicks: 365 * 24 * 4, // 35,040 ticks for one non-leap year
  // rngSeed: 12345, // Optional: for deterministic testing, can be uncommented
};

const parseArgs = (): Partial<SimulationConfig> & { concurrencyCurve?: boolean; help?: boolean } => {
  const args = process.argv.slice(2);
  const parsed: Partial<SimulationConfig> & { concurrencyCurve?: boolean; help?: boolean } = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const nextArg = args[i + 1];
    const nextArgIsNumber = nextArg !== undefined && !isNaN(parseFloat(nextArg));

    switch (arg) {
      case '--numChargers':
      case '-n':
        if (nextArgIsNumber) parsed.numChargers = parseInt(nextArg, 10); i++; break;
      case '--powerKW':
      case '-p':
        if (nextArgIsNumber) parsed.chargerPowerKW = parseFloat(nextArg); i++; break;
      case '--arrivalMultiplier':
      case '-m':
        if (nextArgIsNumber) parsed.arrivalProbabilityMultiplier = parseFloat(nextArg); i++; break;
      case '--consumption':
      case '-c':
        if (nextArgIsNumber) parsed.evConsumptionKWhPer100km = parseFloat(nextArg); i++; break;
      case '--seed':
      case '-s':
        if (nextArgIsNumber) parsed.rngSeed = parseInt(nextArg, 10); i++; break;
      case '--durationDays':
      case '-d':
        if (nextArgIsNumber) parsed.durationTicks = parseInt(nextArg, 10) * 24 * 4; i++; break;
      case '--concurrencyCurve':
        parsed.concurrencyCurve = true; break;
      case '--help':
      case '-h':
        parsed.help = true; break;
    }
  }
  return parsed;
};

const printHelp = () => {
  console.log(`
Usage: ts-node packages/simulation-core/src/index.ts [options]

Options:
  -n, --numChargers <number>    Number of chargers (default: ${defaultConfig.numChargers})
  -p, --powerKW <number>        Power per charger in kW (default: ${defaultConfig.chargerPowerKW})
  -m, --arrivalMultiplier <number> Arrival probability multiplier (default: ${defaultConfig.arrivalProbabilityMultiplier})
  -c, --consumption <number>    EV consumption in kWh/100km (default: ${defaultConfig.evConsumptionKWhPer100km})
  -s, --seed <number>           RNG seed for deterministic results (optional)
  -d, --durationDays <number>   Simulation duration in days (default: 365)
  --concurrencyCurve            Run simulation for 1-30 chargers to show concurrency curve.
  -h, --help                    Show this help message.
  `);
};

const runSingleSimulation = (config: SimulationConfig) => {
  console.log("\nStarting EV Charging Simulation with config:", config);
  const startTime = Date.now();
  const result: SimulationResult = runSimulation(config);
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

  if (config.numChargers === 20 && config.chargerPowerKW === 11 && (config.rngSeed === undefined || config.rngSeed === 12345) /* for default or common seed test */) {
    if (result.actualMaxPowerDemandKW >= 77 && result.actualMaxPowerDemandKW <= 121) {
      console.log("Actual Max Power Demand is within the expected range (77-121 kW for 20 chargers @ 11kW).");
    } else {
      console.warn("WARNING: Actual Max Power Demand is OUTSIDE the expected range (77-121 kW for 20 chargers @ 11kW).");
    }
    if (result.concurrencyFactor >= 0.35 && result.concurrencyFactor <= 0.55) {
      console.log("Concurrency Factor is within the expected range (35-55% for 20 chargers @ 11kW).");
    } else {
      console.warn("WARNING: Concurrency Factor is OUTSIDE the expected range (35-55% for 20 chargers @ 11kW).");
    }
  }
};

const runConcurrencyCurve = (baseConfig: SimulationConfig) => {
  console.log("\n--- Concurrency Factor Curve (1-30 Chargers) ---");
  console.log("Chargers | Concurrency Factor (%)");
  console.log("---------|------------------------");
  for (let num = 1; num <= 30; num++) {
    const config: SimulationConfig = { ...baseConfig, numChargers: num };
    const result = runSimulation(config);
    const factorPercentage = (result.concurrencyFactor * 100).toFixed(2);
    console.log(`${String(num).padStart(8, ' ')} | ${factorPercentage.padStart(22, ' ')}`);
    // Brief pause to prevent console flooding & allow reading, not strictly necessary
    // await new Promise(resolve => setTimeout(resolve, 50)); // Uncomment if needed, makes script async
  }
  console.log("-------------------------------------------------");
};

const main = () => {
  const cliArgs = parseArgs();

  if (cliArgs.help) {
    printHelp();
    return;
  }

  // Override default config with CLI args
  const currentConfig: SimulationConfig = {
    numChargers: cliArgs.numChargers ?? defaultConfig.numChargers,
    chargerPowerKW: cliArgs.chargerPowerKW ?? defaultConfig.chargerPowerKW,
    evConsumptionKWhPer100km: cliArgs.evConsumptionKWhPer100km ?? defaultConfig.evConsumptionKWhPer100km,
    arrivalProbabilityMultiplier: cliArgs.arrivalProbabilityMultiplier ?? defaultConfig.arrivalProbabilityMultiplier,
    durationTicks: cliArgs.durationTicks ?? defaultConfig.durationTicks,
    rngSeed: cliArgs.rngSeed ?? defaultConfig.rngSeed, // Allow explicit undefined from CLI if needed, or default
  };
  if (cliArgs.rngSeed === undefined && defaultConfig.rngSeed !== undefined) {
    currentConfig.rngSeed = defaultConfig.rngSeed; // Ensure default seed is used if not overridden
  } else if (cliArgs.rngSeed !== undefined) {
    currentConfig.rngSeed = cliArgs.rngSeed;
  }

  if (cliArgs.concurrencyCurve) {
    runConcurrencyCurve(currentConfig);
  } else {
    runSingleSimulation(currentConfig);
  }
};

// Run the simulation
main(); 