import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  min-height: calc(100vh - 100px);
  background-color: white;
  padding: 4rem 2rem;
  text-align: center;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #696FC7;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #F2AEBB;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  animation: ${fadeInUp} 1s ease forwards;
`;

interface ImageBoxProps {
  $landscape?: boolean;
}

export const ImageBox = styled.div<ImageBoxProps>`
  flex: 1 1 auto;
  max-width: ${({ $landscape }) => ($landscape ? '500px' : '300px')};
  aspect-ratio: ${({ $landscape }) => ($landscape ? '16 / 9' : '1 / 1')};
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
  transition: transform 0.4s ease, box-shadow 0.4s ease, filter 0.4s ease;
  border: 1px solid green;

  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: ${({ $landscape }) => ($landscape ? '0.2s' : '0s')};

  box-shadow: 0 8px 24px rgba(105, 111, 199, 0.1); // Soft bluish shadow

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(30%) contrast(1);
    transition: transform 0.4s ease, filter 0.4s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(105, 111, 199, 0.25);

    img {
      filter: grayscale(0%) contrast(1.05) saturate(1.2);
      transform: scale(1.03);
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    aspect-ratio: auto;
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }

    img {
      filter: none;
      transform: none;
    }
  }
`;
