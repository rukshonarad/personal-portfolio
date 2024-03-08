import { FC } from "react";
import { ButtonProps } from "./types";
import React from "react";
import { trimWhiteSpaces } from "../utils/utils";
import "./Button.css";

const sizeClassNames = {
    sm: "btn-small",
    md: "btn-medium",
    lg: "btn-large"
};

const Button: FC<ButtonProps> = (props) => {
    const { size, disabled, className, children, onClick, buttonRef } = props;

    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";

    const finalClassNames = `btn  ${sizeClassName} ${className || ""}`;

    return (
        <button
            className={trimWhiteSpaces(finalClassNames)}
            disabled={disabled}
            onClick={onClick}
            ref={buttonRef}
        >
            {children}
        </button>
    );
};

export { Button };
