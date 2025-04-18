
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from 'lucide-react';

const DiasporaCTA = () => {
  return (
    <section className="py-16 bg-earth-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-brick-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Spécial Diaspora
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Investissez dans votre avenir au Togo, même à distance!
            </h2>
            <p className="text-lg text-earth-200 mb-6">
              Notre programme spécial pour la diaspora vous permet d'acheter des matériaux 
              de construction et de les faire stocker gratuitement jusqu'à votre retour au pays.
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-brick-600 flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>Paiement progressif et flexible</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-brick-600 flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>Stockage gratuit pendant 12 mois</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-brick-600 flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>Paiement en EUR, USD ou FCFA</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-brick-600 flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>Suivi de votre investissement à distance</span>
              </li>
            </ul>
            <Button asChild className="bg-brick-600 hover:bg-brick-700 text-white">
              <Link to="/diaspora">
                <Globe className="mr-2 h-4 w-4" /> Découvrir l'espace diaspora
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=1000" 
              alt="Investissement immobilier au Togo" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-earth-900 p-4 rounded-lg shadow-lg max-w-xs">
              <p className="font-medium">
                "Grâce à Cornerstone Briques, j'ai pu préparer la construction de ma maison à Lomé depuis Paris."
              </p>
              <p className="text-sm text-earth-600 mt-2">- Sylvie A., Paris</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiasporaCTA;
