import React from 'react';

import {
  CardDescription,
  CardInfo,
  CardPrice,
  CardTitle,
  CardWrapper,
  ImageContainer,
} from './card.styles';
import type { CardType } from './card.types';
import type { Product } from '../../services/services.types';

const Card = ({ product, onClick }: CardType) => {
  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleSelectProduct = (selectedProduct: Product) => () => {
    onClick(selectedProduct);
  };

  if (!product) {
    return null;
  }

  return (
    <CardWrapper onClick={handleSelectProduct(product)}>
      <ImageContainer>
        <img src={product.thumbnail} alt={product.title} />
      </ImageContainer>
      <CardInfo>
        <div>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </div>
        <CardPrice>{formatCurrency.format(product.price)}</CardPrice>
      </CardInfo>
    </CardWrapper>
  );
};

export { Card };
