import styled from "styled-components";
import { Button, Typography } from "../../../../../design-system";

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

const ProjectCard = styled.div<{ backgroundImg: string }>`
    width: 90%;
    gap: 3rem;
    align-items: center;
    justify-content: space-around;
    height: 30rem;
    background-image: url(${(props) => props.backgroundImg});
    align-items: center;
    display: flex;
    border-radius: var(--border-radius-40);
    box-shadow: var(--shadow-3xl);
    padding: var(--space-20) var(--space-40);
    margin-bottom: var(--space-30);

    &:hover {
        transform: scale(1.1);
        transition: all 1s;
    }
`;

const ProjectName = styled(Typography)`
    margin-bottom: var(--space-8);
    margin: 0 auto;
    margin-bottom: 1rem;
`;

const ProjectDescription = styled(Typography)`
    margin-bottom: 1rem;
`;
const ProjectImg = styled.div`
    img {
        height: 15rem;
        width: auto;
        display: flex;
    }
`;
const Wrapper = styled.div`
    display: flex;
`;
const ImageWrapper = styled.div`
    img {
        width: 100%;
    }
`;
const ButtonWrapper = styled.div`
    margin: 0 auto;
    flex-wrap: wrap;
    margin-bottom: var(--space-8);
    Button {
        &:hover {
            background-color: var(--primary-100);
        }
    }
`;
const ProjectCards = ({ project }: ProjectCardProps) => {
    return (
        <Wrapper>
            <ProjectCard backgroundImg={project.image}>
                <ProjectName variant="paragraphMD" weight="semibold">
                    {project.name}
                </ProjectName>
                <ProjectDescription variant="subtitleLG">
                    {project.description}
                </ProjectDescription>
                <ButtonWrapper>
                    <a href={project.githubLink}>
                        <Button size="sm" variant="outlined" shape="rounded">
                            GitHub Link
                        </Button>
                    </a>
                </ButtonWrapper>
                <ButtonWrapper>
                    <a href={project.demoLink}>
                        <Button size="sm" variant="contained" shape="rounded">
                            Try demo
                        </Button>
                    </a>
                </ButtonWrapper>
                <ButtonWrapper>
                    <a href={project.info}>
                        <Button size="sm" variant="outlined" shape="rounded">
                            Info
                        </Button>
                    </a>
                </ButtonWrapper>
            </ProjectCard>
        </Wrapper>
    );
};

export { ProjectCards };
