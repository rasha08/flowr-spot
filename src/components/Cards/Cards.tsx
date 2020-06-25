import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from '../../store';
import { FlowersState } from '../../store/flowers/types';
import Card from '../Card/Card';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import Spinner from '../Spinner/Spinner';
import { CardsWrapper } from './styled';

const Cards = () => {
  const { flowers, error, loading }: FlowersState = useSelector<StoreState, FlowersState>(s => s.flowers);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorBanner error={error} />;
  }

  return (
    <CardsWrapper>
      {flowers.map(flower => (
        <Card {...flower} key={flower.id} />
      ))}
    </CardsWrapper>
  );
};

export default memo(Cards, () => true);
