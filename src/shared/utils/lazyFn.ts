export const lazyFn = (fn: Function, ...params: unknown[]) => () => fn(...params);
