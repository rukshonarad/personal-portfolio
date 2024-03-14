import styled from "styled-components";

import { Button } from "../../../../design-system";
import { Typography } from "../../../../design-system/Typography";
const links = [
    { text: "Home", link: "https://google.com" },
    { text: "About", link: "https://facebook.com" },
    { text: "Projects", link: "" },
    { text: "Contact Me", link: "https://facebook.com" }
];
const StyledLink = styled.nav`
    color: var(--jaguar-900);
    font-weight: var(--font-weight-500);
    a {
        color: var(--jaguar-900);
        font-weight: var(--font-weight-800);
        margin-right: 3rem;
        font-size: var(--font-size-20);
    }
`;
const HeaderBase = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.5px solid black;
    width: 100%;
    padding: 2rem 5rem;
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 142rem;
    background-color: white;
    border-radius: var(--space-40);
    z-index: 1000;
`;

const Buttons = styled.div`
    display: flex;
`;

const TopNavigation = () => {
    return (
        <HeaderBase>
            <Typography variant="paragraphLG" weight="bold">
                Portfolio
            </Typography>
            <StyledLink>
                {links.map((link, index) => (
                    <a key={index} href={link.link}>
                        {link.text}
                    </a>
                ))}
            </StyledLink>
            <Buttons>
                <Button
                    variant="outlined"
                    size="sm"
                    shape="rounded"
                    onClick={() => {}}
                >
                    Hire Me
                </Button>
            </Buttons>
        </HeaderBase>
    );
};

export { TopNavigation };
