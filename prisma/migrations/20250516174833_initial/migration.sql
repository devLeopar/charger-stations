-- CreateTable
CREATE TABLE "Simulation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "numChargers" INTEGER NOT NULL,
    "powerKW" DOUBLE PRECISION NOT NULL,
    "arrivalMultiplier" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "evConsumption" DOUBLE PRECISION NOT NULL DEFAULT 7.0,
    "durationDays" INTEGER NOT NULL DEFAULT 365,
    "rngSeed" INTEGER,
    "totalEnergyConsumedKWh" DOUBLE PRECISION NOT NULL,
    "actualMaxPowerDemandKW" DOUBLE PRECISION NOT NULL,
    "theoreticalMaxPowerKW" DOUBLE PRECISION NOT NULL,
    "concurrencyFactor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Simulation_pkey" PRIMARY KEY ("id")
);
