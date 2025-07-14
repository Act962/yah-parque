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
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <h2 className="font-bold text-[#FF7226] text-lg sm:text-2xl md:text-6xl">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full text-black mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Onde está localizado o Yah Acqua Park?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                O Yah Acqua Park está localizado na Praia do Barro Preto - Luís
                Correia - PI, Estrada PI-116, km 7,5, s/n, Dunas. Uma
                localização privilegiada para você aproveitar as belezas da
                região e um dia inesquecível de diversão.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Qual o horário de funcionamento do Yah Acqua Park?
            </AccordionTrigger>
            <AccordionContent>
              <p>Nosso parque funciona das 10h às 17h.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Quando o Yah Acqua Park será inaugurado?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                O parque está com obras em ritmo acelerado com inauguração
                prevista para outubro e será entregue em 4 etapas. E o
                masterplan prevê um parque completo em até 2 anos.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Preciso comprar ingressos antecipadamente?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Recomendamos a compra antecipada dos cartões Yah através dos
                nossos consultores, e dos ingressos através do nosso site
                oficial para garantir sua entrada, evitar filas e aproveitar
                promoções exclusivas online. A compra antecipada também facilita
                seu planejamento e garante sua vaga em dias de maior movimento.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              O que está incluído no valor do ingresso?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                O ingresso do Yah Acqua Park dá acesso a todas as atrações
                aquáticas e espaços de lazer do parque, como a Yah Torre com
                seus toboáguas radicais (Rush, Furious, Turbo, Extreme), os
                Complexos Splash e Tibum para as crianças, o Rio Maresia,
                Mirante Pontão do Sol e muito mais! Alimentação, bebidas,
                locação de armários, black spaces e outros serviços adicionais
                não estão incluídos e podem ser adquiridos separadamente.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              O que são os Cartões Yah e como funcionam?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Os Cartões Yah (Platinum e Black) são passes de acesso ilimitado
                ao parque, oferecendo uma experiência exclusiva e cheia de
                benefícios para você e sua família durante o ano todo.{" "}
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Quais são os benefícios do Yah Platinum Card?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                O Yah Platinum Card oferece uma série de vantagens para você e
                sua família:
              </p>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Acesso ilimitado:</strong> Entrada do titular com até
                  4 dependentes durante o ano todo.
                </li>
                <li>
                  <strong>Fila exclusiva:</strong> Mais tempo para se divertir,
                  menos tempo esperando.
                </li>
                <li>
                  <strong>Descontos especiais:</strong> 50% de desconto no
                  estacionamento e 15% nas lojas do Yah Center e locação de
                  armários.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Quais são os benefícios do Yah Black Card?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                O <strong>Yah Black Card</strong> é o cartão de maior
                exclusividade, pensado para quem busca o máximo de conforto e
                privilégios:
              </p>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Acesso ilimitado:</strong> Entrada do titular com até
                  8 dependentes durante o ano todo.
                </li>
                <li>
                  <strong>Fila exclusiva e prioridade:</strong> Acesso
                  prioritário aos Black Space (sob reserva) e fila exclusiva
                </li>
                <li>
                  <strong>Descontos exclusivos:</strong> 50% de desconto no
                  estacionamento e 15% nas lojas do Yah Center e locação de
                  armários.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              Como posso adquirir meu Cartão Yah?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Você pode adquirir seu Cartão Yah diretamente em nosso site
                oficial, na seção &quot;Cartões Yah&quot;, ou com nossos
                consultores autorizados. Verifique as condições e planos
                disponíveis para escolher o que melhor se adapta à sua família.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              O parque possui área para crianças pequenas?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Sim! Pensando na diversão e segurança dos nossos pequenos
                visitantes, o Yah Acqua Park possui os{" "}
                <strong>Complexos Splash</strong> e <strong>Tibum</strong>, com
                atrações como o Toboágua Splashito, Eskibum, Ilha da Aventura,
                Molha Mania e o playground aquático interativo Acqua Play, além
                de toboáguas específicos para a faixa etária infantil.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>
              Quais são as regras de segurança para as atrações?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                A segurança é nossa prioridade máxima. Todas as atrações possuem
                regras específicas de altura, peso e idade, além de instruções
                de uso que devem ser rigorosamente seguidas. Por favor, leia
                atentamente os avisos em cada atração e siga as orientações dos
                nossos monitores para uma diversão segura.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>
              O Yah Acqua Park oferece estacionamento?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Sim, o Yah Acqua Park dispõe de estacionamento pago para maior
                comodidade dos nossos visitantes. Titulares dos Cartões Yah
                Platinum e Black possuem 50% de desconto no estacionamento.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>
              Existem opções de alimentação dentro do parque?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Com certeza! O Yah Acqua Park oferece diversas opções
                gastronômicas para todos os gostos. Você poderá desfrutar de
                restaurante à la carte, self-service, beach club com drinks e
                petiscos e até de uma charmosa praça de alimentação com
                carrinhos temáticos.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger>
              Posso levar alimentos e bebidas para o parque?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Para a segurança e o controle de qualidade, não é permitida a
                entrada de alimentos e bebidas externos no Yah Acqua Park, com
                exceções para alimentos de bebês ou dietas especiais, mediante
                comprovação. Oferecemos uma variedade de opções gastronômicas
                deliciosas para sua comodidade.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-15">
            <AccordionTrigger>
              Há armários disponíveis para guardar pertences?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Sim, o Yah Acqua Park oferece serviço de locação de armários
                para você guardar seus pertences com segurança e aproveitar o
                dia sem preocupações. Este serviço é pago separadamente, e os
                titulares dos Cartões Yah têm 15% de desconto.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-16">
            <AccordionTrigger>
              Há atendimento de primeiros socorros no Yah Acqua Park?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Sim, o Yah Acqua Park conta com uma equipe de primeiros socorros
                e enfermaria para atender a qualquer eventualidade durante seu
                dia de diversão.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
