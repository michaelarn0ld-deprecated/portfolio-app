import React from 'react';
import './Button.css';

const styles = ['button--primary', 'button--outline'];

const sizes = ['button--medium', 'button--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];
  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];
  return (
    <button
      className={`button ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
