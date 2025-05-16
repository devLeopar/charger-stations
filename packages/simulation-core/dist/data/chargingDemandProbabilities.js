"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomChargingDemandKWh = exports.parsedChargingDemands = exports.rawChargingDemandProbabilities = void 0;
/**
 * T2: Charging demand probabilities
 * Probability of an arriving EV's charging needs in kilometers of range.
 * Data directly from the PDF.
 */
exports.rawChargingDemandProbabilities = {
    "None (doesn't charge)": 0.3431,
    "5.0 km": 0.0490,
    "10.0 km": 0.0980,
    "20.0 km": 0.1176,
    "30.0 km": 0.0882,
    "50.0 km": 0.1176,
    "100.0 km": 0.1078,
    "200.0 km": 0.0490,
    "300.0 km": 0.0294,
};
/**
 * Parses the raw string-keyed demand probabilities into a more usable array of objects.
 * Extracts the kilometer value or notes if it's a "None" case.
 */
exports.parsedChargingDemands = Object.entries(exports.rawChargingDemandProbabilities).map(([demandStr, probability]) => {
    if (demandStr.toLowerCase().includes("none")) {
        return { probability, demandKm: undefined };
    }
    const kmMatch = demandStr.match(/(\d+\.?\d*)/);
    const demandKm = kmMatch ? parseFloat(kmMatch[1]) : undefined;
    return { probability, demandKm };
});
/**
 * Helper function to get a random charging demand based on the probabilities.
 * @param evConsumptionKWhPer100km The EV's energy consumption rate.
 * @param randomGenerator A function that returns a random number between 0 and 1.
 * @returns The charging demand in kWh, or 0 if the EV doesn't charge.
 */
const getRandomChargingDemandKWh = (evConsumptionKWhPer100km, randomGenerator) => {
    const rand = randomGenerator(); // Use the provided generator
    let cumulativeProbability = 0;
    for (const demand of exports.parsedChargingDemands) {
        cumulativeProbability += demand.probability;
        if (rand <= cumulativeProbability) {
            if (demand.demandKm === undefined) {
                return 0; // "None (doesn't charge)"
            }
            // Convert km demand to kWh demand
            return (demand.demandKm / 100) * evConsumptionKWhPer100km;
        }
    }
    return 0; // Fallback, though theoretically unreachable if probabilities sum to 1
};
exports.getRandomChargingDemandKWh = getRandomChargingDemandKWh;
