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
            width={2457}
            height={728}
            className="object-contain bg-bottom h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
