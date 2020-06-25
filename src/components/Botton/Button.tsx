import React, { ButtonHTMLAttributes, FC } from 'react';

import { ButtonWrapper } from './styled';
import { ButtonProps } from './types';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps> = props => {
  return <ButtonWrapper {...props} />;
};

export default Button;
