import Image from "next/image";

export function Carousel() {
  return (
    <div className="h-full w-full flex items-center">
      <div className="w-full h-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          id="slider"
        >
          <Image
            src="/banner-1.png"
            alt="Slider 1"
            fill
            className="object-cover bg-bottom"
          />
        </div>
      </div>
    </div>
  );
}
