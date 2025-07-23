"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";

const links = [
  {
    name: "Sobre",
    path: "#sobre",
  },
  {
    name: "Cartões Yah",
    path: "#cartoes",
  },
  {
    name: "Atrações",
    path: "#atracoes",
  },
  {
    name: "Faça sua reseva",
    path: "#faca-sua-reserva",
  },
];

const socialLink = [
  {
    src: "/icons/instagram.svg",
    alt: "Instagram Link",
    link: "https://www.instagram.com/yahacquapark",
  },
  {
    src: "/icons/youtube.svg",
    alt: "You Tube Link",
    link: "https://www.youtube.com/@YahPark",
  },
  {
    src: "/icons/tiktok.svg",
    alt: "Tik Tok Link",
    link: "https://www.tiktok.com/@yahacquapark",
  },
];

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
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="hover:underline underline-offset-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
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
            {socialLink.map((link) => (
              <Link href={link.link} key={link.alt} target="_blank">
                {link.alt === "Tik Tok" ? (
                  <Image
                    src={link.src}
                    alt="Redes sociais"
                    width={18}
                    height={18}
                    className="size-4 p-0.5 fill-white hover:fill-white/65 cursor-pointer"
                  />
                ) : (
                  <Image
                    src={link.src}
                    alt="Redes sociais"
                    width={18}
                    height={18}
                    className="size-6 p-0.5 fill-white hover:fill-white/65 cursor-pointer"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <span className="relative text-center text-xs mt-16">
        Copyright &copy; Yah Acqua Park 2025 - Todos os direitos reservados
      </span>
    </footer>
  );
}
