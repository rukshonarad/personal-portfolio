import React from "react";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";

import styled, { keyframes } from "styled-components";
import { Services } from "./sections/service/Services";
import { ServiceDescription } from "./sections/service/ServiceDescription";
import waveLine from "../../assets/waveborder.png";
const Base = styled.div`
    max-width: 192rem;
    margin: 0 auto;
    background-color: var(--dodger-blue-100);
    height: 165rem;
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
            <ServiceDescription />
            <WaveLine src={waveLine} alt="" />
        </Base>
    );
};

export { HomePage };
