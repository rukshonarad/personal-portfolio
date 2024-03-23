import React from "react";
import { sizeClassNames, shapeClassNames } from "./classNames";

import { InputProps } from "./types";
import "./Input.css";
import { trimWhiteSpaces } from "../utils/utils";

const Input: React.FC<InputProps> = (props) => {
    const {
        type,
        error,
        disabled,
        placeholder,
        shape,
        size,
        hintMessage,

        className,
        id,
        onChange,
        value
    } = props;

    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const errorClassName = error ? "input-error" : "";
    const textareaClassName = type === "textarea" ? "input-textarea" : "";

    const finalClassNames = trimWhiteSpaces(
        `input ${sizeClassName} ${shapeClassName} ${errorClassName} ${textareaClassName}`
    );

    const hintMessageClass = trimWhiteSpaces(
        `hint-message ${error ? "hint-message--error" : ""}`
    );

    const handleOnChange = (
        e:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => {
        onChange(e.target.value);
    };

    return (
        <div className={`input-wrapper ${className || ""}`}>
            {type === "textarea" ? (
                <textarea
                    placeholder={placeholder}
                    className={finalClassNames}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    value={value}
                />
            ) : (
                <input
                    className={finalClassNames}
                    type={type || "text"}
                    placeholder={placeholder}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    value={value}
                />
            )}
            {hintMessage ? (
                <span className={hintMessageClass}>{hintMessage}</span>
            ) : null}
        </div>
    );
};

export { Input };
