import styled from 'styled-components';

import { ButtonWrapper } from '../Botton/styled';

export const AlertWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
`;

export const AlertButton = styled(ButtonWrapper)`
  max-width: 270px;
  width: 30vw;
  font-size: ${({ theme }) => theme.fonts.size.large};
`;

export const AlertButtonGroup = styled.div<{ split: boolean }>`
  display: grid;
  grid-template-columns: ${({ split }) => (split ? '1fr 1fr' : '1fr')};
  grid-column-gap: 3rem;
`;
export const AlertText = styled.h4`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.large};
`;
