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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ContactWrapper = styled.section`
  background: linear-gradient(135deg, #696FC7 0%, #A7AAE1 25%, #F5D3C4 50%, #F2AEBB 75%, #696FC7 100%);
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
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const ContactContainer = styled.div`
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
  animation: ${fadeInUp} 0.8s ease-out;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  
  span {
    color: #F5D3C4;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactInfo = styled.div`
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;
  
  h3 {
    color: white;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  > p {
    color: #f7fafc;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 99, 71, 0.05);
    transform: translateX(8px);
  }
`;

export const ContactIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  width: 50px;
  height: 50px;
  background: rgba(255, 99, 71, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 99, 71, 0.2);
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  
  strong {
    color: white;
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  
  span {
    color: rgba(104, 144, 237, 0.86);
    font-size: 0.9rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  background: rgba(255, 99, 71, 0.1);
  color: #ff6347;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 99, 71, 0.2);
  
  &:hover {
    background: #ff6347;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 99, 71, 0.3);
  }
`;

export const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 99, 71, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  animation: ${slideInRight} 0.8s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    padding: 2rem;
    display: none;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #888;
  }
  
  &:focus {
    outline: none;
    border-color: #ff6347;
    box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.1);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #888;
  }
  
  &:focus {
    outline: none;
    border-color: #ff6347;
    box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.1);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(45deg, #ff6347, #ff8c69);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 99, 71, 0.3);
  width: 100%;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 99, 71, 0.4);
    background: linear-gradient(45deg, #ff8c69, #ff6347);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
  }
`;