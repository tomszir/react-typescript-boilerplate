import React from 'react';
import styled from 'styled-components';

export interface InputProps {
  label?: string;

  placeholder?: string;

  validationMessages?: {
    empty?: string;
    invalid?: string;
  };

  onFocus?: () => void;
  onChange?: (value: string) => void;
}

const SInput = styled.input`
  outline: none;

  padding: 6px 8px;

  border-radius: 4px;
  border: 1px solid #aeaeae;
  background-color: #beb7b7;

  font-size: 14px;
  font-family: 'Arial', sans-serif;

  transition: border-color 0.15s ease;

  &:focus {
    border-color: #5cdae6;
  }
`;

const Input: React.FC<InputProps> = ({ onChange }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value as string);
    }
  };

  return <SInput onChange={onInputChange} />;
};

export default Input;
