
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t, direction } = useLanguage();
  
  return (
    <section 
      className="pt-32 pb-20 bg-gradient-to-br from-white to-wings-gray"
      dir={direction}
    >
      <div className="container-custom">
        <div className="flex justify-center">
          <div className="space-y-6 animate-fade-in text-center max-w-3xl">
            <h1 className="heading-1 text-wings-darkblue">
              {t('hero.title')}
            </h1>
            <p className="body-text">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
