import styled, { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const glow = keyframes`
  0% {
    text-shadow: 0 0 10px #696FC7;
  }
  50% {
    text-shadow: 0 0 20px #696FC7, 0 0 30px #696FC7;
  }
  100% {
    text-shadow: 0 0 10px #696FC7;
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;