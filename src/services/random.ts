/**
 * Generate a random ID.
 */
export const randomId = (): string => Math.random().toString(36).slice(2, 8);
