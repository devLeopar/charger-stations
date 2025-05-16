import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/db'; // Import the Prisma client instance

interface RouteContext {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ message: 'Simulation ID is required' }, { status: 400 });
    }

    const simulation = await prisma.simulation.findUnique({
      where: { id },
    });

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

// Optional: DELETE handler
export async function DELETE(req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ message: 'Simulation ID is required' }, { status: 400 });
    }

    // Check if simulation exists before trying to delete (optional, delete itself will fail if not found)
    const existingSimulation = await prisma.simulation.findUnique({
      where: { id },
    });

    if (!existingSimulation) {
      return NextResponse.json({ message: 'Simulation not found' }, { status: 404 });
    }

    await prisma.simulation.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Simulation deleted successfully' }, { status: 200 }); // Or 204 No Content

  } catch (error) {
    console.error(`Error deleting simulation ${params?.id}:`, error);
    let errorMessage = 'An unexpected error occurred.';
    // Handle Prisma specific error for record not found during delete, if not checked before
    // if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
    //   return NextResponse.json({ message: 'Simulation to delete not found' }, { status: 404 });
    // }
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Error deleting simulation', error: errorMessage }, { status: 500 });
  }
} 