
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const TrackingCTA = () => {
  return (
    <section className="py-16 bg-brick-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Suivez votre commande en temps réel
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Grâce à notre système de suivi avancé, vous pouvez suivre l'avancement de votre commande 
            à chaque étape de la production jusqu'à la livraison.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Entrez votre numéro de commande"
                className="flex-grow px-4 py-3 border border-earth-200 rounded-md focus:outline-none focus:border-brick-500"
              />
              <Button type="submit" className="bg-brick-600 hover:bg-brick-700 text-white">
                <Search className="mr-2 h-4 w-4" /> Suivre ma commande
              </Button>
            </form>
            <p className="mt-4 text-earth-600 text-sm">
              Vous n'avez pas de numéro de commande? {" "}
              <Link to="/contact" className="text-brick-600 hover:underline">
                Contactez-nous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingCTA;
