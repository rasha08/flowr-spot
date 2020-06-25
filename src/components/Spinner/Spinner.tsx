import { range } from 'ramda';
import React, { memo } from 'react';

import { SpinnerContainer, SpinnerWrapper } from './styled';

const spinnerDots = range(0, 8);

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerWrapper>
        {spinnerDots.map(d => (
          <div key={d} />
        ))}
      </SpinnerWrapper>
    </SpinnerContainer>
  );
};

export default memo(Spinner, () => true);
