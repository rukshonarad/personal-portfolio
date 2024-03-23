import React from "react";
import styled from "styled-components";
import { Icon, IconName } from "../../design-system";

interface StyledLinkProps {
    size: string;
}

const StyledLink = styled.a<StyledLinkProps>`
    z-index: 10;
    cursor: pointer;
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    transition: all 0.7s;

    &:hover {
        transform: translateY(-7px);
    }
`;

const Icons = styled(Icon)<StyledLinkProps>`
    height: ${(props) => props.size};
    width: ${(props) => props.size};
`;

interface IconLinkProps {
    href?: string;
    iconName: IconName;
    size?: string; // Optional size prop
}

const IconLink: React.FC<IconLinkProps> = ({
    href,
    iconName,
    size = "2.4rem"
}) => {
    return (
        <StyledLink href={href} target="_blank" size={size}>
            <Icons iconName={iconName} size={size} />
        </StyledLink>
    );
};

export default IconLink;
