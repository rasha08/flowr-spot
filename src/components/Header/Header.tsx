import React, { FC } from 'react';
import { useNavigation } from 'react-navi';

import { RoutePaths } from '../../shared/enums/RoutePaths';
import { lazyFn } from '../../shared/utils/lazyFn';
import { HeaderContextProvider } from './context';
import Navigation from './Navigation';
import { HeaderWrapper, Logo } from './styled';

const Header: FC = () => {
  const { navigate } = useNavigation();

  return (
    <HeaderContextProvider>
      <HeaderWrapper>
        <Logo src="/logo.png" alt="logo" onClick={lazyFn(navigate, RoutePaths.Home)} />
        <Navigation />
      </HeaderWrapper>
    </HeaderContextProvider>
  );
};

export default Header;
