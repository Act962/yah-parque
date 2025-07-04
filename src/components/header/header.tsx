"use client";

import { Menu, Smartphone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Logo } from "../logo";
import { cn } from "@/lib/utils";

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

export function Header() {
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

  return (
    <div className="text-sm text-white w-full fixed top-0 z-50">
      {/* Barra superior de promoção */}
      <div
        className={cn(
          "hidden sm:block text-center font-medium x-6 md:px-16 lg:px-24 xl:px-32 py-2 bg-[#FC1F56] transition-all",
          isScrolled && "hidden"
        )}
      >
        <div className="container flex items-center justify-between mx-auto">
          <p className="text-xs sm:text-sm">
            Um dos maiores parques aquáticos a beira-mar do Norte e Nordeste
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm">
              Acesso nossas redes socias:
            </span>

            <div className="flex items-center gap-1">
              <Smartphone className="size-4" />
              <Smartphone className="size-4" />
              <Smartphone className="size-4" />
              <Smartphone className="size-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-orange-400 text-white transition-all shadow-sm">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {links.map((link, index) => (
            <li
              key={`${index}-${link.path}`}
              className="group flex flex-col gap-0.5"
            >
              <Link href="#"> {link.name} </Link>
              <div
                className={` h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-orange-600`}
              />
            </li>
          ))}
        </ul>

        <Button
          variant="primary"
          className="md:inline hidden ml-20 px-9 py-2 rounded-full active:scale-95 transition-all"
        >
          Compre seu passaporte
        </Button>

        {/* Menu Mobile Button */}
        <Button
          aria-label="menu-btn"
          type="button"
          className="inline-block md:hidden active:scale-90 transition text-white bg-transparent shadow-none hover:bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </Button>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-orange-400 shadow-sm p-6 md:hidden z-10 ">
            <ul className="flex flex-col space-y-4 text-lg ">
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
              type="button"
              className="border mt-6 text-sm active:scale-95 transition-all w-40 h-11 rounded-full"
            >
              Compre seu passaporte
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
}
