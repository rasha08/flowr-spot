import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  grid-gap: 1rem;
  justify-content: center;
  align-items: start;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(auto-fit, 30vw);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
