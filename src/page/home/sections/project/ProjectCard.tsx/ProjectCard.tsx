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
    display: flex;
    gap: 15rem;
    width: 100%;
    border-radius: var(--border-radius-40);
    box-shadow: var(--shadow-3xl);
    padding: var(--space-30) var(--space-30);
    position: relative;

    transition: opacity 0.3s;
    &:hover {
        .project-image-overlay {
            opacity: 1;
        }
    }
`;

const ProjectName = styled(Typography)`
    margin: 0 auto;
    margin-bottom: var(--space-32);
`;

const ProjectDescription = styled(Typography)``;

const ButtonWrapper = styled.div<{ isVisible: boolean }>`
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    position: absolute;
    bottom: 9rem;
    right: 9rem;
    padding: var(--space-20);
    border-radius: var(--border-radius-20);
    z-index: 2;
    gap: var(--space-10);
`;

const ProjectImgWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 50%;
    height: auto;
    border-radius: var(--border-radius-36);
`;

const ProjectImage = styled.img`
    width: 100%;
    border-radius: var(--border-radius-36);
`;

const ProjectImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;
`;

const Buttons = styled(Button)`
    align-items: center;
    justify-content: center;
    img {
        width: 3rem;
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
                <div className="hover-effect">
                    <ProjectName variant="paragraphLG" weight="semibold">
                        {project.name}
                    </ProjectName>
                    <ProjectDescription variant="paragraphSM">
                        {project.description}
                    </ProjectDescription>
                </div>
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
                <ProjectImgWrapper>
                    <ProjectImage src={project.image} alt="Project" />
                    <ProjectImageOverlay className="project-image-overlay" />
                </ProjectImgWrapper>
            </ProjectCard>
        </ProjectCardWrapper>
    );
};

export { ProjectCards };
