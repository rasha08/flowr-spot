import React, { memo, useCallback } from 'react';

import { useHeaderContext } from './context';
import { MenuButtonBar, MenuButtonContainer, MenuButtonWrapper } from './styled';

const MenuButton = () => {
  const { toggleMenu } = useHeaderContext();
  const onClick = useCallback(() => toggleMenu(true), [toggleMenu]);

  return (
    <MenuButtonWrapper>
      <MenuButtonContainer onClick={onClick}>
        <MenuButtonBar />
        <MenuButtonBar />
        <MenuButtonBar />
      </MenuButtonContainer>
    </MenuButtonWrapper>
  );
};

export default memo(MenuButton, () => true);
