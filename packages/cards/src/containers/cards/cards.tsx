import React, { useEffect, useState } from 'react';

import { useSlice } from 'shared_state';

import { CardsContainer, CardsContent, LoadingContainer } from './cards.styles';
import { Card } from '../../components/card/card';
import { Loading } from '../../components/loading/loading';
import { fetchProducts } from '../../services/services';
import type { Product, ProductList } from '../../services/services.types';

const Cards = () => {
  const [products, setProducts] = useState<ProductList | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [_, setCart] = useSlice('cart');

  const handleAddCart = (product: Product) => {
    setCart((prevCart: Product[]) => [...prevCart, product]);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      fetchProducts()
        .then((data) => {
          setProducts(data);

          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    })();
  }, []);

  if (isLoading && !products) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );
  }

  if (!isLoading && !products) {
    return <LoadingContainer>Não há produtos disponíveis</LoadingContainer>;
  }

  return (
    <CardsContainer>
      <CardsContent>
        {products?.products.map((product) => (
          <Card key={product.id} product={product} onClick={handleAddCart} />
        ))}
      </CardsContent>
    </CardsContainer>
  );
};

export { Cards };
