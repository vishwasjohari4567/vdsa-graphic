import styled from 'styled-components';

export const Section = styled.section`
  min-height: calc(100vh - 100px);
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
    background-color: #696FC7;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const ImageBox = styled.div`
  flex: 1 1 auto;
  max-width: 360px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;

  position: relative;
  background-color: transparent; /* ✅ No background */


  img {
    width: 100%;
    height: 100%;
    display: block;               /* ✅ Removes inline spacing */
    object-fit: cover;            /* ✅ Fully covers the container */
    filter: grayscale(20%) brightness(0.95);
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 18px rgba(105, 111, 199, 0.2);

    img {
      filter: grayscale(0%) brightness(1.05) contrast(1.1);
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
    }

    img {
      filter: none;
      transform: none;
    }
  }
`;



