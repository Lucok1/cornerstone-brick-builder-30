
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from 'lucide-react';
import { Product, Currency, ExchangeRates } from '@/types/product';

interface ProductDetailDialogProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
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

export const ProductDetailDialog = ({ 
  product, 
  isOpen, 
  onClose, 
  currency, 
  exchangeRates 
}: ProductDetailDialogProps) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-earth-900">{product.name}</DialogTitle>
          <DialogDescription className="text-earth-600">
            Référence: #{product.id}
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Fermer</span>
        </DialogClose>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-earth-50 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-earth-500">Dimensions</h4>
              <p className="text-earth-900">{product.dimensions}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-earth-500">Catégorie</h4>
              <p className="text-earth-900 capitalize">{product.category.replace('-', ' ')}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-earth-500">Disponibilité</h4>
              <p className={product.inStock ? "text-green-600" : "text-red-600"}>
                {product.inStock ? "En stock" : "Rupture de stock"}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-earth-500">Prix unitaire</h4>
              <p className="text-2xl font-bold text-brick-600">
                {convertPrice(product.price, currency, exchangeRates)}
              </p>
            </div>
            
            {product.inStock && (
              <div>
                <h4 className="text-sm font-medium text-earth-500 mb-2">Quantité</h4>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={decreaseQuantity}
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-earth-200 text-earth-900"
                  >
                    -
                  </button>
                  <span className="text-earth-900 w-10 text-center">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-earth-200 text-earth-900"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
            
            <div className="pt-4 space-y-3">
              <Button 
                className="w-full bg-brick-600 hover:bg-brick-700 text-white"
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ajouter au panier
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="w-full border-brick-600 text-brick-600 hover:bg-brick-50"
              >
                <Link to="/order">
                  Commander maintenant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
