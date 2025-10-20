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

const progressAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: var(--progress-width);
  }
`;

export const SkillsWrapper = styled.section`
  background: linear-gradient(135deg, #F2AEBB 0%, #F5D3C4 25%, #A7AAE1 50%, #696FC7 75%, #F2AEBB 100%);
  min-height: 100vh;
  padding: 5rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  
  span {
    color: #F5D3C4;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const SkillCategory = styled.div<{ delay: number }>`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  animation: ${fadeInUp} 0.8s ease-out ${props => props.delay}s both;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 32px rgba(105, 111, 199, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(105, 111, 199, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const CategoryTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: #F5D3C4;
    border-radius: 2px;
  }
`;

export const SkillItem = styled.div<{ delay: number }>`
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 0.6s ease-out ${props => props.delay}s both;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SkillName = styled.div`
  color: white;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const SkillBar = styled.div`
  background: rgba(255, 255, 255, 0.1);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

export const SkillProgress = styled.div<{ level: number; delay: number }>`
  height: 100%;
  background: linear-gradient(90deg, #696FC7, #A7AAE1);
  border-radius: 4px;
  position: relative;
  --progress-width: ${props => props.level}%;
  animation: ${progressAnimation} 1.5s ease-out ${props => props.delay}s both;
  box-shadow: 0 2px 8px rgba(105, 111, 199, 0.3);
  
  &::after {
    content: '${props => props.level}%';
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }
`;
