import * as React from "react";

interface Props {
    primary?: boolean;
    size?: "small" | "large";
    label?: string;
    onClick?: () => void;
}

export const Button = ({
    primary = false,
    label = "Boop",
    size = "small",
    onClick
}: Props) => {
    return (
        <button
            style={{
                backgroundColor: primary ? "red" : "green",
                fontSize: size === "large" ? "24px" : "14px",
                marginRight : "10px",
                marginLeft : "10px"
            }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
