/**
 * Creates a seeded random number generator.
 * Uses a simple Linear Congruential Generator (LCG) algorithm.
 * @param seed The initial seed value.
 * @returns A function that generates pseudo-random numbers between 0 (inclusive) and 1 (exclusive).
 */
export declare const createSeededRandom: (seed: number) => () => number;
