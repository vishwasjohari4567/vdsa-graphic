import styled from 'styled-components';
import { fadeInUp, slideInLeft } from '../common/animation';

export const ContactWrapper = styled.section`
  background: linear-gradient(135deg, #696FC7 0%, #A7AAE1 25%, #F5D3C4 50%, #F2AEBB 75%, #696FC7 100%);
  padding: 5rem 2rem;
  position: relative;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: white;
  margin-bottom: 2.5rem;
  font-weight: 700;
  animation: ${fadeInUp} 0.8s ease-out;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);

  span {
    color: #F5D3C4;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;
`;

export const ContactInfo = styled.div`
  h3 {
    color: white;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  > p {
    color: #f7fafc;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 500px;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
`;

export const ContactIcon = styled.div`
  font-size: 1.4rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    color: white;
    font-size: 0.95rem;
    margin-bottom: 0.2rem;
  }

  span {
    color: #ffffffe6;
    font-size: 0.9rem;
    word-break: break-word;
  }
`;
