export const tryCatchAsync = <T, RT>(caller: (...args: T[]) => RT, catcher: (...args: T[]) => T) => async (
  ...args: T[]
) => {
  try {
    return await caller(...args);
  } catch (e) {
    return catcher(e.response);
  }
};
