import styled from "styled-components";
import { Button } from "../../../../design-system";
import { Typography } from "../../../../design-system/Typography";
import forward from "../../../../assets/forward 1.png";
import upload from "../../../../assets/upload 1.png";
import designe from "../../../../assets/img.png";
import infinite from "../../../../assets/infinite 1.png";
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
    justify-content: center; /* Centering items */
    gap: 2rem; /* Adjusting gap */
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
                <ImageWrapper>
                    <img src={forward} alt="" />
                    <img src={upload} alt="" />
                    <img src={designe} alt="" />
                    <img src={infinite} alt="" />
                </ImageWrapper>
            </DescriptionTextWrapper>
        </SectionBase>
    );
};

export { ServiceDescription };
