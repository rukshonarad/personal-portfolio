import styled from "styled-components";

import { Typography } from "../../../../design-system/Typography";

const SectionBase = styled.section`
    max-width: calc(100% - 500px);

    background-color: white;
    width: 142rem;
    border-radius: var(--space-80);
    margin: 0 auto;
    margin-bottom: var(--space-50);
`;

const DescriptionTextWrapper = styled.div`
    text-align: center;
    width: 70%;
    margin: 0 auto;
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    margin-bottom: var(--space-30);
`;
const ImageWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    img {
        height: auto;
        width: 10rem;
    }
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
