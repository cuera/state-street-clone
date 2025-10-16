import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigationVisibility } from "@/hooks/use-navigation-visibility";

/* ---------- component ---------- */
export default function StickyNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isVisible } = useNavigationVisibility();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 z-50 left-[calc(var(--page-gutter)+var(--nav-inner-gap))] right-[calc(var(--page-gutter)+var(--nav-inner-gap))] transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
                    <nav className={`rounded-xl bg-white/10 backdrop-blur-lg px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
         isScrolled 
           ? 'shadow-lg border border-white/20' 
           : ''
       }`}>
         {/* Branding */}
         <div className="text-lg font-medium text-gray-800">
           Royal Global School
         </div>

                 {/* Menu */}
         <div className="hidden md:flex items-center space-x-3">
           <Button 
             className="bg-[#c8d6e3] text-[#2c3e50] hover:bg-[#c8d6e3] hover:text-[#2c3e50] hover:opacity-80 transition-all duration-200 rounded-full h-8 w-[94px] px-0 text-[12px] font-medium"
           >
             Amenities
           </Button>
           <Button 
             className="bg-[#c8d6e3] text-[#2c3e50] hover:bg-[#c8d6e3] hover:text-[#2c3e50] hover:opacity-80 transition-all duration-200 rounded-full h-8 w-[94px] px-0 text-[12px] font-medium"
           >
             Availability
           </Button>
           <Button 
             className="bg-gray-800 text-white hover:bg-gray-900 transition-all duration-200 rounded-full h-8 px-4 text-[12px] font-medium"
           >
             Inquire
           </Button>
         </div>
      </nav>
    </header>
  );
}
