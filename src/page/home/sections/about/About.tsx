import styled from "styled-components";
import { Button } from "../../../../design-system";
import { Container } from "../../../components";
import { Typography } from "../../../../design-system/Typography";
import { Icon } from "../../../../design-system/icon";

import me from "../../../../assets/me.png";
import { motion } from "framer-motion";
const info = {
    bio: "Hello, I'm Rukshona, a full-stack developer based in New York with over a year of experience. Passionate about crafting seamless digital experiences, I thrive on bringing innovative ideas to life through code. From backend logic to captivating frontend interfaces, I specialize in creating dynamic web solutions that engage and inspire users.",
    fullName: "Rukhshona Radjabova",
    age: "27",
    address: "New York, USA",
    email: "rukshona.rad@gmail.com",
    phone: "(929) 378-5352"
};

const BaseContainer = styled(Container)`
    position: relative;
    background-color: #f6f7fb;
`;

const AboutContent = styled.div`
    display: flex;
    gap: 10%;
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
        height: 45rem;
        width: auto;
    }
`;

const AboutTextWrapper = styled.div`
    width: 50%;
`;

const Title = styled(Typography)`
    margin-bottom: var(--space-50);
    z-index: 10;
    span {
        color: var(--primary-300);
    }
`;

const Bio = styled(Typography)`
    margin-bottom: var(--space-30);
    line-height: 1.5;
`;

const Buttons = styled(Button)`
    display: flex;
    margin-bottom: var(--space-40);
    margin: 0 auto;
    &:hover {
        background-color: var(--primary-100);
    }
`;

const About = () => {
    return (
        <BaseContainer>
            <AboutContent>
                <motion.div
                    initial={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 3 }}
                    animate={{ opacity: 1, x: 5 }}
                    whileInView={{ opacity: 2, scale: 1 }}
                >
                    <ImageWrapper>
                        <img src={me} alt="" />
                    </ImageWrapper>
                </motion.div>

                <AboutTextWrapper>
                    <Title variant="h3">
                        About <span>Me</span>
                    </Title>
                    <motion.div
                        initial={{ opacity: 1, scale: 0.5 }}
                        transition={{ duration: 3 }}
                        animate={{ opacity: 1, x: 5 }}
                        whileInView={{ opacity: 2, scale: 1 }}
                    >
                        <Bio variant="paragraphLG">{info.bio}</Bio>
                    </motion.div>

                    <Buttons>Contact Me</Buttons>
                </AboutTextWrapper>
            </AboutContent>
        </BaseContainer>
    );
};

export { About };
