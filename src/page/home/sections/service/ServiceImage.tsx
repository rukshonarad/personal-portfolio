import forward from "../../../../assets/forward 1.png";
import upload from "../../../../assets/upload 1.png";
import designe from "../../../../assets/img.png";
import infinite from "../../../../assets/infinite 1.png";

import styled from "styled-components";
import { Typography } from "../../../../design-system/Typography";
const ImageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    gap: var(--space-50);
`;
const ImageContainer = styled.div`
    text-align: center;

    img {
        width: 100px;
        gap: var(--space-20);
    }
`;

const ServiceImage = () => {
    return (
        <ImageWrapper>
            <ImageContainer>
                <img src={designe} alt="Forward" />
                <Typography variant="paragraphSM" align="center">
                    Create an Account
                </Typography>
            </ImageContainer>
            <ImageContainer>
                <img src={upload} alt="Upload" />
                <Typography variant="paragraphSM" align="center">
                    Submit Desige Request
                </Typography>
            </ImageContainer>
            <ImageContainer>
                <img src={infinite} alt="Designe" />
                <Typography variant="paragraphSM" align="center">
                    Desigen Until You Happy
                </Typography>
            </ImageContainer>
            <ImageContainer>
                <img src={forward} alt="Infinite" />
                <Typography variant="paragraphSM" align="center">
                    Cancel or pause any Time
                </Typography>
            </ImageContainer>
        </ImageWrapper>
    );
};

export { ServiceImage };
