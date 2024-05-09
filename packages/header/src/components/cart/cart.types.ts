export interface CartType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface CartProps {
  cart: CartType[];
  isOpenModal: boolean;
  onOpenModal: (opened: boolean) => void;
  onRemoveItem: (id: number) => void;
}
