import styled from 'styled-components';

export const UserModalWrapper = styled.div`
  display: grid;
  font-family: ${({ theme }) => theme.fonts.family.secondary};

  & > button {
    width: 50vw;
    max-width: 20rem;
    justify-self: center;
  }
`;
export const UserModalHeader = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  margin-top: 2rem;
  padding-left: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 0;
  }

  & > img {
    justify-self: right;
    margin-right: 75px;
  }

  & > div {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    justify-items: left;
  }
`;

export const UserFullName = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.extraLarge};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const UserInfoWrapper = styled.div`
  display: grid;
  padding: 3rem 0 2rem 5rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 0 2rem 0rem;
  }
`;
