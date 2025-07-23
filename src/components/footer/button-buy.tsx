"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { Button } from "../ui/button";

export const ButtonBuyAction = () => {
  const handleClick = () => {
    sendGTMEvent({ event: "buttonClicked", value: "buy_your_passport" });

    const url = "https://www.bilheteriadigital.com/yahacquapark";

    window.open(url, "_blank");
  };
  return (
    <Button
      variant="primary"
      className="px-9 py-2 rounded-full transition-all uppercase sm:normal-case"
      onClick={handleClick}
    >
      Compre seu Ingresso
    </Button>
  );
};
