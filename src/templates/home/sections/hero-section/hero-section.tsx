import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <div className={cn("relative min-h-[80vh] bg-red-300 mt-[70px]")}>
      <div className="absolute bg-[url('/BANNER-TOPO.png')] sm:bg-[url('/BANNER-TOPO.jpg')] inset-0 bg-cover bg-top sm:bg-center bg-no-repeat" />
    </div>
  );
}

// /banner-1.png
