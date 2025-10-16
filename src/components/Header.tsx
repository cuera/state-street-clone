import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      className="fixed top-6 left-0 right-0 z-50 bg-transparent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ marginBottom: '50px' }}
    >
      <div className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src="https://www.rgs.edu.in/wp-content/uploads/2024/05/RGS-Logo_Blue-1.png" 
            alt="School Logo"
            className="h-10 w-auto"
          />
        </motion.div>
        
        <nav className="hidden lg:flex items-center space-x-12">
          <motion.button 
            className="text-base text-black hover:text-gray-600 font-medium transition-colors duration-200 font-satoshi"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.button>
          <motion.button 
            className="text-base text-black hover:text-gray-600 font-medium transition-colors duration-200 font-satoshi"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Admissions
          </motion.button>
          <motion.button 
            className="text-base text-black hover:text-gray-600 font-medium transition-colors duration-200 font-satoshi"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Academics
          </motion.button>
          <motion.button 
            className="text-base text-black hover:text-gray-600 font-medium transition-colors duration-200 font-satoshi"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.button>
        </nav>

        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-black hover:bg-gray-800 text-white text-sm px-6 py-2 rounded-full font-medium transition-all duration-200 font-satoshi"
              size="sm"
            >
              Enquire Now
            </Button>
          </motion.div>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="lg:hidden text-black hover:bg-gray-100">
                  <Menu className="h-5 w-5" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <motion.div 
                className="flex flex-col space-y-6 mt-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, staggerChildren: 0.1 }}
              >
                <motion.button 
                  className="text-left text-xl text-black hover:text-gray-600 font-medium font-satoshi"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  About
                </motion.button>
                <motion.button 
                  className="text-left text-xl text-black hover:text-gray-600 font-medium font-satoshi"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Admissions  
                </motion.button>
                <motion.button 
                  className="text-left text-xl text-black hover:text-gray-600 font-medium font-satoshi"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Academics
                </motion.button>
                <motion.button 
                  className="text-left text-xl text-black hover:text-gray-600 font-medium font-satoshi"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact
                </motion.button>
                <div className="pt-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-3 font-satoshi">
                      Enquire Now
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;