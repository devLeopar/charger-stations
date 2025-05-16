"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeededRandom = void 0;
/**
 * Creates a seeded random number generator.
 * Uses a simple Linear Congruential Generator (LCG) algorithm.
 * @param seed The initial seed value.
 * @returns A function that generates pseudo-random numbers between 0 (inclusive) and 1 (exclusive).
 */
const createSeededRandom = (seed) => {
    // LCG parameters (chosen for simplicity, not cryptographic strength)
    const a = 1664525;
    const c = 1013904223;
    const m = 2 ** 32; // 2^32
    let currentSeed = seed;
    return () => {
        currentSeed = (a * currentSeed + c) % m;
        return currentSeed / m;
    };
};
exports.createSeededRandom = createSeededRandom;
