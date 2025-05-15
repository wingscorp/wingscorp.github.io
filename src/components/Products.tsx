
import { useLanguage } from "@/context/LanguageContext";
import { Bot, Globe, View } from "lucide-react";

const products = [
  {
    id: 'safechat',
    symbol: Bot,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'translator',
    symbol: Globe,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 'megasummary',
    symbol: View,
    gradient: 'from-amber-500 to-orange-600',
  },
];

const Products = () => {
  const { t, direction } = useLanguage();

  return (
    <section className="py-20 bg-wings-gray" id="products" dir={direction}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-wings-darkblue mb-4">{t('products.title')}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.symbol;
            return (
              <div
                key={product.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative h-48 flex flex-col justify-end overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-75`}></div>
                  <div className="relative flex justify-center items-center h-full z-10">
                    <Icon size={72} color="#fff" className="drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
                    {t(`products.${product.id}.title`)}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{t(`products.${product.id}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
