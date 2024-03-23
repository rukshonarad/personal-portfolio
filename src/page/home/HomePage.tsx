import { Service } from "./service/ServiceWrapper";
import styled from "styled-components";
import { About } from "./about/About";
import { Projects } from "./project/Projects";
import { Contact } from "./contact/Contact";
import { Experience } from "./experiences/Experience";

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
            <Contact></Contact>
        </Base>
    );
};

export { HomePage };
