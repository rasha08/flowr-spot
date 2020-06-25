import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from '../../store';
import { Flower } from '../../store/flowers/types';
import { UserState } from '../../store/users/types';
import { CardFooter, CardInfo, CardMask, CardStar, CardSubTitle, CardTitle, CardWrapper } from './styled';

const Card: FC<Flower> = ({ profile_picture, name, latin_name, sightings }) => {
  const { authenticated } = useSelector<StoreState, UserState>(s => s.user);
  return (
    <CardWrapper image={profile_picture}>
      <CardMask inner={true}>
        {authenticated && <CardStar>☆</CardStar>}
        <CardInfo>
          <CardTitle>{name}</CardTitle>
          <CardSubTitle>{latin_name}</CardSubTitle>
          <CardFooter>{sightings} sightings</CardFooter>
        </CardInfo>
      </CardMask>
      <CardMask />
    </CardWrapper>
  );
};

export default memo(Card, () => true);
