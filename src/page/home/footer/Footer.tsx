import styled from "styled-components";
import Icon from "../../components/IconLinks";
import logo from "../../../assets/mainLogo.png";
const links = [
    { text: "Home", link: "#" },
    { text: "About", link: "#about" },
    { text: "Projects", link: "#projects" },
    { text: "Experience", link: "#experience" },
    { text: "Hire Me", link: "#hireMe" }
];
const StyledLink = styled.nav`
    align-items: center;
    a {
        color: var(--jaguar-700);
        font-weight: var(--font-weight-800);
        margin-right: 4rem;
        font-size: var(--font-size-14);
    }
`;
const FooterBase = styled.footer`
    align-items: center;
    display: flex;
    gap: 15rem;
    max-width: 142rem;
    min-width: 37rem;
    padding: var(--space-20);
    background-color: var(--white);
`;

const Logo = styled.div`
    img {
        height: 5rem;
        width: 5rem;
        margin-left: 20rem;
    }
`;
const Footer = () => {
    return (
        <FooterBase>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <StyledLink>
                {links.map((link, index) => (
                    <a key={index} href={link.link}>
                        {link.text}
                    </a>
                ))}
            </StyledLink>
        </FooterBase>
    );
};

export { Footer };
