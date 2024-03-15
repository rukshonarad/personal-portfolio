import styled from "styled-components";
import { Button } from "../../../../design-system";
import { Typography } from "../../../../design-system/Typography";
import Typewriter from "typewriter-effect";
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
const StyledText = styled.div`
    color: var(--jaguard-100);
`;
const StyledTextSecond = styled.div`
    color: var(--primary-100);
`;
const Services = () => {
    return (
        <SectionBase>
            <FeaturesTextWrapper>
                <Title variant="h2" weight="medium">
                    <StyledText>
                        <Typewriter
                            onInit={(str) => {
                                str.typeString("Hi! My name is Rukshona!")
                                    .pauseFor(3000)

                                    .start();
                            }}
                        />
                    </StyledText>
                    <StyledTextSecond>
                        <Typewriter
                            onInit={(str) => {
                                str.pauseFor(5000)
                                    .typeString("Full stack software engineer")

                                    .start();
                            }}
                        />
                    </StyledTextSecond>
                </Title>
                <Description variant="paragraphSM" weight="medium">
                    Presenting unique and creative software solutions for a
                    variety of challenges and needs.
                </Description>
            </FeaturesTextWrapper>
        </SectionBase>
    );
};

export { Services };
