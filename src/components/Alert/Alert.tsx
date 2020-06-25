import React, { FC } from 'react';

import { AlertButton, AlertButtonGroup, AlertText, AlertWrapper } from './styled';

type AlertProps = {
  message: string;
  label: string;
  action: () => void;
  secondaryLabel?: string;
  secondaryAction?: () => void;
};

const Alert: FC<AlertProps> = ({ message, action, label, secondaryAction = () => {}, secondaryLabel }) => {
  return (
    <AlertWrapper>
      <AlertText>{message}</AlertText>
      <AlertButtonGroup split={!!secondaryLabel}>
        <AlertButton variant={'primary'} onClick={action}>
          {label}
        </AlertButton>
        {!!secondaryLabel && (
          <AlertButton variant={'outline'} onClick={secondaryAction}>
            {secondaryLabel}
          </AlertButton>
        )}
      </AlertButtonGroup>
    </AlertWrapper>
  );
};

export default Alert;
