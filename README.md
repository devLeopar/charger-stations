# Reonic EV Charging Simulator

Reonic EV Charging Simulator is a web application designed to model and analyze electric vehicle (EV) charging demand. It allows users to configure simulation parameters, run discrete-event simulations, and visualize results to understand power requirements, charger utilization, and overall energy consumption patterns for EV charging infrastructure.

The project consists of a core simulation engine built with TypeScript and a Next.js frontend application for user interaction, data visualization, and simulation management, backed by a PostgreSQL database.

## Features

**Simulation Core (`packages/simulation-core`):**
*   **Discrete-Event Simulation:** Simulates EV arrivals and charging processes over time (default 30 days, 15-minute ticks).
*   **Configurable Parameters:**
    *   Number of chargers
    *   Power per charger (kW)
    *   EV arrival probability multiplier
    *   Average EV energy consumption (kWh/100km)
    *   Simulation duration (days)
    *   Optional RNG seed for reproducible results
*   **Probabilistic EV Arrivals:** Uses predefined hourly probability distributions for EV arrivals.
*   **Charging Demand Calculation:** Simulates charging based on EV needs and charger availability.
*   **Result Metrics:**
    *   Total energy consumed (kWh)
    *   Actual maximum power demand (kW)
    *   Theoretical maximum power demand (kW)
    *   Concurrency factor (%)
    *   Detailed power demand per tick (kW)
    *   Charger activity log (status, power draw, EV ID per charger per tick)
*   **CLI Interface:** Allows running simulations directly from the command line.
*   **Concurrency Curve Data:** Can generate data showing maximum power demand for 1 to 30 chargers.

**Frontend Application (`apps/frontend`):**
*   **Web-Based UI:** User-friendly interface built with Next.js (App Router), React, and Tailwind CSS.
*   **Simulation Configuration & Execution:** Form to input parameters and trigger new simulations via an API.
*   **Simulations List:** View a history of past simulations with key details.
*   **Detailed Simulation View:**
    *   Display of all configuration parameters and primary result metrics.
    *   Chart: Power demand over the first day of the simulation.
    *   Table: Charger activity details for an excerpt of an active period.
*   **Dashboard:**
    *   Overview of the latest simulation.
    *   Chart: Concurrency (total power demand) over the first 24 hours.
    *   Card: Key highlights from the latest simulation.
*   **API Backend:**
    *   Endpoints to create, list, retrieve, and delete simulations.
    *   Stores simulation configurations and results in a PostgreSQL database using Prisma ORM.
*   **Redirects:** Root path (`/`) redirects to `/dashboard`.
*   **User-Centric About Page:** Explains the purpose and benefits of the application.

## Project Structure

This project is a monorepo managed potentially with npm workspaces (or similar, like Turborepo, though not explicitly stated as a setup requirement, the structure implies it).

*   `apps/frontend/`: Contains the Next.js frontend application, including API routes and Prisma schema/client.
*   `packages/simulation-core/`: Contains the TypeScript-based simulation engine and its CLI.
*   `docker-compose.yml`: Defines the PostgreSQL database service.
*   `README.md`: This file.

## Tech Stack

*   **Simulation Core:** TypeScript
*   **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS
*   **Charting Library:** Recharts
*   **Backend/Database:**
    *   PostgreSQL (managed via Docker)
    *   Prisma (ORM for database interaction)
*   **Build/Development Tools:**
    *   `ts-node` (for running TypeScript CLI)
    *   ESLint (for linting)

## Development Process

This project was developed with a structured approach:

*   **Initial Planning & Roadmap:** The overall structure, features, and development phases were outlined using a detailed project planning methodology (conceptually referred to by the user as similar to "Roadmap 4o").
*   **Collaborative Implementation:** The code implementation was carried out in a pair-programming style, with active collaboration and assistance from the AI model Gemini 2.5. This involved iterative development, debugging, and refinement of both the simulation core and the frontend application.

## Prerequisites

*   **Node.js:** Version 18.x or 20.x recommended.
*   **npm:** Version 8.x or higher (comes with Node.js).
*   **Docker:** Latest stable version.
*   **Docker Compose:** Latest stable version (usually included with Docker Desktop).

## Setup and Installation

1.  **Clone the Repository:**
    ```bash
    git clone <repository_url>
    cd reonic-takehome 
    ```

2.  **Install Root Dependencies:**
    This will install dependencies for all workspaces (simulation-core and frontend).
    ```bash
    npm install
    ```

3.  **Environment Variables (Frontend):**
    The frontend application requires a database connection string.
    *   Navigate to the frontend app directory: `cd apps/frontend`
    *   Create a `.env` file by copying the example: `cp .env.example .env` (Assuming `.env.example` exists or you create it with `DATABASE_URL="postgresql://user:password@localhost:5432/reonicsim?schema=public"`)
    *   Edit `apps/frontend/.env` and set your `DATABASE_URL`. The default for the `docker-compose.yml` setup is:
        ```env
        DATABASE_URL="postgresql://reonic_user:reonic_password@localhost:5432/reonic_db?schema=public"
        ```
    *   Navigate back to the project root: `cd ../..`

