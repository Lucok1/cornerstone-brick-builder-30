
import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Search, Clock, RefreshCw, Truck, CheckCircle } from 'lucide-react';

const TrackingPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (orderNumber) {
      setIsTracking(true);
      
      // Simulate API call
      setTimeout(() => {
        // Mock tracking data - in a real app, this would come from your backend
        setTrackingResult({
          orderNumber: orderNumber,
          customer: "Jean Koffi",
          products: [
            { name: "Brique Creuse 15", quantity: 500 }
          ],
          status: "production",
          productionStage: "Moulage",
          responsiblePerson: "Koffi Mensah",
          estimatedDelivery: "2025-05-10",
          progress: 40,
          lastUpdated: "2025-04-16 09:32"
        });
        setIsTracking(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-earth-900 mb-2">Suivi de commande</h1>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Entrez votre numéro de commande pour suivre l'avancement de votre production en temps réel.
              Notre système vous donnera des mises à jour détaillées à chaque étape du processus.
            </p>
          </div>

          {/* Tracking Form */}
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Entrez votre numéro de commande"
                className="flex-grow px-4 py-3 border border-earth-200 rounded-md focus:outline-none focus:border-brick-500"
                required
              />
              <Button 
                type="submit" 
                className="bg-brick-600 hover:bg-brick-700 text-white"
                disabled={isTracking}
              >
                {isTracking ? (
                  <><RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Recherche...</>
                ) : (
                  <><Search className="mr-2 h-4 w-4" /> Suivre ma commande</>
                )}
              </Button>
            </form>
          </div>

          {/* Tracking Result */}
          {trackingResult && (
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
              <div className="border-b border-earth-100 pb-4 mb-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-earth-900">
                    Commande #{trackingResult.orderNumber}
                  </h2>
                  <span className="text-sm text-earth-500">
                    Dernière mise à jour: {trackingResult.lastUpdated}
                  </span>
                </div>
                <p className="text-earth-600 mt-1">Client: {trackingResult.customer}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-earth-800 mb-4">Détails de la commande</h3>
                <div className="bg-earth-50 rounded-md p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-earth-600">
                        <th className="pb-2">Produit</th>
                        <th className="pb-2">Quantité</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trackingResult.products.map((product: any, index: number) => (
                        <tr key={index} className="border-t border-earth-200">
                          <td className="py-3 text-earth-900">{product.name}</td>
                          <td className="py-3 text-earth-900">{product.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-earth-800 mb-4">Statut de la commande</h3>
                <div className="bg-earth-50 rounded-md p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-brick-100 rounded-full flex items-center justify-center mr-4">
                          {trackingResult.status === 'production' ? (
                            <Clock size={24} className="text-brick-600" />
                          ) : trackingResult.status === 'shipping' ? (
                            <Truck size={24} className="text-brick-600" />
                          ) : (
                            <CheckCircle size={24} className="text-brick-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-earth-900">
                            {trackingResult.status === 'production' ? 'En production' : 
                             trackingResult.status === 'shipping' ? 'En livraison' : 'Livré'}
                          </p>
                          <p className="text-earth-600">
                            {trackingResult.status === 'production' 
                              ? `Étape: ${trackingResult.productionStage} - Responsable: ${trackingResult.responsiblePerson}`
                              : trackingResult.status === 'shipping'
                              ? 'Votre commande est en route vers l\'adresse de livraison.'
                              : 'Votre commande a été livrée.'
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-sm text-earth-600">Livraison prévue le:</p>
                      <p className="font-medium text-earth-900">{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>

                  <div className="w-full bg-earth-200 rounded-full h-2.5">
                    <div 
                      className="bg-brick-600 h-2.5 rounded-full" 
                      style={{ width: `${trackingResult.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-earth-600">
                    <span>Commande reçue</span>
                    <span>Production</span>
                    <span>Expédition</span>
                    <span>Livraison</span>
                  </div>
                </div>
              </div>

              {/* Fake Video Feed */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-earth-800 mb-4">Flux vidéo en direct</h3>
                <div className="bg-earth-800 rounded-md p-4 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white mb-2">Flux vidéo de l'usine</p>
                    <p className="text-earth-400 text-sm">
                      Cette fonctionnalité sera disponible prochainement. Vous pourrez suivre en direct 
                      la production de votre commande via nos caméras industrielles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="bg-brick-600 hover:bg-brick-700 text-white">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Actualiser les informations
                </Button>
              </div>
            </div>
          )}

          {/* Additional Info */}
          {!trackingResult && (
            <div className="mt-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-earth-900 mb-6 text-center">
                Comment fonctionne notre système de suivi?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-brick-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-brick-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-earth-900 mb-2">Saisir votre numéro</h3>
                  <p className="text-earth-600">
                    Entrez simplement votre numéro de commande dans le champ ci-dessus et cliquez sur "Suivre ma commande".
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-brick-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-brick-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-earth-900 mb-2">Accès aux détails</h3>
                  <p className="text-earth-600">
                    Obtenez des informations détaillées sur l'état actuel de votre commande, y compris l'étape de production.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-brick-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-brick-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-earth-900 mb-2">Suivi vidéo</h3>
                  <p className="text-earth-600">
                    Regardez en direct la fabrication de vos briques grâce à nos caméras installées dans l'usine.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackingPage;
