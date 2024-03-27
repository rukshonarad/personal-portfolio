import { Home } from "./service/Home";
import styled from "styled-components";
import { About } from "./about/About";
import { Projects } from "./project/Projects";
import { Contact } from "./contact/Contact";
import { Experience } from "./experiences/Experience";
import { TopNavigation } from "./top-navigation/TopNavigation";
import { Footer } from "./footer/Footer";

const Base = styled.div`
    max-width: 192rem;
    margin: 0 auto;
    background-color: var(--green-25);
    @media (max-width: 80em) {
        padding-bottom: var(--space-10);
    }
`;

const HomePage = () => {
    return (
        <Base>
            <div id="home">
                <Home></Home>
            </div>
            <div id="about">
                <About></About>
            </div>
            <div id="experience">
                <Experience></Experience>
            </div>
            <div id="projects">
                <Projects></Projects>
            </div>
            <div id="contact">
                <Contact></Contact>
            </div>
            <div id="footer">
                <Footer></Footer>
            </div>
        </Base>
    );
};

export { HomePage };
