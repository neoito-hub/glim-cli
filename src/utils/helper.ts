/**
 * Helper function to create a delay
 * @param ms
 * @returns never
 */
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
export { sleep };
