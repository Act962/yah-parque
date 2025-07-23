import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <div
      className={cn(
        "relative min-h-[29.8rem] sm:min-h-[26rem] bg-[#01C9E0] mt-[70px]"
      )}
    >
      <div className="absolute bg-[url('/BANNER-MOBILE-NOVO.png')] sm:bg-[url('/BANNER-TOPO.jpg')] inset-0 bg-cover bg-left sm:bg-center bg-no-repeat" />
    </div>
  );
}

// /banner-1.png
