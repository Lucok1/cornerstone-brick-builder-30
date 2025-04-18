
import { Separator } from "@/components/ui/separator";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Les briques de Cornerstone ont été essentielles pour la construction de notre nouvelle maison. La qualité est exceptionnelle et le service de livraison très efficace.",
    author: "Kodjo Mensah",
    role: "Propriétaire",
    location: "Lomé"
  },
  {
    id: 2,
    content: "En tant qu'architecte, je recommande toujours les produits de Cornerstone Briques à mes clients. La constance dans la qualité et les délais respectés font toute la différence.",
    author: "Ama Dossou",
    role: "Architecte",
    location: "Cotonou"
  },
  {
    id: 3,
    content: "Le système de suivi en temps réel est révolutionnaire! J'ai pu planifier mon chantier avec précision grâce aux mises à jour constantes sur ma commande.",
    author: "Eric Koffi",
    role: "Entrepreneur",
    location: "Accra"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-earth-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui ont fait confiance 
            à Cornerstone Briques pour leurs projets de construction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-earth-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow relative"
            >
              <QuoteIcon className="absolute top-4 right-4 text-brick-200" size={32} />
              <p className="text-earth-700 mb-6 italic">{testimonial.content}</p>
              <Separator />
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 bg-earth-200 rounded-full flex items-center justify-center">
                  <span className="text-earth-600 font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="font-medium text-earth-900">{testimonial.author}</p>
                  <p className="text-earth-500 text-sm">{testimonial.role}, {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
