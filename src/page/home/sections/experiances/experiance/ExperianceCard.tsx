import styled from "styled-components";
import { Icon, IconName, Typography } from "../../../../../design-system";
import React from "react";

export type Experiance = {
    icon: IconName;
    title: string;
    description: string;
};

type ExperianceCardProps = {
    experiance: Experiance;
};

export const ExperiancesCardBase = styled.div<{ icon: IconName }>`
    position: relative;
    cursor: pointer;
    padding: var(--space-10);
    border-radius: var(--border-radius-40);
    max-width: 37rem;
    box-shadow: var(--shadow-2xl);
    display: flex;
    flex-direction: column;
    transition: all 1s;

    &:hover {
        transform: scale(1.05);
    }
`;

const ExperianceTextWrapper = styled.div<{ icon: string }>`
    padding: var(--space-8) var(--space-24);
`;

const ExperianceTitle = styled(Typography)`
    color: var(--jaguar-700);
    margin-bottom: var(--space-12);
`;

const ExperianceDescription = styled(Typography)`
    color: var(--gray-500);
`;

const IconWrapper = styled.div<{ icon: IconName }>`
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
`;

const ExperianceCard: React.FC<ExperianceCardProps> = ({ experiance }) => {
    return (
        <ExperiancesCardBase icon={experiance.icon}>
            <IconWrapper icon={experiance.icon}>
                <Icon iconName={experiance.icon} height="5rem" width="5rem" />
            </IconWrapper>

            <ExperianceTextWrapper icon={experiance.icon}>
                <ExperianceTitle variant="paragraphSM" weight="bold">
                    {experiance.title}
                </ExperianceTitle>
                <ExperianceDescription variant="subtitleMD" weight="normal">
                    {experiance.description}
                </ExperianceDescription>
            </ExperianceTextWrapper>
        </ExperiancesCardBase>
    );
};

export { ExperianceCard };
