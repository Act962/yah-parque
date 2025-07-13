"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/image-1.jpg",
    alt: "Thumb 1",
    title: "Torre Yah",
  },
  {
    src: "/image-2.jpg",
    alt: "Thumb 2",
    title: "Torre Yah",
  },
  {
    src: "/image-1.jpg",
    alt: "Thumb 3",
    title: "Torre Yah",
  },
  {
    src: "/image-2.jpg",
    alt: "Thumb 4",
    title: "Torre Yah",
  },
];

export default function ImageGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalSlides = slides.length;

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = slider.children[0].clientWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    const handleResize = () => goToSlide(currentSlide);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center space-y-4 ">
      {/* Slider com botões */}
      <div className="relative flex items-center w-full">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute z-40 left-2 sm:left-4 md:p-2 p-1 bg-black/30 md:mr-6 mr-2 rounded-full hover:bg-black/50 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Slider principal */}
        <div className="w-full overflow-hidden relative mx-auto">
          <div
            ref={sliderRef}
            className="relative flex transition-transform duration-500 ease-in-out"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative w-full aspect-[16/9] shrink-0 overflow-hidden rounded-4xl"
              >
                <span className="absolute bg-[#F5C000] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-nowrap text-sm font-medium text-white z-30">
                  {slide.title}
                </span>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={index === 0} // carrega primeiro slide mais rápido
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute z-40 right-2 sm:right-4 md:p-2 p-1 bg-black/30 md:ml-6 ml-2 rounded-full hover:bg-black/50 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="-mt-10 sm:-mt-16 z-10 flex gap-2 items-center max-w-4xl mx-auto">
        {slides.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "relative rounded-lg overflow-hidden border-2 transition-all",
              currentSlide === index
                ? "border-blue-500"
                : "border-transparent hover:border-gray-300"
            )}
          >
            <span className="absolute hidden sm:block bg-[#F5C000] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-2 py-1 rounded-full text-nowrap text-xs font-medium text-white">
              {thumb.title}
            </span>
            <Image
              src={thumb.src}
              alt={`Thumbnail ${index + 1}`}
              width={300}
              height={200}
              className="md:h-24 h-14 object-cover w-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
