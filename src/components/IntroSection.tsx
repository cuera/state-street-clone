import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { motion } from "framer-motion";
import { stagger, rise } from "@/lib/motion";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16">
          <Reveal>
            <p 
              className="mb-16"
              style={{
                fontSize: '34px',
                lineHeight: '52.8px',
                letterSpacing: '0px',
                color: '#575654'
              }}
            >
              This is a quiet, happy space to discover new things. With modern facilities and grounded values, learning feels natural here. Every day brings small wins, and those wins add up to confidence.
            </p>
          </Reveal>
          
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <span 
                className="text-foreground font-medium"
                style={{ fontSize: '24px' }}
              >
                Admission Open for 2025-26
              </span>
              <Button 
                variant="default"
                size="sm"
                className="rounded-full px-6"
              >
                Apply Now
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200 my-12"></div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={stagger(0.1, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={rise(20)} className="will-change-transform">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">No1</div>
            <div className="text-sm text-muted-foreground">School of NorthEast</div>
          </motion.div>
          <motion.div variants={rise(20)} className="will-change-transform">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1:12</div>
            <div className="text-sm text-muted-foreground">Teacher-student ratio</div>
          </motion.div>
          <motion.div variants={rise(20)} className="will-change-transform">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Sports</div>
          </motion.div>
          <motion.div variants={rise(20)} className="will-change-transform">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20</div>
            <div className="text-sm text-muted-foreground">Acres Area</div>
          </motion.div>
        </motion.div>

        {/* Divider Line After Stats */}
        <div className="w-full h-px bg-gray-200 my-12"></div>
      </div>
    </section>
  );
};

export default IntroSection;