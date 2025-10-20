import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background-color: white;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 300px;
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
  
  &:focus {
    outline: 3px solid #ff6347;
    outline-offset: 2px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectInfo = styled.div`
  color: white;
  width: 100%;
  transform: translateY(20px);
  transition: transform 0.3s ease 0.1s;
  
  ${ProjectCard}:hover & {
    transform: translateY(0);
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: #ff6347;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0 0 1rem 0;
  opacity: 0.9;
`;

export const ProjectTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const Tool = styled.span`
  background: rgba(255, 99, 71, 0.2);
  color: #ff6347;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 99, 71, 0.3);
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ProjectLink = styled.button`
  background: #ff6347;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: #ff8c69;
    transform: translateY(-2px);
  }
`;

// Modal styles
export const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease forwards;
  z-index: 1000;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  max-width: 90vw;
  max-height: 80vh;
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  animation: ${scaleIn} 0.4s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 95vw;
    max-height: 90vh;
  }
`;

export const ModalImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

export const ModalInfo = styled.div`
  width: 40%;
  padding: 2rem;
  color: white;
  overflow-y: auto;
  
  h2 {
    color: #ff6347;
    margin: 0 0 1rem 0;
    font-size: 1.8rem;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #ccc;
  }
  
  > div {
    margin-bottom: 1rem;
    
    strong {
      color: #ff6347;
      display: block;
      margin-bottom: 0.5rem;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1001;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 99, 71, 0.2);
    transform: rotate(90deg);
  }
  
  &:focus {
    outline: 2px solid #ff6347;
  }
`;