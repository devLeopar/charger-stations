# Reonic EV Charging Simulation Core (`packages/simulation-core`)

This package contains the core logic for simulating Electric Vehicle (EV) charging at a station over a period of time. It calculates key performance metrics such as total energy consumed, peak power demand, and concurrency factor.

## Features

- Simulates EV arrivals and charging demands based on configurable probabilities.
- Calculates total energy consumption, theoretical maximum power, actual peak power, and concurrency factor.
- Supports configurable number of chargers, charger power, EV consumption rates, and arrival rate multipliers.
- Allows for deterministic simulations using a seeded Random Number Generator (RNG).
- Includes a bonus feature to analyze the concurrency factor curve by varying the number of chargers.

## Installation / Setup

This package is written in TypeScript. To use it, you'll need Node.js.

1.  **Dependencies**: This package has its own `package.json` which includes `@types/node` as a development dependency. If you are working within this package directory (`packages/simulation-core`), ensure dependencies are installed (e.g., via `npm install` or `yarn install` if you manage its dependencies separately).

2.  **Running the Simulation**: You'll need `ts-node` to execute the TypeScript files directly. You can use `npx` to run it without needing a global installation.

    *   **From the project root (`reonic-takehome/`)**: 
        ```bash
        npx ts-node packages/simulation-core/src/index.ts --help
        ```
    *   **From this package directory (`reonic-takehome/packages/simulation-core/`)**:
        ```bash
        npx ts-node src/index.ts --help
        ```

## Usage

The simulation is controlled via command-line arguments passed to `src/index.ts`.

### Basic Simulation Run

*   **From the project root**: 
    ```bash
    npx ts-node packages/simulation-core/src/index.ts
    ```
*   **From `packages/simulation-core/` directory**:
    ```bash
    npx ts-node src/index.ts
    ```
This runs a simulation with default parameters (20 chargers, 11kW each, 1-year duration).

### Command-Line Options

Customize parameters using these options. The path to `src/index.ts` depends on your current directory.

```
Usage: ts-node <path-to-src>/index.ts [options]

Options:
  -n, --numChargers <number>    Number of chargers (default: 20)
  -p, --powerKW <number>        Power per charger in kW (default: 11)
  -m, --arrivalMultiplier <number> Arrival probability multiplier (default: 1.0)
  -c, --consumption <number>    EV consumption in kWh/100km (default: 18)
  -s, --seed <number>           RNG seed for deterministic results (optional)
  -d, --durationDays <number>   Simulation duration in days (default: 365)
  --concurrencyCurve            Run simulation for 1-30 chargers to show concurrency curve.
  -h, --help                    Show this help message.
```

**Example with custom parameters (run from project root):**

```bash
npx ts-node packages/simulation-core/src/index.ts -n 10 -p 22 -m 1.5 -d 90 -s 4242
```

**Example with custom parameters (run from `packages/simulation-core/`):**

```bash
npx ts-node src/index.ts -n 10 -p 22 -m 1.5 -d 90 -s 4242
```

### Output Metrics

-   **Total Energy Consumed (kWh)**: Total energy delivered by all chargers.
-   **Theoretical Max Power Demand (kW)**: `numChargers * chargerPowerKW`.
-   **Actual Max Power Demand (kW)**: Highest observed power demand in any 15-min interval.
-   **Concurrency Factor (%)**: `Actual Max Power Demand / Theoretical Max Power Demand`.
-   **Total Charging Events**: Number of successful charging sessions.

## Bonus Tasks Implemented

### 1. Concurrency Factor Curve

Analyzes how concurrency changes with the number of chargers (1-30).

*   **From the project root**: 
    ```bash
    npx ts-node packages/simulation-core/src/index.ts --concurrencyCurve
    ```
*   **From `packages/simulation-core/` directory**:
    ```bash
    npx ts-node src/index.ts --concurrencyCurve
    ```

Combine with other parameters, e.g. (from project root):
```bash
npx ts-node packages/simulation-core/src/index.ts --concurrencyCurve -p 22 -s 777
```

### 2. Seeded RNG for Deterministic Results

Use `-s` or `--seed` for reproducible results. Essential for testing and accurate comparisons.
If no seed is given, `Math.random()` is used (non-deterministic outcomes).

*   **Example (from project root):**
    ```bash
    npx ts-node packages/simulation-core/src/index.ts -s 12345
    ```

### (Bonus) Impact of DST vs. Mapping Hours

This implementation does not explicitly model Daylight Saving Time (DST). Arrival probabilities are mapped to the hour of the day (0-23) assuming a standard non-leap year.
