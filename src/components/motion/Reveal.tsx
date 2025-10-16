"use client";
import { motion } from "framer-motion";
import { rise } from "@/lib/motion";

export default function Reveal({
  children, 
  distance = 20, 
  once = true,
}: { 
  children: React.ReactNode; 
  distance?: number; 
  once?: boolean; 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px" }}
      variants={rise(distance)}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
