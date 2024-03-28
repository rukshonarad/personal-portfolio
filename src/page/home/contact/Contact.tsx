import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Button, Input, Typography } from "../../../design-system";
import { Container } from "../../components";
import IconLink from "../../components/IconLinks";
import emailjs from "emailjs-com";
import footer from "../../../assets/footer.png";

const BaseContainer = styled(Container)`
    padding-top: 20rem;
    padding-bottom: 40rem;
    background-image: url(${footer});
    background-size: cover;
    background-position: center;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: var(--space-60);
`;

const Title = styled(Typography)`
    color: var(--jaguard-50);
    text-align: left;
    margin-bottom: var(--space-28);
`;

const ContactInfoWrapper = styled.div`
    width: 100%;
    padding: var(--space-32);
    border-radius: var(--border-radius-8);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-8);
`;

const StyledLink = styled.a`
    font-size: var(--font-size-12);
    line-height: var(--line-height-18);
    color: var(--jaguard-100);
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-20);
`;

const ContactForm = styled.form`
    width: 100%;
    margin: 0 auto;
    padding: var(--space-32) var(--space-120);
    border-radius: var(--border-radius-8);
    > *:not(:last-child) {
        margin-bottom: var(--space-20);
    }
`;

const StyledButton = styled(Button)`
    margin-left: 7rem;
`;

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [message, setMessage] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const form = useRef<HTMLFormElement | null>(null);

    const handleOnChangeName = (value: string) => {
        setName(value);
    };
    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangeTel = (value: string) => {
        setTel(value);
    };
    const handleOnChangeMessage = (value: string) => {
        setMessage(value);
    };

    const isFormSubmittable = name && email && tel && message;

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, name, tel, message);

        if (form.current && isFormSubmittable) {
            setIsFormSubmitting(true);

            const mailOptions = {
                serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
                templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                userID: process.env.REACT_APP_EMAILJS_USER_ID,
                from_name: name,
                reply_to: email,
                message: message
            };

            try {
                await emailjs.send(
                    "default_service",
                    "template_name",
                    mailOptions
                );
                setIsFormSubmitting(false);
                setName("");
                setEmail("");
                setTel("");
                setMessage("");
                console.log("Email sent successfully!");
            } catch (error) {
                setIsFormSubmitting(false);
                setIsError(true);
                console.error("Error sending email:", error);
            }
        }
    };

    const githubLink = process.env.REACT_APP_GITHUB_LINK || "";
    const linkedinLink = process.env.REACT_APP_LINKEDIN_LINK || "";

    return (
        <div>
            <BaseContainer>
                <Title variant="h3" weight="semibold">
                    Get In Touch
                </Title>
                <Content>
                    <ContactInfoWrapper>
                        <TextWrapper>
                            <Typography variant="h6" weight="bold">
                                Say Hello!
                            </Typography>
                            <Typography variant="subtitleMD" weight="normal">
                                Have a project in mind or just have a question?
                                Let's connect and make it happen together!
                            </Typography>
                            <Typography variant="paragraphSM" weight="bold">
                                Email
                            </Typography>
                            <StyledLink href="mailto:rukshona.rad@gmail.com">
                                rukshona.rad@gmail.com
                            </StyledLink>

                            <Typography variant="paragraphMD" weight="semibold">
                                Phone
                            </Typography>
                            <StyledLink href="tel:+9293785352">
                                +1 929 378-5352
                            </StyledLink>
                        </TextWrapper>

                        <SocialMedia>
                            <IconLink
                                href={linkedinLink}
                                iconName="linkdin-icon"
                            />
                            <IconLink
                                href={githubLink}
                                iconName="github-icon"
                            />
                        </SocialMedia>
                    </ContactInfoWrapper>
                    <ContactForm ref={form} onSubmit={sendEmail}>
                        <Input
                            name="user_name"
                            type="text"
                            placeholder="Your Name"
                            shape="circle"
                            size="md"
                            value={name}
                            onChange={handleOnChangeName}
                        />

                        <Input
                            name="user_email"
                            type="email"
                            placeholder="Your Email"
                            shape="circle"
                            size="md"
                            value={email}
                            onChange={handleOnChangeEmail}
                        />
                        <Input
                            name="user_tel"
                            type="tel"
                            placeholder="Your Phone"
                            shape="circle"
                            size="md"
                            value={tel}
                            onChange={handleOnChangeTel}
                        />
                        <Input
                            name="message"
                            type="textarea"
                            placeholder="How can I help you?"
                            shape="circle"
                            size="md"
                            value={message}
                            onChange={handleOnChangeMessage}
                        />
                        <StyledButton size="md" shape="rounded" fullWidth>
                            {isFormSubmitting ? "Sending..." : "Send Message"}
                        </StyledButton>
                    </ContactForm>
                </Content>
            </BaseContainer>
        </div>
    );
};

export { Contact };
export {};
