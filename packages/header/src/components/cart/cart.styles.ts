import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const CartItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  height: 120px;

  h3 {
    font-size: 16px;
    color: #000;
    font-weight: 800;
    text-align: left;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const ImageContainer = styled.div`
  img {
    width: 120px;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const CartItemInfo = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Resume = styled.div`
  margin: 32px 0;

  span {
    font-size: 16px;
    font-weight: 800;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    cursor: pointer;
    padding: 16px 32px;
    border: none;
    border-radius: 8px;
    font-weight: 800;
  }

  .main-button {
    background-color: #00d844;
    border-color: transparent;
    color: #fff;
    font-size: 16px;
  }

  .secondary-button {
    background-color: rgba(0, 216, 68, 0.15);
    border-color: transparent;
    color: #00d844;
    font-size: 16px;
  }
`;
