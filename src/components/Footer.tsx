const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">
              505 State Street
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              New York's First All-Electric Skyscraper
            </p>
            <p className="text-sm text-muted-foreground">
              505 State Street<br />
              Brooklyn, NY 11217
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              Building
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Amenities</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Floor Plans</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Availability</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              Neighborhood
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Fort Greene</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Transit</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Dining</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shopping</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Schedule Tour</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Apply Online</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 505 State Street. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;