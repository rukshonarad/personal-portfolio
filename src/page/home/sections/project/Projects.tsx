import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { ProjectCards } from "./ProjectCard.tsx";
import { projects } from "./ProjectCard.tsx/data";
import { Container } from "../../../components";

const SectionBase = styled(Container)`
    padding-top: 15rem;
    padding-bottom: 15rem;
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    margin-bottom: var(--space-40);
`;

const ProjectCardsWrapper = styled.div`
    row-gap: var(--space-20);
`;

const Projects = () => {
    return (
        <SectionBase>
            <Title variant="h3">Projects</Title>
            <ProjectCardsWrapper>
                {projects.map((project, index) => (
                    <ProjectCards key={index} project={project} />
                ))}
            </ProjectCardsWrapper>
        </SectionBase>
    );
};

export { Projects };
