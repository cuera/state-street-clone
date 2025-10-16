import { Variants } from "framer-motion";

export const D = { 
  hero: 0.8, 
  section: 0.5, 
  hover: 0.25, 
  tap: 0.15, 
  page: 0.25 
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: D.section, ease: "easeOut" } },
};

export const rise = (y = 20, d = D.section): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: d, ease: "easeOut" } },
});

export const stagger = (delayChildren = 0.1, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

export const routeFade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: D.page, ease: "linear" } },
  exit: { opacity: 0, transition: { duration: D.page, ease: "linear" } },
};
