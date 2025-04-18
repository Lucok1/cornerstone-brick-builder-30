
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-earth-50">
        <div className="text-center px-4 py-16">
          <div className="inline-block p-5 rounded-full bg-earth-100 mb-6">
            <div className="w-20 h-20 bg-brick-600 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl font-bold">404</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-earth-900">Page non trouvée</h1>
          <p className="text-xl text-earth-600 mb-8 max-w-md mx-auto">
            Nous sommes désolés, mais la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild className="bg-brick-600 hover:bg-brick-700 text-white">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Retour à l'accueil
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
