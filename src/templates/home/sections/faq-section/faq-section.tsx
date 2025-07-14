import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export function FaqSection() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="w-full max-w-6xl mx-auto space-y-6">
        <h2 className="font-bold text-[#FF7226] text-lg sm:text-2xl md:text-6xl">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full text-black">
          <AccordionItem value="item-1">
            <AccordionTrigger>Fila Virtual</AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Agendamento do Fast Pass e Single Pass
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Preenchimento dos Passaportes de Acesso
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Passaportes Anuais</AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Horário de Funcionamento</AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Estacionamento</AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Política de Cancelamento</AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
