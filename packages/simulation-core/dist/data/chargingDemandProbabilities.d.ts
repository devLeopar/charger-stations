import type { ChargingDemandData, ChargingDemand } from '../types';
/**
 * T2: Charging demand probabilities
 * Probability of an arriving EV's charging needs in kilometers of range.
 * Data directly from the PDF.
 */
export declare const rawChargingDemandProbabilities: ChargingDemandData;
/**
 * Parses the raw string-keyed demand probabilities into a more usable array of objects.
 * Extracts the kilometer value or notes if it's a "None" case.
 */
export declare const parsedChargingDemands: ChargingDemand[];
/**
 * Helper function to get a random charging demand based on the probabilities.
 * @param evConsumptionKWhPer100km The EV's energy consumption rate.
 * @param randomGenerator A function that returns a random number between 0 and 1.
 * @returns The charging demand in kWh, or 0 if the EV doesn't charge.
 */
export declare const getRandomChargingDemandKWh: (evConsumptionKWhPer100km: number, randomGenerator: () => number) => number;
