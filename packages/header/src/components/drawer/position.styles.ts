import { css } from 'styled-components';

interface IDrawerPosition {
  visible: string;
  width: string;
  height: string;
}

const DrawerPosition = {
  left: css<IDrawerPosition>`
    height: 100%;
    left: 0px;
    width: ${({ visible, width }) => (visible ? width : '0')};
  `,
  right: css<IDrawerPosition>`
    height: 100%;
    right: 0px;
    width: ${({ visible, width }) => (visible ? width : '0')};
  `,
  top: css<IDrawerPosition>`
    height: ${({ height, visible }) => (visible ? height : '0')};
    top: 0;
    width: 100%;
  `,
  bottom: css<IDrawerPosition>`
    bottom: 0;
    height: ${({ height, visible }) => (visible ? height : '0')};
    width: 100%;
  `,
};

export default DrawerPosition;
