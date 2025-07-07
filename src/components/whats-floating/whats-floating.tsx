"use client";

import Image from "next/image";

export function WhatsFloating() {
  const handleClick = () => {
    const phoneNumber = "8694856274"; // Substitua pelo número desejado (com DDI e DDD, sem espaços ou sinais)
    const message = "Olá! Quero mais informações."; // Mensagem opcional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed bottom-4 right-4 cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src="/logo-whats-app.png"
        alt="Logo Whats"
        width={2048}
        height={2048}
        className="size-12 rounded-full animate-scale-up"
      />
    </div>
  );
}
