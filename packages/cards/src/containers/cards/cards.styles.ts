import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 14px 40px;
  max-width: 1440px;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
