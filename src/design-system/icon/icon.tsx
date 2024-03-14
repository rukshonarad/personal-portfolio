import React from "react";
import sprite from "./sprite.svg";
import { IconProps } from "./types";
import styled, { css } from "styled-components";

// Styled SVG component
const StyledSVG = styled.svg<{ spread: boolean }>`
    ${(props) =>
        props.spread &&
        css`
             border-radius:var( --border-radius-32)
            transform: scale(1.2);
        `}
`;

const Icon: React.FC<IconProps & { spread?: boolean }> = ({
    iconName,
    className,
    onClick,
    height,
    width,
    spread = false,
    ...restProps
}) => {
    const handleOnClick = () => {
        onClick && onClick();
    };

    const defaultHeight = "2.4rem";
    const defaultWidth = "2.4rem";

    return (
        <StyledSVG
            height={height || defaultHeight}
            width={width || defaultWidth}
            className={className || ""}
            onClick={handleOnClick}
            spread={spread}
            {...restProps}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </StyledSVG>
    );
};

export { Icon };
