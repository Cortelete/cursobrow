import React from 'react';
import { Section } from './Section';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Step, MaterialItem } from './Shared';

export function Module7({ activeSection }: { activeSection: string }) {
  return (
    <>
      {activeSection === 'mod7_capa' && (
        <section className="min-h-[80vh] flex flex-col justify-center">
          <p className="text-gold-500 font-semibold tracking-widest uppercase mb-4 text-sm">
            Curso Adicional
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Lash Lifting<br />
            <span className="text-2xl md:text-3xl text-stone-400 mt-4 block font-sans font-light">
              Técnica de Curvatura e Definição
            </span>
          </h1>
          <ImagePlaceholder name="capa_modulo6.png" className="mt-12 max-w-lg" />
        </section>
      )}

      {activeSection === 'mod7_intro' && (
        <Section title="O Que É e Para Que Serve?">
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            O Lash Lifting é uma técnica desenvolvida para realçar os cílios naturais, proporcionando curvatura, definição e aparência de maior comprimento sem a necessidade de fios artificiais.
          </p>

          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-8">
            <h3 className="text-xl font-medium text-gold-500 mb-4">Como Funciona</h3>
            <p className="text-stone-300 text-sm">
              Durante o procedimento, produtos específicos atuam temporariamente sobre as estruturas do fio, permitindo que ele seja remodelado e posteriormente fixado em uma nova posição. O resultado é um olhar mais aberto, definido e expressivo, mantendo a naturalidade.
            </p>
          </div>

          <h3 className="text-2xl font-medium text-white mb-6">Principais Benefícios</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {['Curvatura dos cílios naturais', 'Sensação visual de maior comprimento', 'Maior destaque para os olhos', 'Aparência mais organizada dos fios', 'Efeito natural', 'Praticidade para a cliente', 'Possibilidade de associação com tintura'].map((item, i) => (
              <div key={i} className="bg-[#1A1A1A] p-4 rounded-xl border border-stone-800 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-3 shrink-0"></span>
                <span className="text-stone-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-black border border-stone-800 p-6 rounded-xl">
            <h4 className="text-white font-medium mb-2">Fatores que Influenciam o Resultado:</h4>
            <p className="text-stone-400 text-sm leading-relaxed">
              Espessura, comprimento e direção natural dos cílios, elasticidade, estado de conservação, escolha correta do pad, tempo de ação dos produtos e a técnica de alinhamento.
            </p>
          </div>
          <ImagePlaceholder name="lash_intro.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod7_fios_pele' && (
        <Section title="A Pele e Estrutura dos Fios">
          <p className="text-stone-300 text-lg leading-relaxed mb-8">
            Para dominar o Lash Lifting, é necessário compreender a anatomia básica da região e a estrutura do pelo, permitindo uma aplicação cuidadosa e segura.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-medium text-gold-500 mb-4 border-b border-stone-800 pb-2">Camadas da Pele</h3>
              <ul className="space-y-4 text-stone-300 text-sm">
                <li>
                  <strong className="text-white block mb-1">Epiderme</strong>
                  Camada mais superficial. Função de proteção e barreira contra agentes externos.
                </li>
                <li>
                  <strong className="text-white block mb-1">Derme</strong>
                  Localizada abaixo da epiderme. Rica em vasos sanguíneos, terminações nervosas e sustentação.
                </li>
                <li>
                  <strong className="text-white block mb-1">Hipoderme</strong>
                  Camada mais profunda, composta principalmente por tecido adiposo.
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-gold-500 mb-4 border-b border-stone-800 pb-2">Estrutura do Fio (Queratina)</h3>
              <ul className="space-y-4 text-stone-300 text-sm">
                <li>
                  <strong className="text-white block mb-1">Cutícula</strong>
                  Camada externa. Proteção e influencia diretamente na interação com produtos químicos.
                </li>
                <li>
                  <strong className="text-white block mb-1">Córtex</strong>
                  Região interna que representa grande parte do fio. Relacionada à resistência e características físicas.
                </li>
                <li>
                  <strong className="text-white block mb-1">Medula</strong>
                  Região mais interna, podendo ser contínua, descontínua ou ausente.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl border border-stone-800 mb-8">
            <h3 className="text-xl font-medium text-white mb-6 text-center">Fases de Crescimento dos Fios</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-gold-500 font-medium mb-2">Fase Anágena (Nasce)</h4>
                <p className="text-stone-400 text-xs">Crescimento ativo. O fio está em desenvolvimento e apresenta atividade celular intensa.</p>
              </div>
              <div>
                <h4 className="text-gold-500 font-medium mb-2">Fase Catágena (Cresce)</h4>
                <p className="text-stone-400 text-xs">Fase de transição. O crescimento diminui e o folículo passa por modificações.</p>
              </div>
              <div>
                <h4 className="text-gold-500 font-medium mb-2">Fase Telógena (Cai)</h4>
                <p className="text-stone-400 text-xs">Fase de repouso. Após esse período, o fio pode se desprender naturalmente.</p>
              </div>
            </div>
            <p className="text-stone-300 text-sm mt-6 text-center italic">
              "Os cílios não estão todos no mesmo estágio de crescimento ao mesmo tempo. Por isso, a aparência e a duração do resultado podem variar naturalmente entre os fios."
            </p>
          </div>
          
          <div className="bg-black p-6 rounded-xl border border-stone-800">
            <h3 className="text-lg font-medium text-white mb-3">Ficha de Anamnese & Avaliação dos Cílios</h3>
            <p className="text-stone-400 text-sm mb-4">Essencial para conhecer as condições da cliente e evitar reações. Avalie se o fio é fino, médio, grosso, frágil, ressecado ou se possui química anterior.</p>
            <ul className="text-stone-400 text-xs space-y-1">
              <li>• Já realizou Lash Lifting ou tintura?</li>
              <li>• Possui alergias ou reações?</li>
              <li>• Fez procedimento recente na região dos olhos?</li>
            </ul>
          </div>
          <ImagePlaceholder name="lash_fios.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod7_materiais' && (
        <Section title="Materiais e Precauções">
          
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-gold-500 mb-6">Materiais Básicos</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 bg-[#111] border border-stone-800 p-6 rounded-2xl">
              <MaterialItem name="Preparação" desc="Higienizador/espuma específica, pads de Lash Lifting." />
              <MaterialItem name="Aplicação" desc="Pasta ou adesivo para fios, pentes/aplicadores (Y-brush), microbrush, aplicadores específicos, escovinhas." />
              <MaterialItem name="Químicos" desc="Sistema Lash Lifting (Passo 1, 2 e 3), Tintura específica, Oxidante." />
              <MaterialItem name="Gerais" desc="Algodão para remoção, recipientes de preparo, luvas, materiais descartáveis, produto de limpeza para olhos." />
            </div>
          </div>

          <div className="bg-red-900/10 p-8 rounded-2xl border border-red-900/30">
            <h3 className="text-2xl font-medium text-red-500 mb-6">Precauções e Segurança</h3>
            <p className="text-stone-300 mb-6 text-sm">
              O Lash Lifting envolve produtos químicos próximos a uma região extremamente sensível. <strong>Segurança vem antes do resultado estético.</strong>
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm text-stone-300 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Evitar contato dos produtos com os olhos.</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Controlar rigorosamente o tempo de ação.</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Respeitar a indicação do fabricante (não improvisar misturas).</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Não utilizar produtos vencidos ou reutilizar descartáveis.</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Interromper o procedimento diante de reação adversa.</li>
              </ul>
            </div>
            
            <div className="bg-black/50 p-4 rounded-xl border border-red-900/50">
              <h4 className="text-white font-medium mb-2">Sobre o Tempo de Ação</h4>
              <p className="text-stone-400 text-sm">
                <strong>Mais tempo não significa melhor resultado.</strong> A exposição excessiva compromete a estrutura dos fios, aumentando o risco de ressecamento, fragilidade e quebra química (sobreprocessamento).
              </p>
            </div>
          </div>
          <ImagePlaceholder name="lash_materiais.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod7_passoapasso' && (
        <Section title="O Passo a Passo do Procedimento">
          
          <div className="bg-[#111] border border-stone-800 p-8 rounded-2xl mb-10">
            <h3 className="text-xl font-medium text-white mb-6 text-center">Conceito Fundamental (O Fluxo)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-black rounded-lg border border-stone-800"><span className="block text-gold-500 font-semibold mb-1">1. PREPARAR</span><span className="text-xs text-stone-400">Higienizar e avaliar</span></div>
              <div className="p-3 bg-black rounded-lg border border-stone-800"><span className="block text-gold-500 font-semibold mb-1">2. POSICIONAR</span><span className="text-xs text-stone-400">Escolher pad e alinhar</span></div>
              <div className="p-3 bg-black rounded-lg border border-stone-800"><span className="block text-gold-500 font-semibold mb-1">3. REMODELAR</span><span className="text-xs text-stone-400">Passo 1 (abrir cutículas)</span></div>
              <div className="p-3 bg-black rounded-lg border border-stone-800"><span className="block text-gold-500 font-semibold mb-1">4. FIXAR</span><span className="text-xs text-stone-400">Passo 2 (estabilizar)</span></div>
              <div className="p-3 bg-black rounded-lg border border-stone-800"><span className="block text-gold-500 font-semibold mb-1">5. COLORIR</span><span className="text-xs text-stone-400">Tintura (opcional)</span></div>
              <div className="p-3 bg-black rounded-lg border border-stone-800"><span className="block text-gold-500 font-semibold mb-1">6. TRATAR</span><span className="text-xs text-stone-400">Passo 3 (nutrição)</span></div>
              <div className="p-3 bg-black rounded-lg border border-stone-800"><span className="block text-gold-500 font-semibold mb-1">7. FINALIZAR</span><span className="text-xs text-stone-400">Remover resíduos e pad</span></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-stone-800 rounded-xl p-6 bg-[#1A1A1A]">
              <h3 className="text-xl font-medium text-gold-500 mb-3">1. Higienização & Escolha do Pad</h3>
              <p className="text-stone-300 text-sm mb-3">Cílios devem estar completamente limpos e secos. O pad é escolhido avaliando: formato da pálpebra, comprimento dos cílios e curvatura desejada. Um pad inadequado gera curvatura errada.</p>
            </div>
            
            <div className="border border-stone-800 rounded-xl p-6 bg-black">
              <h3 className="text-xl font-medium text-gold-500 mb-3">2. Subida e Alinhamento</h3>
              <p className="text-stone-300 text-sm mb-3">Utiliza-se pasta/adesivo para subir os fios no pad. Eles devem ficar: <strong>separados, alinhados, distribuídos uniformemente e sem cruzamentos.</strong></p>
              <p className="text-red-400 text-sm italic">"O resultado começa no alinhamento. Se os fios forem posicionados incorretamente, os produtos não corrigirão o erro."</p>
            </div>

            <div className="border border-stone-800 rounded-xl p-6 bg-[#1A1A1A]">
              <h3 className="text-xl font-medium text-gold-500 mb-3">3. PASSO 1 (Remodelação)</h3>
              <p className="text-stone-300 text-sm mb-3">Promove emoliência e altera a estrutura do fio (abre/modifica cutículas). Tempo médio: ~8 min (depende da espessura, avaliar visualmente o fio). Após o tempo, remover <strong>cuidadosamente e secar</strong>, sem espalhar para outras regiões.</p>
            </div>

            <div className="border border-stone-800 rounded-xl p-6 bg-black">
              <h3 className="text-xl font-medium text-gold-500 mb-3">4. Alinhamento antes do PASSO 2</h3>
              <p className="text-stone-300 text-sm mb-3">Após remover o Passo 1, deve-se pentear, separar, corrigir cruzamentos e garantir a direção correta antes de aplicar o Passo 2. O Passo 2 vai <strong>fixar</strong> o que estiver ali.</p>
            </div>

            <div className="border border-stone-800 rounded-xl p-6 bg-[#1A1A1A]">
              <h3 className="text-xl font-medium text-gold-500 mb-3">5. PASSO 2 (Fixação)</h3>
              <p className="text-stone-300 text-sm mb-3">Estabiliza a nova configuração. Tempo geralmente semelhante ao do Passo 1. Remover cuidadosamente após a ação.</p>
            </div>

            <div className="border border-stone-800 rounded-xl p-6 bg-black">
              <h3 className="text-xl font-medium text-gold-500 mb-3">6. Tintura (Opcional)</h3>
              <p className="text-stone-300 text-sm mb-3">Intensifica a cor dos fios. Tempo médio: ~3 a 4 minutos. Remover completamente os resíduos após o tempo.</p>
            </div>

            <div className="border border-stone-800 rounded-xl p-6 bg-[#1A1A1A]">
              <h3 className="text-xl font-medium text-gold-500 mb-3">7. PASSO 3 (Nutrição)</h3>
              <p className="text-stone-300 text-sm mb-3">Devolve tratamento e componentes aos fios após a química. Tempo médio: ~3 a 4 minutos. Remover resíduos restantes ao final.</p>
            </div>
          </div>
          
          <ImagePlaceholder name="lash_passoapasso.png" className="mt-10" />
        </Section>
      )}

      {activeSection === 'mod7_finalizacao' && (
        <Section title="Finalização e Pós-Tratamento">
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#111] p-6 rounded-2xl border border-stone-800">
              <h3 className="text-xl font-medium text-white mb-4">A Finalização</h3>
              <ul className="space-y-3 text-stone-300 text-sm">
                <li>1. Certificar que não há resíduos de produtos.</li>
                <li>2. Remover o pad com delicadeza (sem puxar os cílios).</li>
                <li>3. Limpar a região e pentear os cílios.</li>
                <li>4. Avaliar direção, uniformidade e resultado final.</li>
              </ul>
            </div>
            
            <div className="bg-black p-6 rounded-2xl border border-stone-800">
              <h3 className="text-xl font-medium text-gold-500 mb-4">Informação de Retorno</h3>
              <p className="text-stone-300 text-sm mb-4">
                Não existe "manutenção". O procedimento <strong>só poderá ser refeito após 35 a 40 dias</strong>.
              </p>
              <p className="text-stone-400 text-sm italic">
                "Não podemos realizar uma química em cima da outra. É preciso esperar os pelos renovarem para evitar corte químico."
              </p>
            </div>
          </div>

          <div className="bg-[#1A1A1A] border border-stone-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-medium text-white mb-6">Orientações Home-Care (Nas primeiras 24h)</h3>
            <p className="text-stone-400 text-sm mb-6">O objetivo é permitir a estabilização completa dos fios. Recomende à cliente:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Evitar molhar os cílios',
                'Evitar lavar diretamente a região',
                'Evitar vapor excessivo',
                'Evitar produtos oleosos na região',
                'Evitar manipular ou esfregar os fios',
                'Evitar dormir pressionando os olhos'
              ].map((item, i) => (
                <div key={i} className="flex items-center text-stone-300 text-sm bg-black p-3 rounded-lg border border-stone-800">
                  <span className="text-gold-500 mr-3">✗</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <ImagePlaceholder name="lash_finalizacao.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod7_erros_checklist' && (
        <Section title="Erros Comuns e Checklist">
          
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-red-500 mb-6">Erros Fatais no Lash Lifting</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-900/10 p-5 rounded-xl border border-red-900/30">
                <h4 className="text-white font-medium mb-1">❌ Deixar o Passo 1 tempo demais</h4>
                <p className="text-sm text-stone-400">Provoca sobreprocessamento, aumentando risco de fragilidade e quebra.</p>
              </div>
              <div className="bg-red-900/10 p-5 rounded-xl border border-red-900/30">
                <h4 className="text-white font-medium mb-1">❌ Escolher pad sem avaliar</h4>
                <p className="text-sm text-stone-400">Resulta em curvatura inadequada (muito curvado ou nada curvado).</p>
              </div>
              <div className="bg-red-900/10 p-5 rounded-xl border border-red-900/30">
                <h4 className="text-white font-medium mb-1">❌ Não alinhar os fios</h4>
                <p className="text-sm text-stone-400">Os fios ficam cruzados, desorganizados e tortos no resultado final.</p>
              </div>
              <div className="bg-red-900/10 p-5 rounded-xl border border-red-900/30">
                <h4 className="text-white font-medium mb-1">❌ Aplicar Passo 2 sem corrigir alinhamento</h4>
                <p className="text-sm text-stone-400">O formato inadequado gerado no Passo 1 será permanentemente fixado.</p>
              </div>
              <div className="bg-red-900/10 p-5 rounded-xl border border-red-900/30">
                <h4 className="text-white font-medium mb-1">❌ Ignorar a espessura</h4>
                <p className="text-sm text-stone-400">Fios finos e grossos reagem em tempos diferentes aos produtos.</p>
              </div>
              <div className="bg-red-900/10 p-5 rounded-xl border border-red-900/30">
                <h4 className="text-white font-medium mb-1">❌ Não remover produtos completamente</h4>
                <p className="text-sm text-stone-400">Resíduos interferem nas etapas e comprometem a saúde ocular.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl border border-stone-800">
            <h3 className="text-2xl font-medium text-gold-500 mb-6 text-center">Checklist do Atendimento</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-medium border-b border-stone-800 pb-2 mb-3">ANTES</h4>
                <ul className="text-sm text-stone-400 space-y-2">
                  <li>☐ Realizar anamnese</li>
                  <li>☐ Avaliar os cílios</li>
                  <li>☐ Conferir materiais</li>
                  <li>☐ Higienizar mãos e cílios</li>
                  <li>☐ Escolher o pad</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium border-b border-stone-800 pb-2 mb-3">DURANTE</h4>
                <ul className="text-sm text-stone-400 space-y-2">
                  <li>☐ Posicionar pad e Subir fios</li>
                  <li>☐ Alinhar individualmente</li>
                  <li>☐ Passo 1 (Aplicar/Controlar/Remover)</li>
                  <li>☐ Realinhar fios</li>
                  <li>☐ Passo 2 (Aplicar/Controlar/Remover)</li>
                  <li>☐ Tintura (Aplicar/Remover)</li>
                  <li>☐ Aplicar Passo 3</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium border-b border-stone-800 pb-2 mb-3">FINALIZAÇÃO</h4>
                <ul className="text-sm text-stone-400 space-y-2">
                  <li>☐ Remover resíduos</li>
                  <li>☐ Retirar pad cuidadosamente</li>
                  <li>☐ Pentear e Conferir curvatura</li>
                  <li>☐ Orientar pós-tratamento</li>
                  <li>☐ Registrar na ficha</li>
                </ul>
              </div>
            </div>
          </div>
          <ImagePlaceholder name="lash_erros.png" className="mt-8" />
        </Section>
      )}
    </>
  );
}
