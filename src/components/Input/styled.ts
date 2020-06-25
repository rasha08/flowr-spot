import styled from 'styled-components';

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 0;
  grid-column-gap: 0.5rem;
  max-width: 100%;
`;

export const InputWrapper = styled.div<{ hasError: boolean; readonly: boolean }>`
  display: grid;
  background-color: ${({ theme, readonly }) => (readonly ? 'transparent' : theme.colors.disabled)};
  padding: 0.3rem;
  grid-template-rows: ${({ hasError }) => (hasError ? '0.5fr 1fr 0.5fr' : '0.5fr 1fr')};
  border: 2px solid
    ${({ hasError, readonly }) => (readonly ? 'transparent' : hasError ? 'rgba(255, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)')};
  max-width: 100%;
`;
export const InputLabel = styled.label<{ readonly: boolean }>`
  color: ${({ theme, readonly }) => (readonly ? theme.colors.textSecondary : theme.colors.secondary)};
  font-size: ${({ theme, readonly }) => (readonly ? theme.fonts.size.normal : theme.fonts.size.small)};
  padding: 0 0.4rem 0.4rem;
`;

export const InputField = styled.input<{ readonly: boolean }>`
  border: none;
  outline: none;
  padding: 0 0.4rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme, readonly }) => (readonly ? theme.fonts.size.extraLarge : theme.fonts.size.normal)};
  background-color: ${({ theme, readonly }) => (readonly ? 'transparent' : theme.colors.disabled)};
  font-weight: 900;
  width: 90%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const InputFieldError = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.extraSmall};
  padding: 0 0.4rem;
  color: ${({ theme }) => theme.colors.danger};
`;
