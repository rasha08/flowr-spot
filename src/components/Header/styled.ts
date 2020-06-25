import { Link } from 'react-navi';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 4rem;
  align-items: center;
  justify-content: start;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Logo = styled.img`
  margin-left: 1rem;
`;

export const NavigationWrapper = styled.div<{ open: boolean }>`
  align-items: center;
  display: grid;
  justify-self: right;
  grid-template-columns: repeat(3, auto) 2fr;
  grid-gap: 2rem;
  font-size: ${({ theme }) => theme.fonts.size.small};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    grid-template-columns: 1fr;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    top: 4rem;
    right: 0;
    display: ${({ open }) => (open ? 'grid' : 'none')};
    justify-items: center;
    padding: 1rem;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
`;

export const UserMenuWrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr auto;
  margin-right: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-right: 0;
  }
`;

export const MenuButtonWrapper = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    align-self: center;
    justify-self: right;
    margin-right: 2rem;
  }
`;

export const MenuButtonContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const MenuButtonBar = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 6px 0;
  transition: 0.4s;
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  align-self: center;
`;
