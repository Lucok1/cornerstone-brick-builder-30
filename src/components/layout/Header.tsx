
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { CurrencySelector } from './CurrencySelector';
import { HeaderActions } from './HeaderActions';
import { MobileMenu } from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('XOF');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />

          <div className="flex items-center space-x-4">
            <CurrencySelector />
            <HeaderActions />
            
            <button 
              className="lg:hidden text-earth-800 hover:text-brick-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen}
        onCurrencyChange={setCurrency}
        onClose={toggleMenu}
        currency={currency}
      />
    </header>
  );
};

export default Header;
