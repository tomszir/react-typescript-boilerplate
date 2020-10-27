import React from 'react';

export interface ButtonProps {
  /**
   * The label text of the button.
   */
  label: string;

  /**
   * What size should the button be?
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * What kind of styling should the button have?
   */
  theme?: 'default' | 'rounded';

  /**
   * Optional button click callback
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  theme = 'default',
  ...props
}) => {
  return <button {...props}>{label}</button>;
};

export default Button;
