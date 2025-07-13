"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";

const links = [
  {
    name: "Ingressos",
    path: "/",
  },
  {
    name: "Sobre",
    path: "/",
  },
  {
    name: "Atrações",
    path: "/",
  },
  {
    name: "Passaportes",
    path: "/",
  },
  {
    name: "Faça sua reseva",
    path: "/",
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Acompanha o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Verifica o estado inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    sendGTMEvent({ event: "buttonClicked", value: "buy_your_passport" });

    const url =
      "https://nasaex.com/app/formulario?task=1748707030433x441797963239915500";

    window.open(url, "_blank");
  };

  return (
    <div className="w-full fixed top-0 z-50 text-white">
      {/* Barra superior de promoção */}
      {!isScrolled && (
        <div
          className={cn(
            "hidden sm:flex items-center justify-center text-center font-medium bg-[#FC1F56] transition-all px-4 py-2"
          )}
        >
          <div className="w-full max-w-7xl flex items-center justify-between mx-auto">
            <p className="text-xs  font-light">
              Um dos maiores parques aquáticos a beira-mar do Norte e Nordeste
            </p>

            <div className="flex items-center gap-2">
              <span className="text-xs  font-light">
                Acesso nossas redes socias:
              </span>

              <div className="flex items-center">
                <Image
                  src="/redes-sociais.svg"
                  alt="Redes sociais"
                  width={60}
                  height={45}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Fim superior de promoção */}
      <nav className="relative w-full bg-orange-500 px-4 h-[70px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/background-navbar.png')] object-cover bg-center bg-no-repeat" />
        <div
          className="relative w-full max-w-7xl mx-auto flex items-center justify-between
        "
        >
          <Logo />
          <ul className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => (
              <li
                key={`${index}-${link.path}`}
                className="group flex flex-col gap-0.5"
              >
                <Link href="#" className="text-sm">
                  {" "}
                  {link.name}{" "}
                </Link>
                <div
                  className={` h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-orange-600`}
                />
              </li>
            ))}
          </ul>
          <Button
            variant="primary"
            className="hidden md:inline"
            onClick={handleClick}
          >
            Compre seu Passaporte
          </Button>

          <Button
            aria-label="menu-btn"
            type="button"
            variant="ghost"
            className="inline-block md:hidden bg-transparent"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu />
          </Button>
          {/* Menu Mobile */}
        </div>
        {menuOpen && (
          <div className="absolute top-[70px] left-0 w-full shadow-sm p-6 md:hidden z-50 bg-orange-500">
            <ul className="flex flex-col space-y-4">
              {links.map((link, index) => (
                <li
                  key={`${index}-${link.path}`}
                  className="group flex flex-col gap-0.5 w-fit"
                >
                  <Link href="#" className="text-sm">
                    {" "}
                    {link.name}{" "}
                  </Link>
                  <div
                    className={` h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-orange-600`}
                  />
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              className="w-full mt-6"
              onClick={handleClick}
            >
              Compre seu Passaporte
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
}
