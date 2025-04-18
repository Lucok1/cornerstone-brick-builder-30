
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Briques Creuses",
    description: "Idéales pour les murs intérieurs et extérieurs",
    image: "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1000",
    link: "/products/hollow-bricks"
  },
  {
    id: 2,
    name: "Briques Pleines",
    description: "Parfaites pour les murs porteurs et les fondations",
    image: "https://images.unsplash.com/photo-1635424715326-30114d7f1267?q=80&w=1000",
    link: "/products/solid-bricks"
  },
  {
    id: 3,
    name: "Heurels",
    description: "Optimales pour les plafonds et les structures légères",
    image: "https://images.unsplash.com/photo-1590328890650-7fe374024275?q=80&w=1000",
    link: "/products/heurels"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-earth-900 mb-4">Nos catégories de produits</h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de briques de qualité supérieure, fabriquées 
            avec des matériaux sélectionnés et une expertise inégalée.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-earth-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-earth-900 mb-2">{category.name}</h3>
                <p className="text-earth-600 mb-4">{category.description}</p>
                <Button asChild variant="outline" className="text-brick-600 border-brick-600 hover:bg-brick-50">
                  <Link to={category.link}>
                    Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
