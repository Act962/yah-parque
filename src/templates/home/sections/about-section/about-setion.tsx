import Image from "next/image";
import { DialogVideoPark } from "./dialog-video-park";

export function AboutSection() {
  return (
    <>
      <section
        id="sobre"
        className="h-full pb-48 pt-20 px-4 text-white relative scroll-mt-4"
      >
        <div className="absolute bg-[url('/banner-2.png')] inset-0 bg-cover bg-left bg-no-repeat" />

        <div className="relative mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 place-content-center gap-2">
          {/* Left */}
          <div className="w-full  col-span-1 flex flex-col space-y-8">
            <h2
              data-aos="fade-up"
              className="font-bold text-2xl sm:text-3xl md:text-6xl"
            >
              Por que escolher o <br />
              <span className="text-[#FFE400]">Yah Acqua Park?</span>
            </h2>
            <Image
              data-aos="fade-up"
              data-aos-duration="2000"
              src="/venha-ser-feliz.png"
              width={400}
              height={400}
              alt="Venha ser Feliz"
              className="w-64 object-cover"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col space-y-6">
            {/* Card + Video */}
            <DialogVideoPark>
              <div
                className="relative"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src="/foto-1.png"
                  width={939}
                  height={480}
                  alt="Yah Park"
                  className="w-full object-cover"
                />

                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/40 p-4 rounded-full hover:scale-110 duration-300 cursor-pointer">
                  <Image
                    src="/play.svg"
                    width={45}
                    height={45}
                    alt="Play Video"
                    className="ml-2"
                  />
                </div>
              </div>
            </DialogVideoPark>
            <p
              className="text-sx sm:text-sm font-light"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              O litoral do Piauí já é sinônimo de paraíso, sol e brisa do mar.
              Agora, imagine tudo isso com uma dose extra de adrenalina,
              relaxamento e muita, mas muita alegria para toda a família!
            </p>
            <p
              className="text-sx sm:text-sm font-light"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              O Yah Acqua Park é o mais novo complexo de entretenimento do
              Piauí, pronto para te surpreender com uma estrutura moderna,
              segura e pensada para criar memórias inesquecíveis.
            </p>
          </div>
        </div>

        <div className=" absolute bottom-0 left-0 w-full h-[100px] z-0">
          <Image
            src="/onda.svg"
            alt="Onda"
            fill
            className="object-cover h-full"
          />
        </div>
      </section>
    </>
  );
}
