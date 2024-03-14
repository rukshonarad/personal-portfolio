import styled from "styled-components";
import { Button } from "../../../../design-system";
import { Typography } from "../../../../design-system/Typography";
// import { FeaturesCard } from "./featuresCard";
// import { features } from "./featuresCard/features";

const SectionBase = styled.section`
    max-width: 192rem;
    padding-top: var(--space-250);
    padding-bottom: var(--space-50);
`;

const FeaturesTextWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
    width: 70%;
    margin: 0 auto;
`;

const Title = styled(Typography)`
    margin-bottom: var(--space-30);
    color: var(--jaguar-700);
`;

const Description = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-40);
    width: 70%;
    margin: 0 auto;
    margin-bottom: var(--space-30);
`;
const MultiColorText = styled.span`
    color: var(--primary-300);
    font-weight: bold;
`;

const Services = () => {
    return (
        <SectionBase>
            <FeaturesTextWrapper>
                <Title variant="h1" weight="medium">
                    Hi! My name is<br></br>
                    <MultiColorText> Rukshona Radjabova</MultiColorText>
                    <br></br>Full stack software engineer
                </Title>
                <Description variant="paragraphSM" weight="medium">
                    Get unlimited custom designes for your business needs with
                    an Unlimited Design Subscription Service. With a monthly
                    subscription access to team of skilled designers &
                    developers who can create designes for your branding,
                    marketing and advertising needs
                </Description>
            </FeaturesTextWrapper>
        </SectionBase>
    );
};

export { Services };
