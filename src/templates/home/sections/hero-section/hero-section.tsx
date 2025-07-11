import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <div className={cn("relative min-h-[70vh] bg-red-300 mt-[70px]")}>
      <div className="absolute bg-[url('/banner-1.png')] inset-0 bg-cover bg-bottom bg-no-repeat" />
    </div>
  );
}

// /banner-1.png
