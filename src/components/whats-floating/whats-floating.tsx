"use client";

import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";

export function WhatsFloating() {
  const handleClick = () => {
    sendGTMEvent({ event: "buttonClicked", value: "whatsapp-float-button" });

    const phoneNumber = "86994835523";
    const message = "Olá! Quero mais informações.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <button
      className="fixed z-50 bottom-20 right-7 cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src="/logo-whats-app.png"
        alt="Logo Whats"
        width={2048}
        height={2048}
        className="size-12 rounded-full hover:shadow-2xl hover:brightness-75 transition-all hover:scale-105"
      />
    </button>
  );
}
