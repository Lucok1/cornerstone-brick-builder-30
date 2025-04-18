
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, X, ShoppingCart, Globe, Search, User, ChevronDown 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('XOF');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brick-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">CB</span>
            </div>
            <span className="text-xl font-bold text-earth-900 hidden md:block">
              Cornerstone<span className="text-brick-600">Briques</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/" className="text-earth-800 hover:text-brick-600 font-medium">
              Accueil
            </Link>
            <div className="relative group">
              <button className="flex items-center text-earth-800 hover:text-brick-600 font-medium">
                Produits <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block">
                <Link to="/products/hollow-bricks" className="block px-4 py-2 text-earth-700 hover:bg-earth-50">
                  Briques Creuses
                </Link>
                <Link to="/products/solid-bricks" className="block px-4 py-2 text-earth-700 hover:bg-earth-50">
                  Briques Pleines
                </Link>
                <Link to="/products/heurels" className="block px-4 py-2 text-earth-700 hover:bg-earth-50">
                  Heurels
                </Link>
              </div>
            </div>
            <Link to="/about" className="text-earth-800 hover:text-brick-600 font-medium">
              À propos
            </Link>
            <Link to="/tracking" className="text-earth-800 hover:text-brick-600 font-medium">
              Suivi de Production
            </Link>
            <Link to="/contact" className="text-earth-800 hover:text-brick-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
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
            
            <Link to="/search" className="text-earth-800 hover:text-brick-600">
              <Search size={20} />
            </Link>
            
            <Link to="/account" className="text-earth-800 hover:text-brick-600">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="text-earth-800 hover:text-brick-600">
              <div className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-brick-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-earth-800 hover:text-brick-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-earth-800 hover:text-brick-600 font-medium"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <div>
              <p className="text-earth-800 font-medium mb-2">Produits</p>
              <div className="pl-4 space-y-2">
                <Link 
                  to="/products/hollow-bricks" 
                  className="block text-earth-700 hover:text-brick-600"
                  onClick={toggleMenu}
                >
                  Briques Creuses
                </Link>
                <Link 
                  to="/products/solid-bricks" 
                  className="block text-earth-700 hover:text-brick-600"
                  onClick={toggleMenu}
                >
                  Briques Pleines
                </Link>
                <Link 
                  to="/products/heurels" 
                  className="block text-earth-700 hover:text-brick-600"
                  onClick={toggleMenu}
                >
                  Heurels
                </Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className="text-earth-800 hover:text-brick-600 font-medium"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <Link 
              to="/tracking" 
              className="text-earth-800 hover:text-brick-600 font-medium"
              onClick={toggleMenu}
            >
              Suivi de Production
            </Link>
            <Link 
              to="/contact" 
              className="text-earth-800 hover:text-brick-600 font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div>
              <p className="text-earth-800 font-medium mb-2">Devise</p>
              <div className="pl-4 flex space-x-4">
                <button 
                  onClick={() => {
                    handleCurrencyChange('XOF');
                    toggleMenu();
                  }} 
                  className={`${currency === 'XOF' ? 'text-brick-600 font-medium' : 'text-earth-700'}`}
                >
                  XOF
                </button>
                <button 
                  onClick={() => {
                    handleCurrencyChange('USD');
                    toggleMenu();
                  }} 
                  className={`${currency === 'USD' ? 'text-brick-600 font-medium' : 'text-earth-700'}`}
                >
                  USD
                </button>
                <button 
                  onClick={() => {
                    handleCurrencyChange('EUR');
                    toggleMenu();
                  }} 
                  className={`${currency === 'EUR' ? 'text-brick-600 font-medium' : 'text-earth-700'}`}
                >
                  EUR
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
