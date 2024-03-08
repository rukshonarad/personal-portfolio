import styled from "styled-components";
import { NavigationLink } from "./NavigationLinks";
import { Button } from "../../../../design-system";

const links = [
    { text: "About", link: "https://google.com" },
    { text: "Work", link: "https://facebook.com" },
    { text: "Pricing", link: "" },
    { text: "FAQ's", link: "https://facebook.com" }
];

const HeaderBase = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    max-width: var(--space);
    padding: 2rem 15.2rem;
    position: sticky;

    border-radius: 3rem;
    margin-top: var(--space-60);
`;

const NavigationLinks = styled.header`
    display: flex;
    gap: var(--space-40);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const TopNavigation = () => {
    return (
        <HeaderBase>
            {/* <NavigationLinks>
                {links.map((link, index) => (
                    <NavigationLink
                        key={index}
                        linkText={link.text}
                        linkTo={link.link}
                    />
                ))}
            </NavigationLinks> */}
            <Buttons>
                <Button
                    variant="outlined"
                    size="md"
                    shape="rounded"
                    onClick={() => {}}
                >
                    Sign Up
                </Button>
            </Buttons>
        </HeaderBase>
    );
};

export { TopNavigation };
