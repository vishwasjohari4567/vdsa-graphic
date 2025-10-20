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
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`;

interface ImageBoxProps {
  $landscape?: boolean;
}

export const ImageBox = styled.div<ImageBoxProps>`
  flex: 1 1 auto;
  max-width: ${({ $landscape }) => ($landscape ? '600px' : '300px')};
  aspect-ratio: ${({ $landscape }) => ($landscape ? '16 / 9' : '1 / 1')};
  overflow: hidden;
  border-radius: 16px;
  border: 3px solid #FFD700; /* Gold border */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 0 10px rgba(255, 215, 0, 0.4), 
      0 0 20px rgba(255, 215, 0, 0.6), 
      0 0 30px rgba(255, 215, 0, 0.8); /* Glowing effect */

  }

  @media (max-width: 768px) {
    max-width: 100%;
    aspect-ratio: auto;

    border: none; /* Remove border on mobile */
    box-shadow: none; /* Remove box-shadow on mobile */
    &:hover {
      transform: none;
      box-shadow: none;

      img {
        transform: none;
      }
    }

    img {
      transform: none;
    }
  }
`;


