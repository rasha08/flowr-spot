import React, { FC, InputHTMLAttributes } from 'react';

import { InputField, InputFieldError, InputLabel, InputWrapper } from './styled';

type InputProps = {
  label?: string;
  name?: string;
  error?: string | null;
  readonly?: boolean;
};

const Input: FC<InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  label,
  name,
  error,
  readonly = false,
  ...props
}) => {
  return (
    <InputWrapper hasError={!!error} readonly={readonly}>
      {label && (
        <InputLabel htmlFor={name} readonly={readonly}>
          {label}
        </InputLabel>
      )}
      <InputField {...props} id={name} readonly={readonly} disabled={props.disabled || readonly} />
      {error && <InputFieldError>{error}</InputFieldError>}
    </InputWrapper>
  );
};

export default Input;
