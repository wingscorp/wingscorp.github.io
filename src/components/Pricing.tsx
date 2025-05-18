
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Pricing = () => {
  const { t, direction } = useLanguage();
  
  return (
    <section className="py-20 bg-wings-gray" id="pricing" dir={direction}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-wings-darkblue mb-2">{t('pricing.title')}</h2>
          <p className="text-xl text-gray-600">{t('pricing.description')}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-wings-blue to-wings-purple p-6 text-white">
              <h3 className="text-2xl font-bold">{t('pricing.base')}</h3>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">{t('pricing.tier1')}</h4>
                  <span className="text-2xl font-bold text-wings-purple">{t('pricing.price')}</span>
                </div>
                
                <h5 className="font-semibold mb-2">{t('pricing.features')}</h5>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t('pricing.tokens')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t('pricing.storage')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t('pricing.translation')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t('pricing.ocr')}</span>
                  </li>
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  <h5 className="font-semibold mb-4">{t('pricing.extensions')}</h5>
                  
                  {/* Comment about extension periods */}
                  <p className="text-gray-600 italic mb-6">Extensions can be added for one month or unlimited period, individually selectable per product</p>
                  
                  <div className="grid grid-cols-1 gap-8">
                    {/* SafeChat Extensions */}
                    <div>
                      <div className="bg-wings-blue text-white px-4 py-2 rounded-t-lg font-semibold">
                        SafeChat Extensions
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-b-lg">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h6 className="font-medium">{t('pricing.tokens.tier2')}</h6>
                          <p className="text-wings-purple font-semibold">{t('pricing.tokens.tier2.price')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h6 className="font-medium">{t('pricing.tokens.tier3')}</h6>
                          <p className="text-wings-purple font-semibold">{t('pricing.tokens.tier3.price')}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Document Analysis Extensions */}
                    <div>
                      <div className="bg-wings-purple text-white px-4 py-2 rounded-t-lg font-semibold">
                        Document Analysis Extensions
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-purple-50 rounded-b-lg">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h6 className="font-medium">{t('pricing.storage.more')}</h6>
                          <p className="text-wings-purple font-semibold">{t('pricing.storage.more.price')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h6 className="font-medium">{t('pricing.storage.most')}</h6>
                          <p className="text-wings-purple font-semibold">{t('pricing.storage.most.price')}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Translation Pro Extensions */}
                    <div>
                      <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg font-semibold">
                        Translation Pro Extensions
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-green-50 rounded-b-lg">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h6 className="font-medium">{t('pricing.translation.more')}</h6>
                          <p className="text-wings-purple font-semibold">{t('pricing.translation.more.price')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h6 className="font-medium">{t('pricing.translation.most')}</h6>
                          <p className="text-wings-purple font-semibold">{t('pricing.translation.most.price')}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI OCR Extensions */}
                    <div>
                      <div className="bg-amber-600 text-white px-4 py-2 rounded-t-lg font-semibold">
                        AI OCR Extensions
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-amber-50 rounded-b-lg">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h6 className="font-medium">{t('pricing.ocr.more')}</h6>
                          <p className="text-wings-purple font-semibold">{t('pricing.ocr.more.price')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h6 className="font-medium">{t('pricing.ocr.most')}</h6>
                          <p className="text-wings-purple font-semibold">{t('pricing.ocr.most.price')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
