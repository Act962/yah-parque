"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function BannerSection() {
  return (
    <>
      <motion.img
        src="/BANNER-NOVO.jpg"
        alt="Conheça nossa Turminha"
        className="hidden sm:block w-full h-[90px] sm:h-[200px] md:h-[300px]"
      />

      <div className="w-full sm:hidden px-4">
        <Image
          src="/BANNER-MOBILE-TURMA.png"
          alt="Banner Nossa Turminha"
          width={800}
          height={700}
          className="w-full object-contain"
        />
      </div>
    </>
  );
}
