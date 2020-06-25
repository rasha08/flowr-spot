import React, { FC } from 'react';

import { AvatarImage } from './styled';

type AvatarProps = {
  imageSrc: string;
  size?: number;
};

const Avatar: FC<AvatarProps> = ({ imageSrc, size = 1 }) => {
  return <AvatarImage src={imageSrc} alt={'avatar'} scale={size} />;
};

export default Avatar;
