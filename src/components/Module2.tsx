import React from 'react';
import { Section } from './Section';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Step, MaterialItem } from './Shared';

export function Module2({ activeSection }: { activeSection: string }) {
  return (
    <>
      {activeSection === 'mod2_capa' && (
        <section className="min-h-[80vh] flex flex-col justify-center">
          <p className="text-gold-500 font-semibold tracking-widest uppercase mb-4 text-sm">
            Módulo 2
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Henna para <br />Sobrancelhas
          </h1>
          <ImagePlaceholder name="capa_modulo2.png" className="mt-12 max-w-lg" />
        </section>
      )}

      {activeSection === 'mod2_henna_intro' && (
        <Section title="O Que É a Henna?">
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            A henna para sobrancelhas é um pigmento temporário utilizado para preencher visualmente falhas, definir o desenho e proporcionar maior destaque às sobrancelhas.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed mb-8">
            Diferentemente da henna corporal tradicional, a maioria das hennas cosméticas para sobrancelhas é formulada especificamente para uso facial, com o objetivo de pigmentar a pele e os fios.
          </p>
          
          <div className="bg-[#111] p-8 rounded-2xl border border-stone-800 mb-10">
            <h3 className="text-xl font-medium text-gold-500 mb-6 border-b border-stone-800 pb-4">Indicações e Benefícios</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg text-white font-medium mb-4">A henna é indicada para:</h4>
                <ul className="space-y-3">
                  {[
                    'Clientes com falhas nas sobrancelhas',
                    'Efeito de preenchimento natural',
                    'Fase de crescimento dos fios',
                    'Testar um formato antes da micropigmentação'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-stone-300">
                      <span className="w-2 h-2 rounded-full bg-gold-500 mt-1.5 mr-3 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg text-white font-medium mb-4">Principais Vantagens:</h4>
                <ul className="space-y-3">
                  {[
                    'Realce imediato das sobrancelhas',
                    'Correção visual de falhas',
                    'Maior definição do desenho',
                    'Procedimento rápido e indolor',
                    'Baixo custo operacional'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-stone-300">
                      <span className="text-gold-500 mr-3 shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ImagePlaceholder name="henna_intro.png" />
        </Section>
      )}

      {activeSection === 'mod2_henna_durabilidade' && (
        <Section title="Durabilidade e Como Age">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#111] p-6 rounded-xl border border-stone-800">
              <h3 className="text-2xl font-medium text-white mb-2">Na pele</h3>
              <p className="text-gold-500 font-semibold tracking-wider mb-2">APROXIMADAMENTE 3 A 10 DIAS</p>
            </div>
            <div className="bg-[#111] p-6 rounded-xl border border-stone-800">
              <h3 className="text-2xl font-medium text-white mb-2">Nos fios</h3>
              <p className="text-gold-500 font-semibold tracking-wider mb-2">APROXIMADAMENTE 15 A 30 DIAS</p>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-medium text-white mb-4">Fatores que influenciam a durabilidade:</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Tipo de pele', 'Oleosidade', 'Lavagem do rosto', 'Uso de ácidos e esfoliantes', 'Exposição solar', 'Cuidados pós-procedimento', 'Qualidade do produto'].map((item, i) => (
                <li key={i} className="bg-[#1A1A1A] px-4 py-2 rounded-lg text-stone-300 text-sm border border-stone-800">{item}</li>
              ))}
            </ul>
            <p className="text-sm text-stone-400 mt-4 italic">Em peles oleosas, a fixação tende a ser menor.</p>
          </div>

          <div className="bg-[#111] border border-stone-800 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-medium text-gold-500 mb-4">Como a Henna Age?</h3>
            <p className="text-stone-300 mb-4">
              A henna deposita pigmentos na camada mais superficial da pele (estrato córneo) e também colore os fios da sobrancelha.
            </p>
            <p className="text-stone-300 mb-4">
              Ela não altera permanentemente a estrutura do pelo nem penetra profundamente na pele. Por isso seu efeito é considerado temporário.
            </p>
          </div>
          <ImagePlaceholder name="henna_acao.png" />
        </Section>
      )}

      {activeSection === 'mod2_henna_colorimetria' && (
        <Section title="Colorimetria da Henna">
          <p className="text-stone-300 text-lg mb-8 leading-relaxed">
            A escolha da cor é um dos fatores mais importantes para um resultado natural. Jamais escolha a cor apenas pela cor do cabelo; a sobrancelha deve harmonizar com toda a composição facial.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="bg-[#111] p-5 rounded-xl border border-stone-800">
              <h4 className="font-medium text-white mb-2">Castanho Claro</h4>
              <p className="text-sm text-stone-400 mb-2">Loiras escuras, ruivas, castanho claro.</p>
              <p className="text-xs text-gold-500 uppercase tracking-wide">Mais suave</p>
            </div>
            <div className="bg-[#111] p-5 rounded-xl border border-stone-800">
              <h4 className="font-medium text-white mb-2">Castanho Médio</h4>
              <p className="text-sm text-stone-400 mb-2">Castanho natural, loiro escuro. Grande parte das brasileiras.</p>
              <p className="text-xs text-gold-500 uppercase tracking-wide">Muito Versátil</p>
            </div>
            <div className="bg-[#111] p-5 rounded-xl border border-stone-800">
              <h4 className="font-medium text-white mb-2">Castanho Escuro</h4>
              <p className="text-sm text-stone-400 mb-2">Cabelos escuros, morena natural.</p>
              <p className="text-xs text-gold-500 uppercase tracking-wide">Maior Definição</p>
            </div>
            <div className="bg-[#111] p-5 rounded-xl border border-stone-800">
              <h4 className="font-medium text-white mb-2">Preto</h4>
              <p className="text-sm text-stone-400 mb-2">Utilizado apenas em situações específicas. Raramente recomendado sozinho.</p>
              <p className="text-xs text-red-400 uppercase tracking-wide">Pode endurecer a expressão</p>
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-stone-800 mb-8">
            <h3 className="text-xl font-medium text-white mb-4">Mistura de Tonalidades</h3>
            <p className="text-stone-400 mb-4">É possível misturar cores para alcançar resultados personalizados.</p>
            <ul className="space-y-3">
              <li className="flex flex-col sm:flex-row sm:items-center text-stone-300"><span className="text-gold-500 font-medium sm:w-1/2">Castanho Claro + Médio</span> <span className="text-sm text-stone-400">Transição suave.</span></li>
              <li className="flex flex-col sm:flex-row sm:items-center text-stone-300"><span className="text-gold-500 font-medium sm:w-1/2">Castanho Médio + Escuro</span> <span className="text-sm text-stone-400">Maior intensidade.</span></li>
              <li className="flex flex-col sm:flex-row sm:items-center text-stone-300"><span className="text-gold-500 font-medium sm:w-1/2">Castanho Escuro + Preto</span> <span className="text-sm text-stone-400">Somente quando necessário e em pouca proporção.</span></li>
            </ul>
            <p className="mt-6 text-sm font-semibold text-stone-300 uppercase tracking-wide">
              O ideal é sempre iniciar por tons mais claros. Escurecer é mais fácil do que clarear.
            </p>
          </div>
          <ImagePlaceholder name="henna_cores.png" />
        </Section>
      )}

      {activeSection === 'mod2_henna_aplicacao' && (
        <Section title="Preparo e Aplicação">
          <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-6 mb-10">
            <h3 className="text-xl font-medium text-white mb-4">Preparo da Henna</h3>
            <p className="text-stone-400 mb-4">Cada fabricante possui proporções específicas. Sempre siga a bula. De forma geral:</p>
            <ol className="list-decimal pl-5 text-stone-300 space-y-2">
              <li>Higienizar a pele.</li>
              <li>Esfoliar quando necessário.</li>
              <li>Colocar pequena quantidade no Dappen.</li>
              <li>Adicionar o fixador conforme fabricante.</li>
              <li>Misturar até formar textura homogênea (creme fino).</li>
              <li>Utilizar intensificador se necessário.</li>
            </ol>
            <p className="mt-4 text-sm text-gold-500 font-medium">Nunca preparar grandes quantidades. Misturar imediatamente antes da aplicação.</p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-white mb-6">Passo a Passo da Aplicação</h3>
            <ol className="list-none space-y-4 text-stone-300">
              <Step num={1} text="Higienização." />
              <Step num={2} text="Esfoliação (quando indicada)." />
              <Step num={3} text="Mapeamento." />
              <Step num={4} text="Aplicação da pasta delimitadora." />
              <Step num={5} text="Mistura da henna." />
              <Step num={6} text="Aplicação em camadas uniformes." />
              <Step num={7} text="Respeitar o tempo de ação." />
              <Step num={8} text="Remoção delicada." />
              <Step num={9} text="Finalização." />
            </ol>
          </div>
          <ImagePlaceholder name="henna_aplicacao.png" className="mt-10" />
        </Section>
      )}

      {activeSection === 'mod2_henna_cuidados' && (
        <Section title="Ação, Remoção e Cuidados">
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-medium text-white mb-4 border-b border-stone-800 pb-2">Tempo de Ação</h3>
              <p className="text-stone-400 mb-4 text-sm">Varia conforme o fabricante, tom desejado, tipo de pele e produto.</p>
              <p className="bg-[#111] p-4 rounded-lg text-sm border border-stone-800 text-stone-300">
                Nunca ultrapasse o tempo recomendado. Isso não garante maior durabilidade e pode resultar em coloração excessivamente escura ou desigual.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-4 border-b border-stone-800 pb-2">Remoção</h3>
              <p className="text-stone-400 mb-4 text-sm">Remover cuidadosamente utilizando:</p>
              <ul className="list-disc pl-5 text-stone-300 space-y-1 mb-4 text-sm">
                <li>Algodão umedecido</li>
                <li>Água filtrada ou mineral</li>
                <li>Removedor específico, se necessário</li>
              </ul>
              <p className="text-gold-500 text-sm font-medium">Nunca esfregar excessivamente a pele.</p>
            </div>
          </div>

          <div className="bg-red-900/10 p-6 rounded-xl border border-red-900/30 mb-10">
            <h3 className="text-xl font-medium text-white mb-4">Contraindicações</h3>
            <p className="text-stone-400 mb-4 text-sm">Não realizar o procedimento em casos de:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['Feridas abertas', 'Dermatites ativas', 'Queimaduras solares', 'Alergia conhecida', 'Infecções na região', 'Irritação intensa'].map((item, i) => (
                <li key={i} className="text-sm text-stone-300 flex items-center"><span className="text-red-500 mr-2">✗</span> {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-stone-400 italic border-t border-red-900/30 pt-3">Sempre realizar teste de sensibilidade.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-4">Cuidados após a Henna (24h)</h3>
            <ul className="grid grid-cols-2 gap-3">
              {['Evitar esfregar', 'Banhos muito quentes', 'Sauna e Piscina', 'Produtos com ácidos', 'Esfoliantes', 'Limpeza excessiva'].map((item, i) => (
                <li key={i} className="bg-[#111] border border-stone-800 px-4 py-3 rounded-lg text-stone-300 text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <ImagePlaceholder name="henna_cuidados.png" className="mt-10" />
        </Section>
      )}

      {activeSection === 'mod2_henna_materiais' && (
        <Section title="Materiais e Resumo">
          <p className="text-stone-300 mb-8 text-lg">Materiais utilizados no procedimento de Henna.</p>
          
          <div className="bg-[#111] border border-stone-800 p-8 rounded-2xl mb-12">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <MaterialItem name="Henna" desc="Pigmento utilizado para colorir pele e fios." />
              <MaterialItem name="Fixador" desc="Auxilia na preparação e melhora a fixação do pigmento." />
              <MaterialItem name="Intensificador" desc="Aumenta a intensidade da coloração (quando recomendado)." />
              <MaterialItem name="Removedor" desc="Auxilia na limpeza de excessos e correções." />
              <MaterialItem name="Agitador de Henna" desc="Utilizado para homogeneizar a mistura." />
              <MaterialItem name="Dappen de Vidro" desc="Recipiente para preparar. O vidro facilita a higienização." />
              <MaterialItem name="Aplicador" desc="Palito aplicador, Microbrush ou Pincel fino e chanfrado." />
            </div>
            <ImagePlaceholder name="henna_materiais.png" className="mt-8" />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-medium text-gold-500 mb-4">Principais Erros</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Aplicar sobre pele oleosa',
                'Não realizar mapeamento',
                'Misturar proporções incorretas',
                'Ultrapassar o tempo recomendado',
                'Escolher cor inadequada',
                'Aplicar camadas muito grossas',
                'Não remover corretamente'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-stone-400">
                  <span className="text-red-500 mr-2 shrink-0">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-medium text-gold-500 mb-4">Resumo do Módulo</h3>
            <div className="bg-[#111] border border-stone-800 rounded-xl p-6">
              <ul className="space-y-3">
                {[
                  'Compreender o funcionamento da henna',
                  'Escolher corretamente a cor',
                  'Preparar a mistura',
                  'Aplicar com segurança',
                  'Respeitar o tempo de ação',
                  'Orientar os cuidados pós-procedimento'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-300 font-medium">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-xs mr-3 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
