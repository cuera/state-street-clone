import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-lg font-medium text-foreground">
          505 State Street
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Amenities
          </button>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Availability
          </button>
          <Button 
            variant="default" 
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
          >
            Inquire
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;