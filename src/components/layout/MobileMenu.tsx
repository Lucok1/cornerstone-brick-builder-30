
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onCurrencyChange: (currency: string) => void;
  onClose: () => void;
  currency: string;
}

export const MobileMenu = ({ isOpen, onCurrencyChange, onClose, currency }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <Link 
          to="/" 
          className="text-earth-800 hover:text-brick-600 font-medium"
          onClick={onClose}
        >
          Accueil
        </Link>
        <div>
          <p className="text-earth-800 font-medium mb-2">Produits</p>
          <div className="pl-4 space-y-2">
            <Link 
              to="/products/hollow-bricks" 
              className="block text-earth-700 hover:text-brick-600"
              onClick={onClose}
            >
              Briques Creuses
            </Link>
            <Link 
              to="/products/solid-bricks" 
              className="block text-earth-700 hover:text-brick-600"
              onClick={onClose}
            >
              Briques Pleines
            </Link>
            <Link 
              to="/products/hourdis" 
              className="block text-earth-700 hover:text-brick-600"
              onClick={onClose}
            >
              Hourdis
            </Link>
          </div>
        </div>
        <Link 
          to="/about" 
          className="text-earth-800 hover:text-brick-600 font-medium"
          onClick={onClose}
        >
          À propos
        </Link>
        <Link 
          to="/tracking" 
          className="text-earth-800 hover:text-brick-600 font-medium"
          onClick={onClose}
        >
          Suivi de Production
        </Link>
        <Link 
          to="/contact" 
          className="text-earth-800 hover:text-brick-600 font-medium"
          onClick={onClose}
        >
          Contact
        </Link>
        <div>
          <p className="text-earth-800 font-medium mb-2">Devise</p>
          <div className="pl-4 flex space-x-4">
            {['XOF', 'USD', 'EUR'].map((curr) => (
              <button 
                key={curr}
                onClick={() => {
                  onCurrencyChange(curr);
                  onClose();
                }} 
                className={`${currency === curr ? 'text-brick-600 font-medium' : 'text-earth-700'}`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
