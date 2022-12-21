import React from "react";
import MyIcon from "@public/fonts/icon";
import IconButton from "@mui/material/IconButton";
interface IconButtonProps {
  color?: "primary" | "secondary";
  iconSize?: number;
  icon?: string;
  className?: string;
  backgroundColor?: string;
  borderRadius?: string;
  onClick?: () => void;
}

export const IconBtn = ({
  color = "primary",
  iconSize = 14,
  icon = "check",
  className,
  backgroundColor,
  borderRadius,
  onClick,
}: IconButtonProps) => {
  return (
    <IconButton
      color={color}
      className={className}
      aria-label={icon}
      style={{ backgroundColor, borderRadius }}
      onClick={onClick}
    >
      <MyIcon icon={icon} size={iconSize} color={color} />
    </IconButton>
  );
};
