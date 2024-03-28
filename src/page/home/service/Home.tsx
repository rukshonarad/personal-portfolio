import { TopNavigation } from "../top-navigation/TopNavigation";
import styled from "styled-components";
import { Services } from "./Services";
import { ToolsBar } from "./serviceImg/ServiceImage";

const Base = styled.div`
    max-width: 192rem;
    margin: 0 auto;
    height: 100vh;
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
