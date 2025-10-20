import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 16px;
  padding: 20px;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease;
  &:hover,
  &:focus {
    outline: none;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgb(0 0 0 / 0.2);
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.25s ease forwards;
  z-index: 1000;
`;

export const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.4);
  user-select: none;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  background: #fff;
  border: none;
  padding: 8px 12px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.2);
  z-index: 1001;
  transition: background-color 0.2s ease;
  &:hover,
  &:focus {
    background: #eee;
    outline: none;
  }
`;
