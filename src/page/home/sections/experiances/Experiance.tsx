import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { Container } from "../../../components";
import { experiances } from "./experiance/data";
import { ExperianceCard } from "./experiance/ExperianceCard";
import motion from "framer-motion";
const SectionBase = styled(Container)`
    padding-top: 20rem;
    padding-bottom: 15rem;
`;

const ExperianceTextWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    text-align: left;
    margin-bottom: var(--space-100);
    span {
        color: var(--primary-200);
    }
`;

const ExperianceCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-40);
    margin-bottom: var(--space-50);
`;

const Experiance = () => {
    return (
        <SectionBase>
            <ExperianceTextWrapper>
                <Title variant="h4">
                    What <span>Services</span> Do I Provide?
                </Title>
            </ExperianceTextWrapper>

            <ExperianceCardsWrapper>
                {experiances.map((experiance, index) => (
                    <ExperianceCard key={index} experiance={experiance} />
                ))}
            </ExperianceCardsWrapper>
        </SectionBase>
    );
};

export { Experiance };
