export const storeInLocalStorage = <T>(key: string, item: T): void => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getValueForKeyInLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);

  try {
    return !!item ? (JSON.parse(item) as T) : null;
  } catch (e) {
    return null;
  }
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};
