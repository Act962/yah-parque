import ImageGallery from "./carousel-atractions";

export function GalerySection() {
  return (
    <div className=" py-20 px-4">
      <div className="w-full max-w-6xl mx-auto space-y-6">
        <div className=" flex flex-col gap-0.5">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#FEB725]">
            Atrações - adrenalina e aventura
          </h2>
          <span className="text-xs text-[#FE523A]">
            Sinta a adrenalina: atrações para os corajosos!
          </span>
        </div>
        <ImageGallery />
      </div>
    </div>
  );
}
