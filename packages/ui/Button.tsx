import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: props.primary ? "red" : "blue",
        fontSize: props.size === "large" ? "24px" : "14px",
      }}
      {...props}
    />
  );
};
