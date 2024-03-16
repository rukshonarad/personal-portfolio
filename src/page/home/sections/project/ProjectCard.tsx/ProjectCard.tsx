import styled from "styled-components";
import { Button, Typography } from "../../../../../design-system";
import { useState } from "react";
import github from "../../../../../assets/github.png";
import demo from "../../../../../assets/demo.png";
import info from "../../../../../assets/information.png";
type Project = {
    image: string;
    name: string;
    description: string;
    githubLink: string;
    demoLink: string;
    info: string;
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: var(--space-30);
    margin-bottom: var(--space-30);
`;

const ProjectCard = styled.div`
    width: calc(33.333% - var(--space-20));
    border-radius: var(--border-radius-40);
    box-shadow: var(--shadow-3xl);
    padding: var(--space-30) var(--space-30);
    position: relative;

    transition: opacity 0.3s;
    &:hover {
        opacity: 0.5;
    }
`;

const ProjectName = styled(Typography)`
    margin: 0 auto;
`;

const ProjectDescription = styled(Typography)``;

const ButtonWrapper = styled.div<{ isVisible: boolean }>`
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    position: absolute;
    bottom: var(--space-72);
    left: 50%;
    transform: translateX(-50%);
    padding: var(--space-20);

    border-radius: var(--border-radius-20);
    z-index: 2;
    gap: var(--space-10);
`;

const ProjectImg = styled.div`
    text-align: center;
`;

const ProjectImage = styled.img`
    max-width: 100%;
    border-radius: var(--border-radius-36);
`;
const Buttons = styled(Button)`
    background-color: none;
    z-index: 2;
    img {
        width: 3rem;
        z-index: 1;
        height: auto;
    }
`;
const ProjectCards = ({ project }: ProjectCardProps) => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    return (
        <ProjectCardWrapper>
            <ProjectCard
                onMouseEnter={() => setIsButtonVisible(true)}
                onMouseLeave={() => setIsButtonVisible(false)}
            >
                <ProjectName variant="paragraphMD" weight="semibold">
                    {project.name}
                </ProjectName>
                <ProjectDescription variant="subtitleLG">
                    {project.description}
                </ProjectDescription>
                <ProjectImg>
                    <ProjectImage src={project.image} alt="Project" />
                </ProjectImg>
                <ButtonWrapper isVisible={isButtonVisible}>
                    <a href={project.githubLink}>
                        <Buttons>
                            <img src={github} alt="github" />
                        </Buttons>
                    </a>
                    <a href={project.demoLink}>
                        <Buttons>
                            <img src={demo} alt="demo" />
                        </Buttons>
                    </a>
                    <a href={project.info}>
                        <Buttons>
                            <img src={info} alt="info" />
                        </Buttons>
                    </a>
                </ButtonWrapper>
            </ProjectCard>
        </ProjectCardWrapper>
    );
};

export { ProjectCards };
