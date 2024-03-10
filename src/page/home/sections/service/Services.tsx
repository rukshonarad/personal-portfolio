import styled from "styled-components";
import { Button } from "../../../../design-system";
import { Typography } from "../../../../design-system/Typography";
// import { FeaturesCard } from "./featuresCard";
// import { features } from "./featuresCard/features";

const SectionBase = styled.section`
    max-width: 192rem;
    padding: 25rem 15.2rem;
`;

const FeaturesTextWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
    width: 70%;
    margin: 0 auto;
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    margin-bottom: var(--space-30);
`;

const Description = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-40);
    width: 70%;
    margin: 0 auto;
    margin-bottom: var(--space-30);
`;

const ButtonWrapper = styled.div`
    margin: 0 auto;
    max-width: 27rem;

    Button {
        margin: 0 auto;
    }
`;

const Services = () => {
    return (
        <SectionBase>
            <FeaturesTextWrapper>
                <Title variant="h1" weight="bold">
                    Unlimited Project Subscription Service
                </Title>
                <Description variant="paragraphSM" weight="medium">
                    Get unlimited custom designes for your business needs with
                    an Unlimited Design Subscription Service. With a monthly
                    subscription access to team of skilled designers &
                    developers who can create designes for your branding,
                    marketing and advertising needs
                </Description>
            </FeaturesTextWrapper>

            <ButtonWrapper>
                <Button size="sm" shape="rounded" onClick={() => {}}>
                    View Pricing
                </Button>
            </ButtonWrapper>
        </SectionBase>
    );
};

export { Services };
