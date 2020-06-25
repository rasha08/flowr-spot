import styled, { createGlobalStyle } from 'styled-components';

import { AppTheme } from './store/theme/types';

export const GlobalStyle = createGlobalStyle<{ theme: AppTheme }>`
  body {
  font-family: '${({ theme }) => theme.fonts.family.primary}';
  font-size: ${({ theme }) => theme.fonts.size.base};
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.textSecondary};
  display: grid;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;


  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: calc( ${({ theme }) => theme.fonts.size.base} - 5%);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: calc(${({ theme }) => theme.fonts.size.base} - 20%);
  }
  }
`;

export const Content = styled.div`
  display: grid;
  height: calc(100vh - 4rem);
  padding: 2rem 1rem;
  align-items: baseline;
`;
