export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'bouquet' | 'single' | 'basket';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface MessageRequest {
  recipient: string;
  occasion: string;
  tone: string;
}
