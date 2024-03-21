import { Service } from "./sections/service/ServiceWrapper";
import styled from "styled-components";
import { About } from "./sections/about/About";
import { Projects } from "./sections/project/Projects";
import { HireMe } from "./sections/hire-me/HireMe";
import { Experience } from "./sections/experiences/Experience";

const Base = styled.div`
    max-width: 192rem;
    margin: 0 auto;
    background-color: var(--green-25);
`;

const HomePage = () => {
    return (
        <Base>
            <Service></Service>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <HireMe></HireMe>
        </Base>
    );
};

export { HomePage };
