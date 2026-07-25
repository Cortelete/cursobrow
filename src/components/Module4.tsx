import React from 'react';
import { Section } from './Section';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Step, MaterialItem } from './Shared';

export function Module4({ activeSection }: { activeSection: string }) {
  return (
    <>
      {activeSection === 'mod4_capa' && (
        <section className="min-h-[80vh] flex flex-col justify-center">
          <p className="text-gold-500 font-semibold tracking-widest uppercase mb-4 text-sm">
            Módulo 4
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Protocolo de<br />Crescimento
          </h1>
          <ImagePlaceholder name="capa_modulo4.png" className="mt-12 max-w-lg" />
        </section>
      )}

      {activeSection === 'mod4_intro' && (
        <Section title="O Que É e Para Que Serve?">
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            O Protocolo de Crescimento de Sobrancelhas é um tratamento estético desenvolvido para clientes que desejam melhorar a aparência, a saúde e a densidade dos pelos da região.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed mb-8">
            Ele atua tanto na pele quanto nos fios, promovendo um cuidado completo. O tratamento combina higienização, argiloterapia, alta frequência e aplicação de ativos cosméticos, buscando proporcionar condições favoráveis para o ciclo natural dos pelos.
          </p>

          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-10">
            <h4 className="text-lg text-gold-500 font-medium mb-4">Indicado para clientes que apresentam:</h4>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Sobrancelhas com falhas',
                'Fios finos ou enfraquecidos',
                'Baixa densidade de pelos',
                'Sobrancelhas excessivamente removidas',
                'Regiões com dificuldade de crescimento',
                'Pele com excesso de oleosidade'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-1.5 mr-3 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#1A1A1A] border border-stone-800 p-6 rounded-xl">
            <h3 className="text-white font-medium mb-3">Nota Importante</h3>
            <p className="text-stone-400 text-sm">
              O protocolo deve ser apresentado como um tratamento estético de <strong>suporte ao crescimento e fortalecimento</strong> dos pelos, e não como uma garantia de nascimento de novos fios, pois o crescimento também depende de fatores genéticos e hormonais.
            </p>
          </div>
          <ImagePlaceholder name="crescimento_intro.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod4_etapas' && (
        <Section title="Etapas Iniciais: Avaliação, Higienização e Design">
          <p className="text-stone-300 text-lg leading-relaxed mb-8">
            O protocolo é dividido em etapas que trabalham de forma complementar. As etapas iniciais preparam o terreno para o tratamento.
          </p>
          
          <div className="space-y-8 mb-10">
            <div className="bg-[#111] p-6 rounded-2xl border border-stone-800">
              <h3 className="text-2xl font-medium text-gold-500 mb-4 flex items-center">
                <span className="bg-gold-500/20 text-gold-500 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Avaliação
              </h3>
              <p className="text-stone-400 mb-4">Antes de iniciar, o profissional deve avaliar cuidadosamente:</p>
              <ul className="grid md:grid-cols-2 gap-2 text-stone-300 text-sm">
                <li>• Formato atual e áreas de falha</li>
                <li>• Densidade e espessura dos pelos</li>
                <li>• Condição da pele, sensibilidade e oleosidade</li>
                <li>• Histórico de remoção dos pelos</li>
              </ul>
              <div className="mt-5 p-3 bg-black border border-stone-800 rounded-lg text-sm text-stone-400">
                É recomendado realizar um registro fotográfico inicial para acompanhar a evolução.
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-2xl border border-stone-800">
              <h3 className="text-2xl font-medium text-gold-500 mb-4 flex items-center">
                <span className="bg-gold-500/20 text-gold-500 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Higienização
              </h3>
              <p className="text-stone-400 mb-4">A região deve ser limpa profundamente para remover impurezas e preparar a pele.</p>
              <ul className="grid md:grid-cols-2 gap-2 text-stone-300 text-sm">
                <li>• Maquiagem e Protetor solar</li>
                <li>• Oleosidade excessiva</li>
                <li>• Suor e Poluição</li>
                <li>• Resíduos de produtos cosméticos</li>
              </ul>
            </div>

            <div className="bg-[#111] p-6 rounded-2xl border border-stone-800">
              <h3 className="text-2xl font-medium text-gold-500 mb-4 flex items-center">
                <span className="bg-gold-500/20 text-gold-500 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Design Estratégico
              </h3>
              <p className="text-stone-400 mb-4">Um design direto, focado no mapeamento e epilação essenciais para o protocolo.</p>
              <ul className="grid md:grid-cols-2 gap-2 text-stone-300 text-sm">
                <li>• <strong>Mapeamento:</strong> Marcação para manter o formato ideal.</li>
                <li>• <strong>Epilação:</strong> Remoção apenas dos excessos fora do desenho.</li>
              </ul>
              <div className="mt-5 p-3 bg-black border border-stone-800 rounded-lg text-sm text-stone-400">
                O design é estratégico para que a etapa seguinte (argiloterapia e ativos) seja aplicada corretamente apenas onde necessário.
              </div>
            </div>
          </div>
        </Section>
      )}

      {activeSection === 'mod4_argiloterapia' && (
        <Section title="Etapa 3: Argiloterapia">
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            A argiloterapia entra no protocolo como uma etapa de preparação, limpeza profunda e equilíbrio da pele.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#111] p-5 rounded-xl border border-stone-800">
              <h4 className="font-medium text-white mb-2 text-lg">Argila Verde</h4>
              <p className="text-sm text-stone-400">
                Indicada para peles oleosas. Auxilia no controle de oleosidade e na limpeza profunda da região.
              </p>
            </div>
            <div className="bg-[#111] p-5 rounded-xl border border-stone-800">
              <h4 className="font-medium text-white mb-2 text-lg">Argila Branca</h4>
              <p className="text-sm text-stone-400">
                Abordagem mais suave, ideal para peles sensíveis ou delicadas.
              </p>
            </div>
            <div className="bg-[#111] p-5 rounded-xl border border-stone-800">
              <h4 className="font-medium text-white mb-2 text-lg">Argila Rosa</h4>
              <p className="text-sm text-stone-400">
                Voltada para peles delicadas e sensibilizadas, respeitando a avaliação individual.
              </p>
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-stone-800 mb-8">
            <h3 className="text-xl font-medium text-gold-500 mb-4">Como Realizar</h3>
            <ol className="space-y-3 text-stone-300">
              <li><strong>1.</strong> Preparar a argila conforme orientação do fabricante.</li>
              <li><strong>2.</strong> Aplicar uma camada fina nas sobrancelhas (evitar olhos).</li>
              <li><strong>3.</strong> Respeitar o tempo indicado (evitar que seque completamente para não repuxar ou causar ressecamento).</li>
              <li><strong>4.</strong> Remover cuidadosamente com gaze ou algodão úmido.</li>
              <li><strong>5.</strong> Secar suavemente a região.</li>
            </ol>
          </div>
          <ImagePlaceholder name="crescimento_argiloterapia.png" />
        </Section>
      )}

      {activeSection === 'mod4_alta_frequencia' && (
        <Section title="Alta Frequência">
          <p className="text-stone-300 text-lg leading-relaxed mb-8">
            A alta frequência é um recurso complementar que contribui para o cuidado da pele, proporcionando ações antissépticas superficiais e estímulo à circulação local.
          </p>

          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-10">
            <h3 className="text-xl font-medium text-gold-500 mb-4">Possíveis Benefícios</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Ação antisséptica',
                'Estímulo da circulação sanguínea',
                'Revitalização da região',
                'Complementação da higienização',
                'Auxílio na permeação de ativos'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-stone-300">
                  <span className="text-gold-500 mr-3 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-red-400 mt-6 text-sm font-medium">Nota: A alta frequência sozinha não garante o crescimento, sua função é atuar no protocolo geral.</p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-medium text-white mb-6">Como Utilizar</h3>
            <ol className="list-none space-y-4 text-stone-300">
              <Step num={1} text="Garantir que a pele esteja limpa e seca." />
              <Step num={2} text="Higienizar o eletrodo adequado (geralmente o de vidro saturador ou cebolinha)." />
              <Step num={3} text="Encostar o eletrodo na pele ANTES de ligar o aparelho." />
              <Step num={4} text="Ajustar a intensidade gradualmente, prezando pelo conforto." />
              <Step num={5} text="Realizar movimentos suaves pelo tempo determinado." />
              <Step num={6} text="Reduzir intensidade, desligar e higienizar após o uso." />
            </ol>
          </div>
          <ImagePlaceholder name="crescimento_altafrequencia.png" />
        </Section>
      )}

      {activeSection === 'mod4_ativos' && (
        <Section title="Ativos Cosméticos e Benefícios">
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            Após a preparação e estímulo, aplicam-se ativos cosméticos (séruns, blends ou loções) destinados ao cuidado específico das sobrancelhas.
          </p>

          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-10">
            <h3 className="text-xl font-medium text-white mb-4">Objetivos dos Ativos</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {['Hidratar a pele', 'Condicionar os fios', 'Melhorar a aparência dos pelos', 'Auxiliar no fortalecimento', 'Reduzir o ressecamento', 'Manter nutrição'].map((item, i) => (
                <div key={i} className="bg-black border border-stone-800 p-3 rounded-lg text-stone-300 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-medium text-gold-500 mb-6">Benefícios Gerais do Protocolo</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg text-white font-medium mb-3 border-b border-stone-800 pb-2">Para a Pele</h4>
                <ul className="space-y-2 text-stone-400 text-sm">
                  <li>• Melhor higienização e controle de oleosidade</li>
                  <li>• Remoção de impurezas</li>
                  <li>• Pele mais equilibrada para receber os cosméticos</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg text-white font-medium mb-3 border-b border-stone-800 pb-2">Para os Fios e Tratamento</h4>
                <ul className="space-y-2 text-stone-400 text-sm">
                  <li>• Condicionamento e integridade dos pelos</li>
                  <li>• Fios com aparência mais saudável</li>
                  <li>• Rotina contínua estimulando a recuperação gradual</li>
                </ul>
              </div>
            </div>
          </div>
          <ImagePlaceholder name="crescimento_ativos.png" />
        </Section>
      )}

      {activeSection === 'mod4_materiais_contra' && (
        <Section title="Materiais e Contraindicações">
          
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-gold-500 mb-6">Materiais Necessários</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 bg-[#111] border border-stone-800 p-6 rounded-2xl">
              <MaterialItem name="Higienização" desc="Sabonete facial, algodão, gaze, água filtrada, luvas, faixa de cabelo." />
              <MaterialItem name="Argiloterapia" desc="Argila cosmética, recipiente de preparo, espátula, pincel, água/solução." />
              <MaterialItem name="Alta Frequência" desc="Aparelho de alta frequência, eletrodo de vidro adequado, material de desinfecção." />
              <MaterialItem name="Ativos e Finalização" desc="Sérum/blend específico para sobrancelhas, produto hidratante, escovinha descartável." />
              <MaterialItem name="Registro" desc="Ficha de anamnese, termo de consentimento, câmera, ficha de acompanhamento." />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-red-500 mb-4">Contraindicações Principais</h3>
            
            <div className="bg-red-900/10 p-6 rounded-xl border border-red-900/30">
              <h4 className="text-white font-medium mb-3">Gerais e Argiloterapia</h4>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-stone-300">
                <li>• Feridas abertas</li>
                <li>• Infecções ativas</li>
                <li>• Inflamações intensas</li>
                <li>• Dermatites agudas</li>
                <li>• Queimaduras solares</li>
                <li>• Alergias conhecidas</li>
              </ul>
            </div>

            <div className="bg-red-900/10 p-6 rounded-xl border border-red-900/30">
              <h4 className="text-white font-medium mb-3">Alta Frequência</h4>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-stone-300">
                <li>• Marcapasso ou implantes eletrônicos</li>
                <li>• Epilepsia (sem liberação médica)</li>
                <li>• Gestação (salvo liberação médica)</li>
                <li>• Alterações de sensibilidade na pele</li>
              </ul>
              <p className="mt-4 text-xs text-red-300 italic">Em caso de dúvida, suspenda e peça autorização médica.</p>
            </div>
          </div>
          
        </Section>
      )}

      {activeSection === 'mod4_passoapasso' && (
        <Section title="Passo a Passo do Protocolo">
          <p className="text-stone-300 text-lg leading-relaxed mb-8">
            Um resumo sequencial para a execução impecável do protocolo completo de crescimento.
          </p>

          <div className="bg-[#111] border border-stone-800 p-8 rounded-2xl mb-10">
            <ol className="list-none space-y-5 text-stone-300">
              <Step num={1} text={<><strong>Avaliação Inicial:</strong> Realizar anamnese e registrar fotograficamente.</>} />
              <Step num={2} text={<><strong>Higienização:</strong> Limpar cuidadosamente, removendo todos os resíduos.</>} />
              <Step num={3} text={<><strong>Design:</strong> Mapeamento e epilação leve (se necessário limpar o excesso fora do desenho).</>} />
              <Step num={4} text={<><strong>Argiloterapia:</strong> Escolher argila, misturar (pode incluir até 3 gotas de óleo essencial se habilitado), aplicar, pausar e remover.</>} />
              <Step num={5} text={<><strong>Preparação Alta Frequência:</strong> Secar bem a pele.</>} />
              <Step num={6} text={<><strong>Alta Frequência:</strong> Aplicar o equipamento conforme protocolo e movimentos adequados.</>} />
              <Step num={7} text={<><strong>Ativo Cosmético:</strong> Aplicar produto para crescimento, com massagem leve para absorção.</>} />
              <Step num={8} text={<><strong>Finalização:</strong> Aplicar calmante ou protetor se indicado.</>} />
              <Step num={9} text={<><strong>Orientação:</strong> Explicar os cuidados domiciliares.</>} />
              <Step num={10} text={<><strong>Registro:</strong> Fotografia pós-procedimento.</>} />
            </ol>
          </div>
        </Section>
      )}

      {activeSection === 'mod4_manutencao' && (
        <Section title="Manutenção, Evolução e Expectativas">
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#111] border border-stone-800 p-6 rounded-xl">
              <h3 className="text-xl font-medium text-white mb-4">Rotina em Casa</h3>
              <p className="text-stone-400 text-sm mb-4">O resultado depende da disciplina da cliente.</p>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>• Não retirar pelos durante o período (nem os fios fora do desenho!)</li>
                <li>• Higienizar adequadamente</li>
                <li>• Usar o cosmético home-care recomendado</li>
                <li>• Não usar maquiagem pesada diariamente na região</li>
              </ul>
            </div>
            <div className="bg-[#1A1A1A] border border-stone-800 p-6 rounded-xl">
              <h3 className="text-xl font-medium text-white mb-4">Periodicidade e Evolução</h3>
              <p className="text-stone-300 text-sm mb-3">
                A frequência das sessões depende da resposta individual, sensibilidade da pele e cosméticos empregados. Evitar excessos que possam ressecar.
              </p>
              <p className="text-stone-300 text-sm">
                Acompanhar: surgimento de novos fios, espessura, densidade e condição geral. Compare sempre com as fotos iniciais (mesma luz e ângulo).
              </p>
            </div>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-10">
            <h3 className="text-xl font-medium text-gold-500 mb-6">Resultados e Expectativas</h3>
            <p className="text-stone-300 mb-4 text-sm">O profissional deve trabalhar com expectativas realistas.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-medium mb-2">O Protocolo Pode Auxiliar a:</h4>
                <ul className="text-sm text-stone-400 space-y-1">
                  <li>• Melhorar a condição da pele e oleosidade</li>
                  <li>• Fortalecer e condicionar fios</li>
                  <li>• Acompanhar e estimular o ciclo natural</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">O Protocolo NÃO Pode Garantir:</h4>
                <ul className="text-sm text-stone-400 space-y-1">
                  <li>• Nascimento onde não há folículos funcionais</li>
                  <li>• Crescimento 100% garantido para todas as clientes</li>
                  <li>• Cura de alterações hormonais ou dermatológicas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 p-6 rounded-xl border border-stone-800">
            <h3 className="text-lg font-medium text-white mb-3">Quando Encaminhar ao Dermatologista?</h3>
            <p className="text-sm text-stone-400">
              Queda repentina, falhas aumentando rápido, coceira intensa, descamação, feridas ou ausência de resposta após período adequado.
            </p>
          </div>
          <ImagePlaceholder name="crescimento_manutencao.png" className="mt-8" />

        </Section>
      )}
    </>
  );
}
