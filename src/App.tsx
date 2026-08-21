import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { CourseContent } from './components/CourseContent';
import { PortalHome } from './components/PortalHome';

export const COURSES = [
  { id: 1, title: 'Design de Sobrancelhas', code: 'XT7B-9M2K' },
  { id: 2, title: 'Henna para Sobrancelhas', code: 'W4N8-P3L5' },
  { id: 3, title: 'Tintura para Sobrancelhas', code: 'F2V6-C9R1' },
  { id: 4, title: 'Protocolo de Crescimento', code: 'M8J3-Q5T7' },
  { id: 5, title: 'Brow Repair', code: 'H5X9-D2W4' },
  { id: 6, title: 'Brow Lamination', code: 'R4F8-T2M9' },
  { id: 7, title: 'Lash Lifting', code: 'K3B7-N6Y8' },
];

const ALL_SECTIONS = [
  { id: 'capa', label: 'Início', module: 1 },
  { id: 'introducao', label: 'O Que é Design', module: 1 },
  { id: 'historia', label: 'História', module: 1 },
  { id: 'ciclo', label: 'Anatomia e Ciclo', module: 1 },
  { id: 'estrutura', label: 'Estrutura do Pelo', module: 1 },
  { id: 'biosseguranca', label: 'Biossegurança', module: 1 },
  { id: 'mapeamento', label: 'Mapeamento e Visagismo', module: 1 },
  { id: 'materiais', label: 'Materiais', module: 1 },
  { id: 'passoapasso', label: 'Passo a Passo Prático', module: 1 },
  { id: 'conclusao', label: 'Conclusão M1', module: 1 },
  { id: 'mod2_capa', label: 'Henna Início', module: 2 },
  { id: 'mod2_henna_intro', label: 'O Que É a Henna', module: 2 },
  { id: 'mod2_henna_durabilidade', label: 'Durabilidade', module: 2 },
  { id: 'mod2_henna_colorimetria', label: 'Colorimetria', module: 2 },
  { id: 'mod2_henna_aplicacao', label: 'Preparo e Aplicação', module: 2 },
  { id: 'mod2_henna_cuidados', label: 'Ação e Cuidados', module: 2 },
  { id: 'mod2_henna_materiais', label: 'Materiais e Resumo', module: 2 },
  { id: 'mod3_capa', label: 'Tintura Início', module: 3 },
  { id: 'mod3_tintura_intro', label: 'O Que É Tintura', module: 3 },
  { id: 'mod3_tintura_aplicacao', label: 'Preparo e Aplicação', module: 3 },
  { id: 'mod3_tintura_cuidados', label: 'Cuidados e Resumo', module: 3 },
  { id: 'mod4_capa', label: 'Crescimento Início', module: 4 },
  { id: 'mod4_intro', label: 'Introdução e Objetivos', module: 4 },
  { id: 'mod4_etapas', label: 'Avaliação, Higienização e Design', module: 4 },
  { id: 'mod4_argiloterapia', label: 'Argiloterapia', module: 4 },
  { id: 'mod4_alta_frequencia', label: 'Alta Frequência', module: 4 },
  { id: 'mod4_ativos', label: 'Ativos e Benefícios', module: 4 },
  { id: 'mod4_materiais_contra', label: 'Materiais e Contraindicações', module: 4 },
  { id: 'mod4_passoapasso', label: 'Passo a Passo', module: 4 },
  { id: 'mod4_manutencao', label: 'Manutenção e Evolução', module: 4 },
  { id: 'mod5_capa', label: 'Brow Repair Início', module: 5 },
  { id: 'mod5_intro', label: 'O Que É?', module: 5 },
  { id: 'mod5_microagulhamento', label: 'Microagulhamento', module: 5 },
  { id: 'mod5_indicacoes_anamnese', label: 'Indicações e Anamnese', module: 5 },
  { id: 'mod5_materiais_biosseguranca', label: 'Materiais e Biossegurança', module: 5 },
  { id: 'mod5_blend_procedimento', label: 'Blend e Procedimento', module: 5 },
  { id: 'mod5_cuidados_reacoes', label: 'Cuidados e Reações', module: 5 },
  { id: 'mod5_conclusao', label: 'Conclusão e Resultados', module: 5 },
  { id: 'mod6_capa', label: 'Brow Lamination Início', module: 6 },
  { id: 'mod6_intro', label: 'Introdução e Anamnese', module: 6 },
  { id: 'mod6_pele_pelos', label: 'Fios e Pele', module: 6 },
  { id: 'mod6_materiais', label: 'Materiais e Biossegurança', module: 6 },
  { id: 'mod6_passoapasso', label: 'Passo a Passo', module: 6 },
  { id: 'mod6_finalizacao', label: 'Finalização e Erros', module: 6 },
  { id: 'mod6_resumo', label: 'Resumo do Protocolo', module: 6 },
  { id: 'mod7_capa', label: 'Lash Lifting Início', module: 7 },
  { id: 'mod7_intro', label: 'Introdução e O que é', module: 7 },
  { id: 'mod7_fios_pele', label: 'Fios e Pele', module: 7 },
  { id: 'mod7_materiais', label: 'Materiais e Precauções', module: 7 },
  { id: 'mod7_passoapasso', label: 'Passo a Passo', module: 7 },
  { id: 'mod7_finalizacao', label: 'Finalização e Pós-tratamento', module: 7 },
  { id: 'mod7_erros_checklist', label: 'Erros Comuns e Checklist', module: 7 }
];

