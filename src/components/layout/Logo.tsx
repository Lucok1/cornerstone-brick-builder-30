
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/public/lovable-uploads/afc4c9ed-9d66-4969-854f-42661da3c524.png" 
        alt="Cornerstone Briques Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};
