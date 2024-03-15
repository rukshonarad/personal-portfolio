import styled from "styled-components";
import { Button } from "../../../../design-system";
import { Typography } from "../../../../design-system/Typography";
import { motion } from "framer-motion";
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
                <motion.div
                    initial={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    animate={{ opacity: 1, x: 3, y: 1 }}
                    whileInView={{ opacity: 2, scale: 1 }}
                >
                    <Title variant="h2" weight="bold">
                        <StyledText>Hi! My Name Is Rukshona</StyledText>
                        <StyledTextSecond>
                            Full stack software engineer
                        </StyledTextSecond>
                    </Title>
                </motion.div>
                <Description variant="paragraphSM" weight="medium">
                    Presenting unique and creative software solutions for a
                    variety of challenges and needs.
                </Description>
            </FeaturesTextWrapper>
        </SectionBase>
    );
};

export { Services };