export default function App() {
  const [currentView, setCurrentView] = useState<'portal' | 'course'>('portal');
  const [activeCourseId, setActiveCourseId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileModules, setExpandedMobileModules] = useState<number[]>([]);

  const [unlockedCourses, setUnlockedCourses] = useState<number[]>(() => {
    const saved = localStorage.getItem('unlockedCourses');
    return saved ? JSON.parse(saved) : [];
  });

  // Derived state for the active course
  const courseSections = activeCourseId ? ALL_SECTIONS.filter(s => s.module === activeCourseId) : [];
  const activeSectionId = courseSections[currentIndex]?.id || '';
  const currentCourse = COURSES.find(c => c.id === activeCourseId);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex, currentView]);

  useEffect(() => {
    if (activeCourseId && !expandedMobileModules.includes(activeCourseId)) {
      setExpandedMobileModules(prev => [...prev, activeCourseId]);
    }
  }, [activeCourseId]);

  const handleUnlock = (courseId: number, code: string) => {
    const course = COURSES.find(c => c.id === courseId);
    if (course && course.code === code) {
      const newUnlocked = [...unlockedCourses, courseId];
      setUnlockedCourses(newUnlocked);
      localStorage.setItem('unlockedCourses', JSON.stringify(newUnlocked));
      return true;
    }
    return false;
  };

  const handleEnterCourse = (courseId: number) => {
    setActiveCourseId(courseId);
    setCurrentIndex(0);
    setCurrentView('course');
  };

  const handleBackToPortal = () => {
    setCurrentView('portal');
    setActiveCourseId(null);
  };

  if (currentView === 'portal') {
    return (
      <PortalHome 
        unlockedCourses={unlockedCourses}
        onUnlock={handleUnlock}
        onEnter={handleEnterCourse}
      />
    );
  }

  if (!activeCourseId) return null;

  const handleNext = () => setCurrentIndex(i => Math.min(i + 1, courseSections.length - 1));
  const handlePrev = () => setCurrentIndex(i => Math.max(i - 1, 0));
  
  const toggleMobileModule = (mod: number) => {
    setExpandedMobileModules(prev => 
      prev.includes(mod) ? prev.filter(m => m !== mod) : [...prev, mod]
    );
  };

  return (
    <div className="flex w-full min-h-screen bg-black">
      <Sidebar 
        sections={courseSections} 
        activeSection={activeSectionId} 
        onSelect={(id) => {
          setCurrentIndex(courseSections.findIndex(s => s.id === id));
          setIsMobileMenuOpen(false);
        }}
        onBack={handleBackToPortal}
        activeCourseId={activeCourseId}
      />
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#0a0a0a] text-stone-50 z-50 px-4 py-3 flex justify-between items-center border-b border-stone-800">
        <div className="flex items-center gap-3">
          <button onClick={handleBackToPortal} className="text-stone-400 hover:text-white p-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-medium text-gold-500 leading-none truncate max-w-[200px]">{currentCourse?.title}</h1>
            <p className="text-stone-500 text-[10px] tracking-widest uppercase mt-1">
              {activeCourseId >= 6 ? 'Conteúdo do Curso' : `Módulo ${activeCourseId}`}
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-stone-400 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#0a0a0a] z-40 overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-2">
            <div className="flex flex-col">
              <button 
                onClick={() => toggleMobileModule(activeCourseId)}
                className="flex items-center justify-between w-full text-left p-4 rounded-lg bg-[#111] border border-stone-800 transition-colors"
              >
                <span className="text-stone-300 text-sm tracking-[0.1em] uppercase font-semibold">
                  {activeCourseId === 7 ? 'Lash Lifting' : activeCourseId === 6 ? 'Brow Lamination' : `Módulo ${activeCourseId} ${activeCourseId === 2 ? '- Henna' : activeCourseId === 3 ? '- Tintura' : activeCourseId === 4 ? '- Crescimento' : activeCourseId === 5 ? '- Brow Repair' : ''}`}
                </span>
                {expandedMobileModules.includes(activeCourseId) ? <ChevronDown className="w-5 h-5 text-gold-500" /> : <ChevronRight className="w-5 h-5 text-stone-500" />}
              </button>
              
              {expandedMobileModules.includes(activeCourseId) && (
                <div className="space-y-1 mt-2 pl-3 border-l-2 border-stone-800/50 ml-2">
                  {courseSections.map((section) => {
                    const idx = courseSections.findIndex(s => s.id === section.id);
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-base transition-colors ${
                          activeSectionId === section.id 
                            ? 'bg-gold-500/10 text-gold-500 font-medium border border-gold-500/20' 
                            : 'text-stone-400 hover:bg-[#111] hover:text-white'
                        }`}
                      >
                        {section.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow lg:ml-64 w-full pt-16 lg:pt-0">
        <CourseContent 
          activeSection={activeSectionId}
          onNext={handleNext}
          onPrev={handlePrev}
          isFirst={currentIndex === 0}
          isLast={currentIndex === courseSections.length - 1}
        />
      </main>
    </div>
  );
}
