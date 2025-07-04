"use client";

import { Smartphone } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

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

  return (
    <div className="text-sm text-white w-full">
      {/* Barra superior de promoção */}
      <div className="text-center font-medium x-6 md:px-16 lg:px-24 xl:px-32 py-2 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
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
        <Link href="/">Logo</Link>

        <ul className="hidden md:flex items-center space-x-8 md:pl-28">
          {links.map((link, index) => (
            <li
              key={`${index}-${link.path}`}
              className="group flex flex-col gap-0.5"
            >
              <Link href="#"> {link.name} </Link>
              <div
                className={` h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-white`}
              />
            </li>
          ))}
        </ul>

        <Button className="md:inline hidden  ml-20 px-9 py-2 rounded-full active:scale-95 transition-all">
          Get started
        </Button>

        {/* Menu Mobile Button */}
        <button
          aria-label="menu-btn"
          type="button"
          className="inline-block md:hidden active:scale-90 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 md:hidden z-10">
            <ul className="flex flex-col space-y-4 text-lg text-gray-800">
              <li>
                <Link href="#" className="text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm">
                  Pricing
                </Link>
              </li>
            </ul>

            <button
              type="button"
              className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
            >
              Get started
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
