"use client";

import Image from "next/image";

export function BannerSection() {
  return (
    <>
      {/* <motion.img
        src="/BANNER.jpg"
        alt="Conheça nossa Turminha"
        className="hidden sm:block w-full h-[90px] sm:h-[200px] md:h-[300px] xl:h-[400px]"
      /> */}

      <div className="relative w-full aspect-[5010/612]">
        <Image
          src="/BANNER.jpg"
          alt="Banner nossa turminha"
          fill
          priority
          className="hidden sm:block object-cover"
          sizes="100vw"
        />
      </div>
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
