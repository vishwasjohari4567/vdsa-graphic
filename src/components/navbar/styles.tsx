import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background: rgba(105, 111, 199, 0.15);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 20px;
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  margin: 0 2rem 2rem 2rem;
  box-shadow: 0 8px 32px rgba(105, 111, 199, 0.1);
`;

export const CategoryButton = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? '#696FC7' : 'rgba(255, 255, 255, 0.2)')};
  color: ${({ active }) => (active ? 'white' : '#2d3748')};
  border: 1px solid ${({ active }) => (active ? '#696FC7' : 'rgba(255, 255, 255, 0.3)')};
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: #696FC7;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(105, 111, 199, 0.3);
  }
  
  &:focus {
    outline: 2px solid #696FC7;
    outline-offset: 2px;
  }
`;
