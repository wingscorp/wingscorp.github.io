
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { ContactDialog } from "@/components/ContactDialog";
import { Link } from "react-router-dom";

const Security = () => {
  const { t, direction } = useLanguage();
  
  return (
    <section 
      className="py-20 bg-gradient-to-br from-wings-blue/95 to-wings-purple/95 text-white"
      id="security"
      dir={direction}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800" 
              alt="Security and Privacy" 
              className="rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="heading-2 text-white mb-2">{t('security.title')}</h2>
            <h3 className="text-xl font-medium text-white/90 mb-4">{t('security.subtitle')}</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              {t('security.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-white text-wings-blue hover:bg-gray-100 hover:text-wings-darkblue"
                asChild
              >
                <Link to="/security-statement">{t('security.learnMore')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
