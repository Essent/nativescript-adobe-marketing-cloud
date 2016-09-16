/**
 * iOS and Android apis should match.
 * It doesn't matter if you export `.ios` or `.android`, either one but only one.
 */
export * from "./testplugin.ios";

// Export any shared classes, constants, etc.
export * from "./testplugin.common";