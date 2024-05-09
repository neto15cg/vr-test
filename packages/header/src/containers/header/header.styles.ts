import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #00d844;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: #0000000f 0 6px 24px;
  position: sticky;
  right: 0;
  top: 0;
  transition: all 400ms ease;
  z-index: 2;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 40px;
  width: 100%;
  max-width: 1440px;
`;

export const CartButton = styled.button<{ count: number }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  &::before {
    content: ${({ count }) => `'${count}'`};
    position: absolute;
    top: -6px;
    right: -6px;
    background-color: red;
    font-size: 10px;
    color: #ffffff;
    font-weight: 600;
    border-radius: 50%;
    padding: 3px 6px;
  }
`;
