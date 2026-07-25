import React from 'react';
import { Section } from './Section';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Step, MaterialItem } from './Shared';

export function Module5({ activeSection }: { activeSection: string }) {
  return (
    <>
      {activeSection === 'mod5_capa' && (
        <section className="min-h-[80vh] flex flex-col justify-center">
          <p className="text-gold-500 font-semibold tracking-widest uppercase mb-4 text-sm">
            Módulo 5
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Brow Repair<br />
            <span className="text-2xl md:text-3xl text-stone-400 mt-4 block font-sans font-light">
              Protocolo de Reparação e Estímulo
            </span>
          </h1>
          <ImagePlaceholder name="capa_modulo5.png" className="mt-12 max-w-lg" />
        </section>
      )}

      {activeSection === 'mod5_intro' && (
        <Section title="Introdução e O Que É?">
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            O Brow Repair é um protocolo utilizado para auxiliar na recuperação estética da região das sobrancelhas, especialmente em casos de falhas, enfraquecimento dos fios e histórico de remoção excessiva.
          </p>
          
          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-8">
            <h3 className="text-xl font-medium text-gold-500 mb-4">A Essência do Procedimento</h3>
            <p className="text-stone-300 mb-4 text-sm">
              O protocolo tem como principal técnica o <strong>microagulhamento</strong>, associado à aplicação prévia de um <strong>blend cosmético de reconstrução</strong>, desenvolvido especificamente para o cuidado da região. O objetivo é promover um estímulo controlado na pele, favorecendo os processos naturais de reparação.
            </p>
            <p className="text-red-400 text-sm font-medium">
              Atenção: O Brow Repair não deve ser entendido como um procedimento capaz de criar novos folículos ou garantir o crescimento dos pelos. A resposta depende da biologia individual.
            </p>
          </div>

          <h3 className="text-2xl font-medium text-white mb-6">Como Funciona e Para Que Serve?</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-lg text-white font-medium mb-3 border-b border-stone-800 pb-2">O Procedimento Combina:</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>• Avaliação da região e Ficha de anamnese</li>
                <li>• Higienização</li>
                <li>• Design com epilação</li>
                <li>• Aplicação de blend cosmético de reconstrução</li>
                <li>• Microagulhamento</li>
                <li>• Cuidados pós-procedimento</li>
                <li>• Acompanhamento da evolução</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg text-white font-medium mb-3 border-b border-stone-800 pb-2">Proporciona Condições Para:</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>• Reparação da pele e renovação dos tecidos</li>
                <li>• Estímulo local</li>
                <li>• Melhora das condições da região</li>
                <li>• Cuidado dos folículos pilosos viáveis</li>
                <li>• Recuperação estética dos fios</li>
              </ul>
            </div>
          </div>
          <ImagePlaceholder name="repair_intro.png" />
        </Section>
      )}

      {activeSection === 'mod5_microagulhamento' && (
        <Section title="Microagulhamento e Biologia">
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            O microagulhamento é uma técnica que utiliza microagulhas para realizar perfurações controladas na superfície da pele, provocando uma resposta natural do organismo.
          </p>

          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-10">
            <h3 className="text-xl font-medium text-gold-500 mb-4">A Resposta Biológica</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Ativação dos mecanismos naturais de reparação',
                'Estímulo da circulação local',
                'Liberação de mediadores envolvidos na reparação tecidual',
                'Remodelação da matriz extracelular',
                'Estímulo à produção de componentes estruturais da pele'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-stone-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-3 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-stone-800">
              <h3 className="text-xl font-medium text-white mb-4">Folículos Pilosos</h3>
              <p className="text-stone-400 text-sm mb-4">
                O microagulhamento atua como estímulo local que pode favorecer a atividade de folículos ainda biologicamente viáveis. Porém:
              </p>
              <ul className="text-sm text-stone-400 space-y-2">
                <li>• <strong>NÃO</strong> cria novos folículos.</li>
                <li>• <strong>NÃO</strong> recupera folículos permanentemente destruídos.</li>
                <li>• <strong>NÃO</strong> garante o crescimento de pelos.</li>
              </ul>
            </div>
            
            <div className="bg-black p-6 rounded-xl border border-stone-800">
              <h3 className="text-xl font-medium text-white mb-4">Biologia Individual</h3>
              <p className="text-stone-400 text-sm mb-4">
                Duas clientes submetidas ao mesmo protocolo podem apresentar resultados diferentes devido a fatores como:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Genética', 'Idade', 'Hormônios', 'Alimentação', 'Estresse', 'Sono', 'Medicamentos', 'Condições dermatológicas', 'Histórico de remoção'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-stone-900 rounded text-xs text-stone-300 border border-stone-800">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <ImagePlaceholder name="repair_microagulhamento.png" />
        </Section>
      )}

      {activeSection === 'mod5_indicacoes_anamnese' && (
        <Section title="Indicações, Anamnese e Avaliação">
          <div className="mb-10">
            <h3 className="text-2xl font-medium text-gold-500 mb-4">Indicações</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Falhas localizadas', 'Baixa densidade', 'Fios enfraquecidos ou finos', 
                'Histórico de excesso de pinçamento', 'Perda de volume', 'Regiões com potencial de recuperação'
              ].map(tag => (
                <span key={tag} className="px-4 py-2 bg-[#111] rounded-full text-sm text-stone-300 border border-stone-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A1A] border border-stone-800 p-8 rounded-2xl mb-10">
            <h3 className="text-2xl font-medium text-white mb-6 border-b border-stone-800 pb-4">Ficha de Anamnese</h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="text-gold-500 font-medium mb-3">Histórico de Saúde</h4>
                <ul className="text-stone-400 space-y-1">
                  <li>• Doenças diagnosticadas e Autoimunes</li>
                  <li>• Alterações hormonais ou Diabetes</li>
                  <li>• Problemas de cicatrização / Queloides</li>
                  <li>• Alergias e Condições dermatológicas</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gold-500 font-medium mb-3">Uso de Medicamentos</h4>
                <ul className="text-stone-400 space-y-1">
                  <li>• Anticoagulantes e Corticoides</li>
                  <li>• Imunossupressores e Retinoides</li>
                  <li>• Medicamentos que alterem a cicatrização</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gold-500 font-medium mb-3">Histórico da Sobrancelha</h4>
                <ul className="text-stone-400 space-y-1">
                  <li>• Início das falhas e excesso de remoção</li>
                  <li>• Frequência do uso de pinça/cera/linha</li>
                  <li>• Procedimentos químicos e Micropigmentação</li>
                  <li>• Traumas na região</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gold-500 font-medium mb-3">Hábitos e Cuidados</h4>
                <ul className="text-stone-400 space-y-1">
                  <li>• Uso de cosméticos ou produtos para crescimento</li>
                  <li>• Rotina de skincare</li>
                  <li>• Exposição solar e Estéticos recentes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-6 rounded-xl border border-stone-800">
              <h4 className="text-white font-medium mb-2">Avaliação da Região</h4>
              <p className="text-stone-400 text-sm">
                Observar formato, áreas de falha, densidade, espessura, presença de fios novos e finos, oleosidade, descamação, vermelhidão, lesões e cicatrizes.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-xl border border-stone-800">
              <h4 className="text-white font-medium mb-2">Registro Fotográfico</h4>
              <p className="text-stone-400 text-sm">
                Sempre fazer fotos sem maquiagem, sem filtros, com boa luz e na mesma distância para permitir comparação objetiva da evolução.
              </p>
            </div>
          </div>
        </Section>
      )}

      {activeSection === 'mod5_materiais_biosseguranca' && (
        <Section title="Materiais e Biossegurança">
          
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-gold-500 mb-6">Materiais Necessários</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 bg-[#111] border border-stone-800 p-6 rounded-2xl">
              <MaterialItem name="Higienização" desc="Higienizador adequado, gaze, algodão, água filtrada, faixa, touca e luvas." />
              <MaterialItem name="Microagulhamento" desc="Dispositivo adequado (derma pen/roller), cartucho/ponteira estéril, recipiente para descarte (Descarpack), EPIs." />
              <MaterialItem name="Blend" desc="Blend cosmético de reconstrução específico, aplicador descartável." />
              <MaterialItem name="Finalização" desc="Produto calmante e/ou hidratante adequado." />
            </div>
          </div>
          <ImagePlaceholder name="repair_materiais.png" className="mb-12" />

          <div className="bg-red-900/10 p-8 rounded-2xl border border-red-900/30">
            <h3 className="text-2xl font-medium text-red-500 mb-6">Biossegurança</h3>
            <p className="text-stone-300 mb-6">
              A biossegurança é uma das etapas mais importantes do Brow Repair. É vital para evitar contaminações cruzadas e infecções.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm text-stone-300">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  Higienizar corretamente as mãos e utilizar EPIs.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  Utilizar cartucho ou ponteira <strong>estéril e descartável</strong>.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <strong>NUNCA reutilizar agulhas!</strong>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  Realizar o descarte correto em recipiente apropriado para perfurocortantes imediatamente após o uso.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  Higienizar e desinfetar superfícies e ambiente.
                </li>
              </ul>
            </div>
          </div>
        </Section>
      )}

      {activeSection === 'mod5_blend_procedimento' && (
        <Section title="Blend e Procedimento">
          
          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-10">
            <h3 className="text-xl font-medium text-white mb-4">Blend de Reconstrução</h3>
            <p className="text-stone-300 text-sm mb-4">
              O blend cosmético é aplicado <strong>ANTES</strong> do microagulhamento. Seu objetivo é associar o cuidado cosmético ao estímulo promovido pelas agulhas, preparando a região e condicionando a pele.
            </p>
            <p className="text-gold-500 text-sm font-medium">
              Nota: Utilizar apenas produtos com procedência e específicos. Não improvisar com óleos essenciais puros como substitutos.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-medium text-gold-500 mb-6">Procedimento do Microagulhamento</h3>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-stone-800 mb-6">
              <h4 className="text-white font-medium mb-3">Preparação</h4>
              <p className="text-stone-400 text-sm">
                Realizar anamnese, avaliar contraindicações, fazer fotos, higienizar a pele, realizar o design, aplicar o blend de reconstrução e preparar o equipamento com ponteira nova estéril.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black p-6 rounded-xl border border-stone-800">
                <h4 className="text-white font-medium mb-3">Aplicação</h4>
                <ul className="text-sm text-stone-400 space-y-2">
                  <li>• Controlada, sistemática e uniforme.</li>
                  <li>• Respeitar sensibilidade e região anatômica.</li>
                  <li>• Profundidade tecnicamente indicada.</li>
                </ul>
              </div>
              <div className="bg-black p-6 rounded-xl border border-stone-800">
                <h4 className="text-red-400 font-medium mb-3">O que Evitar (NÃO FAZER)</h4>
                <ul className="text-sm text-stone-400 space-y-2">
                  <li>• Pressão excessiva ou aplicação agressiva.</li>
                  <li>• <strong>Sangramento desnecessário.</strong></li>
                  <li>• Repetição excessiva das passagens.</li>
                  <li>• Procedimento sobre lesões.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-stone-800">
            <h3 className="text-lg font-medium text-white mb-3">Diferença: Brow Repair vs Protocolo de Crescimento</h3>
            <p className="text-stone-400 text-sm">
              <strong>Crescimento:</strong> Foco em cuidados com a pele, controle de oleosidade, argiloterapia e alta frequência.<br/>
              <strong>Brow Repair:</strong> Foco em reparação e estímulo profundo através do microagulhamento e blend cosmético.
            </p>
          </div>
          <ImagePlaceholder name="repair_blend.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'mod5_cuidados_reacoes' && (
        <Section title="Cuidados, Contraindicações e Reações">
          
          <div className="space-y-6 mb-10">
            <h3 className="text-2xl font-medium text-red-500 mb-4">Contraindicações e Adiamentos</h3>
            <div className="bg-red-900/10 p-6 rounded-xl border border-red-900/30">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-stone-300">
                <li>• Infecções ativas / Herpes</li>
                <li>• Feridas / Dermatites ativas</li>
                <li>• Inflamações / Acne na área</li>
                <li>• Queimaduras solares</li>
                <li>• Queloides / Má cicatrização</li>
                <li>• Imunossupressão / Anticoagulantes</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#111] p-6 rounded-2xl border border-stone-800">
              <h3 className="text-xl font-medium text-white mb-4">Cuidados Antes</h3>
              <ul className="text-sm text-stone-400 space-y-2">
                <li>• Evitar exposição solar intensa</li>
                <li>• Não realizar depilação ou agressões logo antes</li>
                <li>• Não usar irritantes</li>
                <li>• Informar histórico de medicamentos e alergias</li>
              </ul>
            </div>
            
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-stone-800">
              <h3 className="text-xl font-medium text-white mb-4">Cuidados Pós</h3>
              <ul className="text-sm text-stone-400 space-y-2">
                <li>• Não tocar, nem coçar, nem remover crostas</li>
                <li>• Evitar maquiagem no período recomendado</li>
                <li>• Evitar sol direto e usar proteção conforme orientado</li>
                <li>• Não usar ácidos ou ativos sensibilizantes</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#111] p-6 rounded-2xl border border-stone-800">
              <h3 className="text-xl font-medium text-gold-500 mb-4">Reações Esperadas</h3>
              <p className="text-sm text-stone-400 mb-3">Reações temporárias naturais da pele:</p>
              <div className="flex flex-wrap gap-2 text-sm text-stone-300">
                <span className="bg-black px-2 py-1 rounded">Vermelhidão</span>
                <span className="bg-black px-2 py-1 rounded">Sensibilidade</span>
                <span className="bg-black px-2 py-1 rounded">Leve edema (inchaço)</span>
                <span className="bg-black px-2 py-1 rounded">Sensação de calor</span>
                <span className="bg-black px-2 py-1 rounded">Pequena descamação</span>
              </div>
            </div>

            <div className="bg-red-900/10 p-6 rounded-2xl border border-red-900/30">
              <h3 className="text-xl font-medium text-red-500 mb-4">Sinais de Alerta</h3>
              <p className="text-sm text-stone-400 mb-3">Interromper e encaminhar ao médico se houver:</p>
              <ul className="text-sm text-stone-300 space-y-1">
                <li>• Dor intensa ou inchaço importante</li>
                <li>• Vermelhidão que piora, pus ou secreção</li>
                <li>• Febre ou reações alérgicas extensas</li>
              </ul>
            </div>
          </div>
          <ImagePlaceholder name="repair_cuidados.png" />
        </Section>
      )}

      {activeSection === 'mod5_conclusao' && (
        <Section title="Conclusão e Resultados">
          
          <div className="bg-[#111] p-6 rounded-2xl border border-stone-800 mb-10">
            <h3 className="text-xl font-medium text-white mb-4">Resultados Esperados vs Limitações</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gold-500 font-medium mb-2 text-sm uppercase tracking-wider">O que Pode Fazer</h4>
                <ul className="text-sm text-stone-400 space-y-1">
                  <li>• Reparação da região e estímulo local</li>
                  <li>• Potencialização de folículos viáveis</li>
                  <li>• Melhora estética e de aparência dos fios</li>
                </ul>
              </div>
              <div>
                <h4 className="text-stone-500 font-medium mb-2 text-sm uppercase tracking-wider">O que NÃO Faz</h4>
                <ul className="text-sm text-stone-400 space-y-1">
                  <li>• Não cria folículos novos</li>
                  <li>• Não recupera folículos destruídos</li>
                  <li>• Não garante resultados iguais para todas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-stone-800">
              <h3 className="text-lg font-medium text-white mb-3">Folículos Viáveis</h3>
              <p className="text-sm text-stone-400">
                Ainda possuem capacidade biológica. O estímulo pode favorecer a recuperação e a atividade local.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-xl border border-stone-800">
              <h3 className="text-lg font-medium text-white mb-3">Folículos Comprometidos/Destruídos</h3>
              <p className="text-sm text-stone-400">
                Capacidade reduzida ou nula. Quando permanentemente destruído ou ausente, o microagulhamento não consegue criar um novo (principal limitação).
              </p>
            </div>
          </div>

          <div className="bg-black border border-stone-800 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-serif text-white mb-4">Orientação Fundamental à Cliente</h3>
            <p className="text-stone-300 italic max-w-2xl mx-auto mb-6">
              "O Brow Repair não cria novos pelos onde não existem folículos funcionais. O objetivo é estimular processos naturais de reparação. Cada organismo responde de uma maneira diferente, dependendo da biologia individual e da causa das falhas."
            </p>
            <p className="text-gold-500 text-sm font-medium">
              A excelência do protocolo está na avaliação correta, biossegurança, execução técnica responsável e alinhamento de expectativas.
            </p>
          </div>

        </Section>
      )}
    </>
  );
}
