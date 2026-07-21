import React from 'react';
import { Section } from './Section';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ImageCarousel } from './ImageCarousel';

interface CourseContentProps {
  activeSection: string;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function CourseContent({ activeSection, onNext, onPrev, isFirst, isLast }: CourseContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 bg-black min-h-screen pb-24">
      
      {activeSection === 'capa' && (
        <section className="py-24 text-center flex flex-col items-center justify-center min-h-[70vh]">
          <p className="text-sm md:text-base font-semibold tracking-[0.2em] text-gold-500 uppercase mb-4">
            Curso Profissional de Design de Sobrancelhas
          </p>
          <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight">
            Módulo 1
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-stone-400 tracking-wide">
            Design de Sobrancelhas
          </h2>
          <ImagePlaceholder name="capa_modulo1.png" className="mt-12 max-w-lg" />
        </section>
      )}

      {activeSection === 'introducao' && (
        <Section title="O Que é Design de Sobrancelhas">
          <p className="text-stone-300 leading-relaxed text-lg">
            O Design de Sobrancelhas é uma técnica estética que consiste em estudar o formato do rosto, as 
            características faciais e o crescimento natural dos fios para criar sobrancelhas equilibradas, 
            harmônicas e proporcionais.
          </p>
          <p className="text-stone-300 leading-relaxed text-lg">
            O objetivo não é apenas remover pelos, mas valorizar a expressão facial, respeitando a 
            individualidade de cada cliente.
          </p>
          
          <div className="bg-[#111] rounded-xl p-8 my-8 border border-stone-800">
            <h3 className="text-xl font-medium text-white mb-4">Um bom design pode:</h3>
            <ul className="space-y-3">
              {[
                'Harmonizar o rosto',
                'Rejuvenescer a aparência',
                'Destacar o olhar',
                'Corrigir assimetrias visuais',
                'Valorizar os traços naturais'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-medium text-white mt-10 mb-4">O design pode ser realizado utilizando diversas técnicas:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {['Pinça', 'Linha egípcia', 'Cera fria para rosto', 'Henna', 'Tintura', 'Brow Lamination', 'Repair Brow'].map((item, i) => (
              <div key={i} className="bg-[#111] border border-stone-800 rounded-lg py-3 px-4 text-center text-stone-300 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </Section>
      )}

      {activeSection === 'historia' && (
        <Section title="História do Design de Sobrancelhas">
          <p className="text-stone-300 leading-relaxed text-lg mb-8">
            As sobrancelhas acompanham a evolução da beleza há milhares de anos.
          </p>
          
          <div className="relative border-l border-stone-800 ml-3 md:ml-6 space-y-10 pb-4">
            <TimelineItem period="Egito Antigo" desc="Os egípcios utilizavam carvão mineral e pigmentos escuros para destacar olhos e sobrancelhas. A maquiagem também possuía significado religioso e social." />
            <TimelineItem period="Grécia Antiga" desc="Sobrancelhas espessas eram consideradas símbolo de inteligência e beleza." />
            <TimelineItem period="Década de 1920" desc="As sobrancelhas extremamente finas tornaram-se tendência." />
            <TimelineItem period="Década de 1950" desc="Modelos arqueados ganharam popularidade com atrizes de Hollywood." />
            <TimelineItem period="Década de 1980" desc="Sobrancelhas grossas e naturais voltaram à moda." />
            <TimelineItem period="Atualmente" desc="Busca-se equilíbrio, naturalidade e personalização através do visagismo." isLast />
          </div>
          <ImageCarousel images={['historia1.png', 'historia2.png', 'historia3.png', 'historia4.png', 'historia5.png', 'historia6.png']} />
        </Section>
      )}

      {activeSection === 'ciclo' && (
        <Section title="Ciclo de Vida do Pelo">
          <p className="text-stone-300 leading-relaxed text-lg mb-6">
            Todo fio da sobrancelha possui um ciclo natural dividido em três fases.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <CycleCard phase="Fase Anágena" subtitle="(Crescimento)" desc="É a fase em que o fio nasce e cresce." features={['Alta atividade celular', 'Crescimento contínuo', 'Maior irrigação sanguínea']} duration="30 a 45 dias" />
            <CycleCard phase="Fase Catágena" subtitle="(Transição)" desc="É uma fase curta onde o crescimento é interrompido." features={['O folículo começa a diminuir', 'O fio deixa de crescer']} duration="2 a 3 semanas" />
            <CycleCard phase="Fase Telógena" subtitle="(Queda)" desc="É a fase final. O fio permanece preso até ser substituído por outro novo. Após essa fase, um novo ciclo inicia." features={[]} duration="60 a 100 dias" />
          </div>

          <ImageCarousel images={['ciclo1.png', 'ciclo2.png', 'ciclo3.png']} />

          <div className="bg-[#111] rounded-2xl p-8 mt-10 border border-stone-800">
            <h3 className="text-xl font-medium text-gold-500 mb-4">Por que é importante conhecer o ciclo?</h3>
            <p className="text-stone-300 mb-4">O profissional precisa compreender que:</p>
            <ul className="space-y-3">
              {[
                'Retirar um fio não faz outro nascer mais grosso',
                'Os fios crescem em tempos diferentes',
                'Falhas naturais fazem parte do ciclo',
                'Excesso de remoção pode danificar permanentemente o folículo'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-3 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {activeSection === 'estrutura' && (
        <Section title="Estrutura do Pelo">
          <p className="text-stone-300 leading-relaxed text-lg mb-8">
            O fio da sobrancelha é composto principalmente por queratina. Sua estrutura é dividida em:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-white mb-2 flex items-center">
                <span className="text-gold-500 mr-2">1.</span> Cutícula
              </h3>
              <p className="text-stone-400 mb-2">Camada externa.</p>
              <p className="text-stone-300 font-medium text-sm uppercase tracking-wider mb-2">Função:</p>
              <ul className="list-disc pl-5 text-stone-400 space-y-1">
                <li>Proteger o fio</li>
                <li>Controlar entrada de produtos químicos</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-2 flex items-center">
                <span className="text-gold-500 mr-2">2.</span> Córtex
              </h3>
              <p className="text-stone-400 mb-2">Camada intermediária.</p>
              <p className="text-stone-300 font-medium text-sm uppercase tracking-wider mb-2">Responsável por:</p>
              <ul className="list-disc pl-5 text-stone-400 space-y-1 mb-3">
                <li>Resistência</li>
                <li>Elasticidade</li>
                <li>Cor natural (melanina)</li>
              </ul>
              <div className="bg-[#111] border-l-2 border-gold-500 p-3 text-sm text-stone-400 italic">
                A henna e a tintura atuam principalmente nesta região superficial.
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-2 flex items-center">
                <span className="text-gold-500 mr-2">3.</span> Medula
              </h3>
              <p className="text-stone-400">
                Parte central do fio. Nem todos os pelos possuem medula desenvolvida. Sua função é estrutural.
              </p>
            </div>
          </div>

          <ImagePlaceholder name="estrutura_pelo.png" className="my-10" />

          <div className="bg-[#111] border border-stone-800 text-stone-300 rounded-2xl p-8 mt-10">
            <h3 className="text-xl font-medium text-gold-500 mb-3">Folículo Piloso</h3>
            <p className="leading-relaxed mb-4">
              O folículo é a estrutura localizada abaixo da pele responsável pela produção do fio.
            </p>
            <p className="leading-relaxed">
              Quando ocorre dano permanente ao folículo, o pelo pode não nascer novamente. 
              <strong className="text-white block mt-2">Por isso o design deve respeitar os limites naturais da sobrancelha.</strong>
            </p>
          </div>
          <ImagePlaceholder name="foliculo_piloso.png" className="mt-8" />
        </Section>
      )}

      {activeSection === 'biosseguranca' && (
        <Section title="Biossegurança e Higienização">
          <p className="text-stone-300 leading-relaxed text-lg mb-8">
            A biossegurança protege tanto o profissional quanto o cliente. <strong className="text-gold-500 font-medium">Nunca inicie um procedimento sem higienização adequada.</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111] rounded-xl p-6 border border-stone-800">
              <h3 className="text-lg font-medium text-white mb-4">Higienização das mãos</h3>
              <p className="text-sm text-gold-500 mb-3 uppercase tracking-wide font-semibold">Antes e após cada atendimento:</p>
              <ul className="space-y-2 text-stone-300">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-stone-600 mr-2"></span>Lavar com água e sabonete</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-stone-600 mr-2"></span>Secar corretamente</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-stone-600 mr-2"></span>Utilizar álcool 70%</li>
              </ul>
            </div>

            <div className="bg-[#111] rounded-xl p-6 border border-stone-800">
              <h3 className="text-lg font-medium text-white mb-4">Uso de EPIs</h3>
              <p className="text-sm text-gold-500 mb-3 uppercase tracking-wide font-semibold">Sempre utilizar quando necessário:</p>
              <ul className="space-y-2 text-stone-300">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-stone-600 mr-2"></span>Máscara</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-stone-600 mr-2"></span>Luvas (em procedimentos indicados)</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-stone-600 mr-2"></span>Avental limpo</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-stone-800 pt-8">
            <h3 className="text-xl font-medium text-white mb-4">Higienização da pele</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-stone-200 mb-2">Limpar a região utilizando:</p>
                <ul className="list-disc pl-5 text-stone-400 space-y-1">
                  <li>Espuma específica para sobrancelhas</li>
                  <li>Algodão ou gaze</li>
                  <li>Solução antisséptica quando necessário</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-stone-200 mb-2">O objetivo é remover:</p>
                <ul className="list-disc pl-5 text-stone-400 space-y-1">
                  <li>Oleosidade</li>
                  <li>Maquiagem</li>
                  <li>Resíduos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-stone-800 pt-8">
            <h3 className="text-xl font-medium text-white mb-4">Materiais Esterilizados</h3>
            <p className="text-stone-300 mb-3">As pinças devem ser:</p>
            <ul className="list-disc pl-5 text-stone-400 space-y-1 mb-4">
              <li>Higienizadas</li>
              <li>Desinfectadas</li>
              <li>Esterilizadas conforme normas sanitárias</li>
            </ul>
            <div className="bg-red-900/20 text-red-400 p-4 rounded-lg text-sm font-medium border border-red-900/50">
              Materiais descartáveis nunca devem ser reutilizados.
            </div>
          </div>
        </Section>
      )}

      {activeSection === 'mapeamento' && (
        <Section title="Mapeamento e Visagismo">
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-white mb-4">Mapeamento de Sobrancelhas</h3>
            <p className="text-stone-400 mb-6 text-lg">
              O mapeamento é a etapa que determina o formato ideal da sobrancelha. É realizado utilizando linhas de referência.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#111] p-5 rounded-xl border border-stone-800 text-center">
                <h4 className="font-medium text-lg text-gold-500 mb-2">Ponto Inicial</h4>
                <p className="text-sm text-stone-500 uppercase font-semibold mb-2">Linha reta</p>
                <p className="text-stone-300 mb-2">Aba do nariz → canto interno do olho.</p>
                <p className="text-sm text-stone-500 italic">Ali deve iniciar a sobrancelha.</p>
              </div>
              <div className="bg-[#111] p-5 rounded-xl border border-stone-800 text-center">
                <h4 className="font-medium text-lg text-gold-500 mb-2">Ponto Alto</h4>
                <p className="text-sm text-stone-500 uppercase font-semibold mb-2">Linha</p>
                <p className="text-stone-300 mb-2">Aba do nariz → centro da íris.</p>
                <p className="text-sm text-stone-500 italic">É onde ocorre o arqueamento.</p>
              </div>
              <div className="bg-[#111] p-5 rounded-xl border border-stone-800 text-center">
                <h4 className="font-medium text-lg text-gold-500 mb-2">Ponto Final</h4>
                <p className="text-sm text-stone-500 uppercase font-semibold mb-2">Linha</p>
                <p className="text-stone-300 mb-2">Aba do nariz → canto externo do olho.</p>
                <p className="text-sm text-stone-500 italic">Determina o término.</p>
              </div>
            </div>
            <ImagePlaceholder name="mapeamento_pontos.png" />

            <div className="bg-[#1A1A1A] p-6 rounded-xl mt-6 border border-stone-800">
              <h4 className="font-medium text-lg text-white mb-3">Importância do Mapeamento</h4>
              <div className="flex flex-wrap gap-3">
                {['Reduz erros', 'Melhora a simetria', 'Facilita a retirada dos fios', 'Garante maior precisão'].map((item, i) => (
                  <span key={i} className="bg-black border border-stone-700 px-4 py-2 rounded-full text-sm text-stone-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-white mb-4">Visagismo</h3>
            <p className="text-stone-400 mb-6 text-lg">
              Visagismo é o estudo das formas do rosto para criar harmonia. Cada rosto possui características próprias.
            </p>
            <div className="bg-[#111] p-6 rounded-xl border border-stone-800 mb-8">
              <p className="font-medium text-white mb-3">O profissional deve analisar:</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Formato facial', 'Distância entre olhos', 'Altura da testa', 'Nariz', 'Mandíbula', 'Personalidade do cliente'].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-400 text-sm">
                    <span className="w-1 h-1 rounded-full bg-gold-500 mr-2"></span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center text-gold-500 italic text-lg">"O objetivo não é copiar sobrancelhas, mas personalizar."</p>
            </div>

            <h4 className="text-xl font-medium text-white mb-6">Formatos de Rosto</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <FaceShapeCard title="Oval" desc="É considerado o mais equilibrado. Combina com praticamente todos os formatos." />
              <FaceShapeCard title="Redondo" obj="Alongar visualmente" ind="Arco levemente elevado" avoid="Sobrancelhas muito arredondadas" />
              <FaceShapeCard title="Quadrado" desc="Mandíbula marcante." ind="Arco suave" />
              <FaceShapeCard title="Longo" obj="Reduzir sensação de comprimento" ind="Sobrancelhas mais retas" />
              <FaceShapeCard title="Coração" desc="Testa larga e queixo fino." ind="Arco delicado" />
              <FaceShapeCard title="Diamante" desc="Maçãs do rosto largas." obj="Suavizar laterais" />
            </div>
            <ImagePlaceholder name="formatos_rosto.png" className="mt-8" />
          </div>
        </Section>
      )}

      {activeSection === 'materiais' && (
        <Section title="Técnicas e Materiais">
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-white mb-4">Depilação e Epilação</h3>
            <p className="text-stone-400 mb-6">Embora pareçam iguais, são procedimentos diferentes.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#111] p-6 rounded-xl border border-stone-800">
                <h4 className="text-xl font-medium text-gold-500 mb-3">Depilação</h4>
                <p className="text-stone-400 mb-4">Remove apenas a parte visível do pelo.</p>
                <div className="bg-black px-4 py-2 rounded border border-stone-800 text-sm text-stone-300 inline-block">
                  <strong className="text-white">Exemplo:</strong> lâmina
                </div>
              </div>
              <div className="bg-[#111] p-6 rounded-xl border border-stone-800">
                <h4 className="text-xl font-medium text-gold-500 mb-3">Epilação</h4>
                <p className="text-stone-400 mb-4">Remove o fio desde a raiz.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-black px-3 py-1.5 rounded border border-stone-800 text-sm text-stone-300">Pinça</span>
                  <span className="bg-black px-3 py-1.5 rounded border border-stone-800 text-sm text-stone-300">Linha</span>
                  <span className="bg-black px-3 py-1.5 rounded border border-stone-800 text-sm text-stone-300">Cera</span>
                </div>
              </div>
            </div>
            <p className="text-center font-medium text-stone-300 bg-gold-900/10 border border-gold-900/30 py-3 rounded-lg">
              No design de sobrancelhas utiliza-se predominantemente a <strong className="text-gold-500">epilação</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-white mb-6">Materiais Utilizados no Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <MaterialItem name="Espuma para limpeza" desc="Remove oleosidade e prepara a pele." />
              <MaterialItem name="Esfoliante facial" desc="Remove células mortas e melhora a fixação da henna." />
              <MaterialItem name="Algodão ou gaze" desc="Auxilia na limpeza." />
              <MaterialItem name="Linha comum ou pigmentada" desc="Utilizada no mapeamento." />
              <MaterialItem name="Lápis dermatográfico" desc="Marcação do desenho." />
              <MaterialItem name="Caneta marcadora" desc="Facilita o mapeamento." />
              <MaterialItem name="Cera fria facial" desc="Remoção rápida de pelos superficiais." />
              <MaterialItem name="Pinça" desc="Principal ferramenta do designer. Tipos: reta, diagonal, ponta fina." />
              <MaterialItem name="Gel calmante" desc="Reduz irritação." />
              <MaterialItem name="Esferas relaxantes" desc="Auxiliam no conforto após o procedimento." />
              <MaterialItem name="Pasta para sobrancelhas" desc="Destaca o desenho durante o mapeamento." />
            </div>
            <ImagePlaceholder name="materiais_design.png" className="mt-8" />
          </div>
        </Section>
      )}

      {activeSection === 'passoapasso' && (
        <Section title="Exemplo Prático e Cuidados">
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-white mb-6">Exemplo Prático de Atendimento</h3>
            <div className="bg-[#111] border border-stone-800 rounded-2xl p-8 text-stone-300">
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <Step num={1} text="Recepção da cliente" />
                <Step num={2} text="Anamnese" />
                <Step num={3} text="Higienização" />
                <Step num={4} text="Esfoliação (quando indicada)" />
                <Step num={5} text="Mapeamento" />
                <Step num={6} text="Aprovação do desenho pela cliente" />
                <Step num={7} text="Remoção dos fios" />
                <Step num={8} text="Acabamento" />
                <Step num={9} text="Aplicação de gel calmante" />
                <Step num={10} text="Fotos do antes e depois" />
                <Step num={11} text="Orientações pós-procedimento" />
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-medium text-gold-500 mb-4">Finalização</h3>
              <p className="text-stone-400 mb-4 text-sm font-semibold uppercase tracking-wide">Após o design:</p>
              <ol className="list-decimal pl-5 text-stone-300 space-y-2 font-medium">
                <li>Remover resíduos</li>
                <li>Aplicar gel calmante</li>
                <li>Pentear os fios</li>
                <li>Fotografar o resultado</li>
                <li>Orientar cuidados</li>
              </ol>
            </div>
            
            <div className="bg-red-900/10 p-6 rounded-xl border border-red-900/30">
              <h3 className="text-2xl font-medium text-white mb-4">Cuidados Pós-procedimento</h3>
              <p className="text-stone-400 mb-4 text-sm font-semibold uppercase tracking-wide">Nas primeiras 24 horas:</p>
              <ul className="list-disc pl-5 text-stone-300 space-y-1 mb-4">
                <li>Evitar maquiagem na região</li>
                <li>Evitar atrito</li>
                <li>Evitar produtos irritantes</li>
                <li>Não esfregar a pele</li>
              </ul>
              <p className="text-sm text-stone-500 italic">Caso ocorra vermelhidão: <strong className="text-gold-500 font-semibold not-italic">Aplicar gel calmante.</strong></p>
            </div>
          </div>
        </Section>
      )}

      {activeSection === 'conclusao' && (
        <Section title="Conclusão">
          
          <div className="bg-[#111] border border-stone-800 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-medium text-white mb-6">Principais Erros do Iniciante</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Retirar fios em excesso',
                'Não respeitar o formato natural',
                'Não realizar mapeamento',
                'Trabalhar com pinça sem esterilização',
                'Não analisar o rosto',
                'Fazer sobrancelhas iguais em rostos diferentes',
                'Ignorar o sentido natural dos fios',
                'Não explicar os cuidados ao cliente'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-stone-400">
                  <span className="text-red-500 mr-2 shrink-0">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-medium text-gold-500 mb-4">Resumo do Módulo</h3>
            <p className="text-stone-400 mb-4">Ao final deste módulo, o aluno deverá ser capaz de:</p>
            <div className="bg-[#111] border border-stone-800 rounded-xl p-6">
              <ul className="space-y-3">
                {[
                  'Compreender a anatomia dos pelos',
                  'Identificar o ciclo de crescimento',
                  'Realizar corretamente a higienização',
                  'Executar o mapeamento facial',
                  'Aplicar conceitos de visagismo',
                  'Diferenciar depilação e epilação',
                  'Realizar um design seguro',
                  'Conhecer todos os materiais básicos utilizados no atendimento'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-300 font-medium">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-xs mr-3 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800">
            <h3 className="text-lg font-medium text-white mb-4">Referências Bibliográficas</h3>
            <ul className="space-y-2 text-sm text-stone-500">
              <li>• Sociedade Brasileira de Dermatologia (SBD). Anatomia da pele e dos pelos.</li>
              <li>• Milady Standard Esthetics: Fundamentals (12ª edição). Cengage Learning.</li>
              <li>• Milady Standard Cosmetology (14ª edição). Cengage Learning.</li>
              <li>• Habif's Clinical Dermatology (7ª edição). Elsevier.</li>
              <li>• Agência Nacional de Vigilância Sanitária (ANVISA). Serviços de Embelezamento sem Risco e orientações sobre biossegurança.</li>
              <li>• Bolognia JL, Schaffer JV, Cerroni L. Dermatology. Elsevier.</li>
            </ul>
          </div>
        </Section>
      )}

      {/* Pagination Controls */}
      <div className="fixed bottom-0 left-0 lg:left-64 right-0 p-4 bg-black/80 backdrop-blur-md border-t border-stone-900 flex justify-between items-center z-30">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
            isFirst ? 'opacity-30 cursor-not-allowed text-stone-500' : 'text-white hover:bg-[#111] border border-stone-800'
          }`}
        >
          Anterior
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
            isLast ? 'opacity-30 cursor-not-allowed text-stone-500' : 'bg-gold-500 text-black hover:bg-gold-400 shadow-lg shadow-gold-500/20'
          }`}
        >
          Próximo
        </button>
      </div>

    </div>
  );
}

// Subcomponents

function TimelineItem({ period, desc, isLast = false }: { period: string, desc: string, isLast?: boolean }) {
  return (
    <div className="relative">
      <div className="absolute -left-[17px] md:-left-[29px] top-1 w-3 h-3 rounded-full border-2 border-black bg-gold-500"></div>
      <h4 className="text-lg font-medium text-white">{period}</h4>
      <p className="text-stone-400 mt-1">{desc}</p>
    </div>
  );
}

function CycleCard({ phase, subtitle, desc, features, duration }: { phase: string, subtitle: string, desc: string, features: string[], duration: string }) {
  return (
    <div className="bg-[#111] border border-stone-800 rounded-xl p-6 shadow-sm hover:border-gold-500/50 transition-colors flex flex-col">
      <h4 className="text-xl font-medium text-gold-500">{phase}</h4>
      <p className="text-sm font-semibold tracking-wider text-stone-500 mb-3 uppercase">{subtitle}</p>
      <p className="text-stone-300 mb-4 text-sm flex-grow">{desc}</p>
      {features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {features.map((f, i) => (
            <li key={i} className="text-xs text-stone-400 flex items-center">
              <span className="w-1 h-1 rounded-full bg-gold-500 mr-2"></span> {f}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-4 border-t border-stone-800 text-sm flex items-center">
        <span className="text-stone-500 font-semibold uppercase text-[10px] tracking-wider mr-2">Duração:</span>
        <span className="text-stone-200 font-medium">{duration}</span>
      </div>
    </div>
  );
}

function FaceShapeCard({ title, desc, obj, ind, avoid }: { title: string, desc?: string, obj?: string, ind?: string, avoid?: string }) {
  return (
    <div className="bg-[#111] border border-stone-800 p-5 rounded-xl shadow-sm">
      <h5 className="font-medium text-lg text-gold-500 border-b border-stone-800 pb-2 mb-3">{title}</h5>
      {desc && <p className="text-stone-300 text-sm mb-2">{desc}</p>}
      {obj && <p className="text-sm mb-1"><span className="font-semibold text-white mr-1">Objetivo:</span> <span className="text-stone-400">{obj}</span></p>}
      {ind && <p className="text-sm mb-1"><span className="font-semibold text-white mr-1">Indicado:</span> <span className="text-stone-400">{ind}</span></p>}
      {avoid && <p className="text-sm"><span className="font-semibold text-red-400 mr-1">Evitar:</span> <span className="text-stone-400">{avoid}</span></p>}
    </div>
  );
}

function MaterialItem({ name, desc }: { name: string, desc: string }) {
  return (
    <div className="flex flex-col border-b border-stone-800 pb-3">
      <span className="font-medium text-white text-lg">{name}</span>
      <span className="text-stone-400 text-sm mt-1">{desc}</span>
    </div>
  );
}

function Step({ num, text }: { num: number, text: string }) {
  return (
    <li className="flex items-start">
      <span className="text-gold-500 font-medium w-6 shrink-0">{num}.</span>
      <span>{text}</span>
    </li>
  );
}
