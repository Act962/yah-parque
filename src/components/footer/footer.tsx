import Link from "next/link";
import { Logo } from "../logo";
import Image from "next/image";

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
    alt: "Instagram",
    link: "https://www.instagram.com/yahacquapark",
  },
  {
    src: "/icons/youtube.svg",
    alt: "You Tube",
    link: "https://www.youtube.com/@YahPark",
  },
  {
    src: "/icons/tiktok.svg",
    alt: "Tik Tok",
    link: "https://www.tiktok.com/@yahacquapark",
  },
];

export function Footer() {
  return (
    <footer className="relative px-4 bg-[#0069D6] md:bg-transparent h-[40rem] flex flex-col items-center justify-center text-white">
      <div className="absolute hidden md:block md:bg-[url('/footer.png')] inset-0 bg-cover bg-left bg-no-repeat" />
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 mt-16 md:mt-60">
        {/* Logo + Links */}
        <div className="flex items-center gap-4">
          <Logo />
          <ul className="hidden sm:block">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="hover:underline text-sm underline-offset-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Call to Action + Localization */}
        <div className="flex flex-col items-center justify-center gap-2">
          {/* <ButtonBuyAction /> */}
          <div>
            <span className="font-bold text-[#E7D110]">@yahacquapark</span>
            <p className="text-sm">
              Luís Correia - PI <br />
              Praia do Barro Preto
            </p>
          </div>
        </div>
        {/* Políticas */}
        <div>
          <h3 className="font-medium">Políticas</h3>

          <div className="flex flex-col gap-1 mt-px">
            <Link
              target="_blank"
              href={"/politicas-de-privacidade"}
              className="text-sm hover:underline"
            >
              Política de Privacidade
            </Link>
            <Link
            target="_blank"
              href={"/politicas-de-cookies"}
              className="text-sm hover:underline"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
        {/* Social */}
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm">
            Acesse nossas redes socias:
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
