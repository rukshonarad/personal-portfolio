import { TopNavigation } from "../top-navigation/TopNavigation";
import styled from "styled-components";
import { Services } from "../service/Services";
import { ToolsBar } from "../service/serviceImg/ServiceImage";
const Base = styled.div`
    padding-bottom: 10rem;
    max-width: 192rem;
    margin: 0 auto;
    background-color: var(--green-25);
`;

const Service = () => {
    return (
        <Base>
            <TopNavigation />
            <Services />
            <ToolsBar />
        </Base>
    );
};

export { Service };
