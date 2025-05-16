"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSimulation = void 0;
const arrivalProbabilities_1 = require("./data/arrivalProbabilities");
const chargingDemandProbabilities_1 = require("./data/chargingDemandProbabilities");
const rng_1 = require("./utils/rng"); // Import the seeded RNG utility
// Simple ID generator for EVs for this simulation instance
let evIdCounter = 0;
const generateEvId = () => `ev-${evIdCounter++}`;
// Simple ID generator for Chargers for this simulation instance
let chargerIdCounter = 0;
const generateChargerId = () => `charger-${chargerIdCounter++}`;
const runSimulation = (config) => {
    // Reset counters for multiple simulation runs if this function is called multiple times in the same context
    evIdCounter = 0;
    chargerIdCounter = 0;
    // Initialize the random number generator
    // If a seed is provided, use the seeded generator; otherwise, use Math.random
    const random = config.rngSeed !== undefined ? (0, rng_1.createSeededRandom)(config.rngSeed) : Math.random;
    const chargers = [];
    for (let i = 0; i < config.numChargers; i++) {
        chargers.push({
            id: generateChargerId(),
            powerKW: config.chargerPowerKW,
            isAvailable: true,
            currentEVId: undefined,
            occupiedUntilTick: undefined,
        });
    }
    let totalEnergyConsumedKWh = 0;
    let actualMaxPowerDemandKW = 0;
    const powerDemandPerTickKW = {};
    let totalChargingEvents = 0;
    // const activeEVs: EV[] = []; // To keep track of EVs currently in the system, if needed for detailed logs
    // Main simulation loop
    for (let tick = 0; tick < config.durationTicks; tick++) {
        let currentTickPowerDemandKW = 0;
        // 1. Update charger states (EVs departing)
        for (const charger of chargers) {
            if (!charger.isAvailable && charger.occupiedUntilTick === tick) {
                charger.isAvailable = true;
                charger.currentEVId = undefined;
                charger.occupiedUntilTick = undefined;
                // const departingEV = activeEVs.find(ev => ev.id === charger.currentEVId);
                // if (departingEV) departingEV.departureTick = tick;
                // activeEVs = activeEVs.filter(ev => ev.id !== charger.currentEVId); // If tracking activeEVs
            }
        }
        // 2. Process EV arrivals for each charger
        for (const charger of chargers) {
            const baseArrivalProbability = (0, arrivalProbabilities_1.getArrivalProbabilityForTick)(tick);
            const actualArrivalProbability = baseArrivalProbability * config.arrivalProbabilityMultiplier;
            if (random() < actualArrivalProbability) { // Use the configured random generator
                const chargingDemandKWh = (0, chargingDemandProbabilities_1.getRandomChargingDemandKWh)(config.evConsumptionKWhPer100km, random // Pass the configured random generator
                );
                if (chargingDemandKWh > 0 && charger.isAvailable) {
                    totalChargingEvents++;
                    const estimatedChargeDurationHours = chargingDemandKWh / charger.powerKW;
                    const estimatedChargeDurationTicks = Math.ceil(estimatedChargeDurationHours * 4); // 4 ticks per hour
                    const newEV = {
                        id: generateEvId(),
                        arrivalTick: tick,
                        chargingDemandKWh,
                        assignedChargerId: charger.id,
                        startChargingTick: tick,
                        estimatedChargeDurationTicks,
                        departureTick: tick + estimatedChargeDurationTicks,
                    };
                    charger.isAvailable = false;
                    charger.currentEVId = newEV.id;
                    charger.occupiedUntilTick = newEV.departureTick;
                    // activeEVs.push(newEV); // If tracking activeEVs
                }
            }
        }
        // 3. Calculate power demand for the current tick and update total energy
        for (const charger of chargers) {
            if (!charger.isAvailable) {
                currentTickPowerDemandKW += charger.powerKW;
            }
        }
        powerDemandPerTickKW[tick] = currentTickPowerDemandKW;
        actualMaxPowerDemandKW = Math.max(actualMaxPowerDemandKW, currentTickPowerDemandKW);
        totalEnergyConsumedKWh += currentTickPowerDemandKW * 0.25; // 0.25 hours per tick
    }
    // 4. Final calculations
    const theoreticalMaxPowerKW = config.numChargers * config.chargerPowerKW;
    const concurrencyFactor = theoreticalMaxPowerKW > 0 ? actualMaxPowerDemandKW / theoreticalMaxPowerKW : 0;
    return {
        config,
        totalEnergyConsumedKWh,
        theoreticalMaxPowerKW,
        actualMaxPowerDemandKW,
        concurrencyFactor,
        powerDemandPerTickKW,
        totalChargingEvents,
        // evsProcessed: activeEVs, // If we want to return all EV details
    };
};
exports.runSimulation = runSimulation;
