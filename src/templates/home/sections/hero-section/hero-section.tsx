"use client";

import { Carousel } from "./carousel";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <div className={cn("h-[20rem] md:h-[26rem] bg-red-300 mt-[70px]")}>
      <Carousel />
    </div>
  );
}
