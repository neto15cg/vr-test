import React from 'react';

import { useSlice } from 'shared_state';

import { Header } from './containers/header/header';

const App = () => {
  const [cart, setCart] = useSlice<any>('cart');

  const handleRemoveItemFromCart = (id: number) => {
    const items = cart.filter((item) => item.id !== id);
    setCart(items);
  };

  return <Header cart={cart} onRemoveItem={handleRemoveItemFromCart} />;
};

export default App;
