import React from 'react';
import { Section } from './Section';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Step, MaterialItem } from './Shared';

export function Module3({ activeSection }: { activeSection: string }) {
  return (
    <>
      {activeSection === 'mod3_capa' && (
        <section className="min-h-[80vh] flex flex-col justify-center">
          <p className="text-gold-500 font-semibold tracking-widest uppercase mb-4 text-sm">
            Módulo 3
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Tintura para <br />Sobrancelhas
          </h1>
          <ImagePlaceholder name="capa_modulo3.png" className="mt-12 max-w-lg" />
        </section>
      )}

      {activeSection === 'mod3_tintura_intro' && (
        <Section title="O Que É a Tintura?">
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            A tintura para sobrancelhas é um produto cosmético desenvolvido para colorir principalmente os fios das sobrancelhas.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed mb-8">
            Diferentemente da henna, sua principal ação ocorre sobre os pelos, com pouca ou nenhuma pigmentação da pele, dependendo da formulação.
          </p>
          
          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-10">
            <h4 className="text-lg text-gold-500 font-medium mb-4">Indicada para clientes que desejam:</h4>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Escurecer fios claros',
                'Uniformizar sobrancelhas com fios grisalhos',
                'Intensificar a cor natural',
                'Obter um resultado mais discreto e natural'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-1.5 mr-3 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-medium text-white mb-6">Diferença entre Henna e Tintura</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-stone-300 border-collapse">
                <thead className="bg-[#1A1A1A] text-gold-500 uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3 border border-stone-800">Henna</th>
                    <th className="px-4 py-3 border border-stone-800">Tintura</th>
                  </tr>
                </thead>
                <tbody className="bg-[#111]">
                  <tr>
                    <td className="px-4 py-3 border border-stone-800">Pigmenta pele e fios</td>
                    <td className="px-4 py-3 border border-stone-800">Pigmenta principalmente os fios</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-stone-800">Preenche visualmente falhas</td>
                    <td className="px-4 py-3 border border-stone-800">Não preenche falhas na pele</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-stone-800">Efeito semelhante à maquiagem</td>
                    <td className="px-4 py-3 border border-stone-800">Resultado mais natural</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-stone-800">Duração menor nos fios</td>
                    <td className="px-4 py-3 border border-stone-800">Maior durabilidade nos fios</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-stone-800 mb-8">
            <h3 className="text-xl font-medium text-white mb-3">Como a Tintura Funciona?</h3>
            <p className="text-stone-400 mb-3">
              Atua na cutícula e no córtex superficial do fio, promovendo alteração temporária da cor. É formulada especificamente para pelos faciais.
            </p>
            <p className="text-red-400 font-medium text-sm mt-4 uppercase">Nunca utilizar tinturas capilares comuns nas sobrancelhas.</p>
          </div>
          <ImagePlaceholder name="tintura_intro.png" />
        </Section>
      )}

      {activeSection === 'mod3_tintura_aplicacao' && (
        <Section title="Colorimetria, Preparo e Aplicação">
          
          <div className="mb-10">
            <h3 className="text-2xl font-medium text-white mb-4">Colorimetria da Tintura</h3>
            <p className="text-stone-300 mb-4">A escolha da cor segue princípios semelhantes aos da henna. Deve-se considerar:</p>
            <ul className="flex flex-wrap gap-3 mb-6">
              {['Cor da pele', 'Cor dos fios naturais', 'Cor do cabelo', 'Intensidade desejada'].map((item, i) => (
                <li key={i} className="bg-[#111] border border-stone-800 px-4 py-2 rounded-lg text-sm text-stone-300">{item}</li>
              ))}
            </ul>
            <h4 className="font-medium text-gold-500 mb-3 mt-6">Tonalidades mais utilizadas:</h4>
            <div className="flex flex-wrap gap-2">
              {['Loiro', 'Castanho Claro', 'Castanho Médio', 'Castanho Escuro', 'Grafite', 'Preto (uso restrito)'].map((item, i) => (
                <span key={i} className="px-3 py-1 bg-stone-900 border border-stone-700 text-stone-400 text-sm rounded-full">{item}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#111] border border-stone-800 rounded-xl p-6 mb-10">
            <h3 className="text-xl font-medium text-white mb-4">Preparo</h3>
            <p className="text-stone-400 mb-4 text-sm">Cada fabricante possui proporções específicas. De forma geral:</p>
            <ol className="list-decimal pl-5 text-stone-300 space-y-2 mb-4">
              <li>Colocar pequena quantidade no recipiente.</li>
              <li>Adicionar o revelador conforme indicação (muitas utilizam 1:1).</li>
              <li>Misturar até obter consistência homogênea.</li>
              <li>Aplicar imediatamente.</li>
            </ol>
            <p className="text-gold-500 text-sm font-medium">Não preparar mistura com antecedência.</p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-white mb-6">Passo a Passo da Aplicação</h3>
            <ol className="list-none space-y-4 text-stone-300 mb-8">
              <Step num={1} text="Higienização." />
              <Step num={2} text="Mapeamento." />
              <Step num={3} text="Preparação da mistura." />
              <Step num={4} text="Aplicação uniforme sobre os fios." />
              <Step num={5} text="Respeitar o tempo de ação (5 a 15 minutos dependendo da marca)." />
              <Step num={6} text="Remover cuidadosamente." />
              <Step num={7} text="Finalização." />
            </ol>
          </div>
          <ImagePlaceholder name="tintura_aplicacao.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod3_tintura_cuidados' && (
        <Section title="Cuidados, Materiais e Resumo">
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-medium text-white mb-4 border-b border-stone-800 pb-2">Cuidados Após (24h)</h3>
              <ul className="list-disc pl-5 text-stone-300 space-y-1 text-sm">
                <li>Produtos oleosos na região</li>
                <li>Esfoliação</li>
                <li>Ácidos</li>
                <li>Limpeza excessiva</li>
                <li>Fricção sobre as sobrancelhas</li>
              </ul>
            </div>
            <div className="bg-red-900/10 p-5 rounded-xl border border-red-900/30">
              <h3 className="text-xl font-medium text-white mb-3">Contraindicações</h3>
              <ul className="list-disc pl-5 text-stone-300 space-y-1 text-sm mb-4">
                <li>Alergia conhecida</li>
                <li>Feridas abertas ou Dermatites</li>
                <li>Infecções na região</li>
                <li>Irritação ocular</li>
              </ul>
              <p className="text-xs text-red-300 italic">É indispensável realizar o teste de toque.</p>
            </div>
          </div>

          <div className="bg-[#111] border border-stone-800 p-8 rounded-2xl mb-10">
            <h3 className="text-xl font-medium text-gold-500 mb-6">Materiais Utilizados</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <MaterialItem name="Tintura e Revelador" desc="Produtos profissionais específicos da marca." />
              <MaterialItem name="Dappen" desc="De vidro ou plástico para mistura." />
              <MaterialItem name="Pincel chanfrado ou microbrush" desc="Para aplicação precisa." />
              <MaterialItem name="Algodão e Água" desc="Ou removedor específico para limpeza." />
              <MaterialItem name="Pasta de proteção" desc="Opcional, para proteger a pele ao redor." />
            </div>
            <ImagePlaceholder name="tintura_cuidados.png" className="mt-8" />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-medium text-gold-500 mb-4">Principais Erros</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Utilizar tintura de cabelo',
                'Não realizar teste de sensibilidade',
                'Misturar proporções incorretas',
                'Escolher tonalidade inadequada',
                'Exceder o tempo de ação',
                'Aplicar com resíduos de maquiagem'
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
                  'Diferenciar henna e tintura',
                  'Compreender a colorimetria aplicada',
                  'Preparar corretamente a tintura',
                  'Aplicar o produto com segurança',
                  'Respeitar o tempo de ação indicado',
                  'Orientar os cuidados pós-procedimento',
                  'Selecionar materiais adequados'
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
