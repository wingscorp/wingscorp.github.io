
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Products from '@/components/Products';
import Security from '@/components/Security';
import ProfessionalDevelopment from '@/components/ProfessionalDevelopment';
import Pricing from '@/components/Pricing';
import JoinWings from '@/components/JoinWings';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const Index = () => {
  useEffect(() => {
    document.title = "Wings AI Platform | Enterprise AI Solutions";
  }, []);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Advantages />
          <Products />
          <Security />
          <ProfessionalDevelopment />
          <Pricing />
          <JoinWings />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
