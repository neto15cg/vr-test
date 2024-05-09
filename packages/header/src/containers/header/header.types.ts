import { CartType } from '../../components/cart/cart.types';

export type HeaderProps = {
  cart: CartType[];
  onRemoveItem: (id: number) => void;
};
