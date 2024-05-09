import React, { useMemo } from 'react';

import {
  ButtonsContainer,
  CartContainer,
  CartItem,
  CartItemInfo,
  ImageContainer,
  RemoveButton,
  Resume,
} from './cart.styles';
import type { CartProps } from './cart.types';
import { TrashIcon } from '../../icons/trash';
import { Drawer } from '../drawer/drawer';

const Cart = ({
  isOpenModal = false,
  onOpenModal,
  cart,
  onRemoveItem,
}: CartProps) => {
  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleCloseModal = () => {
    onOpenModal(false);
  };

  const groupCart = useMemo(() => {
    return cart.reduce(function (r, a) {
      r[a.id] = r[a.id] || [];
      r[a.id].push(a);
      return r;
    }, Object.create(null));
  }, [cart]);

  return (
    <Drawer visible={isOpenModal} width="550px" onClose={handleCloseModal}>
      <CartContainer>
        <h2>Carrinho de compras</h2>
        {Object.keys(groupCart).map((itemId, index) => {
          const item = groupCart[itemId][0];
          const quantity = groupCart[itemId].length;
          return (
            <CartItem key={`cart-item-${item.id}-${index}`}>
              <RemoveButton
                onClick={() => onRemoveItem(item.id)}
                data-testid={`remove-button-${item.title}`}
              >
                <TrashIcon width={18} height={18} stroke="red" />
              </RemoveButton>
              <ImageContainer>
                <img src={item.thumbnail} alt={item.title} />
              </ImageContainer>
              <CartItemInfo>
                <h3>{item.title}</h3>
                <div>
                  {quantity} x {formatCurrency.format(item.price)}
                </div>
              </CartItemInfo>
            </CartItem>
          );
        })}
      </CartContainer>
      <Resume>
        Total:{' '}
        <span>
          {formatCurrency.format(
            cart.reduce((acc, item) => acc + item.price, 0)
          )}
        </span>
      </Resume>
      <ButtonsContainer>
        <button onClick={handleCloseModal} className="secondary-button">
          Continuar comprando
        </button>
        <button className="main-button">Finalizar compra</button>
      </ButtonsContainer>
    </Drawer>
  );
};

export { Cart };
