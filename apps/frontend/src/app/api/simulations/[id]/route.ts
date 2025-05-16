import { NextRequest, NextResponse } from 'next/server';
import { getSimulationByIdFromStore } from '../../lib/store'; // Corrected path

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ message: 'Simulation ID is required' }, { status: 400 });
    }

    const simulation = getSimulationByIdFromStore(id);

    if (!simulation) {
      return NextResponse.json({ message: 'Simulation not found' }, { status: 404 });
    }

    return NextResponse.json(simulation, { status: 200 });

  } catch (error) {
    console.error(`Error retrieving simulation ${params?.id}:`, error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Error retrieving simulation', error: errorMessage }, { status: 500 });
  }
} 