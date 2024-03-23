import styled from "styled-components";
import { Typography } from "../../../design-system";
import { ProjectCards } from "./ProjectCard.tsx";
import { projects } from "./ProjectCard.tsx/data";

const SectionBase = styled.div`
    margin: 0 auto;
    max-width: 190rem;
    padding: 2.5rem 20rem;
    /* height: 100vh; */
    position: relative;
    padding-top: 23rem;
    background-color: var(--purple-12);
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    margin-bottom: var(--space-40);
`;

const Projects = () => {
    return (
        <SectionBase>
            <Title variant="h3">Projects</Title>
            {projects.map((project, index) => (
                <ProjectCards key={index} project={project} />
            ))}
        </SectionBase>
    );
};

export { Projects };
