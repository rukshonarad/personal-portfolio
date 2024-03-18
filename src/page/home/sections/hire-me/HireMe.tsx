import { useState } from "react";
import { Button, Input, Typography } from "../../../../design-system";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../../../components";

const Form = styled.form`
    display: grid;
    gap: var(--space-20);

    margin: 0 auto;
    .full__name,
    .phone__number,
    .email,
    .textarea,
    .button {
        grid-column: 2/ 3;
    }
`;
const ContainerWrapper = styled(Container)`
    display: flex;
    position: relative;
    padding-top: 22rem;

    background-color: var(--primary-25);
`;
const ContainerHolder = styled.div`
    display: flex;
`;
const FormWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const InfoWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const Header = styled(Typography)`
    margin-bottom: var(--space-40);
`;
const Buttons = styled(Button)`
    display: flex;
    margin-bottom: var(--space-40);
    margin: 0 auto;
`;

const HireMe = () => {
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [textArea, setTextArea] = useState<string>("");

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const handleOnChangePhoneNumber = (value: string) => {
        setPhoneNumber(value);
    };

    const handleOnChangeFullName = (value: string) => {
        setFullName(value);
    };

    const handleOnChangeTextArea = (value: string) => {
        setTextArea(value);
    };

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const isFormSubmittable = phoneNumber && fullName && email && textArea;

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);
            setIsFormSubmitting(false);
            setPhoneNumber("");
            setFullName("");
            setEmail("");
            setTextArea("");
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
            }
        }
    };

    return (
        <ContainerWrapper>
            <ContainerHolder>
                <InfoWrapper>
                    <motion.div
                        initial={{ opacity: 1, scale: 0.5 }}
                        transition={{ duration: 2 }}
                        animate={{ opacity: 1, x: 10, y: 10 }}
                        whileInView={{ opacity: 2, scale: 1 }}
                    >
                        <Header variant="h3" weight="semibold">
                            Hire Me
                        </Header>
                        <Typography variant="paragraphSM">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Excepturi minus deleniti earum odio adipisci
                            repudiandae modi praesentium inventore dignissimos
                            eveniet? Adipisci animi autem sit velit repudiandae
                            quibusdam vitae culpa eum.
                        </Typography>
                    </motion.div>
                </InfoWrapper>
                <FormWrapper>
                    <motion.div
                        initial={{ opacity: 1, scale: 0.5 }}
                        transition={{ duration: 2 }}
                        animate={{ opacity: 1, x: 10, y: 10 }}
                        whileInView={{ opacity: 2, scale: 1 }}
                    >
                        <Form onSubmit={sendMessage}>
                            <Input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={handleOnChangeFullName}
                                shape="rounded"
                                size="lg"
                                className="full__name"
                                disabled={isFormSubmitting}
                            />
                            <Input
                                type="tel"
                                placeholder="(123)456-7890"
                                value={phoneNumber}
                                onChange={handleOnChangePhoneNumber}
                                shape="rounded"
                                size="lg"
                                className="phone__number"
                                disabled={isFormSubmitting}
                            />

                            <Input
                                type="email"
                                placeholder="a@example.com"
                                value={email}
                                onChange={handleOnChangeEmail}
                                shape="rounded"
                                size="lg"
                                className="email"
                                disabled={isFormSubmitting}
                            />
                            <Input
                                type="textarea"
                                placeholder="Message"
                                value={textArea}
                                onChange={handleOnChangeTextArea}
                                shape="rounded"
                                size="lg"
                                className="textarea"
                                disabled={isFormSubmitting}
                            />

                            <Buttons
                                className="button"
                                // disabled={isFormSubmitting || !isFormSubmittable}
                            >
                                Send Message
                            </Buttons>
                        </Form>
                    </motion.div>
                </FormWrapper>
            </ContainerHolder>
        </ContainerWrapper>
    );
};

export { HireMe };
