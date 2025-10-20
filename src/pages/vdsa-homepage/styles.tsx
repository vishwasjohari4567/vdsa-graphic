import styled from 'styled-components';

export const AppWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  padding: 40px 20px 20px;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
`;

// styles/App.styles.ts

export const Main = styled.main`
  min-height: 100vh;
  background: linear-gradient(135deg, #696FC7 0%, #A7AAE1 25%, #F5D3C4 50%, #F2AEBB 75%, #696FC7 100%);
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 2rem;
`;

export const Title = styled.h2`
  color: #2d3748;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);

  span {
    color: #696FC7;
  }
`;

export const Description = styled.p`
  color: #4a5568;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
`;
