/**
 * ESLint severity levels.
 *
 * These constants can be used in ESLint configs instead of numeric literals,
 * making rules easier to read and maintain.
 */
export const OFF = 0 as const;
/** Rule is enabled, but violations will only produce warnings (yellow). */
export const WARN = 1 as const;
/** Rule is enabled, and violations will produce errors (red, fail CI). */
export const ERROR = 2 as const;

/**
 * Union type representing all possible ESLint severity levels.
 */
export type ESLintSeverity = typeof OFF | typeof WARN | typeof ERROR;
