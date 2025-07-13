"use client";

import { motion } from "motion/react";

export function BannerSection() {
  return (
    <motion.img
      src="/BANNER.png"
      alt="Conheça nossa Turminha"
      className="w-full h-[90px] sm:h-[200px] md:h-[300px]"
    />
  );
}
