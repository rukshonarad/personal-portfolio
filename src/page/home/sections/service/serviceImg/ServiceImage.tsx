import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Tool } from "./types";
import { Icon } from "../../../../../design-system/icon";
import { Container } from "../../../../components";
import { tools } from "./data";
import { Typography } from "../../../../../design-system/Typography";

const ToolBarWrapper = styled(Container)`
    width: 100%;
    overflow: hidden;
`;

const scrollRightToLeft = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const ToolIconsContainer = styled.div`
    display: flex;
    animation: ${scrollRightToLeft} 20s linear infinite;
`;

const StyledIcon = styled(Icon)`
    margin-left: 2rem;
    cursor: pointer;
    position: relative;
`;

const ToolBox = styled.div`
    display: flex;
    align-items: center;
`;

const SkillTitle = styled.span`
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-700);
    color: var(--gray-500);
`;

const ToolbarTitle = styled(Typography)`
    color: var(--jaguar-700);
    display: flex;
    justify-content: center;
`;

const ToolBar: React.FC<{ tools: Tool[] }> = ({ tools }) => {
    const toolIconsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const toolIconsContainer = toolIconsRef.current;
        if (toolIconsContainer) {
            const toolIconsWidth = toolIconsContainer.offsetWidth;
            const toolIconsScrollWidth = toolIconsContainer.scrollWidth;
            if (toolIconsWidth < toolIconsScrollWidth) {
                toolIconsContainer.addEventListener(
                    "animationiteration",
                    () => {
                        if (toolIconsContainer) {
                            toolIconsContainer.appendChild(
                                toolIconsContainer.children[0].cloneNode(true)
                            );
                            toolIconsContainer.style.transform = "none";
                        }
                    }
                );
            }
        }
    }, []);

    return (
        <ToolBarWrapper>
            <ToolIconsContainer ref={toolIconsRef}>
                {tools.map((tool, idx) => (
                    <ToolBox key={idx}>
                        <StyledIcon
                            height="4rem"
                            width="7rem"
                            iconName={tool.icon}
                        />
                        <SkillTitle>{tool.title}</SkillTitle>
                    </ToolBox>
                ))}
            </ToolIconsContainer>
        </ToolBarWrapper>
    );
};

export const ToolsBar: React.FC = () => {
    return <ToolBar tools={tools} />;
};
