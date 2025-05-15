
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { t, language, toggleLanguage, direction } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    // If we're on the home page, scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      dir={direction}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/515ede0c-f71b-4027-b76d-8d85976b9049.png" 
            alt="Wings Logo" 
            className="h-10 mr-2" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="text-gray-700 hover:text-wings-blue transition-colors">{t('nav.products')}</a>
          <a href="#security" onClick={(e) => handleNavClick(e, 'security')} className="text-gray-700 hover:text-wings-blue transition-colors">{t('nav.security')}</a>
          <a href="#upskill" onClick={(e) => handleNavClick(e, 'upskill')} className="text-gray-700 hover:text-wings-blue transition-colors">{t('nav.upskill')}</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-gray-700 hover:text-wings-blue transition-colors">{t('nav.pricing')}</a>
          <Button className="bg-wings-blue hover:bg-wings-darkblue text-white">{t('nav.join')}</Button>
          <button 
            onClick={toggleLanguage} 
            className="ml-2 p-2 rounded-md border border-gray-200 hover:bg-gray-100"
          >
            {language === 'en' ? 'עב' : 'EN'}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button 
            onClick={toggleLanguage} 
            className="mr-4 p-2 rounded-md border border-gray-200 hover:bg-gray-100"
          >
            {language === 'en' ? 'עב' : 'EN'}
          </button>
          <button onClick={toggleMobileMenu} className="p-2" aria-label="Toggle menu">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white shadow-lg p-4 absolute w-full" dir={direction}>
          <div className="flex flex-col space-y-4">
            <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="text-gray-700 hover:text-wings-blue transition-colors py-2 border-b border-gray-100">{t('nav.products')}</a>
            <a href="#security" onClick={(e) => handleNavClick(e, 'security')} className="text-gray-700 hover:text-wings-blue transition-colors py-2 border-b border-gray-100">{t('nav.security')}</a>
            <a href="#upskill" onClick={(e) => handleNavClick(e, 'upskill')} className="text-gray-700 hover:text-wings-blue transition-colors py-2 border-b border-gray-100">{t('nav.upskill')}</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-gray-700 hover:text-wings-blue transition-colors py-2 border-b border-gray-100">{t('nav.pricing')}</a>
            <Button className="bg-wings-blue hover:bg-wings-darkblue text-white">{t('nav.join')}</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
