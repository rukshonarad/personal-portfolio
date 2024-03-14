import styled from "styled-components";
import { Button, Typography } from "../../../../../design-system";

type Project = {
    image: string;
    name: string;
    description: string;
    githubLink: string;
    demoLink: string;
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCardBase = styled.div`
    gap: var(--space-16);

    display: flex;
    overflow-x: auto;
`;

const ProjectCard = styled.div<{ name: string }>`
    width: 30%;
    display: flex;
    align-items: center;

    border-radius: var(--border-radius-40);
    box-shadow: var(--shadow-3xl);
    margin-bottom: var(--space-30);
`;

const ProjectTextWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const ProjectName = styled(Typography)`
    margin-bottom: var(--space-12);
`;

const ProjectDescription = styled(Typography)`
    margin-bottom: var(--space-12);
`;

const ProjectImageWrapper = styled.div`
    overflow: hidden;
    img {
        object-fit: cover;
        height: 30rem;
    }
`;

const ProjectCards = ({ project }: ProjectCardProps) => {
    return (
        <ProjectCardBase>
            <ProjectCard name={project.name}>
                <ProjectTextWrapper>
                    <ProjectName variant="h5" weight="semibold">
                        {project.name}
                    </ProjectName>
                    <ProjectDescription variant="paragraphMD">
                        {project.description}
                    </ProjectDescription>
                    <a href={project.githubLink}>
                        <Button size="md" variant="outlined" shape="rounded">
                            GitHub Link
                        </Button>
                    </a>
                </ProjectTextWrapper>
                <ProjectImageWrapper>
                    <img src={project.image} alt="Project" />
                </ProjectImageWrapper>
            </ProjectCard>
        </ProjectCardBase>
    );
};

export { ProjectCards };
