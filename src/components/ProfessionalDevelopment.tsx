
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { ContactDialog } from "@/components/ContactDialog";

const ProfessionalDevelopment = () => {
  const { t, direction } = useLanguage();
  
  return (
    <section className="py-20 bg-white" id="upskill" dir={direction}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-wings-darkblue mb-4">{t('upskill.title')}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-wings-blue">{t('upskill.workshop.title')}</h3>
            <p className="text-gray-600 mb-6">{t('upskill.workshop.description')}</p>
            <div className="flex flex-wrap gap-6 items-center">
              <ContactDialog>

                <Button variant="outline" className="border-wings-blue text-wings-blue hover:bg-wings-blue/10">
                  {t('upskill.contact')}
                </Button>
              </ContactDialog>

            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-wings-purple">{t('upskill.strategy.title')}</h3>
            <p className="text-gray-600 mb-6">{t('upskill.strategy.description')}</p>
            <div className="flex flex-wrap gap-6 items-center">
              <ContactDialog>
                <Button variant="outline" className="border-wings-purple text-wings-purple hover:bg-wings-purple/10">
                  {t('upskill.contact')}
                </Button>
              </ContactDialog>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;
