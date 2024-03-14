import React, { useState } from "react";
import styled from "styled-components";
import { Tool } from "./types";
import { Icon } from "../../../../../design-system/icon";
import { Container } from "../../../../components";
import { toolsFrontEnd, toolsBackend, tools } from "./data";
import { Typography } from "../../../../../design-system/Typography";

const ToolBarWrapper = styled(Container)`
    width: 100rem;
    padding: 6rem 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    border-radius: var(--border-radius-80);
    margin-bottom: var(--space-30);
    &:hover {
        box-shadow: var(--shadow-3xl);
        transition: all 0.2s;
    }
`;

const StyledIcon = styled(Icon)`
    margin-right: 1rem;
    cursor: pointer;
    position: relative;
`;

const ToolBox = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        transform: scale(1.5);
        transition: all 0.3s;
    }
`;
const SkillTitle = styled.span`
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-700);
    color: var(--gray-500);
`;
interface ToolBarProps {
    toolsFrontEnd: Tool[];
    toolsBackend: Tool[];
    tools: Tool[];
}
const ToolbarTitle = styled(Typography)`
    color: var(--light-green-900);
    display: flex;
    justify-content: center;
`;
const ToolBar: React.FC<ToolBarProps> = ({
    toolsFrontEnd,
    toolsBackend,
    tools
}) => {
    return (
        <>
            <ToolBarWrapper>
                <ToolbarTitle variant="h6" weight="bold">
                    Frontend
                </ToolbarTitle>
                {toolsFrontEnd.map((tool, idx) => (
                    <ToolBox key={idx}>
                        <StyledIcon
                            height="4rem"
                            width="5rem"
                            iconName={tool.icon}
                            onClick={() => {}}
                        />
                        <SkillTitle>{tool.title}</SkillTitle>
                    </ToolBox>
                ))}
            </ToolBarWrapper>
            <ToolBarWrapper>
                <ToolbarTitle variant="h6" weight="bold">
                    Backend
                </ToolbarTitle>
                {toolsBackend.map((tool, idx) => (
                    <ToolBox key={idx}>
                        <StyledIcon
                            height="4rem"
                            width="5rem"
                            iconName={tool.icon}
                            onClick={() => {}}
                        />
                        <SkillTitle>{tool.title}</SkillTitle>
                    </ToolBox>
                ))}
            </ToolBarWrapper>
            <ToolBarWrapper>
                <ToolbarTitle variant="h6" weight="bold">
                    Overlap
                </ToolbarTitle>
                {tools.map((tool, idx) => (
                    <ToolBox key={idx}>
                        <StyledIcon
                            height="4rem"
                            width="5rem"
                            iconName={tool.icon}
                            onClick={() => {}}
                        />
                        <SkillTitle>{tool.title}</SkillTitle>
                    </ToolBox>
                ))}
            </ToolBarWrapper>
        </>
    );
};

export const ToolsBar: React.FC = () => {
    return (
        <ToolBar
            toolsFrontEnd={toolsFrontEnd}
            toolsBackend={toolsBackend}
            tools={tools}
        />
    );
};
