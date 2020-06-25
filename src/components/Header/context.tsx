import React, { FC, createContext, useCallback, useContext, useState } from 'react';

type HeaderContext = {
  toggleMenu: (status: boolean) => void;
  isMenuOpen: boolean;
};

const HeaderContext = createContext<HeaderContext>({ toggleMenu: () => {}, isMenuOpen: false });

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderContextProvider: FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback((status: boolean) => setIsMenuOpen(status), [setIsMenuOpen]);

  return <HeaderContext.Provider value={{ isMenuOpen, toggleMenu }}>{children}</HeaderContext.Provider>;
};
