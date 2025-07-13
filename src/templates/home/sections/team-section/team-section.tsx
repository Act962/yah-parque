import Image from "next/image";
import React from "react";

export function TeamSection() {
  return (
    <section className="h-auto relative">
      <div className="absolute w-full px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-bold text-[#FF7226] text-lg sm:text-2xl md:text-6xl md:mt-16 ">
            Conheça a Turminha
          </h2>
          <p className="text-[#1EADD8] font-medium">Turminha do Yah</p>
        </div>
      </div>
      <Image
        src="/TURMINHA.png"
        width={3012}
        height={1324}
        alt="Turminha"
        className="object-contain bg-amber-400"
      />
    </section>
  );
}
