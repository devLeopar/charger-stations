import { SimulationConfig, runSimulation } from "@reonic/simulation-core";

export interface StoredSimulation {
  id: string;
  name: string;
  config: SimulationConfig;
  result: ReturnType<typeof runSimulation>;
  createdAt: string;
}

// In-memory store
// In a real application, this would be a database connection and query layer.
export const simulationsStore: StoredSimulation[] = [];

export const addSimulationToStore = (simulation: StoredSimulation) => {
  simulationsStore.push(simulation);
};

export const getSimulationsFromStore = () => {
  return simulationsStore.map(sim => ({
    id: sim.id,
    name: sim.name,
    createdAt: sim.createdAt,
    numChargers: sim.config.numChargers,
    powerKW: sim.config.chargerPowerKW,
    concurrencyFactor: sim.result.concurrencyFactor,
    actualMaxPowerDemandKW: sim.result.actualMaxPowerDemandKW,
  }));
};

export const getSimulationByIdFromStore = (id: string): StoredSimulation | undefined => {
  return simulationsStore.find(sim => sim.id === id);
}; 