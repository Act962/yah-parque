import { Eye, Info, Settings, Shield, Users } from "lucide-react";
import React from "react";

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Main Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          POLÍTICA DE COOKIES
        </h1>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Intro */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Controle sua privacidade
          </h2>
          <p className="text-gray-600 mb-4">
            O YAH ACQUA PARK faz uso de cookies para melhorar sua experiência de
            navegação, otimizar as funcionalidades do site, e trazer conteúdo
            personalizadas para você, baseadas em seu histórico de navegação.
          </p>
          <p className="text-gray-600 mb-4">
            É importante que você entenda como funcionam os cookies para
            garantir sua privacidade enquanto usa nossos serviços.
          </p>
          <p className="text-gray-600 mb-4">
            Ao clicar em aceitar, você concorda em armazenar cookies em seu
            dispositivo. Para informações mais detalhadas a respeito de cookies,
            consulte nossa POLÍTICA DE PRIVACIDADE.
          </p>
        </section>

        {/* What are Cookies */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Info className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              O que são Cookies?
            </h2>
          </div>
          <div className="space-y-3 text-gray-600">
            <p>
              • Pequenos arquivos de texto que armazenam informações sobre sua
              navegação em nosso site.
            </p>
            <p>
              • Não armazenam dados pessoais: apenas preferências e hábitos de
              navegação.
            </p>
            <p>
              • Otimizam sua experiência: personalização de conteúdo e
              funcionalidades.
            </p>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Tipos de Cookies
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Proprietários:</strong> definidos pelo YAH ACQUA PARK ou
              por terceiros em nosso nome.
            </p>
            <p>
              <strong>De terceiros:</strong> definidos por outros sites
              confiáveis.
            </p>
            <p>
              <strong>Sessão ou temporários:</strong> apagados quando você fecha
              o navegador.
            </p>
            <p>
              <strong>Persistentes ou permanentes:</strong> armazenados no seu
              dispositivo por um período determinado ou até que você o exclua.
            </p>
            <p>
              <strong>Necessários:</strong> essenciais para o bom funcionamento
              do site.
            </p>
            <p>
              <strong>Desempenho:</strong> coletam dados anônimos para otimizar
              o site.
            </p>
            <p>
              <strong>Funcionalidade:</strong> memorizam suas preferências para
              personalizar sua experiência.
            </p>
            <p>
              <strong>Publicidade:</strong> direcionam anúncios relevantes para
              você e limitam a quantidade de vezes que o anúncio aparece.
            </p>
          </div>
        </section>

        {/* Why We Use Cookies */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Por que usamos Cookies?
            </h2>
          </div>
          <div className="space-y-3 text-gray-600">
            <p>
              <strong>Aprimorar sua experiência:</strong> personalização,
              navegação mais fluida e acesso facilitado.
            </p>
            <p>
              <strong>Analisar dados:</strong> entender como você interage com o
              site e otimizar sua experiência.
            </p>
          </div>
        </section>

        {/* Cookie Details */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Que tipo de Cookies utilizamos?
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Abaixo listamos todos os Cookies que podem ser utilizados pelo YAH
            ACQUA PARK. É importante lembrar que você pode gerenciar a permissão
            concedida para cada Cookie em seu navegador.
          </p>
          <p className="text-gray-600 mb-6">
            Além disso, uma vez que os Cookies capturam dados sobre você,
            aconselhamos a leitura de nossa Política de Privacidade.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-red-800 mb-3">
                Cookies estritamente necessários (Sempre ativos)
              </h3>
              <p className="text-gray-600 text-sm">
                Estes cookies são necessários para que o website funcione e não
                podem ser desligados nos nossos sistemas. Você pode configurar o
                seu navegador para bloquear ou alertá-lo(a) sobre esses cookies,
                mas algumas partes do website não funcionarão. Estes cookies não
                armazenam qualquer informação pessoal identificável.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 mb-3">
                Cookies de análise
              </h3>
              <p className="text-gray-600 text-sm">
                Estes cookies permitem que o site forneça uma funcionalidade e
                personalização melhoradas. Realizamos a coleta automatizada de
                informações analíticas por meio do serviço de WEB ANALYTICS
                oferecido pelo Google (Google Analytics) e pelo Facebook
                (Facebook Ads), e assim, podemos identificar os seus padrões de
                navegação no nosso Site e gerar relatórios sobre suas atividades
                e nos ajuda a gerenciar nossas bases de dados e melhorar nosso
                SEO.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-800 mb-3">
                Cookies de Terceiros
              </h3>
              <p className="text-gray-600 text-sm">
                Também utilizamos cookies de terceiros para medir o uso do nosso
                site, em particular esses cookies podem registrar quanto tempo
                você gasta em nosso site e como você navega; e para testar
                nossos novos recursos e produtos. Também usamos botões de mídia
                social e/ou plugins que permitem que você se conecte com sua
                rede social de várias maneiras.
              </p>
            </div>
          </div>
        </section>

        {/* Final Provisions */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Disposições Finais
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Para o YAH ACQUA PARK, sua privacidade e confiança são nossa
              prioridade. Estamos sempre nos atualizando para manter os mais
              altos padrões de segurança.
            </p>
            <p>
              Assim, reservamo-nos o direito de alterar esta Política de Cookies
              a qualquer tempo. As mudanças entrarão em vigor logo após a
              publicação, e você será avisado.
            </p>
            <p>
              Em caso de dúvidas sobre esta Política de Cookies, consulte nossa
              Política de Privacidade, ou entre em contato conosco pelos
              seguintes meios:
            </p>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-4">
              Encarregada de Proteção de Dados
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Nome:</strong> Priscila Bezerra Dantas de Araújo
              </p>
              <p>
                <strong>E-mail:</strong> priscila.dantas@grupoativa.com.br
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
