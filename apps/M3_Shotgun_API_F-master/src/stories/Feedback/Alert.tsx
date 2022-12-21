import React, {ReactNode, ReactElement, JSXElementConstructor, ReactDOM} from 'react';
import AlertMui from '@mui/material/Alert';
import AlertMuiTitle from '@mui/material/AlertTitle';
import MyIcon from "@public/fonts/icon";
import {SxProps} from '@mui/system';
import {JSXElement} from "@babel/types";

interface AlertProps {
  variant?: "outlined" | "filled" | "standard";
  severity: "error" | "warning" | "info" | "success";
  color?: "error" | "info" | "success" | "warning" | string;
  alertTitle?: string;
  alertTitleIs?: boolean;
  onClose?: () => void;
  // action?: ReactNode;
  alertMessage: string;
  children: string | ReactElement;
  iconName: string;
  iconIs?: boolean;
  sx?: SxProps;
}

export const Alert = (
  {
    variant = "standard",
    severity = "error",
    alertTitleIs,
    alertTitle,
    iconIs = true,
    iconName,
    alertMessage,
    onClose,
    sx,
  }: AlertProps) => {
  return (
    <AlertMui
      variant={variant}
      severity={severity}
      icon={iconIs === false ? false : <MyIcon icon={iconName} size={24}/>}
      onClose={onClose}
      sx={sx}
    >
      {alertTitleIs ? <AlertMuiTitle>{alertTitle}</AlertMuiTitle> : null}
      {alertMessage}
    </AlertMui>
  );
};
