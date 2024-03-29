import styled from "styled-components";

import logo from "../../../assets/mainLogo.png";

import FileViewer from "./viewFile";

const links = [
    { text: "Home", link: "#home" },
    { text: "About", link: "#about" },
    { text: "Experience", link: "#experience" },
    { text: "Projects", link: "#projects" },
    { text: "Contact", link: "#contact" }
];

const StyledLink = styled.nav`
    color: var(--jaguar-700);
    font-weight: var(--font-weight-500);
    a {
        margin: 0 auto;
        cursor: pointer;
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
    width: 80%;
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

const Logo = styled.div`
    img {
        height: 5rem;
        width: 5rem;
        @media (max-width: 70em) {
            height: 3rem;
            width: 3rem;
            margin-left: 3rem;
        }
    }
`;

const TopNavigation = () => {
    const smoothScrollTo = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <HeaderBase>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <StyledLink>
                {links.map((link, index) => (
                    <a
                        key={index}
                        onClick={() => smoothScrollTo(link.link.substring(1))}
                    >
                        {link.text}
                    </a>
                ))}
            </StyledLink>

            <FileViewer />
        </HeaderBase>
    );
};

export { TopNavigation };
