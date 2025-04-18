
import { Filter, ChevronDown } from 'lucide-react';

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

export const ProductFilters = ({
  selectedCategory,
  setSelectedCategory,
  currency,
  setCurrency
}: ProductFiltersProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative inline-block">
        <button className="flex items-center px-4 py-2 border border-earth-200 rounded-md bg-white">
          <Filter size={16} className="mr-2" />
          <span className="mr-2">Filtrer par:</span>
          <span className="font-medium">
            {selectedCategory === 'all' ? 'Tous' : 
             selectedCategory === 'hollow-bricks' ? 'Briques Creuses' : 
             selectedCategory === 'solid-bricks' ? 'Briques Pleines' : 'Hourdis'}
          </span>
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
              onClick={() => setSelectedCategory('hourdis')}
              className={`block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50 w-full text-left ${selectedCategory === 'hourdis' ? 'font-medium text-brick-600' : ''}`}
            >
              Hourdis
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
  );
};
