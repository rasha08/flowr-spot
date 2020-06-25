import styled from 'styled-components';

export const CardWrapper = styled.div<{ image: string }>`
  display: grid;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  position: relative;
  height: 350px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 250px;
  }
`;

export const CardMask = styled.div<{ inner?: boolean }>`
  display: grid;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, ${({ inner }) => (inner ? 0.5 : 0.00001)}) ${({ inner }) => (inner ? '0%' : '70%')},
    rgba(0, 0, 0, 0.5) 89.5%
  );
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const CardInfo = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 35%;
  padding-bottom: 1rem;
  justify-items: center;
  align-items: baseline;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 45%;
  }
`;

export const CardTitle = styled.h2`
  size: ${({ theme }) => theme.fonts.size.normal};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0;
`;
export const CardSubTitle = styled.h4`
  size: ${({ theme }) => theme.fonts.size.normal};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0;
  margin: -8% 0 0;
`;
export const CardFooter = styled.h5`
  size: ${({ theme }) => theme.fonts.size.normal};
  color: ${({ theme }) => theme.colors.textPrimary};
  max-height: ${({ theme }) => theme.fonts.size.normal};
  margin: 1rem 0 0;
`;

export const CardStar = styled.div`
  padding: 0.3rem 0.5rem;
  font-size: ${({ theme }) => theme.fonts.size.normal};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.disabled};
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: ${({ theme }) => theme.fonts.size.extraLarge};
`;
