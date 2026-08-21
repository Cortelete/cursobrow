import React from 'react';
import { Section } from './Section';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Step, MaterialItem } from './Shared';

export function Module6({ activeSection }: { activeSection: string }) {
  return (
    <>
      {activeSection === 'mod6_capa' && (
        <section className="min-h-[80vh] flex flex-col justify-center">
          <p className="text-gold-500 font-semibold tracking-widest uppercase mb-4 text-sm">
            Curso Adicional
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Brow Lamination<br />
            <span className="text-2xl md:text-3xl text-stone-400 mt-4 block font-sans font-light">
              Formação Profissional em Alinhamento e Tratamento
            </span>
          </h1>
          <ImagePlaceholder name="capa_brow.png" className="mt-12 max-w-lg" />
        </section>
      )}

      {activeSection === 'mod6_intro' && (
        <Section title="Introdução e Anamnese">
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            A Brow Lamination é uma técnica desenvolvida para proporcionar alinhamento, organização e aparência mais volumosa aos fios das sobrancelhas.
          </p>

          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-8">
            <h3 className="text-xl font-medium text-gold-500 mb-4">Como Funciona</h3>
            <p className="text-stone-300 text-sm">
              O procedimento permite direcionar os pelos para diferentes posições, principalmente para cima, criando um efeito de sobrancelhas mais preenchidas e marcantes. A técnica não cria novos fios, o efeito de preenchimento acontece pela reorganização dos pelos existentes.
            </p>
          </div>

          <h3 className="text-2xl font-medium text-white mb-6">Para Quem é Indicada?</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              'Organizar fios desalinhados',
              'Direcionar fios que crescem em diferentes sentidos',
              'Criar aparência de maior volume',
              'Evidenciar fios finos ou pouco visíveis',
              'Facilitar a rotina de finalização',
              'Valorizar o desenho existente'
            ].map((item, i) => (
              <div key={i} className="bg-[#1A1A1A] p-4 rounded-xl border border-stone-800 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-3 shrink-0"></span>
                <span className="text-stone-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-black border border-stone-800 p-6 rounded-xl">
            <h4 className="text-gold-500 font-medium mb-2">Ficha de Anamnese</h4>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Antes de iniciar qualquer procedimento químico, o profissional deve realizar uma avaliação da cliente, identificando informações que possam interferir na segurança ou no resultado.
            </p>
            <ul className="text-stone-400 text-xs space-y-1">
              <li>• Observar espessura, direção, resistência, porosidade e presença de falhas.</li>
              <li>• Perguntar sobre tratamentos químicos recentes e histórico de sensibilidade.</li>
              <li>• Avaliar a pele quanto a vermelhidão, irritação, descamação, feridas ou lesões.</li>
            </ul>
          </div>
          
          <ImagePlaceholder name="brow_intro.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod6_pele_pelos' && (
        <Section title="Conhecendo os Fios e a Pele">
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-medium text-gold-500 mb-4 border-b border-stone-800 pb-2">Camadas da Pele</h3>
              <p className="text-stone-400 text-sm mb-4">Compreender a estrutura básica ajuda a evitar contato desnecessário de produtos químicos com a pele.</p>
              <ul className="space-y-4 text-stone-300 text-sm">
                <li>
                  <strong className="text-white block mb-1">Epiderme</strong>
                  Camada mais superficial e barreira de proteção.
                </li>
                <li>
                  <strong className="text-white block mb-1">Derme</strong>
                  Camada rica em vasos sanguíneos e nervos relacionados aos folículos.
                </li>
                <li>
                  <strong className="text-white block mb-1">Hipoderme</strong>
                  Composta principalmente por tecido adiposo.
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-gold-500 mb-4 border-b border-stone-800 pb-2">Estrutura do Pelo (Queratina)</h3>
              <ul className="space-y-4 text-stone-300 text-sm">
                <li>
                  <strong className="text-white block mb-1">Cutícula (Externa)</strong>
                  Formada por estruturas sobrepostas. Na Brow Lamination, a alteração temporária da cutícula permite a ação dos produtos.
                </li>
                <li>
                  <strong className="text-white block mb-1">Córtex (Interna)</strong>
                  Representa grande parte da estrutura. Relacionada à resistência e formato.
                </li>
                <li>
                  <strong className="text-white block mb-1">Medula</strong>
                  Região mais interna, variando conforme tipo e espessura do fio.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl border border-stone-800 mb-8">
            <h3 className="text-xl font-medium text-white mb-6 text-center">Fases de Crescimento do Pelo</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-gold-500 font-medium mb-2">1. Fase Anágena</h4>
                <p className="text-stone-400 text-xs">Crescimento ativo. Intensa atividade celular no folículo.</p>
              </div>
              <div>
                <h4 className="text-gold-500 font-medium mb-2">2. Fase Catágena</h4>
                <p className="text-stone-400 text-xs">Fase de transição. O crescimento diminui e sofre alterações.</p>
              </div>
              <div>
                <h4 className="text-gold-500 font-medium mb-2">3. Fase Telógena</h4>
                <p className="text-stone-400 text-xs">Fase de repouso. O fio pode se desprender para um novo ciclo.</p>
              </div>
            </div>
          </div>
          
          <ImagePlaceholder name="brow_pele_pelos.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod6_materiais' && (
        <Section title="Materiais e Biossegurança">
          
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-gold-500 mb-6">Materiais Principais</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 bg-[#111] border border-stone-800 p-6 rounded-2xl">
              <MaterialItem name="Preparação" desc="Higienizador/espuma, algodão, hastes flexíveis." />
              <MaterialItem name="Aplicação" desc="Microbrush, escova interdental, escovinha para sobrancelhas, plástico filme, aplicadores." />
              <MaterialItem name="Químicos" desc="Produto do Passo 1, Passo 2, Passo 3, Tintura/Henna e oxidante." />
              <MaterialItem name="Organização" desc="Recipiente para preparo e luvas." />
            </div>
          </div>

          <div className="bg-red-900/10 p-8 rounded-2xl border border-red-900/30">
            <h3 className="text-2xl font-medium text-red-500 mb-6">Precauções e Biossegurança</h3>
            <p className="text-stone-300 mb-6 text-sm">
              Quando indicado, realize o teste de alergia. O procedimento deve ser <strong>evitado ou adiado</strong> em caso de: feridas, irritação, infecção, pele lesionada, dermatite ativa, ou fios extremamente fragilizados.
            </p>
            
            <div className="bg-black/50 p-4 rounded-xl border border-red-900/50">
              <h4 className="text-white font-medium mb-2">Sobre o Tempo de Exposição</h4>
              <p className="text-stone-400 text-sm">
                O produto deve permanecer apenas pelo tempo necessário. <strong>Tempo excessivo não significa resultado melhor.</strong>
              </p>
              <ul className="mt-3 text-red-400/80 text-xs grid grid-cols-2 gap-2">
                <li>• Ressecamento</li>
                <li>• Elasticidade excessiva</li>
                <li>• Fragilidade e Quebra</li>
                <li>• Queda por quebra</li>
              </ul>
            </div>
          </div>
          <ImagePlaceholder name="brow_materiais.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod6_passoapasso' && (
        <Section title="Passo a Passo Completo">
          
          <div className="bg-[#111] border border-stone-800 p-8 rounded-2xl mb-10">
            <h3 className="text-xl font-medium text-white mb-6 text-center">Entendendo os Passos</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-black rounded-xl border border-stone-800">
                <span className="block text-gold-500 font-semibold mb-2">PASSO 1 → PREPARA</span>
                <span className="text-xs text-stone-400">Prepara o fio para receber a alteração de formato.</span>
              </div>
              <div className="p-4 bg-black rounded-xl border border-stone-800">
                <span className="block text-gold-500 font-semibold mb-2">PASSO 2 → ESTABILIZA</span>
                <span className="text-xs text-stone-400">Estabiliza o fio na nova direção definida.</span>
              </div>
              <div className="p-4 bg-black rounded-xl border border-stone-800">
                <span className="block text-gold-500 font-semibold mb-2">PASSO 3 → TRATA</span>
                <span className="text-xs text-stone-400">Tratamento e reposição de nutrientes pós-química.</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-stone-800 rounded-xl p-6 bg-[#1A1A1A]">
              <h3 className="text-xl font-medium text-gold-500 mb-3">1. Higienização</h3>
              <p className="text-stone-300 text-sm mb-3">Remover oleosidade, maquiagem e impurezas. O fio deve estar limpo e seco para receber os produtos.</p>
            </div>
            
            <div className="border border-stone-800 rounded-xl p-6 bg-black">
              <h3 className="text-xl font-medium text-gold-500 mb-3">2. Aplicação do PASSO 1 (Tempo de Ação)</h3>
              <p className="text-stone-300 text-sm mb-3">Distribuir o produto uniformemente penteando os fios na direção desejada. O tempo é definido pela avaliação constante (referência ~8 min), o fio ficará mais maleável. Pode-se usar plástico filme se o protocolo indicar, mas <strong>o isolamento não justifica ultrapassar o tempo</strong>.</p>
            </div>

            <div className="border border-stone-800 rounded-xl p-6 bg-[#1A1A1A]">
              <h3 className="text-xl font-medium text-gold-500 mb-3">3. Remoção do Passo 1 e Alinhamento</h3>
              <p className="text-stone-300 text-sm mb-3">Remover cuidadosamente sem esfregar ou puxar. Em seguida, os fios devem ser <strong>penteados novamente</strong> para conferir direção e distribuição. O que não for alinhado agora, ficará torto no resultado final.</p>
            </div>

            <div className="border border-stone-800 rounded-xl p-6 bg-black">
              <h3 className="text-xl font-medium text-gold-500 mb-3">4. Aplicação do PASSO 2 (Fixação)</h3>
              <p className="text-stone-300 text-sm mb-3">Aplicar uniformemente mantendo os fios na direção definida. Como referência, o tempo do Passo 2 costuma ser igual ao tempo utilizado no Passo 1.</p>
            </div>

            <div className="border border-stone-800 rounded-xl p-6 bg-[#1A1A1A]">
              <h3 className="text-xl font-medium text-gold-500 mb-3">5. Remoção do passo 2, e coloração opcional</h3>
              <p className="text-stone-300 text-sm mb-3">Remover delicadamente o Passo 2. Se for fazer tintura/henna (evidencia os fios e cria definição), aplique por ~3 a 4 minutos.</p>
            </div>

            <div className="border border-stone-800 rounded-xl p-6 bg-black">
              <h3 className="text-xl font-medium text-gold-500 mb-3">6. PASSO 3 (Nutrição e Reposição)</h3>
              <p className="text-stone-300 text-sm mb-3">O tratamento é fundamental para reparar as alterações temporárias da estrutura. Aplicar e deixar agir por ~3 a 4 minutos. Após o design, deixar o último passo para que a cliente possa ficar com o produto agindo por 24h, assim repondo a nutrição necessária.</p>
            </div>
          </div>
          
          <ImagePlaceholder name="brow_passoapasso.png" className="mt-10" />
        </Section>
      )}

      {activeSection === 'mod6_finalizacao' && (
        <Section title="Finalização e Erros Comuns">
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#111] p-6 rounded-2xl border border-stone-800">
              <h3 className="text-xl font-medium text-white mb-4">A Finalização</h3>
              <ul className="space-y-3 text-stone-300 text-sm">
                <li>1. Secar delicadamente a região.</li>
                <li>2. Fazer o design estratégico da sobrancelha.</li>
                <li>3. Pentear os fios e conferir o alinhamento.</li>
                <li>4. Aplicar creme protetor se necessário (avaliar alergias).</li>
                <li>5. Orientar cuidados em casa.</li>
              </ul>
            </div>
            
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-stone-800">
              <h3 className="text-xl font-medium text-gold-500 mb-4">Recomendações (Primeiras 24h)</h3>
              <p className="text-stone-300 text-sm mb-4">
                O objetivo é permitir que o tratamento aplicado permaneça atuando:
              </p>
              <ul className="text-stone-400 text-sm space-y-2">
                <li>✗ Evitar molhar ou lavar diretamente</li>
                <li>✗ Evitar vapor excessivo, sauna, piscina e suor</li>
                <li>✗ Não esfregar os fios ou dormir pressionando a região</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-900/10 border border-red-900/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-medium text-red-500 mb-6">Erros Mais Comuns</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-sm text-stone-300"><span className="text-white font-medium block">1. Ultrapassar tempo de ação</span> Aumenta risco de danos.</div>
              <div className="text-sm text-stone-300"><span className="text-white font-medium block">2. Não avaliar o fio</span> Cada sobrancelha reage diferente.</div>
              <div className="text-sm text-stone-300"><span className="text-white font-medium block">3. Não alinhar antes do Passo 2</span> O Passo 2 fixa a posição torta.</div>
              <div className="text-sm text-stone-300"><span className="text-white font-medium block">4. Aplicar produto em excesso</span> Não traz maior eficiência.</div>
              <div className="text-sm text-stone-300"><span className="text-white font-medium block">5. Ignorar histórico químico</span> Fios tratados têm alta sensibilidade.</div>
              <div className="text-sm text-stone-300"><span className="text-white font-medium block">6. Negligenciar tratamento (Passo 3)</span> Fundamental pós-química.</div>
            </div>
            <p className="text-red-400 text-sm font-medium mt-6 pt-4 border-t border-red-900/30">
              ⚠️ Não respeitar intervalo: Aguardar de 30 a 40 dias para nova aplicação para evitar corte químico.
            </p>
          </div>
          
          <ImagePlaceholder name="brow_finalizacao.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod6_resumo' && (
        <Section title="Resumo do Protocolo">
          
          <div className="bg-[#111] p-8 rounded-2xl border border-stone-800 text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-medium text-gold-500 mb-8">Conclusão</h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              A Brow Lamination é muito mais do que simplesmente pentear os fios para cima. Um resultado profissional depende da combinação entre:
            </p>
            <p className="text-white font-semibold mb-6">
              Conhecimento + Avaliação + Técnica + Controle Químico + Alinhamento + Tratamento.
            </p>
            <div className="p-4 bg-black rounded-xl border border-stone-800 inline-block">
              <p className="text-stone-400 italic text-sm">
                "O melhor resultado não é o que transforma mais. É o que transforma com controle, técnica e preserva a saúde dos fios."
              </p>
            </div>
          </div>

          <ImagePlaceholder name="brow_resumo.png" />
        </Section>
      )}
    </>
  );
}
