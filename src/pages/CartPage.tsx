
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product, Currency, ExchangeRates } from '@/types/product';

// Example cart items (in a real app, this would come from a cart context/state)
const initialCartItems = [
  {
    id: 1,
    product: {
      id: 1,
      name: "Brique Creuse 10",
      category: "hollow-bricks",
      dimensions: "10 x 20 x 40 cm",
      price: 500,
      image: "public/lovable-uploads/5d25668a-cee1-4a17-abf4-9408cc38edc9.png",
      inStock: true
    },
    quantity: 2
  },
  {
    id: 2,
    product: {
      id: 3,
      name: "Brique Pleine Standard",
      category: "solid-bricks",
      dimensions: "10 x 20 x 40 cm",
      price: 700,
      image: "public/lovable-uploads/f1fba110-37b4-4261-bc5e-8876b6e01331.png",
      inStock: true
    },
    quantity: 1
  }
];

const exchangeRates: ExchangeRates = {
  USD: 0.0016,
  EUR: 0.0015,
  XOF: 1
};

interface CartItemProps {
  item: {
    id: number;
    product: Product;
    quantity: number;
  };
  currency: Currency;
  exchangeRates: ExchangeRates;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
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

const CartItem = ({ item, currency, exchangeRates, onUpdateQuantity, onRemove }: CartItemProps) => {
  const { product, quantity } = item;
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      onUpdateQuantity(item.id, quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    onUpdateQuantity(item.id, quantity + 1);
  };
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-earth-200">
      <div className="w-24 h-24 bg-earth-50 rounded-md overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="sm:ml-6 flex-grow">
        <h3 className="text-lg font-semibold text-earth-900">{product.name}</h3>
        <p className="text-sm text-earth-500">Dimensions: {product.dimensions}</p>
      </div>
      
      <div className="flex items-center space-x-2 mt-4 sm:mt-0">
        <button 
          onClick={decreaseQuantity}
          className="w-8 h-8 flex items-center justify-center rounded-md border border-earth-200 text-earth-900"
        >
          -
        </button>
        <span className="text-earth-900 w-8 text-center">{quantity}</span>
        <button 
          onClick={increaseQuantity}
          className="w-8 h-8 flex items-center justify-center rounded-md border border-earth-200 text-earth-900"
        >
          +
        </button>
      </div>
      
      <div className="mt-4 sm:mt-0 sm:ml-8 text-right flex-shrink-0">
        <p className="text-lg font-bold text-brick-600">
          {convertPrice(product.price * quantity, currency, exchangeRates)}
        </p>
        <button 
          onClick={() => onRemove(item.id)}
          className="text-earth-500 hover:text-red-500 mt-2 flex items-center text-sm"
        >
          <Trash2 size={16} className="mr-1" />
          Supprimer
        </button>
      </div>
    </div>
  );
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [currency, setCurrency] = useState<Currency>('XOF');
  
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = cartItems.reduce((total, item) => 
    total + (item.product.price * item.quantity), 0
  );
  
  // Example shipping cost (in a real app, this would be calculated based on location, weight, etc.)
  const shipping = subtotal > 0 ? 2000 : 0;
  
  const total = subtotal + shipping;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-earth-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-earth-900 mb-8">Panier</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="border-b border-earth-200 pb-4 mb-4">
                    <h2 className="text-xl font-semibold text-earth-900">Vos articles ({totalItems})</h2>
                  </div>
                  
                  {cartItems.map(item => (
                    <CartItem 
                      key={item.id}
                      item={item}
                      currency={currency}
                      exchangeRates={exchangeRates}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-semibold text-earth-900 border-b border-earth-200 pb-4 mb-4">
                    Récapitulatif de la commande
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-earth-600">Sous-total</span>
                      <span className="text-earth-900 font-medium">
                        {convertPrice(subtotal, currency, exchangeRates)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-earth-600">Livraison estimée</span>
                      <span className="text-earth-900 font-medium">
                        {convertPrice(shipping, currency, exchangeRates)}
                      </span>
                    </div>
                    <div className="border-t border-earth-200 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-earth-900">Total</span>
                        <span className="text-lg font-bold text-brick-600">
                          {convertPrice(total, currency, exchangeRates)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-brick-600 hover:bg-brick-700"
                  >
                    <Link to="/order">
                      Commander maintenant <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full mt-3"
                  >
                    <Link to="/products">
                      Continuer vos achats
                    </Link>
                  </Button>
                  
                  <div className="mt-6 text-sm text-earth-500">
                    <p className="mb-2">Modes de paiement acceptés:</p>
                    <div className="flex items-center space-x-2">
                      <div className="bg-earth-100 px-2 py-1 rounded text-xs">Espèces</div>
                      <div className="bg-earth-100 px-2 py-1 rounded text-xs">Mobile Money</div>
                      <div className="bg-earth-100 px-2 py-1 rounded text-xs">Virement bancaire</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="flex justify-center mb-4">
                <ShoppingBag size={64} className="text-earth-300" />
              </div>
              <h2 className="text-2xl font-bold text-earth-900 mb-2">Votre panier est vide</h2>
              <p className="text-earth-600 mb-8">
                Ajoutez des produits à votre panier pour commencer vos achats.
              </p>
              <Button 
                asChild
                className="bg-brick-600 hover:bg-brick-700"
              >
                <Link to="/products">
                  Découvrir nos produits
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
