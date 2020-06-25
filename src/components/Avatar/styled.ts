import styled from 'styled-components';

export const AvatarImage = styled.img<{ scale: number }>`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: scale(${({ scale }) => scale});
`;
