
import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Filter, Grid3X3, List, ChevronDown, ShoppingCart, Eye 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock product data
const products = [
  {
    id: 1,
    name: "Brique Creuse 10",
    category: "hollow-bricks",
    dimensions: "10 x 20 x 40 cm",
    price: 500,
    image: "https://images.unsplash.com/photo-1590328890650-7fe374024275?q=80&w=1000",
    inStock: true
  },
  {
    id: 2,
    name: "Brique Creuse 15",
    category: "hollow-bricks",
    dimensions: "15 x 20 x 40 cm",
    price: 600,
    image: "https://images.unsplash.com/photo-1590328890650-7fe374024275?q=80&w=1000",
    inStock: true
  },
  {
    id: 3,
    name: "Brique Pleine Standard",
    category: "solid-bricks",
    dimensions: "10 x 20 x 40 cm",
    price: 700,
    image: "https://images.unsplash.com/photo-1635424710928-45ef34c36c9a?q=80&w=1000",
    inStock: true
  },
  {
    id: 4,
    name: "Heurel 20",
    category: "heurels",
    dimensions: "20 x 30 x 40 cm",
    price: 800,
    image: "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1000",
    inStock: false
  },
  {
    id: 5,
    name: "Brique Creuse 20",
    category: "hollow-bricks",
    dimensions: "20 x 20 x 40 cm",
    price: 650,
    image: "https://images.unsplash.com/photo-1590328890650-7fe374024275?q=80&w=1000",
    inStock: true
  },
  {
    id: 6,
    name: "Brique Pleine Double",
    category: "solid-bricks",
    dimensions: "20 x 20 x 40 cm",
    price: 850,
    image: "https://images.unsplash.com/photo-1635424715326-30114d7f1267?q=80&w=1000",
    inStock: true
  }
];

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currency, setCurrency] = useState('XOF');

  // Exchange rates (simplified)
  const exchangeRates = {
    USD: 0.0016, // 1 XOF = 0.0016 USD
    EUR: 0.0015, // 1 XOF = 0.0015 EUR
    XOF: 1
  };

  // Filter products by category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Convert price based on selected currency
  const convertPrice = (priceInXOF: number, currency: string) => {
    const convertedPrice = priceInXOF * exchangeRates[currency as keyof typeof exchangeRates];
    
    // Format based on currency
    switch(currency) {
      case 'USD':
        return `$${convertedPrice.toFixed(2)}`;
      case 'EUR':
        return `€${convertedPrice.toFixed(2)}`;
      default:
        return `${priceInXOF.toLocaleString()} FCFA`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-earth-900 mb-2">Nos Produits</h1>
            <p className="text-earth-600">
              Découvrez notre gamme complète de briques de qualité supérieure pour tous vos projets de construction.
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative inline-block">
                <button className="flex items-center px-4 py-2 border border-earth-200 rounded-md bg-white">
                  <Filter size={16} className="mr-2" />
                  <span className="mr-2">Filtrer par:</span>
                  <span className="font-medium">{selectedCategory === 'all' ? 'Tous' : selectedCategory === 'hollow-bricks' ? 'Briques Creuses' : selectedCategory === 'solid-bricks' ? 'Briques Pleines' : 'Heurels'}</span>
                  <ChevronDown size={16} className="ml-2" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10 hidden group-hover:block">
                  <div className="py-1">
                    <button 
                      onClick={() => setSelectedCategory('all')}
                      className={`block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50 w-full text-left ${selectedCategory === 'all' ? 'font-medium text-brick-600' : ''}`}
                    >
                      Tous les produits
                    </button>
                    <button 
                      onClick={() => setSelectedCategory('hollow-bricks')}
                      className={`block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50 w-full text-left ${selectedCategory === 'hollow-bricks' ? 'font-medium text-brick-600' : ''}`}
                    >
                      Briques Creuses
                    </button>
                    <button 
                      onClick={() => setSelectedCategory('solid-bricks')}
                      className={`block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50 w-full text-left ${selectedCategory === 'solid-bricks' ? 'font-medium text-brick-600' : ''}`}
                    >
                      Briques Pleines
                    </button>
                    <button 
                      onClick={() => setSelectedCategory('heurels')}
                      className={`block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50 w-full text-left ${selectedCategory === 'heurels' ? 'font-medium text-brick-600' : ''}`}
                    >
                      Heurels
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative inline-block">
                <button className="flex items-center px-4 py-2 border border-earth-200 rounded-md bg-white">
                  <span className="mr-2">Devise:</span>
                  <span className="font-medium">{currency}</span>
                  <ChevronDown size={16} className="ml-2" />
                </button>
                <div className="absolute left-0 mt-2 w-24 rounded-md shadow-lg bg-white z-10 hidden group-hover:block">
                  <div className="py-1">
                    <button 
                      onClick={() => setCurrency('XOF')}
                      className={`block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50 w-full text-left ${currency === 'XOF' ? 'font-medium text-brick-600' : ''}`}
                    >
                      XOF
                    </button>
                    <button 
                      onClick={() => setCurrency('USD')}
                      className={`block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50 w-full text-left ${currency === 'USD' ? 'font-medium text-brick-600' : ''}`}
                    >
                      USD
                    </button>
                    <button 
                      onClick={() => setCurrency('EUR')}
                      className={`block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50 w-full text-left ${currency === 'EUR' ? 'font-medium text-brick-600' : ''}`}
                    >
                      EUR
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-earth-100 text-earth-900' : 'bg-white text-earth-500'} border border-earth-200 rounded-md hover:bg-earth-50`}
              >
                <Grid3X3 size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-earth-100 text-earth-900' : 'bg-white text-earth-500'} border border-earth-200 rounded-md hover:bg-earth-50`}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {/* Products Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-earth-100">
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
                    <p className="text-brick-600 font-bold mb-4">{convertPrice(product.price, currency)}</p>
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
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-earth-100 flex">
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
                      <p className="text-brick-600 font-bold">{convertPrice(product.price, currency)}</p>
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
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
