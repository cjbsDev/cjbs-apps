import React from 'react';
import styles from './Btn.module.scss';
import MyIcon from '@public/fonts/icon';
import Button from '@mui/material/Button';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  label?: string;
  className?: string;
  disabled?: boolean;
  startIcon?: boolean;
  startIconName?: string;
  startIconSize?: number;
  endIcon?: boolean;
  endIconName?: string;
  endIconSize?: number;
  backgroundColor?: string;
  loading?: boolean;
  onClick?: (event: any) => void;
  type?: 'submit';
  fullWidth?: boolean;
  sx?: Array<object> | object;
}

export const Btn = (
  {
    label = 'button',
    variant = 'contained',
    disabled = false,
    color = 'primary',
    size = 'medium',
    className,
    startIcon,
    startIconName = 'plus',
    startIconSize = 14,
    endIcon,
    endIconName = 'plus',
    endIconSize = 14,
    backgroundColor,
    onClick,
    loading = false,
    sx,
    ...props
  }: ButtonProps) => {
  return (
    <>
      <Button
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${loading ? styles.btnloading : ''}`}
        style={{backgroundColor}}
        color={color}
        size={size}
        startIcon={startIcon ? <MyIcon icon={startIconName} size={startIconSize} /> : null}
        endIcon={endIcon ? <MyIcon icon={endIconName} size={endIconSize} /> : null}
        sx={sx}
        {...props}
      >
        {label}
      </Button>
    </>
  );
};
