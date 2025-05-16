/**
 * Represents a single 15-minute interval in the simulation.
 */
export type Tick = number;

/**
 * Represents an Electric Vehicle (EV).
 */
export interface EV {
  id: string; // Unique identifier for the EV
  arrivalTick: Tick;
  chargingDemandKWh: number; // Energy needed in kWh
  assignedChargerId?: string; // ID of the charger it's assigned to
  startChargingTick?: Tick; // Tick when charging actually starts
  estimatedChargeDurationTicks: number; // How many ticks it will take to charge
  departureTick?: Tick; // Tick when EV actually leaves (after charging is complete)
}

/**
 * Represents a single charging station.
 */
export interface Charger {
  id: string; // Unique identifier for the charger
  powerKW: number; // Charging power in kW
  isAvailable: boolean;
  currentEVId?: string; // ID of the EV currently using the charger
  occupiedUntilTick?: Tick; // Tick until which the charger is busy
}

/**
 * Configuration for a simulation run.
 */
export interface SimulationConfig {
  numChargers: number;
  chargerPowerKW: number; // Power per charger in kW
  evConsumptionKWhPer100km: number; // e.g., 18 kWh / 100 km
  arrivalProbabilityMultiplier: number; // Percentage (e.g., 1.0 for default, 1.2 for 20% increase)
  durationTicks: number; // Total number of ticks for the simulation (e.g., 35040 for one year)
  rngSeed?: number; // Optional: seed for RNG for deterministic tests (Bonus)
}

/**
 * Information about a charger's activity at a specific tick.
 */
export interface ChargerTickInfo {
  isBusy: boolean;
  powerDrawKW: number;
  evId?: string;
}

/**
 * Log of activity for all chargers over all ticks.
 * Key: Charger ID
 * Value: Object mapping Tick (as string) to ChargerTickInfo
 */
export interface ChargerActivityLog {
  [chargerId: string]: {
    [tick: string]: ChargerTickInfo;
  };
}

/**
 * Results of a simulation run.
 */
export interface SimulationResult {
  config: SimulationConfig;
  totalEnergyConsumedKWh: number;
  theoreticalMaxPowerKW: number;
  actualMaxPowerDemandKW: number;
  concurrencyFactor: number; // actualMaxPowerDemandKW / theoreticalMaxPowerKW
  powerDemandPerTickKW: Record<Tick, number>; // Tracks power demand for each tick
  totalChargingEvents: number;
  chargerActivityLog?: ChargerActivityLog; // Log of each charger's activity per tick
  // Optional: Further breakdown of events or detailed EV logs if needed later
  // evsProcessed: EV[];
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
  hour: number; // 0-23
  probability: number; // 0.0 to 1.0
}

/**
 * Parsed charging demand.
 */
export interface ChargingDemand {
  demandKm?: number; // Range in kilometers; undefined if "None (doesn't charge)"
  probability: number; // 0.0 to 1.0
} 