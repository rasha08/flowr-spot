import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: grid;
  height: 35vh;
  align-items: center;
  justify-items: center;
  background-image: url('/static/images/pl-hero.png');
  background-size: cover;
  grid-template-rows: 1fr 0.7fr 1fr;
  overflow-x: hidden;
  padding: 1rem;
`;

export const BannerTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.size.extraLarge};
  align-self: end;
  margin: 5vh 0 0;
`;

export const BannerSubTitle = styled.h3`
 text-align: center;
 color: ${({ theme }) => theme.colors.secondary};
 font-size: ${({ theme }) => theme.fonts.size.large};
 font-family: '${({ theme }) => theme.fonts.family.secondary}', sans-serif;
 margin: 0;
 padding: 0;
 align-self: baseline;
`;

export const BannerSearchBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  padding: 0.5rem;
  align-self: baseline;
`;

export const BannerSearchBox = styled.input`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  min-width: 15rem;
  width: 30vw;
  max-width: 23rem;
  border: none;
  outline: none;
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const BannerSearchBoxIcon = styled.img`
  display: grid;
  align-self: center;
  justify-self: center;
  cursor: pointer;
`;
