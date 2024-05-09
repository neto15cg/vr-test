import styled from 'styled-components';

export const CardWrapper = styled.button`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  background-color: #fff;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
    height: 200px;
  }
`;

export const CardInfo = styled.div`
  padding: 16px 20px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  color: #000;
  font-weight: 800;
  text-align: left;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  color: #7a6e6e;
  text-align: left;
`;

export const CardPrice = styled.div`
  font-size: 18px;
  color: #000;
  text-align: left;
`;
