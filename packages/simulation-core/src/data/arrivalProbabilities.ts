import type { ArrivalProbabilityData, HourlyArrivalProbability } from '../types';

/**
 * T1: Arrival probabilities
 * Probability of an EV arriving at a chargepoint at a given time.
 * Data directly from the PDF.
 */
export const rawArrivalProbabilities: ArrivalProbabilityData = {
  '00:00 - 01:00': 0.0094,
  '01:00 - 02:00': 0.0094,
  '02:00 - 03:00': 0.0094,
  '03:00 - 04:00': 0.0094,
  '04:00 - 05:00': 0.0094,
  '05:00 - 06:00': 0.0094,
  '06:00 - 07:00': 0.0094,
  '07:00 - 08:00': 0.0094,
  '08:00 - 09:00': 0.0283,
  '09:00 - 10:00': 0.0283,
  '10:00 - 11:00': 0.0566,
  '11:00 - 12:00': 0.0566,
  '12:00 - 13:00': 0.0566,
  '13:00 - 14:00': 0.0755,
  '14:00 - 15:00': 0.0755,
  '15:00 - 16:00': 0.0755,
  '16:00 - 17:00': 0.1038,
  '17:00 - 18:00': 0.1038,
  '18:00 - 19:00': 0.1038,
  '19:00 - 20:00': 0.0472,
  '20:00 - 21:00': 0.0472,
  '21:00 - 22:00': 0.0472,
  '22:00 - 23:00': 0.0094,
  '23:00 - 00:00': 0.0094, // Assuming "23:00 - 24:00" means up to the end of the hour
};

/**
 * Parses the raw string-keyed probabilities into a more usable format,
 * mapping hour (0-23) to its probability.
 */
export const parsedArrivalProbabilities: HourlyArrivalProbability[] = Object.entries(
  rawArrivalProbabilities
).map(([timeRange, probability]) => {
  const startHour = parseInt(timeRange.substring(0, 2), 10);
  return { hour: startHour, probability };
});

/**
 * Helper function to get arrival probability for a given tick.
 * Each tick is 15 minutes.
 * @param tick The current simulation tick (0 to 35039 for a year).
 * @returns The probability of an EV arriving at a specific charger during this 15-min interval.
 */
export const getArrivalProbabilityForTick = (tick: number): number => {
  const ticksPerDay = 24 * 4; // 96 ticks per day
  const currentTickInDay = tick % ticksPerDay;
  const hourOfDay = Math.floor(currentTickInDay / 4); // 4 ticks per hour

  const hourlyMatch = parsedArrivalProbabilities.find(p => p.hour === hourOfDay);

  // The provided probability is P(EV arrival at a chargepoint in a given *hour*).
  // We need P(EV arrival at a chargepoint in a given *15-minute tick*).
  // Assuming uniform distribution within the hour, we divide by 4.
  // This interpretation might need refinement based on precise problem statement nuances.
  return hourlyMatch ? hourlyMatch.probability / 4 : 0;
}; 