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
    padding-top: var(--space-250);
    background-color: var(--primary-25);
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
    margin-bottom: var(--space-30);
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
    padding: 0 var(--space-12);
    display: flex;
    margin: 0 auto;
`;
const Info = styled(Typography)`
    display: flex;

    span {
        font-weight: bold;
        margin-right: var(--space-8);
    }
`;
const TextWrapper = styled.div`
    margin-bottom: var(--space-16);
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
                    <Title variant="h4">
                        About <span>Me</span>
                    </Title>
                    <motion.div
                        initial={{ opacity: 1, scale: 0.5 }}
                        transition={{ duration: 3 }}
                        animate={{ opacity: 1, x: 5 }}
                        whileInView={{ opacity: 2, scale: 1 }}
                    >
                        <TextWrapper>
                            <Bio variant="subtitleMD">{info.bio}</Bio>
                            <Info variant="subtitleMD">
                                <span>Name:</span> {info.fullName}
                            </Info>
                            <Info variant="subtitleMD">
                                <span>Age:</span> {info.age}
                            </Info>
                            <Info variant="subtitleMD">
                                <span>Email:</span> {info.email}
                            </Info>
                            <Info variant="subtitleMD">
                                <span>Phone:</span> {info.phone}
                            </Info>
                        </TextWrapper>
                    </motion.div>

                    <Buttons>Contact Me</Buttons>
                </AboutTextWrapper>
            </AboutContent>
        </BaseContainer>
    );
};

export { About };
