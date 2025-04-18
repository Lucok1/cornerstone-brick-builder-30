
import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ViewModeToggle } from '@/components/products/ViewModeToggle';
import { ProductsList } from '@/components/products/ProductsList';
import { Product, Currency, ExchangeRates } from '@/types/product';

const products: Product[] = [
  {
    id: 1,
    name: "Brique Creuse 10",
    category: "hollow-bricks",
    dimensions: "10 x 20 x 40 cm",
    price: 500,
    image: "public/lovable-uploads/5d25668a-cee1-4a17-abf4-9408cc38edc9.png",
    inStock: true
  },
  {
    id: 2,
    name: "Brique Creuse 15",
    category: "hollow-bricks",
    dimensions: "15 x 20 x 40 cm",
    price: 600,
    image: "public/lovable-uploads/e27da53a-dda3-4179-bf81-4780f0039f3d.png",
    inStock: true
  },
  {
    id: 3,
    name: "Brique Pleine Standard",
    category: "solid-bricks",
    dimensions: "10 x 20 x 40 cm",
    price: 700,
    image: "public/lovable-uploads/f1fba110-37b4-4261-bc5e-8876b6e01331.png",
    inStock: true
  },
  {
    id: 4,
    name: "Hourdis 20",
    category: "hourdis",
    dimensions: "20 x 30 x 40 cm",
    price: 800,
    image: "public/lovable-uploads/263f9887-f3ce-4c6c-8913-cfc97311c4f6.png",
    inStock: false
  }
];

const exchangeRates: ExchangeRates = {
  USD: 0.0016,
  EUR: 0.0015,
  XOF: 1
};

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currency, setCurrency] = useState<Currency>('XOF');

  // Filter products by category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

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

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <ProductFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              currency={currency}
              setCurrency={setCurrency}
            />
            <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
          </div>

          <ProductsList
            products={filteredProducts}
            viewMode={viewMode}
            currency={currency}
            exchangeRates={exchangeRates}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
