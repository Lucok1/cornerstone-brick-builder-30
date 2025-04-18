
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Product, Currency, ExchangeRates } from '@/types/product';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  viewMode: 'grid' | 'list';
  exchangeRates: ExchangeRates;
}

const convertPrice = (priceInXOF: number, currency: Currency, exchangeRates: ExchangeRates) => {
  const convertedPrice = priceInXOF * exchangeRates[currency];
  
  switch(currency) {
    case 'USD':
      return `$${convertedPrice.toFixed(2)}`;
    case 'EUR':
      return `€${convertedPrice.toFixed(2)}`;
    default:
      return `${priceInXOF.toLocaleString()} FCFA`;
  }
};

export const ProductCard = ({ product, currency, viewMode, exchangeRates }: ProductCardProps) => {
  if (viewMode === 'grid') {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-earth-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute top-0 right-0 bg-earth-500 text-white px-3 py-1 rounded-bl-lg">
              Rupture de stock
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-earth-900 mb-1">{product.name}</h3>
          <p className="text-earth-500 text-sm mb-2">Dimensions: {product.dimensions}</p>
          <p className="text-brick-600 font-bold mb-4">{convertPrice(product.price, currency, exchangeRates)}</p>
          <div className="flex space-x-2">
            <Button 
              className="flex-1 bg-brick-600 hover:bg-brick-700 text-white"
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Ajouter
            </Button>
            <Button variant="outline" className="border-earth-200">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-earth-100 flex">
      <div className="w-40 h-40 relative flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {!product.inStock && (
          <div className="absolute top-0 right-0 bg-earth-500 text-white px-3 py-1 rounded-bl-lg">
            Rupture de stock
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-earth-900 mb-1">{product.name}</h3>
          <p className="text-earth-500 text-sm mb-2">Dimensions: {product.dimensions}</p>
          <p className="text-brick-600 font-bold">{convertPrice(product.price, currency, exchangeRates)}</p>
        </div>
        <div className="flex space-x-2 mt-4">
          <Button 
            className="bg-brick-600 hover:bg-brick-700 text-white"
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Ajouter au panier
          </Button>
          <Button variant="outline" className="border-earth-200">
            <Eye className="h-4 w-4 mr-2" /> Détails
          </Button>
        </div>
      </div>
    </div>
  );
};
