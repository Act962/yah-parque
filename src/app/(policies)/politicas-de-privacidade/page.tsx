import { 
  Shield, 
  Eye, 
  Users, 
  Lock, 
  Globe, 
  UserCheck, 
  Clock, 
  Mail, 
  FileText, 
  AlertTriangle,
  Settings,
  Database,
  Share2,
  CheckCircle,
  Info
} from "lucide-react";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Main Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS
        </h1>
        <p className="text-lg text-gray-600">
          YAH ACQUA PARK - Última atualização em 04 de agosto de 2025
        </p>
      </div>

      {/* Welcome Message */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-blue-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Olá! Seja bem-vinda(o)!
        </h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Este site e todo o seu conteúdo ("Site") é de responsabilidade e operado pelo <strong>YAH ACQUA PARK</strong>, 
            pessoa jurídica de direito privado, inscrita no CNPJ sob o n° <strong>39.144.799/0002-06</strong>, 
            situado à Rodovia – PI 116, km 7,5, Praia do Barro Preto, Luís Correia, Estado do Piauí.
          </p>
          <p>
            Esta política de Privacidade e Proteção de Dados ("Política") foi elaborada para demonstrar 
            o nosso compromisso com a transparência e respeito à privacidade dos nossos visitantes e clientes.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-yellow-800">
              <strong>E ah, fique atento!</strong> O tratamento de dados pessoais é operado de acordo com as 
              determinações da Lei Geral de Proteção de Dados (Lei n° 13.709/2018).
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="space-y-8">
        
        {/* Objective and Scope */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              OBJETIVO E ABRANGÊNCIA
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p><strong>1.1.</strong> Estabelecer diretrizes e garantir níveis adequados de Proteção de Dados Pessoais em conformidade com a legislação brasileira;</p>
            <p><strong>1.2.</strong> Orientar quanto à adoção de controles técnicos e administrativos para atendimento dos requisitos para Proteção de Dados Pessoais;</p>
            <p><strong>1.3.</strong> Resguardar os titulares dos dados pessoais, garantindo direitos fundamentais de liberdade e de privacidade;</p>
            <p><strong>1.4.</strong> Prevenir possíveis causas de violações de dados pessoais e incidentes de segurança da informação;</p>
            <p><strong>1.5.</strong> Minimizar os riscos de perdas financeiras, de participação no mercado, da confiança de clientes ou qualquer outro impacto negativo no negócio.</p>
          </div>
        </section>

        {/* Application Scope */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              ABRANGÊNCIA
            </h2>
          </div>
          <div className="text-gray-600">
            <p className="mb-4"><strong>2.1.</strong> Esta política se aplica a qualquer operação de tratamento de dados pessoais realizada pelo YAH ACQUA PARK, independentemente do meio ou do país onde estejam localizados os dados, desde que:</p>
            <div className="ml-6 space-y-2">
              <p><strong>2.1.1.</strong> A operação de tratamento seja realizada em território nacional brasileiro;</p>
              <p><strong>2.1.2.</strong> Tenha por objetivo a oferta ou o fornecimento de serviços ou o tratamento de dados de indivíduos localizados no território nacional;</p>
              <p><strong>2.1.3.</strong> Os dados pessoais, objeto do tratamento, tenham sido coletados no território nacional.</p>
            </div>
          </div>
        </section>

        {/* Main Definitions */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Info className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              PRINCIPAIS DEFINIÇÕES
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p><strong>LGPD:</strong> Lei Geral de Proteção de Dados (Lei nº 13.709/18)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p><strong>Dado Pessoal:</strong> Todo aquele dado que se refira a uma pessoa natural identificada ou identificável.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p><strong>Dado Pessoal Sensível:</strong> Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato, dados referentes à saúde ou à vida sexual, dado genético ou biométrico.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p><strong>Titular:</strong> A pessoa natural à qual se referem os dados pessoais objeto do tratamento.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p><strong>Controlador:</strong> Pessoa natural ou jurídica a quem compete as decisões sobre como o tratamento dos dados pessoais.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p><strong>Operador:</strong> Pessoa natural ou jurídica que realiza o tratamento em nome do controlador.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p><strong>Encarregado/DPO:</strong> Pessoa que atua como canal de ligação entre o controlador, os titulares de dados e a ANPD.</p>
            </div>
          </div>
        </section>

        {/* LGPD Principles */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              PRINCÍPIOS RELATIVOS AO TRATAMENTO DE DADOS PESSOAIS
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            As atividades de tratamento de dados pessoais realizadas pelo YAH ACQUA PARK observarão a boa-fé e respeitarão os princípios dispostos no Artigo 6° da LGPD:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 mb-2">Finalidade</h3>
              <p className="text-sm text-gray-600">Tratamento para propósitos legítimos, específicos, explícitos e informados ao titular.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-800 mb-2">Adequação</h3>
              <p className="text-sm text-gray-600">Dados tratados de forma adequada às finalidades informadas ao titular.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-yellow-800 mb-2">Necessidade</h3>
              <p className="text-sm text-gray-600">Tratamento limitado ao mínimo necessário para realização das finalidades.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 mb-2">Livre Acesso</h3>
              <p className="text-sm text-gray-600">Garantia de consulta facilitada e gratuita sobre forma e duração do tratamento.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-red-800 mb-2">Qualidade dos Dados</h3>
              <p className="text-sm text-gray-600">Dados pessoais exatos e atualizados sempre que necessário.</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
              <h3 className="font-semibold text-indigo-800 mb-2">Transparência</h3>
              <p className="text-sm text-gray-600">Informações claras, precisas e facilmente acessíveis sobre o tratamento.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-500">
              <h3 className="font-semibold text-gray-800 mb-2">Segurança</h3>
              <p className="text-sm text-gray-600">Medidas técnicas e administrativas para proteger os dados.</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-800 mb-2">Prevenção</h3>
              <p className="text-sm text-gray-600">Medidas para prevenir danos em virtude do tratamento de dados.</p>
            </div>
          </div>
        </section>

        {/* Who Does This Policy Apply To */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              A QUEM A POLÍTICA SE APLICA?
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Existem várias formas de você se relacionar com o YAH ACQUA PARK. Esta Política se aplica aos:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <UserCheck className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Clientes e Usuários de nosso site</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <UserCheck className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Colaboradores do YAH ACQUA PARK</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <UserCheck className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-700">Candidatos a vagas de emprego/estágio</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <UserCheck className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Diretores e Conselheiros</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                <UserCheck className="w-5 h-5 text-red-600" />
                <span className="text-gray-700">Terceiros/fornecedores e parceiros</span>
              </div>
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Database className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              QUAIS DADOS PESSOAIS COLETAMOS E TRATAMOS?
            </h2>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 mb-3">Dados Pessoais</h3>
              <p className="text-gray-600 text-sm">
                Nome completo, e-mail, telefone, data de nascimento, CPF, RG, profissão, 
                endereço completo, dados referentes ao pagamento e imagens em vídeo capturadas em CCTV.
              </p>
            </div>
            <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-red-800 mb-3">Dados Pessoais Sensíveis</h3>
              <p className="text-gray-600 text-sm">
                Em determinadas ocasiões, dados biométricos podem ser tratados, 
                sempre em conformidade com o art. 11 da LGPD.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-800 mb-3">Dados de Crianças e Adolescentes</h3>
              <p className="text-gray-600 text-sm">
                Possível coleta mediante ciência de ao menos um dos pais ou responsável legal, 
                para finalidade legal e legítima.
              </p>
            </div>
          </div>
        </section>

        {/* How Data is Collected */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              COMO OS DADOS PESSOAIS SÃO COLETADOS?
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p><strong>a) Dados que o Usuário nos fornece:</strong> através de formulário online, aquisição de ingressos, e-mail, chat (WhatsApp) ou colaboradores externos.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p><strong>b) Dados coletados automaticamente:</strong> dados de navegação, datas de compra de produtos e atividades de navegação.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p><strong>c) Outras formas:</strong> aquisição na bilheteria, contratação de serviços, formulário de contato, compartilhamento de terceiros.</p>
            </div>
          </div>
        </section>

        {/* Cookies Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              COOKIES E TECNOLOGIAS SIMILARES
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Quando você acessa nosso site, alguns dados pessoais podem ser coletados automaticamente 
              por meio de COOKIES e outras tecnologias de monitoramento para aprimorar sua experiência.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Google Analytics</h4>
                <p className="text-sm">Identificação de padrões de navegação e geração de relatórios.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Facebook Ads</h4>
                <p className="text-sm">Análise de atividades para melhorar SEO e gerenciar bases de dados.</p>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-yellow-800 text-sm">
                <strong>Importante:</strong> Você pode alterar configurações do navegador para bloquear 
                cookies ou receber alertas quando um cookie estiver sendo enviado.
              </p>
            </div>
          </div>
        </section>

        {/* Purpose of Data Processing */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-pink-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              PARA QUAIS FINALIDADES TRATAMOS SEUS DADOS?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-700">• Fornecer e comunicar nossos serviços</span>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">• Identificar e confirmar identidade</span>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <span className="text-sm text-gray-700">• Venda de ingressos e serviços</span>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <span className="text-sm text-gray-700">• Informar sobre novidades e eventos</span>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <span className="text-sm text-gray-700">• Cumprir obrigações contratuais</span>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <span className="text-sm text-gray-700">• Cumprir obrigações legais</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-teal-50 rounded-lg">
                <span className="text-sm text-gray-700">• Autenticação e monitoramento de segurança</span>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <span className="text-sm text-gray-700">• Garantir portabilidade dos dados</span>
              </div>
              <div className="p-3 bg-cyan-50 rounded-lg">
                <span className="text-sm text-gray-700">• Desenvolvimento das atividades empresariais</span>
              </div>
              <div className="p-3 bg-lime-50 rounded-lg">
                <span className="text-sm text-gray-700">• Análise de perfil de candidatos</span>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg">
                <span className="text-sm text-gray-700">• Detectar e prevenir fraudes</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg">
                <span className="text-sm text-gray-700">• Proteger direitos e segurança</span>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Share2 className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              COM QUEM COMPARTILHAMOS SEUS DADOS?
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Seus dados pessoais podem ser compartilhados nas seguintes hipóteses:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <span className="text-gray-700">• Outras unidades do YAH ACQUA PARK</span>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <span className="text-gray-700">• Em caso de venda, fusão ou aquisição</span>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <span className="text-gray-700">• Parceiros e prestadores de serviços especializados</span>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <span className="text-gray-700">• Instituições Financeiras e Provedores de Pagamento</span>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <span className="text-gray-700">• Autoridades judiciais, administrativas ou governamentais</span>
            </div>
          </div>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mt-6">
            <p className="text-green-800">
              <strong>Importante:</strong> Não trabalhamos com a venda e/ou comercialização dos seus dados.
            </p>
          </div>
        </section>

        {/* International Transfers */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5 text-violet-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              TRANSFERÊNCIA INTERNACIONAL DE DADOS
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Alguns de nossos provedores podem requerer infraestrutura tecnológica 
              (servidores e serviços em nuvem) estabelecida em país diferente do seu.
            </p>
            <p>
              Para transferências internacionais, sempre garantimos que atendam aos requisitos 
              adequados de proteção conforme regulamentos aplicáveis, através de cláusulas 
              contratuais ou regras corporativas vinculativas.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              COMO PROTEGEMOS SEUS DADOS?
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600">
              Adotamos mecanismos e procedimentos técnicos, administrativos e gerenciais 
              para preservar a integridade, disponibilidade e confidencialidade dos dados pessoais.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Medidas Técnicas</h4>
                <p className="text-sm text-gray-600">Testes regulares e verificações de efetividade das medidas de segurança.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Acesso Controlado</h4>
                <p className="text-sm text-gray-600">Dados acessados apenas por profissionais autorizados.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Treinamentos</h4>
                <p className="text-sm text-gray-600">Capacitação de colaboradores e parceiros em proteção de dados.</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Confidencialidade</h4>
                <p className="text-sm text-gray-600">Compromisso de preservação da privacidade em todos os processos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              POR QUANTO TEMPO SEUS DADOS SÃO TRATADOS?
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600">
              Guardamos seus dados pelo período necessário ou quando, por motivos legais, somos obrigados. 
              Caso contrário, iremos excluí-los ou torná-los anonimizados.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">Código de Defesa do Consumidor</h4>
                <p className="text-sm text-gray-600">
                  Dados mantidos por <strong>5 anos</strong> contados do término da relação ou pedido de exclusão.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Marco Civil da Internet</h4>
                <p className="text-sm text-gray-600">
                  Dados coletados automaticamente mantidos por <strong>6 meses</strong> da interação no site.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-800 mb-2">Gravações CCTV</h4>
                <p className="text-sm text-gray-600">
                  Mantidas por períodos curtos conforme políticas de segurança e monitoramento.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 mb-2">Contratos de Trabalho</h4>
                <p className="text-sm text-gray-600">
                  Informações mantidas por <strong>5 anos</strong> após término da relação trabalhista.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Rights */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-rose-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              QUAIS SÃO SEUS DIREITOS COMO TITULAR DE DADOS?
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            A Lei Geral de Proteção de Dados (LGPD) conferiu direitos específicos que podem ser exercidos por você:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Confirmação</h4>
              <p className="text-sm text-gray-600">Confirmar se a empresa está tratando seus dados pessoais.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Acesso aos dados</h4>
              <p className="text-sm text-gray-600">Acessar todas as informações que possuímos sobre você.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Correção</h4>
              <p className="text-sm text-gray-600">Atualizar dados incompletos, inexatos ou desatualizados.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Anonimização</h4>
              <p className="text-sm text-gray-600">Anonimizar dados desnecessários ou excessivos.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Portabilidade</h4>
              <p className="text-sm text-gray-600">Transferir dados para outro prestador de serviço.</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">Eliminação</h4>
              <p className="text-sm text-gray-600">Eliminar dados tratados com seu consentimento.</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Revogação</h4>
              <p className="text-sm text-gray-600">Revogar consentimento para tratamento de dados.</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Oposição</h4>
              <p className="text-sm text-gray-600">Opor-se ao tratamento desalinhado à LGPD.</p>
            </div>
          </div>
        </section>

        {/* How to Exercise Rights */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              COMO EXERCER SEUS DIREITOS?
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600">
              O Encarregado de proteção de dados é a pessoa indicada para atuar como canal 
              de comunicação entre o controlador, operador, os titulares dos dados e a ANPD.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 mb-4">
                Encarregada de Proteção de Dados (DPO)
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Nome:</strong> PRISCILA DANTAS
                </p>
                <p className="text-gray-700">
                  <strong>E-mail:</strong> priscila.dantas@grupoativasa.com.br
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <h4 className="font-semibold text-yellow-800 mb-3">
                Para exercer seus direitos, por favor:
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>a)</strong> Se identifique indicando seu nome completo, CPF, telefone ou e-mail;</p>
                <p><strong>b)</strong> Especifique a solicitação e as razões da mesma.</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
              <h4 className="font-semibold text-red-800 mb-3">
                Reclamação à ANPD
              </h4>
              <p className="text-gray-700">
                Você ainda tem o direito de apresentar reclamação à Autoridade Nacional 
                de Proteção de Dados – ANPD pelo site: 
                <span className="text-blue-600 underline"> https://www.gov.br/anpd/pt-br</span>
              </p>
            </div>
          </div>
        </section>

        {/* Policy Changes */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-lime-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              DAS ALTERAÇÕES DESTA POLÍTICA DE PRIVACIDADE
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              O YAH ACQUA PARK se reserva ao direito de modificar essa Política de Privacidade 
              a qualquer momento, então é recomendável que você a revise com frequência.
            </p>
            <p>
              As alterações e esclarecimentos vão surtir efeito imediatamente após a sua 
              publicação no site da empresa.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
              <Mail className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Precisa de Ajuda?
            </h2>
            <p className="mb-6 text-blue-100">
              Entre em contato com nossa Encarregada de Proteção de Dados para esclarecer 
              qualquer dúvida sobre esta política ou exercer seus direitos.
            </p>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm text-black">
              <p className="font-semibold mb-2">PRISCILA DANTAS</p>
              <p className=" text-black">priscila.dantas@grupoativasa.com.br</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}