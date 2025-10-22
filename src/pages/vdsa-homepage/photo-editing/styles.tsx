import styled from 'styled-components';

export const Section = styled.section`
  min-height: calc(100vh - 100px);
  background-color: white;
  padding: 4rem 2rem;
  text-align: center;

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
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ImageBox = styled.div`
  flex: 1 1 auto;
  max-width: 480px;
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #e0e7ff;
  box-shadow: 0 8px 20px rgba(105, 111, 199, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(10%) brightness(0.95);
    transition: transform 0.4s ease, filter 0.4s ease;
  }

  &:hover {
    transform: scale(1.015);
    transform: translateY(-4px);
    box-shadow: 
      0 0 10px rgba(255, 215, 0, 0.4), 
      0 0 20px rgba(255, 215, 0, 0.6), 
      0 0 30px rgba(255, 215, 0, 0.8); /* Glowing effect */

    img {
      filter: grayscale(0%) brightness(1.05) contrast(1.1);
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    aspect-ratio: auto;
    border: none;
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;

      img {
        transform: none;
        filter: none;
      }
    }

    img {
      filter: none;
    }
  }
`;
