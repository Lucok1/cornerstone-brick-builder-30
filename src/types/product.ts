
export interface Product {
  id: number;
  name: string;
  category: string;
  dimensions: string;
  price: number;
  image: string;
  inStock: boolean;
}

export type Currency = 'XOF' | 'USD' | 'EUR';

export interface ExchangeRates {
  USD: number;
  EUR: number;
  XOF: number;
}
