
import Hero from '../components/home/Hero';
import ProductCategories from '../components/home/ProductCategories';
import Features from '../components/home/Features';
import TrackingCTA from '../components/home/TrackingCTA';
import Testimonials from '../components/home/Testimonials';
import DiasporaCTA from '../components/home/DiasporaCTA';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductCategories />
        <Features />
        <TrackingCTA />
        <Testimonials />
        <DiasporaCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
