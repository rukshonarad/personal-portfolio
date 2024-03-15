import { Service } from "./sections/service/ServiceWrapper";
import styled from "styled-components";
import { About } from "./sections/about/About";
import { Projects } from "./sections/project/Projects";

const Base = styled.div`
    padding-bottom: 10rem;
    max-width: 192rem;
    margin: 0 auto;
    background-color: var(--green-25);
`;

const HomePage = () => {
    return (
        <Base>
            <Service></Service>
            <About></About>
            <Projects></Projects>
        </Base>
    );
};

export { HomePage };
