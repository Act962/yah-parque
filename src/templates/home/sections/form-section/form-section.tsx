"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function FormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full max-w-6xl mx-auto py-32 px-4">
      <h3 className="font-medium text-2xl text-[#FE7130]">
        Cadastre-se para receber promoções
      </h3>

      <div className="w-full flex flex-col gap-4 mt-8">
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" type="email" />
      </div>
      <div className="flex items-center space-x-4 mt-4 max-w-3xl">
        <Checkbox
          id="terms"
          defaultChecked
          className="data-[state=checked]:border-[#FE7130] data-[state=checked]:bg-[#FE7130] data-[state=checked]:text-white dark:data-[state=checked]:border-[#FE7130] dark:data-[state=checked]:bg-[#FE7130] "
        />
        <Label htmlFor="terms" className="text-xs text-[#FE7130] font-light">
          Aceito receber comunicações e ofertas do Yah Park. Ao enviar, concorda
          com a Política de Privacidade e está ciente que seus dados poderão ser
          utilizados para enviar de promoção e ações de marketing da Yah Park.
        </Label>
      </div>
    </div>
  );
}
