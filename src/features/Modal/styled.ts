import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 80%;
  max-width: 750px;
  min-height: 20vh;
  z-index: 9;
  display: grid;
  padding: 2rem 3rem 3rem;
  grid-gap: 1rem;
  align-content: center;
  position: relative;

  button {
    height: 4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 90vh;
    transform: translateY(5vh);
  }
`;

export const ModalTitle = styled.h2`
  display: grid;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.size.extraLarge};
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
  align-self: center;
`;

export const ModalError = styled(ModalTitle)`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fonts.size.normal};
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 1rem;
    content: ' ';
    height: 2rem;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.textSecondary};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
