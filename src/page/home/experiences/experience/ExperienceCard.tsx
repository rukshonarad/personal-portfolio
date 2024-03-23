import styled from "styled-components";
import { Icon, IconName, Typography } from "../../../../design-system";
import React from "react";

export type Experience = {
    icon: IconName;
    title: string;
    description: string;
};

type ExperianceCardProps = {
    experience: Experience;
};

export const ExperiencesCardBase = styled.div<{ icon: IconName }>`
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

const ExperienceTextWrapper = styled.div<{ icon: string }>`
    padding: var(--space-8) var(--space-24);
`;

const ExperienceTitle = styled(Typography)`
    color: var(--jaguar-700);
    margin-bottom: var(--space-12);
`;

const ExperienceDescription = styled(Typography)`
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

const ExperienceCard: React.FC<ExperianceCardProps> = ({ experience }) => {
    return (
        <ExperiencesCardBase icon={experience.icon}>
            <IconWrapper icon={experience.icon}>
                <Icon iconName={experience.icon} height="5rem" width="5rem" />
            </IconWrapper>

            <ExperienceTextWrapper icon={experience.icon}>
                <ExperienceTitle variant="paragraphSM" weight="bold">
                    {experience.title}
                </ExperienceTitle>
                <ExperienceDescription variant="subtitleMD" weight="normal">
                    {experience.description}
                </ExperienceDescription>
            </ExperienceTextWrapper>
        </ExperiencesCardBase>
    );
};

export { ExperienceCard };
