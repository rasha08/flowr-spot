import { flatten, map } from 'ramda';

export type Watchers = Function | Function[];

export const combineWatchers = (...args: Watchers[]): Generator[] => {
  return map((watcher: Function) => {
    try {
      return watcher();
    } catch (e) {
      const error = new Error('It seems that a watcher is not a function.');
      error.stack = e.stack;

      throw error;
    }
  }, flatten<Watchers[]>(args));
};
