import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component with custom shape and animation
const CustomShape = styled.div`
    width: 200px;
    height: 200px;
    background-color: #007bff;
    border-radius: 50%;
    animation: ${rotateAnimation} 2s linear infinite; // Apply animation
`;

// Component definition
const PortfolioItem = () => {
    return <CustomShape />;
};

export default PortfolioItem;
