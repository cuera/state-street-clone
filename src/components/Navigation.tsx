import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight - 80; // Hero section height minus nav bar area
      setIsScrolled(window.scrollY > heroHeight * 0.1); // Trigger when 10% into hero section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      } rounded-full px-6 py-3`}
      style={{ maxWidth: '800px', width: 'calc(100% - 3rem)' }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className={`text-sm font-medium transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-gray-900'
          }`}>
            505 State Street
          </h1>
        </div>
        
        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            className="nav-button-amenities rounded-full text-sm font-medium transition-all duration-300"
          >
            Amenities
          </Button>
          <Button 
            className="nav-button-availability rounded-full text-sm font-medium transition-all duration-300"
          >
            Availability
          </Button>
          <Button className="bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
            Inquire
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className={`p-2 transition-colors duration-300 ${
            isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-gray-900'
          }`}>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;