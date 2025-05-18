import { useLanguage } from "@/context/LanguageContext";
const Footer = () => {
  const {
    t,
    direction
  } = useLanguage();
  return <footer className="bg-gray-900 text-white py-12" dir={direction}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/515ede0c-f71b-4027-b76d-8d85976b9049.png" alt="Wings Logo" className="h-10 mr-2" />
            </div>
            <p className="text-gray-400">
              Enterprise AI solutions with security, privacy, and professional development.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">{t('footer.products')}</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-white transition-colors">{t('footer.security')}</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#upskill" className="text-gray-400 hover:text-white transition-colors">{t('footer.upskill')}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">{t('footer.pricing')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <address className="not-italic text-gray-400">
              <p>CS@wings.work</p>
              <p></p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.terms')}</h4>
            <p className="text-gray-400">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;