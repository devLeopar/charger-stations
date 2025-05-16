/**
 * Represents a single 15-minute interval in the simulation.
 */
export type Tick = number;
/**
 * Represents an Electric Vehicle (EV).
 */
export interface EV {
    id: string;
    arrivalTick: Tick;
    chargingDemandKWh: number;
    assignedChargerId?: string;
    startChargingTick?: Tick;
    estimatedChargeDurationTicks: number;
    departureTick?: Tick;
}
/**
 * Represents a single charging station.
 */
export interface Charger {
    id: string;
    powerKW: number;
    isAvailable: boolean;
    currentEVId?: string;
    occupiedUntilTick?: Tick;
}
/**
 * Configuration for a simulation run.
 */
export interface SimulationConfig {
    numChargers: number;
    chargerPowerKW: number;
    evConsumptionKWhPer100km: number;
    arrivalProbabilityMultiplier: number;
    durationTicks: number;
    rngSeed?: number;
}
/**
 * Results of a simulation run.
 */
export interface SimulationResult {
    config: SimulationConfig;
    totalEnergyConsumedKWh: number;
    theoreticalMaxPowerKW: number;
    actualMaxPowerDemandKW: number;
    concurrencyFactor: number;
    powerDemandPerTickKW: Record<Tick, number>;
    totalChargingEvents: number;
}
/**
 * Structure for T1: Arrival probabilities data.
 * Key: Time range string (e.g., "00:00 - 01:00")
 * Value: Probability (e.g., 0.0094 for 0.94%)
 */
export type ArrivalProbabilityData = Record<string, number>;
/**
 * Structure for T2: Charging demand probabilities data.
 * Key: Demand description string (e.g., "5.0 km" or "None (doesn't charge)")
 * Value: Probability (e.g., 0.0490 for 4.90%)
 */
export type ChargingDemandData = Record<string, number>;
/**
 * Parsed hourly arrival probability.
 * Key: Hour of the day (0-23)
 * Value: Probability for an EV to arrive in any 15-min slot of that hour, at one specific charger.
 * Note: The PDF gives P(arrival at a chargepoint). If we have N chargers,
 * this might need adjustment in the simulation logic (e.g. P(arrival at *any* chargepoint) vs P(arrival at *a specific* chargepoint)).
 * For now, this type represents the direct data from T1, to be interpreted by the simulation logic.
 */
export interface HourlyArrivalProbability {
    hour: number;
    probability: number;
}
/**
 * Parsed charging demand.
 */
export interface ChargingDemand {
    demandKm?: number;
    probability: number;
}
