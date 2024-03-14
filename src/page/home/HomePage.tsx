import React from "react";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";

import styled, { keyframes } from "styled-components";
import { Services } from "./sections/service/Services";
import { ServiceDescription } from "./sections/service/ServiceDescription";
import waveLine from "../../assets/waveborder.png";
import { ToolsBar } from "./sections/service/serviceImg/ServiceImage";
const Base = styled.div`
    padding-bottom: 10rem;
    max-width: 192rem;
    margin: 0 auto;
    background-color: var(--green-25);
`;

// Keyframes for animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const WaveLine = styled.img`
    width: 131rem;
    height: auto;
`;
// Styled component with custom shape and animation
const CustomShape = styled.div`
    width: 200px;
    height: 200px;
    background-color: #007bff;
    border-radius: 50%;
    animation: ${rotateAnimation} 6s linear infinite;
`;
const TextInside = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
`;
const HomePage = () => {
    return (
        <Base>
            <TopNavigation />
            <Services />
            <ToolsBar />
        </Base>
    );
};

export { HomePage };
