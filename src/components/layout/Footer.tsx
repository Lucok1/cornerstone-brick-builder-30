import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-950 text-earth-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-brick-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <span className="text-xl font-bold text-white">
                Cornerstone<span className="text-brick-600">Briques</span>
              </span>
            </div>
            <p className="text-earth-200 mb-6">
              Votre partenaire de confiance en matériaux de construction, 
              spécialisé dans la fabrication de briques durables et innovantes pour vos projets.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-earth-200 hover:text-brick-500">
                <Facebook />
              </a>
              <a href="https://twitter.com" className="text-earth-200 hover:text-brick-500">
                <Twitter />
              </a>
              <a href="https://instagram.com" className="text-earth-200 hover:text-brick-500">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-earth-200 hover:text-brick-500 flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Nos produits
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-earth-200 hover:text-brick-500 flex items-center">
                  <ArrowRight size={16} className="mr-2" /> À propos de nous
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-earth-200 hover:text-brick-500 flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Suivi de production
                </Link>
              </li>
              <li>
                <Link to="/diaspora" className="text-earth-200 hover:text-brick-500 flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Espace diaspora
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-earth-200 hover:text-brick-500 flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-brick-500 flex-shrink-0 mt-1" />
                <span className="text-earth-200">
                  Akodessewa, Après les rails, non loin de la station d'essence CM, Lomé
                </span>
              </li>
              <li>
                <div className="flex flex-col space-y-2">
                  <a href="tel:+22890964993" className="flex items-center text-earth-200 hover:text-brick-500">
                    <Phone size={20} className="mr-2 text-brick-500" />
                    (+228) 90 96 49 93
                  </a>
                  <a href="tel:+22899870195" className="flex items-center text-earth-200 hover:text-brick-500">
                    <Phone size={20} className="mr-2 text-brick-500" />
                    (+228) 99 87 01 95
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-brick-500" />
                <a href="mailto:contact@cornerstonebriques.com" className="text-earth-200 hover:text-brick-500">
                  contact@cornerstonebriques.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-earth-200 mb-4">
              Inscrivez-vous pour recevoir nos dernières nouvelles et promotions.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Votre adresse e-mail" 
                className="px-4 py-2 rounded-md bg-earth-900 text-earth-100 border border-earth-700 focus:outline-none focus:border-brick-500"
              />
              <Button type="submit" className="bg-brick-600 text-white hover:bg-brick-700 w-full">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-earth-800 mt-12 pt-6 text-center text-earth-400">
          <p>&copy; {currentYear} Cornerstone Briques. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
