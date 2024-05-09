import React, { useEffect, useState } from 'react';

import {
  CartButton,
  HeaderContainer,
  HeaderContent,
  HeaderWrapper,
} from './header.styles';
import type { HeaderProps } from './header.types';
import { Cart } from '../../components/cart/cart';
import { CartIcon } from '../../icons/cart';
import { VRLogo } from '../../icons/vrLogo';

const Header = ({ cart, onRemoveItem }: HeaderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenCart = () => {
    if (cart.length > 0) {
      setModalIsOpen(true);
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      setModalIsOpen(true);
    }

    if (cart.length === 0) {
      setModalIsOpen(false);
    }
  }, [cart]);

  return (
    <>
      <Cart
        isOpenModal={modalIsOpen}
        onOpenModal={(opened) => setModalIsOpen(opened)}
        cart={cart}
        onRemoveItem={onRemoveItem}
      />
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderContent>
            <div data-testid="vr-logo">
              <VRLogo />
            </div>
            <CartButton count={cart.length} onClick={handleOpenCart}>
              <CartIcon width={32} height={32} />
            </CartButton>
          </HeaderContent>
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
};

export { Header };
