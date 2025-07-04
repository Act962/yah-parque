import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  imgUrl: string;
  alt: string;
}

export function Feature({ title, description, imgUrl, alt }: Feature) {
  return (
    <div className="flex items-center justify-center w-full gap-4 p-6 shadow-sm rounded-[50px]">
      <Image
        src={imgUrl}
        className="w-16 h-16 lg:w-20 lg:h-20"
        alt={alt}
        width={120}
        height={120}
      />
      <div className="flex-col gap-0.5">
        <h3 className="text-lg font-bold text-[#00c7df] lg:text-lg">{title}</h3>
        <span className="text-sm text-[#FF7226] "> {description} </span>
      </div>
    </div>
  );
}
