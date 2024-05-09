import React from 'react';

import { BodyStyle, DrawerContent, DrawerOverlay } from './drawer.styles';
import { CloseIcon } from '../../icons/close';

const Drawer = ({
  children,
  contentPosition = 'right',
  height = '100%',
  onClose,
  visible,
  width = '100%',
  ...props
}) => {
  return (
    <DrawerOverlay
      visible={visible.toString()}
      onClick={onClose}
      className="drawer-overlay"
    >
      <BodyStyle visible={visible.toString()} />
      <DrawerContent
        data-testid="drawer-content"
        height={height}
        width={width}
        visible={visible.toString()}
        position={contentPosition}
        onClick={(e) => {
          e.stopPropagation();
        }}
        {...props}
      >
        <div className="close-button-container">
          <button className="close-button" onClick={onClose}>
            <CloseIcon width={16} height={16} />
          </button>
        </div>
        {children}
      </DrawerContent>
    </DrawerOverlay>
  );
};

export { Drawer };
