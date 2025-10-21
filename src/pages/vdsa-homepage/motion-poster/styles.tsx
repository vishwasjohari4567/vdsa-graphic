import styled from 'styled-components';

export const Section = styled.section`
  min-height: calc(100vh - 100px);
  padding: 4rem 2rem;
  text-align: center;
  position: relative;  // Ensures elements can be positioned correctly

  @media (max-width: 900px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #696FC7;
  margin-bottom: 2rem;  // Adjust the space between title and video
  position: relative;
  z-index: 2;  // Ensures the title appears on top of the video

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

export const VideoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(45deg, #696FC7, #F2AEBB);
    filter: blur(30px);
    z-index: -1;
    opacity: 0.5;
    border-radius: 20px;
    transform: rotate(2deg);
  }
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  border: 3px solid #F2AEBB;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(242, 174, 187, 0.5),
              0 0 40px rgba(105, 111, 199, 0.3);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.03) rotate(0.5deg);
  }
`;
