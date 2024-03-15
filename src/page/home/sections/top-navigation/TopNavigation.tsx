import styled from "styled-components";
import logo from "../../../../assets/logo.png";
import { Button } from "../../../../design-system";
import { Typography } from "../../../../design-system/Typography";
const links = [
    { text: "Home", link: "https://google.com" },
    { text: "About", link: "https://facebook.com" },
    { text: "Projects", link: "" },
    { text: "Get In Touch", link: "https://facebook.com" }
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
    width: 76%;
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 142rem;
    background-color: white;
    border-radius: var(--border-radius-48);
    z-index: 1000;
    min-width: 37rem;
    padding: var(--space-24);
    background-color: var(--white);
    box-shadow: var(--shadow-3xl);
    transition: all 0.5s;
`;

const Buttons = styled.div`
    display: flex;
`;

const MainLogo = styled.div`
    img {
        height: var(--space-48);
        width: var(--space-48);
        margin-left: var(--space-30);
    }
`;
const TopNavigation = () => {
    return (
        <HeaderBase>
            <MainLogo>
                <img src={logo} alt="logo" />
            </MainLogo>
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
                    size="md"
                    shape="rounded"
                    onClick={() => {}}
                >
                    Download CV
                </Button>
            </Buttons>
        </HeaderBase>
    );
};

export { TopNavigation };
