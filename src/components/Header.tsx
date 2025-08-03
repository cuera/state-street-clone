import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-lg font-medium text-white">
          Royal Global School
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button className="text-sm text-white/80 hover:text-white transition-colors">
            Why RGS?
          </button>
          <button className="text-sm text-white/80 hover:text-white transition-colors">
            Admission
          </button>
          <button className="text-sm text-white/80 hover:text-white transition-colors">
            Campus
          </button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm rounded-full px-6"
          >
            Enquire Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;