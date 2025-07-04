import { Smartphone } from "lucide-react";

export function Banner() {
  return (
    <div className="w-full py-2.5 font-medium text-sm text-white text-center bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
      <div className="container flex items-center justify-between">
        <p className="text-sm">
          Um dos maiores parques aquáticos a beira-mar do Norte e Nordeste
        </p>

        <div className="flex items-center gap-4">
          <span className="text-sm">Acesso nossas redes socias:</span>

          <div className="flex items-center gap-1">
            <Smartphone />
            <Smartphone />
            <Smartphone />
            <Smartphone />
          </div>
        </div>
      </div>
    </div>
  );
}
