import { Product } from '../../services/services.types';

export interface CardType {
  product: Product;
  onClick: (product: Product) => void;
}
