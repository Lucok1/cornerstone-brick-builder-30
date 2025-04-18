
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-earth-50">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full hero-pattern opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brick-600/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-earth-950 leading-tight mb-4">
              Cornerstone Briques
              <span className="block text-brick-600 mt-2">
                Votre partenaire de confiance en matériaux de construction.
              </span>
            </h1>
            <p className="text-xl text-earth-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Des briques durables et innovantes pour vos projets de construction, 
              fabriquées avec précision à Lomé, Togo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-brick-600 hover:bg-brick-700 text-white">
                <Link to="/products">
                  Voir nos produits <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brick-600 text-brick-600 hover:bg-brick-50">
                <Link to="/order">
                  Commander maintenant
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl bg-white p-2 rotate-2 transform hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1635424710928-45ef34c36c9a?q=80&w=1000"
                alt="Briques empilées" 
                className="w-full h-auto rounded" 
              />
            </div>
            <div className="absolute -bottom-10 -left-10 hidden lg:block">
              <div className="bg-white shadow-lg rounded-lg p-4 w-36 h-36 flex flex-col items-center justify-center animate-float">
                <span className="text-brick-600 font-bold text-5xl">20+</span>
                <span className="text-earth-700 text-center">Années d'expérience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
