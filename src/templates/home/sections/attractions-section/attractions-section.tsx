import Image from "next/image";
import { Feature } from "./feature";

const features = [
  {
    title: "Diversão para todas as idades",
    description: "De toboáguas radicais a áreas infantis seguras.",
    icon: "/feliz.png",
    alt: "Diversão para todas as idades",
  },
  {
    title: "Localização privilegiada",
    description: "No coração de Luís Correia, com vista para o mar.",
    icon: "/localizacao.png",
    alt: "Localização privilegiada",
  },
  {
    title: "Estrutura completa",
    description: "Gastronomia, lazer e conforto em um só lugar.",
    icon: "/verificado.png",
    alt: "Estrutura completa",
  },
  {
    title: "Momentos inesquecíveis",
    description: "Crie memórias duradouras com quem você ama.",
    icon: "/momento.png",
    alt: "Momentos inesquecíveis",
  },
];

export function AttractionSection() {
  return (
    <section className="h-fit flex flex-col items-center justify-center py-32 px-3 ">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Feature
              key={`${index}-${feature.alt}`}
              title={feature.title}
              description={feature.description}
              alt={feature.alt}
              imgUrl={feature.icon}
            />
          ))}
        </div>

        {/* Images */}

        <div className="mt-12 flex flex-col gap-0.5">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500">
            Atrações, adrenalina e aventura
          </h2>
          <span className="text-xs text-gray-500">
            Sinta a adrenalina: atrações para os corajosos!
          </span>
        </div>

        <div className="h-auto grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 mt-8 md:h-[26rem]">
          {/* Card 1 */}
          <div className="h-52 sm:h-auto relative sm:row-span-2 rounded-2xl overflow-hidden group">
            <Image
              src="/feature-1.png"
              alt="Torre Yah"
              width={1640}
              height={860}
              className="h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />

            <span className="z-40 absolute bottom-4 left-4 text-white px-4 py-1 rounded-full bg-[#00c7df]">
              Torre Yah
            </span>
          </div>
          {/* Card 2 */}
          <div className="h-52 sm:h-auto relative sm:col-span-2 rounded-2xl overflow-hidden group">
            <Image
              src="/feature-2.png"
              alt="Torre Yah"
              width={1640}
              height={860}
              className="h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <span className="z-40 absolute bottom-4 left-4 text-white px-4 py-1 rounded-full bg-[#00c7df]">
              Espaço Kids 01
            </span>
          </div>
          {/* Card 3 */}
          <div className="h-52 sm:h-auto relative rounded-2xl overflow-hidden group">
            <Image
              src="/feature-3.png"
              alt="Torre Yah"
              width={1640}
              height={860}
              className="h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <span className="z-40 absolute bottom-4 left-4 text-white px-4 py-1 rounded-full bg-[#00c7df]">
              Espaço Kids 02
            </span>
          </div>
          {/* Card 4 */}
          <div className="h-52 sm:h-auto relative rounded-2xl overflow-hidden group">
            <Image
              src="/feature-4.png"
              alt="Torre Yah"
              width={1640}
              height={860}
              className="h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <span className="z-40 absolute bottom-4 left-4 text-white px-4 py-1 rounded-full bg-[#00c7df]">
              Portal entrada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
