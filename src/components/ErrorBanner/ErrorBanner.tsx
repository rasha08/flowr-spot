import React, { FC } from 'react';

import { ErrorBannerText, ErrorBannerWrapper } from './styled';

const ErrorBanner: FC<{ error: string | null }> = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <ErrorBannerWrapper>
      <ErrorBannerText>{error}</ErrorBannerText>
    </ErrorBannerWrapper>
  );
};

export default ErrorBanner;
