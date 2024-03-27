import styled from "styled-components";
import { Button } from "../../../design-system";
import { Typography } from "../../../design-system/Typography";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const SectionBase = styled.section`
    max-width: 192rem;
    padding-top: var(--space-250);
    padding-bottom: var(--space-50);
`;

const FeaturesTextWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-50);
    text-align: center;
    margin: 0 auto;
    max-width: 70%;
    @media (max-width: 80em) {
        gap: var(--space-20);
    }
`;

const Title = styled(Typography)`
    color: var(--jaguar-400);
`;

const Description = styled(Typography)`
    color: var(--jaguar-800);
    margin: 0 auto;
    width: 70%;
    @media (max-width: 80em) {
        width: 50%;
    }
`;

const StyledText = styled.div`
    color: var(--jaguard-100);
`;

const StyledTextSecond = styled.div`
    color: var(--jaguar-700);
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
                <Description variant="subtitleMD" weight="medium">
                    I'm a seasoned software engineer with expertise in
                    full-stack development, specializing in crafting robust
                    solutions for complex problems with proficiency in various
                    programming languages and technologies
                </Description>
            </FeaturesTextWrapper>
        </SectionBase>
    );
};

export { Services };
