import styled from 'styled-components';

import { getColorByVariant } from '../../shared/utils/getColorByVariant';
import { ButtonProps } from './types';

export const ButtonWrapper = styled.button<ButtonProps>`
  outline: none;
  border: ${({ variant, color, theme }) =>
    variant === 'outline' ? `1px solid ${color || theme.colors.secondary}` : 'none'};
  padding: 0.6rem 1.5rem;
  background-color: ${({ variant, theme }) => getColorByVariant(variant, theme, true)};
  color: ${({ color, variant, theme }) => (color ? color : getColorByVariant(variant, theme, false))};
  border-radius: ${({ round }) => (round ? '1rem' : 0)};
`;
