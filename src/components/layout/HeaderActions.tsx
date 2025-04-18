
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

export const HeaderActions = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/search" className="text-earth-800 hover:text-brick-600">
        <Search size={20} />
      </Link>
      
      <Link to="/login" className="text-earth-800 hover:text-brick-600">
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
    </div>
  );
};
