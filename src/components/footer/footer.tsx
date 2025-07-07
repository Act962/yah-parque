import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0069D6] px-4 h-[40rem] flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between">
        {/* Logo + Links */}
        <div className="flex items-center gap-4">
          <Logo />
          <ul>
            <li>
              <Link href="/">Ingressos</Link>
            </li>
            <li>
              <Link href="/">Sobre o parque</Link>
            </li>
            <li>
              <Link href="/">Atrações</Link>
            </li>
            <li>
              <Link href="/">Passaportes</Link>
            </li>
            <li>
              <Link href="/">Faça sua reserva</Link>
            </li>
          </ul>
        </div>
        {/* Call to Action + Localization */}
        <div className="flex flex-col items-center justify-center gap-2">
          <Button
            variant="primary"
            className="px-9 py-2 rounded-full transition-all"
          >
            Compre seu passaporte
          </Button>
          <div>
            <span className="font-bold text-[#E7D110]">@yahacquapark</span>
            <p className="text-sm">
              Luis Correia - PI <br />
              Praia da Barra Preta
            </p>
          </div>
        </div>
        {/* Social */}
        <div className="flex flex-col items-center">
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
      <span className="text-center text-sm mt-16">
        Copyright &copy; Yah Acqua Park 2025 - Todos os direitos reservados
      </span>
    </footer>
  );
}
