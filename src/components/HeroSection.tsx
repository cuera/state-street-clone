import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const HeroSection = () => {
  const sectionStyle: CSSProperties & Record<'--nav-h' | '--page-gutter' | '--hero-heading-offset', string> = {
    '--nav-h': '80px',
    '--page-gutter': '13px',
    '--hero-heading-offset': '188px',
    paddingTop: 'var(--nav-h)'
  };

  return (
    <section id="hero-section" className="relative min-h-[200vh] overflow-hidden" style={sectionStyle}>
      {/* Background Video with Professional Cityscape */}
      <motion.div
        className="absolute top-[var(--nav-h)] bottom-0 inset-x-[var(--page-gutter)] rounded-3xl overflow-hidden shadow-xl"
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* High-resolution cityscape image to show complete vertical range including bottom buildings */}
        <img
          src="/heroroyal.avif"
          alt="Royal Global School Hero"
          className="w-full h-full object-cover object-center"
          style={{
            objectPosition: '50% 25%', // Reduced top portion (from 30% to 25%)
            height: 'calc(200vh - var(--nav-h))' // Adjust height to account for top padding
          }}
        />
      </motion.div>

      
      {/* Content Grid */}
      <div className="relative z-10 min-h-screen">
        <div className="w-full min-h-screen pt-[var(--hero-heading-offset)]">
          <div className="pl-[calc(var(--page-gutter)+64px)] pr-6 sm:pr-12 max-w-2xl">
            
            {/* Main Content - Left Aligned */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              {/* Main Headline */}
              <div className="space-y-4">
                               <motion.h1
                 className="text-[28px] md:text-[34px] lg:text-[42px] xl:text-[44px] font-bold leading-tight font-satoshi tracking-tight"
                 style={{ color: '#102939' }}
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
               >
                 Royal Global School
               </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl font-satoshi font-medium leading-relaxed"
                style={{ color: '#394045' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Gateway to Global Excellence
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="text-white rounded-full px-8 py-3 text-base font-satoshi font-medium transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: '#112A46' }}
                  >
                    Explore Campus
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <ShimmerButton
                    className="rounded-full px-8 py-3 text-base font-satoshi font-medium shadow-2xl"
                    shimmerColor="#ffffff"
                    background="rgba(148, 170, 203, 0.3)"
                    shimmerDuration="1.5s"
                    style={{ color: '#94AACB', borderColor: '#94AACB' }}
                  >
                    <span className="whitespace-pre-wrap text-center leading-none tracking-tight">
                      Apply Now
                    </span>
                  </ShimmerButton>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Sidebar - Positioned on the right */}
          <div className="absolute bottom-8 right-8 hidden lg:block">
            <motion.div
              className="flex flex-col gap-6 text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
            >
              <div>
                <div className="text-2xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] font-bold font-satoshi">No.1</div>
                <div className="text-xs text-white/80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] uppercase tracking-wide">School Northeast</div>
              </div>
              <div>
                <div className="text-2xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] font-bold font-satoshi">1:12</div>
                <div className="text-xs text-white/80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] uppercase tracking-wide">Teacher Ratio</div>
              </div>
              <div>
                <div className="text-2xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] font-bold font-satoshi">20+</div>
                <div className="text-xs text-white/80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] uppercase tracking-wide">Sports</div>
              </div>
              <div>
                <div className="text-2xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] font-bold font-satoshi">20</div>
                <div className="text-xs text-white/80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] uppercase tracking-wide">Acres</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;