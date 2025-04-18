
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export const Navigation = () => {
  return (
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
          <Link to="/products/hourdis" className="block px-4 py-2 text-earth-700 hover:bg-earth-50">
            Hourdis
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
  );
};
