import styled from "styled-components";
import { Button } from "../../../design-system";
import { Container } from "../../components";
import { Typography } from "../../../design-system/Typography";

import me from "../../../assets/me.png";
import { motion } from "framer-motion";

const info = {
    bio: "Hello, I'm Rukshona, a full-stack developer based in New York with over a year of experience. Passionate about crafting seamless digital experiences, I thrive on bringing innovative ideas to life through code. From backend logic to captivating frontend interfaces, I specialize in creating dynamic web solutions that engage and inspire users."
};

const BaseContainer = styled(Container)`
    position: relative;
    padding-top: var(--space-230);
    background-color: var(--dodger-blue-25);
`;

const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-50);
`;

const ImageWrapper = styled.div`
    text-align: center;
    transition: all 1s;

    &:hover {
        transform: scale(1.1);
    }
    img {
        object-fit: contain;
        border-radius: var(--space-40) 0 var(--space-40);
        height: 35rem;
        width: auto;
    }
`;

const AboutTextWrapper = styled.div`
    width: 100%;
`;

const Title = styled(Typography)`
    margin-bottom: var(--space-72);
    z-index: 10;
    span {
        color: var(--primary-300);
    }
`;

const Bio = styled(Typography)`
    margin-bottom: var(--space-72);
    line-height: 1.5;
`;

const Buttons = styled(Button)`
    /* padding: 0 var(--space-40); */
    display: flex;
    margin: 0 auto;
`;

const TextWrapper = styled.div`
    margin-bottom: var(--space-16);
`;
const About = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact"); //
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <BaseContainer>
            <AboutContent>
                <motion.div
                    initial={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 2 }}
                    animate={{ opacity: 1, x: 3, y: 1 }}
                    whileInView={{ opacity: 2, scale: 1 }}
                >
                    <ImageWrapper>
                        <img src={me} alt="" />
                    </ImageWrapper>
                </motion.div>

                <AboutTextWrapper>
                    <Title variant="h4">
                        About <span>Me</span>
                    </Title>

                    <TextWrapper>
                        <Bio variant="subtitleMD">{info.bio}</Bio>
                    </TextWrapper>

                    <Buttons size="md" onClick={scrollToContact}>
                        Contact Me
                    </Buttons>
                </AboutTextWrapper>
            </AboutContent>
        </BaseContainer>
    );
};

export { About };
