import { NextRequest, NextResponse } from 'next/server';
import { runSimulation, SimulationConfig } from '@reonic/simulation-core';
import prisma from '../lib/db'; // Import the Prisma client instance

// console.log("DATABASE_URL in API route:", process.env.DATABASE_URL); // Temporarily commented out

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      numChargers,
      powerKW, // from request body, maps to chargerPowerKW
      arrivalMultiplier, // from request body, maps to arrivalProbabilityMultiplier
      consumption, // from request body, maps to evConsumptionKWhPer100km
      rngSeed,
      durationDays,
      simulationName // Optional name for the simulation from the body
    } = body;

    if (numChargers === undefined || powerKW === undefined) {
      return NextResponse.json({ message: 'Missing required simulation parameters (numChargers, powerKW)' }, { status: 400 });
    }

    const coreConfig: SimulationConfig = {
      numChargers,
      chargerPowerKW: powerKW,
      arrivalProbabilityMultiplier: arrivalMultiplier ?? 1,
      evConsumptionKWhPer100km: consumption ?? 7.0,
      durationTicks: (durationDays ?? 365) * 24 * 4,
      rngSeed: rngSeed // if undefined, it will be passed as undefined
    };

    const simulationCoreResult = runSimulation(coreConfig);

    // Prepare data for Prisma model
    const simulationDataForDb = {
      name: simulationName || `Simulation ${new Date().toISOString()}`,
      // Config fields
      numChargers: coreConfig.numChargers,
      powerKW: coreConfig.chargerPowerKW, // Storing as powerKW in DB as per schema.prisma
      arrivalMultiplier: coreConfig.arrivalProbabilityMultiplier,
      evConsumption: coreConfig.evConsumptionKWhPer100km,
      durationDays: coreConfig.durationTicks / (24 * 4), // Store original days if preferred, or ticks
      rngSeed: coreConfig.rngSeed,
      // Result fields
      totalEnergyConsumedKWh: simulationCoreResult.totalEnergyConsumedKWh,
      actualMaxPowerDemandKW: simulationCoreResult.actualMaxPowerDemandKW,
      theoreticalMaxPowerKW: simulationCoreResult.theoreticalMaxPowerKW,
      concurrencyFactor: simulationCoreResult.concurrencyFactor,
      // config: coreConfig, // Storing expanded fields instead of a JSON blob for config
      // result: simulationCoreResult // Storing expanded fields instead of a JSON blob for result
    };

    const newSimulation = await prisma.simulation.create({
      data: simulationDataForDb,
    });

    return NextResponse.json({
      message: 'Simulation completed and results stored successfully',
      simulationId: newSimulation.id,
      data: newSimulation, // Return the full simulation object created in DB
    }, { status: 201 });

  } catch (error) {
    console.error('Error running simulation or storing results:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Error in simulation process', error: errorMessage }, { status: 500 });
  }
}

export async function GET() {
  try {
    const simulations = await prisma.simulation.findMany({
      select: { 
        id: true,
        name: true,
        createdAt: true,
        numChargers: true,
        powerKW: true, 
        arrivalMultiplier: true,
        evConsumption: true,
        concurrencyFactor: true,
        actualMaxPowerDemandKW: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(simulations, { status: 200 });
  } catch (error) {
    console.error('Error retrieving simulations:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Error retrieving simulations', error: errorMessage }, { status: 500 });
  }
} 