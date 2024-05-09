import styled, { createGlobalStyle } from 'styled-components';

import DrawerPosition from './position.styles';

export const DrawerOverlay = styled.div<{
  visible: string;
  overlaycolor?: string;
}>`
  background-color: ${({ overlaycolor }) =>
    overlaycolor || 'rgba(49, 47, 79, 0.8)'};
  height: 100%;
  left: 0;
  opacity: ${({ visible }) => (visible === 'true' ? 1 : 0)};
  position: fixed;
  top: 0;
  transition: all 250ms ease-in-out;
  visibility: ${({ visible }) => (visible === 'true' ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 3;
`;

export const DrawerContent = styled.aside<{
  visible: string;
  position?: string;
  height?: string;
  width?: string;
}>`
  background-color: white;
  box-sizing: border-box;
  height: 100%;
  opacity: ${({ visible }) => (visible === 'true' ? 1 : 0)};
  overflow-y: auto;
  position: absolute;
  transition: all 250ms ease-in-out;
  z-index: 4;
  padding: 12px 32px;

  .close-button-container {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    width: 100%;
    .close-button {
      align-self: flex-end;
      background-color: transparent;
      border: none;
      color: #8a8a8a;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
      transition: color 250ms ease;
      &:hover {
        color: #0a0a0a;
      }
    }
  }

  ${({ position }) =>
    position ? DrawerPosition[position] : DrawerPosition.right};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const BodyStyle = createGlobalStyle<{ visible: string }>`
  ${({ visible }) => visible === 'true' && `body { overflow: hidden; }`};
`;
