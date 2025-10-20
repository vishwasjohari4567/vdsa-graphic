import styled from 'styled-components';
import { fadeInUp, glow } from '../common/animation';


export const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: #ffffff;
  border-bottom: 1px solid #1a1a2e;
  padding: 0.5rem 4rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
  animation: ${fadeInUp} 0.8s ease-out;

   @media (max-width: 768px) {
   justify-content: center;
  }
`;


export const LogoImage = styled.img`
  height: 64px;
  margin-right: 10px;
`;

export const Logo = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${glow} 3s ease-in-out infinite;
  
  &:hover {
    transform: scale(1.1);
    animation-play-state: paused;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: #3a3f7a; // soft
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  font-weight: 400;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #8b92fd; // 👈 underlined on hover
    transition: width 0.3s ease;
  }

  &:hover {
    color: #8b92fd;
    font-weight: 500;

    &::after {
      width: 100%;
    }
  }
`;
