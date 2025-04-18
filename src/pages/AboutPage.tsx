
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-earth-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de Cornerstone Briques</h1>
              <p className="text-xl text-earth-100 mb-8">
                Votre partenaire de confiance en matériaux de construction depuis plus de 20 ans
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-earth-900 mb-6">Notre histoire</h2>
                <p className="text-earth-700 mb-4">
                  Fondée en 2000 à Lomé, Cornerstone Briques est née de la passion pour la qualité et l'innovation dans le secteur de la construction au Togo. 
                </p>
                <p className="text-earth-700 mb-4">
                  Ce qui a commencé comme une petite entreprise familiale s'est transformée en l'un des leaders de la fabrication de briques de haute qualité dans la région.
                </p>
                <p className="text-earth-700 mb-6">
                  Notre mission est simple mais ambitieuse : fournir des matériaux de construction durables et abordables qui contribuent à construire un avenir meilleur pour notre communauté.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-brick-600 flex-shrink-0 mt-0.5" />
                    <p className="text-earth-700">Matériaux locaux de première qualité</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-brick-600 flex-shrink-0 mt-0.5" />
                    <p className="text-earth-700">Techniques de fabrication modernes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-brick-600 flex-shrink-0 mt-0.5" />
                    <p className="text-earth-700">Respect des normes internationales</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-earth-100 rounded-lg p-4 rotate-3 transform">
                  <img 
                    src="/public/lovable-uploads/afc4c9ed-9d66-4969-854f-42661da3c524.png" 
                    alt="Histoire de Cornerstone Briques" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-lg p-4 w-32 h-32 flex flex-col items-center justify-center">
                  <span className="text-brick-600 font-bold text-4xl">20+</span>
                  <span className="text-earth-700 text-center">Années d'expérience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-earth-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-earth-900 mb-4">Nos valeurs</h2>
              <p className="text-lg text-earth-600 max-w-2xl mx-auto">
                Nos valeurs guident chaque aspect de notre entreprise, de la fabrication au service client.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-earth-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-brick-600" />
                </div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">Qualité</h3>
                <p className="text-earth-600">
                  Nous ne compromettons jamais sur la qualité de nos produits, en utilisant les meilleurs matériaux et techniques.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-earth-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brick-600" />
                </div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">Communauté</h3>
                <p className="text-earth-600">
                  Nous investissons dans notre communauté locale, en créant des emplois et en soutenant le développement.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-earth-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-brick-600" />
                </div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">Fiabilité</h3>
                <p className="text-earth-600">
                  Nous respectons nos engagements, livrant toujours à temps et selon les spécifications convenues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brick-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nous sommes là pour vous accompagner dans tous vos projets de construction, grands ou petits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-brick-600 hover:bg-earth-100">
                <Link to="/products">
                  Voir nos produits <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-brick-700">
                <Link to="/contact">
                  Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
