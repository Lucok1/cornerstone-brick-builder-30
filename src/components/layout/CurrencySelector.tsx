
import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

export const CurrencySelector = () => {
  const [currency, setCurrency] = useState('XOF');

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  return (
    <div className="hidden md:flex items-center space-x-2">
      <div className="relative">
        <button className="flex items-center text-earth-800 hover:text-brick-600">
          <Globe size={20} className="mr-1" />
          <span>{currency}</span>
          <ChevronDown size={16} className="ml-1" />
        </button>
        <div className="absolute right-0 mt-2 w-24 bg-white shadow-md rounded-md hidden group-hover:block">
          <button 
            onClick={() => handleCurrencyChange('XOF')} 
            className="block w-full text-left px-4 py-2 text-earth-700 hover:bg-earth-50"
          >
            XOF
          </button>
          <button 
            onClick={() => handleCurrencyChange('USD')} 
            className="block w-full text-left px-4 py-2 text-earth-700 hover:bg-earth-50"
          >
            USD
          </button>
          <button 
            onClick={() => handleCurrencyChange('EUR')} 
            className="block w-full text-left px-4 py-2 text-earth-700 hover:bg-earth-50"
          >
            EUR
          </button>
        </div>
      </div>
    </div>
  );
};
