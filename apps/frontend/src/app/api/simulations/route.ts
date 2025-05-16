import { NextRequest, NextResponse } from 'next/server';
import { runSimulation, SimulationConfig } from '@reonic/simulation-core';
import { StoredSimulation, addSimulationToStore, getSimulationsFromStore } from '../lib/store';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      numChargers,
      powerKW,
      arrivalMultiplier,
      consumption,
      rngSeed,
      durationDays,
      simulationName
    } = body;

    if (numChargers === undefined || powerKW === undefined) {
      return NextResponse.json({ message: 'Missing required simulation parameters (numChargers, powerKW)' }, { status: 400 });
    }

    const config: SimulationConfig = {
      numChargers,
      chargerPowerKW: powerKW,
      arrivalProbabilityMultiplier: arrivalMultiplier ?? 1,
      evConsumptionKWhPer100km: consumption ?? 7.0,
      durationTicks: (durationDays ?? 365) * 24 * 4,
      rngSeed: rngSeed,
    };

    // Add a small delay to simulate processing time, remove in production
    // await new Promise(resolve => setTimeout(resolve, 1000));

    const simulationResult = runSimulation(config);

    const newStoredSimulation: StoredSimulation = {
      id: `sim_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      name: simulationName || `Simulation ${new Date(Date.now()).toLocaleString()}`,
      config,
      result: simulationResult,
      createdAt: new Date().toISOString(),
    };

    addSimulationToStore(newStoredSimulation);

    return NextResponse.json({
      message: 'Simulation completed successfully',
      simulationId: newStoredSimulation.id,
      data: newStoredSimulation,
    }, { status: 201 });

  } catch (error) {
    console.error('Error running simulation:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Error running simulation', error: errorMessage }, { status: 500 });
  }
}

// Basic GET handler to retrieve all simulations (for now)
export async function GET() {
  try {
    const summary = getSimulationsFromStore();
    return NextResponse.json(summary, { status: 200 });
  } catch (error) {
    console.error('Error retrieving simulations:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Error retrieving simulations', error: errorMessage }, { status: 500 });
  }
} 