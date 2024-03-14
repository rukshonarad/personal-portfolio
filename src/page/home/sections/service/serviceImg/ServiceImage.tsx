import React, { useState } from "react";
import styled from "styled-components";
import { Tool } from "./types";
import { Icon } from "../../../../../design-system/icon";
import { Container } from "../../../../components";
import { tools } from "./data";

const ToolBarWrapper = styled(Container)`
    margin-top: var(--space-10);
    width: 100rem;
    padding: 6rem 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    align-items: center;
    justify-content: space-around;
    background-color: #f6f7fb;
    border-radius: var(--border-radius-80);
`;

const StyledIcon = styled(Icon)`
    margin-right: 1rem;
    cursor: pointer;
    position: relative; /* Set position relative for absolute positioning */
    &:hover {
        transform: scale(1.5);

        transition: all 0.3s;
    }
`;

const ToolBox = styled.div`
    display: flex;
    align-items: center;
`;

interface ToolBarProps {
    tools: Tool[];
}

const ToolBar: React.FC<ToolBarProps> = ({ tools }) => {
    return (
        <ToolBarWrapper>
            {tools.map((tool, idx) => (
                <ToolBox key={idx}>
                    <StyledIcon
                        height="4rem"
                        width="5rem"
                        iconName={tool.icon}
                        onClick={() => {}}
                    />
                </ToolBox>
            ))}
        </ToolBarWrapper>
    );
};

export const ToolsBar: React.FC = () => {
    return <ToolBar tools={tools} />;
};
