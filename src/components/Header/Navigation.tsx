import React, { FC, useCallback, useRef } from 'react';

import { RoutePaths } from '../../shared/enums/RoutePaths';
import { lazyFn } from '../../shared/utils/lazyFn';
import { useClickOutside } from '../../shared/utils/useClickOutside';
import { useHeaderContext } from './context';
import MenuButton from './MenuButton';
import { NavLink, NavigationWrapper } from './styled';
import UserMenu from './UserMenu';

type NavItem = {
  label: string;
  link: string;
};
const navItems: NavItem[] = [
  {
    label: 'Flowers',
    link: RoutePaths.Flowers,
  },
  {
    label: 'Latest Sightings',
    link: RoutePaths.Home,
  },
  {
    label: 'Favorites',
    link: RoutePaths.Home,
  },
];

const Navigation: FC = () => {
  const { isMenuOpen, toggleMenu } = useHeaderContext();
  const navRef = useRef(null);
  const close = useCallback(lazyFn(toggleMenu, false), [toggleMenu]);

  useClickOutside(navRef, isMenuOpen, close);

  return (
    <>
      <NavigationWrapper open={isMenuOpen} ref={navRef}>
        {navItems.map(n => (
          <NavLink key={n.label} href={n.link} onClick={close}>
            {n.label}
          </NavLink>
        ))}
        <UserMenu />
      </NavigationWrapper>
      <MenuButton />
    </>
  );
};

export default Navigation;
