import styled from "styled-components";
import Icon from "../../../components/IconLinks";
import { Button } from "../../../../design-system";

const links = [
    { text: "Home", link: "#" },
    { text: "About", link: "#about" },
    { text: "Projects", link: "#projects" },
    { text: "Experience", link: "#experience" },
    { text: "Hire Me", link: "#hireMe" }
];
const StyledLink = styled.nav`
    color: var(--jaguar-700);
    font-weight: var(--font-weight-500);
    a {
        margin: 0 auto;
        color: var(--jaguar-900);
        font-weight: var(--font-weight-800);
        margin-right: 4rem;
        font-size: var(--font-size-14);
        &:hover {
            transform: scale(1.1);
        }
    }
`;
const HeaderBase = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.5px solid black;
    width: 76%;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 142rem;
    background-color: white;
    border-radius: var(--border-radius-48);
    z-index: 1000;
    min-width: 37rem;
    padding: var(--space-20);
    background-color: var(--white);
    box-shadow: var(--shadow-3xl);
    transition: all 0.5s;
`;

const LogoMain = styled(Icon)`
    height: 10rem !important;
    width: 10rem !important;
    margin-bottom: 10rem;
`;
const TopNavigation = () => {
    return (
        <HeaderBase>
            <LogoMain iconName="logo" size="6rem"></LogoMain>
            <StyledLink>
                {links.map((link, index) => (
                    <a key={index} href={link.link}>
                        {link.text}
                    </a>
                ))}
            </StyledLink>

            <Button
                variant="outlined"
                size="lg"
                shape="rounded"
                onClick={() => {}}
            >
                Download CV
            </Button>
        </HeaderBase>
    );
};

export { TopNavigation };
