"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader, Sparkles, Waves } from "lucide-react";
import { useState } from "react";

export function FormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const options = {
        statusCrmId: "1751627295803x908549651467902000",
        crmId: "1751627294318x520751391507218400",
        name,
        email,
        contato: "",
        companyId: "1748034650845x895042114756542500",
      };
      const response = await fetch(
        "https://nasago.bubbleapps.io/api/1.1/wf/create_lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(options),
        }
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await response.json();
      setName("");
      setEmail("");
      setIsChecked(false);
      setOpen(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="faca-sua-reserva" className="pb-20 scroll-mt-4 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h3 className="font-medium text-2xl text-[#FE7130]">
          Cadastre-se para receber promoções
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col gap-4 mt-8">
            <Input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4 mt-4 max-w-3xl">
            <Checkbox
              id="terms"
              checked={isChecked}
              onCheckedChange={(checked) => setIsChecked(!!checked)}
              className="data-[state=checked]:border-[#FE7130] data-[state=checked]:bg-[#FE7130] data-[state=checked]:text-white dark:data-[state=checked]:border-[#FE7130] dark:data-[state=checked]:bg-[#FE7130] "
            />
            <Label
              htmlFor="terms"
              className="text-xs text-[#FE7130] font-light"
            >
              Aceito receber comunicações e ofertas do Yah Park. Ao enviar,
              concorda com a Política de Privacidade e está ciente que seus
              dados poderão ser utilizados para enviar de promoção e ações de
              marketing da Yah Park.
            </Label>
          </div>

          <Button
            type="submit"
            className="mt-4 rounded-full bg-[#36C3B3] hover:bg-[#36C3B3]/70 w-32"
            disabled={!(isChecked && name && email)}
          >
            {!isLoading ? "Enviar" : <Loader className="size-3 animate-spin" />}
          </Button>
        </form>
      </div>

      {/* Pop-up Congratulations */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <div className="relative mb-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto animate-pulse" />
              <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
            </div>

            <DialogTitle className="text-2xl font-bold text-green-600 mb-2">
              🎉 Parabéns! 🎉
            </DialogTitle>

            <DialogDescription className="text-gray-700 space-y-3">
              <p className="font-semibold text-center">
                Sua mensagem foi enviada com sucesso!
              </p>
              <p className="text-xs">
                Obrigado por entrar em contato conosco! Nossa equipe já recebeu
                suas informações e em breve retornaremos para proporcionar
                momentos inesquecíveis de diversão para você e sua família.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-blue-700 font-medium text-sm">
                  🏊‍♀️ Prepare-se para mergulhar na diversão! 🌊
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="justify-center">
            <Button onClick={() => setOpen(false)} variant="primary">
              <Waves className="mr-2 h-4 w-4" />
              Continuar Navegando
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
