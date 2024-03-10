import styled from "styled-components";
import { Button } from "../../../../design-system";
import { Typography } from "../../../../design-system/Typography";
// import { FeaturesCard } from "./featuresCard";
// import { features } from "./featuresCard/features";

const SectionBase = styled.section`
    max-width: calc(100% - 500px);
    padding: 5rem 5rem;
    background-color: white;
    width: 142rem;
    border-radius: var(--space-80);
    margin: 0 auto;
`;

const DescriptionTextWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
    width: 70%;
    margin: 0 auto;
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    margin-bottom: var(--space-30);
`;

const ServiceDescription = () => {
    return (
        <SectionBase>
            <DescriptionTextWrapper>
                <Title variant="h6" weight="bold">
                    How it works
                </Title>
            </DescriptionTextWrapper>
        </SectionBase>
    );
};

export { ServiceDescription };
