
import { ShieldCheck, Truck, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Qualité supérieure",
    description: "Nos briques sont fabriquées selon les normes les plus strictes pour garantir durabilité et résistance."
  },
  {
    icon: Truck,
    title: "Livraison rapide",
    description: "Service de livraison efficace partout à Lomé et ses environs, avec possibilité d'expédition internationale."
  },
  {
    icon: Clock,
    title: "Suivi en temps réel",
    description: "Suivez la production et la livraison de votre commande en temps réel grâce à notre système de suivi avancé."
  },
  {
    icon: Users,
    title: "Service client dédié",
    description: "Une équipe à votre écoute pour vous conseiller et répondre à toutes vos questions."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-earth-900 mb-4">Pourquoi choisir Cornerstone Briques?</h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Nous nous engageons à fournir des produits de qualité et un service exceptionnel 
            pour tous vos projets de construction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-brick-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-brick-600" />
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-2">{feature.title}</h3>
              <p className="text-earth-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
