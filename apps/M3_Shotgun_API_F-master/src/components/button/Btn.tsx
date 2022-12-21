import React from "react";
import MyIcon from "@public/fonts/icon";
import Button from "@mui/material/Button";
import {buttonStyles} from "./ButtonStyles";

interface ButtonProps {
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large" | "xlarge";
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
  onClick?: () => void;
}

export const Btn = ({
                      label = "button",
                      variant = "contained",
                      disabled = false,
                      color = "primary",
                      size = "medium",
                      className,
                      startIcon,
                      startIconName = "plus",
                      startIconSize = 14,
                      endIcon,
                      endIconName = "plus",
                      endIconSize = 14,
                      backgroundColor,
                      onClick,
                      loading = false,
                      ...props
                    }: ButtonProps) => {
  const tw = buttonStyles();
  return (
    <>
      <Button
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        color={color}
        className={`${loading ? tw.btnloading : ""} ${className}`}
        style={{backgroundColor}}
        size={size}
        startIcon={
          startIcon ? (
            <MyIcon icon={startIconName} size={startIconSize}/>
          ) : null
        }
        endIcon={
          endIcon ? <MyIcon icon={endIconName} size={endIconSize}/> : null
        }
        {...props}
      >
        {label}
      </Button>
    </>
  );
};
