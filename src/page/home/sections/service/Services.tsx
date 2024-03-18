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
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-50);
    text-align: center;
    margin: 0 auto;
    max-width: 70%;
`;

const Title = styled(Typography)`
    color: var(--jaguar-400);
`;

const Description = styled(Typography)`
    color: var(--jaguar-800);
    margin: 0 auto;
    width: 50%;
`;

const StyledText = styled.div`
    color: var(--jaguard-100);
`;

const StyledTextSecond = styled.div`
    color: var(--jaguar-800);
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
                    I am experienced in using databases, version control
                    systems, and deployment technologies to ensure seamless
                    integration and functionality across the entire software
                    stack
                </Description>
            </FeaturesTextWrapper>
        </SectionBase>
    );
};

export { Services };