4.  **Database Setup:**
    *   **Start PostgreSQL Container:** From the project root directory:
        ```bash
        docker-compose up -d
        ```
        This will start a PostgreSQL server in the background, listening on port 5432. The database `reonic_db`, user `reonic_user`, and password `reonic_password` will be created as defined in `docker-compose.yml`.

    *   **Run Prisma Migrations:**
        This command needs to be run from the project root to apply the database schema defined in `apps/frontend/prisma/schema.prisma`.
        ```bash
        npm run -w @reonic/frontend prisma:migrate:dev 
        ```
        (The `-w` flag is short for `--workspace`. If your npm version doesn't support it directly for `npm run`, you might need to `cd apps/frontend` and run `npm run prisma:migrate:dev` from there, or use `npx prisma migrate dev --schema=./prisma/schema.prisma` after `cd apps/frontend`.)
        Confirm the script name `prisma:migrate:dev` in `apps/frontend/package.json`.

## Running the Application

1.  **Build the Simulation Core:**
    The frontend imports types and functions from the simulation core. Ensure it's built first.
    ```bash
    npm run build --workspace=@reonic/simulation-core
    # or
    npm run -w @reonic/simulation-core build
    ```

2.  **Start the Next.js Frontend Development Server:**
    ```bash
    npm run dev --workspace=@reonic/frontend
    # or
    npm run -w @reonic/frontend dev
    ```

3.  **Access the Application:**
    Open your browser and navigate to: `http://localhost:3000`
    You should be redirected to the dashboard.

## Using the Simulation Core CLI

You can run simulations directly from the command line without using the web interface. This is useful for batch processing or quick tests.

*   **Navigate to the simulation core package (optional, `ts-node` can resolve paths):**
    While not strictly necessary if paths are correctly resolved, you can run it from the package directory or root.
*   **Execute the CLI script:**
    From the project root:
    ```bash
    npx ts-node packages/simulation-core/src/cli.ts --numChargers 10 --powerKW 50 --arrivalMultiplier 1.0 --evConsumption 18
    ```
    Or, if inside `packages/simulation-core`:
    ```bash
    npx ts-node src/cli.ts --numChargers 10 --powerKW 50
    ```
*   **Available CLI Arguments:**
    *   `--numChargers` (number, required): Number of chargers.
    *   `--powerKW` (number, required): Power per charger in kW.
    *   `--arrivalMultiplier` (number, optional, default: 1.0): Multiplier for EV arrival probability.
    *   `--evConsumption` (number, optional, default: 20): Average EV energy consumption in kWh/100km.
    *   `--durationDays` (number, optional, default: 30): Simulation duration in days.
    *   `--seed` (string, optional): RNG seed for reproducible results.
    *   `--concurrencyCurve` (boolean, optional): If true, runs simulations for 1 to 30 chargers and outputs max power demand for each.
    *   `--outputFile` (string, optional): Path to save simulation results as JSON.

## API Endpoints

The frontend application interacts with a backend API (implemented as Next.js API Routes):

*   **`POST /api/simulations`**:
    *   Creates a new simulation.
    *   Expects a JSON body with simulation parameters (`numChargers`, `chargerPowerKW`, `arrivalMultiplier`, `evConsumptionKWhPer100km`, `simulationName`, `durationDays`, `rngSeed`).
    *   Runs the simulation using `@reonic/simulation-core`.
    *   Saves the configuration and results to the database.
    *   Returns the created simulation data.
*   **`GET /api/simulations`**:
    *   Fetches a list of all simulations (summary view).
    *   Returns an array of simulation objects.
*   **`GET /api/simulations/[id]`**:
    *   Fetches detailed information for a single simulation by its ID.
    *   Returns the complete simulation data, including `concurrencyTimelineData` and `chargerActivityData`.
*   **`DELETE /api/simulations/[id]`**:
    *   Deletes a simulation by its ID.
    *   Returns a success message or error.

## Development Notes & Potential Improvements

*   **Error Handling:** While basic error handling is in place, it could be made more robust across the frontend and API.
*   **Loading States:** More granular loading indicators could be used on the frontend for a smoother UX.
*   **Input Validation:** API input validation could be enhanced (e.g., using Zod or similar).
*   **Testing:** No automated tests were implemented in this phase. Adding unit tests for the simulation core and integration/component tests for the frontend would be beneficial.
*   **Scalability:** For very large numbers of simulations or much longer durations, performance optimizations might be needed in the simulation core or data handling.
*   **Dark Mode:** Basic dark mode support is present via Tailwind CSS, could be refined.
*   **Prisma Client Output:** The Prisma client is generated into `apps/frontend/src/generated/prisma-client`. Ensure this path is correctly handled by build processes and version control (it's gitignored as it's generated). 