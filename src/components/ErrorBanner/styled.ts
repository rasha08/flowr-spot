import styled from 'styled-components';

export const ErrorBannerWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const ErrorBannerText = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.extraLarge};
  color: ${({ theme }) => theme.colors.danger};
  text-align: center;
`;
