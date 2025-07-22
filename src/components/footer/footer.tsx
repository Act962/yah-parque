"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";

export function Footer() {
  const handleClick = () => {
    sendGTMEvent({ event: "buttonClicked", value: "buy_your_passport" });

    const url = "https://www.bilheteriadigital.com/yahacquapark";

    window.open(url, "_blank");
  };
  return (
    <footer className="relative px-4 bg-[#0069D6] sm:bg-transparent h-[40rem] flex flex-col items-center justify-center text-white">
      <div className="absolute hidden sm:block sm:bg-[url('/footer.png')] inset-0 bg-cover bg-left bg-no-repeat" />
      <div className="relative w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 sm:mt-60">
        {/* Logo + Links */}
        <div className="flex items-center gap-4">
          <Logo />
          <ul className="hidden sm:block">
            <li>
              <Link href="/" className="hover:underline underline-offset-2">
                Ingressos
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline underline-offset-2">
                Sobre o parque
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline underline-offset-2">
                Atrações
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline underline-offset-2">
                Passaportes
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline underline-offset-2">
                Faça sua reserva
              </Link>
            </li>
          </ul>
        </div>
        {/* Call to Action + Localization */}
        <div className="flex flex-col items-center justify-center gap-2">
          <Button
            variant="primary"
            className="px-9 py-2 rounded-full transition-all uppercase sm:normal-case"
            onClick={handleClick}
          >
            Compre seu Ingresso
          </Button>
          <div>
            <span className="font-bold text-[#E7D110]">@yahacquapark</span>
            <p className="text-sm">
              Luís Correia - PI <br />
              Praia do Barro Preto
            </p>
          </div>
        </div>
        {/* Social */}
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm">
            Acesso nossas redes socias:
          </span>

          <div className="flex items-center gap-1">
            <Image
              src="/redes-sociais.svg"
              alt="Redes sociais"
              width={60}
              height={45}
            />
          </div>
        </div>
      </div>
      <span className="relative text-center text-sm mt-16">
        Copyright &copy; Yah Acqua Park 2025 - Todos os direitos reservados
      </span>
    </footer>
  );
}
