import styled from "styled-components";
import { Typography } from "../../../design-system";
import { Container } from "../../components";
import { experiences } from "./experience/data";
import { ExperienceCard } from "./experience/ExperienceCard";
import grayBackground from "../../../assets/lightGray.jpg";
const SectionBase = styled(Container)`
    padding-top: 20rem;
    padding-bottom: 15rem;
    background-image: url(${grayBackground});
    background-size: cover;
    background-position: center;
`;

const ExperienceTextWrapper = styled.div`
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

const ExperienceCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-40);
    margin-bottom: var(--space-50);
    background-color: white;
`;

const Experience = () => {
    return (
        <SectionBase>
            <ExperienceTextWrapper>
                <Title variant="h4">
                    What <span>Services</span> Do I Provide?
                </Title>
            </ExperienceTextWrapper>

            <ExperienceCardsWrapper>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </ExperienceCardsWrapper>
        </SectionBase>
    );
};

export { Experience };
