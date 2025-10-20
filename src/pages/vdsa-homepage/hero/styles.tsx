import styled from 'styled-components';
import { fadeInUp, float } from '../../../components/common/animation';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh);
   padding: 2rem 4rem;

  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  animation: ${fadeInUp} 1s ease-out 0.3s both;

  p {
    font-size: 1.2rem;
    color: #4a5568;
    margin: 2rem 0 3rem 0;
    line-height: 1.6;
    animation: ${fadeInUp} 1s ease-out 0.6s both;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 900px) {
    padding-right: 0;
  }
`;

export const RightImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${fadeInUp} 1s ease-out 0.5s both;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
    margin-top: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);

  span {
    color: #696fc7;
    animation: ${float} 3s ease-in-out infinite;
    display: inline-block;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #4a5568;
  margin-bottom: 2rem;
  font-weight: 400;
  animation: ${fadeInUp} 1s ease-out 0.9s both;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CTAButton = styled.button`
  background: linear-gradient(45deg, #696fc7, #a7aae1);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(105, 111, 199, 0.3);
  animation: ${fadeInUp} 1s ease-out 1.2s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(105, 111, 199, 0.4);
    background: linear-gradient(45deg, #a7aae1, #696fc7);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const StyledImage = styled.img`
   max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

    /* 🔹 Add clip-path here */
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    transition: clip-path 0.4s ease;

    @media (max-width: 768px) {
      clip-path: none;
    }
  }

  @media (max-width: 900px) {
    margin-top: 2rem;
  }
`