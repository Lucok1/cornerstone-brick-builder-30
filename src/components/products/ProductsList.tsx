
import { Product, Currency, ExchangeRates } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductsListProps {
  products: Product[];
  viewMode: 'grid' | 'list';
  currency: Currency;
  exchangeRates: ExchangeRates;
}

export const ProductsList = ({ products, viewMode, currency, exchangeRates }: ProductsListProps) => {
  return viewMode === 'grid' ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          currency={currency}
          viewMode={viewMode}
          exchangeRates={exchangeRates}
        />
      ))}
    </div>
  ) : (
    <div className="space-y-4">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          currency={currency}
          viewMode={viewMode}
          exchangeRates={exchangeRates}
        />
      ))}
    </div>
  );
};
