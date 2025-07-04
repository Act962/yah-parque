import Image from "next/image";

export function AboutSection() {
  return (
    <>
      <div className="h-full py-32 px-4  bg-[url('/banner-2.png')] bg-center object-contain text-white relative">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 place-content-center gap-2">
          {/* Left */}
          <div className="w-full  col-span-1 flex flex-col space-y-8">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-6xl">
              Por que escolher o <br />
              <span className="text-[#FFE400]">Yah Acqua Park?</span>
            </h2>
            <Image
              src="/venha-ser-feliz.png"
              width={442}
              height={454}
              alt="Venha ser Feliz"
              className="w-64 object-cover "
            />
          </div>

          {/* Right */}
          <div className="flex flex-col space-y-6">
            <Image
              src="/foto-1.png"
              width={939}
              height={480}
              alt="Yah Park"
              className="w-full object-cover"
            />
            <p className="text-sx sm:text-sm font-light">
              O litoral do Piauí já é sinônimo de paraíso, sol e brisa do mar.
              Agora, imagine tudo isso com uma dose extra de adrenalina,
              relaxamento e muita, mas muita alegria para toda a família!
            </p>
            <p className="text-sx sm:text-sm font-light">
              O Yah Acqua Park é o mais novo complexo de entretenimento do
              Piauí, pronto para te surpreender com uma estrutura moderna,
              segura e pensada para criar memórias inesquecíveis.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[100px] z-0">
          <Image
            src="/onda.svg"
            alt="Onda"
            fill
            className="object-cover h-full"
          />
        </div>
      </div>
    </>
  );
}
