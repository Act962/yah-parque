"use client";

import React, { useEffect, useState } from "react";
import { Carousel } from "./carousel";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Acompanha o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Verifica o estado inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "h-[20rem] md:h-[26rem] bg-red-300 mt-[70px]",
        isScrolled ? "mt-[100px]" : "mt-[70px]"
      )}
    >
      <Carousel />
    </div>
  );
}
