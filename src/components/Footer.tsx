const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <img 
              src="https://www.rgs.edu.in/wp-content/uploads/2024/05/RGS-Logo_White-1.png" 
              alt="Royal Global School"
              className="h-12 mb-4"
            />
            <h3 className="text-lg font-medium mb-4">Royal Global School</h3>
            <div className="space-y-2 text-sm text-background/80">
              <p>Betkuchi, NH - 37,</p>
              <p>Guwahati - 35, Assam</p>
            </div>
          </div>
          
          {/* Top Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Top Links</h3>
            <div className="space-y-2 text-sm text-background/80">
              <p><a href="#" className="hover:text-background transition-colors">Boarding School in Guwahati</a></p>
              <p><a href="#" className="hover:text-background transition-colors">Admissions</a></p>
              <p><a href="#" className="hover:text-background transition-colors">Best Preschool in Guwahati</a></p>
              <p><a href="#" className="hover:text-background transition-colors">Fee Structure</a></p>
            </div>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Useful Links</h3>
            <div className="space-y-2 text-sm text-background/80">
              <p><a href="#" className="hover:text-background transition-colors">Glory of RGS</a></p>
              <p><a href="#" className="hover:text-background transition-colors">Philosophy</a></p>
              <p><a href="#" className="hover:text-background transition-colors">RGS Edge</a></p>
              <p><a href="#" className="hover:text-background transition-colors">Achievement</a></p>
              <p><a href="#" className="hover:text-background transition-colors">Work with us</a></p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-background/80">
              <p>+91-8822607725</p>
              <p>+91-8822607726</p>
              <p>+91-8811032728</p>
              <p>+91-7099020917</p>
              <p className="mt-4">admissions@rgs.edu.in</p>
              <p>principal@rgs.edu.in</p>
            </div>
          </div>
        </div>
        
        {/* Social Links & Copyright */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-background/80 hover:text-background">Facebook</a>
              <a href="#" className="text-background/80 hover:text-background">YouTube</a>
              <a href="#" className="text-background/80 hover:text-background">Instagram</a>
            </div>
            <div className="text-center text-sm text-background/60">
              <p>&copy; Copyright 2024 Royal Global School. All Rights Reserved.</p>
              <p className="mt-1">Developed by VOYAGERMAN TECHNOLOGY</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;