import type { ArrivalProbabilityData, HourlyArrivalProbability } from '../types';
/**
 * T1: Arrival probabilities
 * Probability of an EV arriving at a chargepoint at a given time.
 * Data directly from the PDF.
 */
export declare const rawArrivalProbabilities: ArrivalProbabilityData;
/**
 * Parses the raw string-keyed probabilities into a more usable format,
 * mapping hour (0-23) to its probability.
 */
export declare const parsedArrivalProbabilities: HourlyArrivalProbability[];
/**
 * Helper function to get arrival probability for a given tick.
 * Each tick is 15 minutes.
 * @param tick The current simulation tick (0 to 35039 for a year).
 * @returns The probability of an EV arriving at a specific charger during this 15-min interval.
 */
export declare const getArrivalProbabilityForTick: (tick: number) => number;
