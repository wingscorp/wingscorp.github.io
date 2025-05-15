
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { ContactDialog } from "@/components/ContactDialog";

const JoinWings = () => {
  const { t, direction } = useLanguage();
  
  return (
    <section className="py-20 bg-wings-darkblue text-white" id="join" dir={direction}>
      <div className="container-custom">
        <h2 className="heading-2 text-center text-white mb-12">{t('join.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Advanced Shield */}
          <div className="bg-white/10 p-8 rounded-xl text-center flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-4">{t('join.advanced')}</h3>
            <p className="flex-grow"></p>
            <div className="mt-6">
              <ContactDialog>
                <Button variant="default">{t('join.advanced.button')}</Button>
              </ContactDialog>
            </div>
          </div>
          
          {/* Basic Shield */}
          <div className="bg-white/5 p-8 rounded-xl text-center flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-4">{t('join.basic')}</h3>
            <p className="text-white/70 italic">{t('join.basic.note')}</p>
            <p className="flex-grow"></p>
            <div className="mt-6">
              <ContactDialog>
                <Button variant="outline" disabled>{t('join.advanced.button')}</Button>
              </ContactDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinWings;
