import { TopNavigation } from "../top-navigation/TopNavigation";
import styled from "styled-components";
import { Services } from "./Services";
import { ToolsBar } from "./serviceImg/ServiceImage";
import { Container } from "../../components";
const Base = styled.div`
    max-width: 192rem;
    margin: 0 auto;
    height: 100vh;
    background-color: var(--blue-ribbon-25);
`;

const Home = () => {
    return (
        <Base>
            <TopNavigation />
            <Services />
            <ToolsBar />
        </Base>
    );
};

export { Home };