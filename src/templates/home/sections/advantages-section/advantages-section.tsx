"use client";

import { Button } from "@/components/ui/button";
import { sendGTMEvent } from "@next/third-parties/google";
import { Square } from "lucide-react";
import Image from "next/image";

export function AdvantagesSections() {
  const handleClick = (url: string) => {
    sendGTMEvent({ event: "buttonClicked", value: "buy_your_passport" });

    window.open(url, "_blank");
  };

  return (
    <div className="w-full py-28 flex flex-col px-4">
      <div className="w-full max-w-6xl flex flex-col mx-auto">
        {/* Title */}
        <div className="mt-12 flex flex-col gap-0.5 text-center sm:text-start">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500">
            Conheça Nosso Park
          </h2>
          <span className="text-xs text-gray-500">
            Sinta a adrenalina: atrações para os corajosos!
          </span>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-8 gap-8">
          {/* First Card */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div>
              <Image
                src="/card-black.png"
                alt="Cartão Black"
                width={301}
                height={216}
                className="object-cover aspect-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <div className="w-full max-w-xl p-8 shadow-sm rounded-3xl">
                  <h3 className="text-2xl font-semibold text-[#FE5B32]">
                    Yah Black Card
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#FE5B32] stroke-[#FE5B32] w-3 h-3" />
                      <span>
                        Para quem busca o mais alto nível de exclusividade!
                      </span>
                    </li>
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#FE5B32] stroke-[#FE5B32] w-3 h-3" />
                      <span>
                        Entrada do titular com até{" "}
                        <strong className="font-bold">8 dependentes.</strong>
                      </span>
                    </li>
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#FE5B32] stroke-[#FE5B32] w-3 h-3" />
                      <span>
                        Fila exclusiva e{" "}
                        <strong className="font-bold">
                          acesso prioritário aos Black Space
                        </strong>{" "}
                        (sob reserva)
                      </span>
                    </li>
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#FE5B32] stroke-[#FE5B32] w-3 h-3" />
                      <span>
                        Acesso gratuito a{" "}
                        <strong className="font-bold">
                          10 parques parceiros no Brasil.
                        </strong>{" "}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#FE5B32] stroke-[#FE5B32] w-3 h-3" />
                      <span>
                        <strong className="font-bold">
                          50% de desconto no estacionamento
                        </strong>{" "}
                        e 15% nas lojas do Yah Center e locação de armários.
                      </span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={() =>
                    handleClick(
                      "https://nasaex.com/app/formulario?task=1751829613448x707539949609025500"
                    )
                  }
                  variant="primary"
                  className="w-fit bg-[#FE5B32] hover:bg-[#FE5B32]/80"
                >
                  Adquerir seu Black Card
                </Button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div>
              <Image
                src="/card-platinum.png"
                alt="Cartão Black"
                width={301}
                height={216}
                className="object-cover aspect-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <div className="w-full max-w-xl p-8 shadow-sm rounded-3xl">
                  <h3 className="text-2xl font-semibold text-[#01C3DC]">
                    Yah Platinum Card
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#01C3DC] stroke-[#01C3DC] w-3 h-3" />
                      <span>
                        Para quem busca o mais alto nível de exclusividade!
                      </span>
                    </li>
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#01C3DC] stroke-[#01C3DC] w-3 h-3" />
                      <span>
                        Entrada do titular com até{" "}
                        <strong className="font-bold">5 dependentes.</strong>
                      </span>
                    </li>
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#01C3DC] stroke-[#01C3DC] w-3 h-3" />
                      <span>
                        Fila exclusiva e{" "}
                        <strong className="font-bold">
                          acesso prioritário aos Black Space
                        </strong>{" "}
                        (sob reserva)
                      </span>
                    </li>
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#01C3DC] stroke-[#01C3DC] w-3 h-3" />
                      <span>
                        Acesso gratuito a{" "}
                        <strong className="font-bold">
                          10 parques parceiros no Brasil.
                        </strong>{" "}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center text-sm font-light">
                      <Square className="fill-[#01C3DC] stroke-[#01C3DC] w-3 h-3" />
                      <span>
                        <strong className="font-bold">
                          50% de desconto no estacionamento
                        </strong>{" "}
                        e 15% nas lojas do Yah Center e locação de armários.
                      </span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={() =>
                    handleClick(
                      "https://nasaex.com/app/formulario?task=1751829613448x707539949609025500"
                    )
                  }
                  variant="primary"
                  className="w-fit"
                >
                  Adquerir seu Black Card
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
