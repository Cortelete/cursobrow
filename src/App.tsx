import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { CourseContent } from './components/CourseContent';

const SECTIONS = [
  { id: 'capa', label: 'Início' },
  { id: 'introducao', label: 'O Que é Design' },
  { id: 'historia', label: 'História' },
  { id: 'ciclo', label: 'Ciclo de Vida' },
  { id: 'estrutura', label: 'Estrutura do Pelo' },
  { id: 'biosseguranca', label: 'Biossegurança' },
  { id: 'mapeamento', label: 'Mapeamento' },
  { id: 'materiais', label: 'Materiais' },
  { id: 'passoapasso', label: 'Passo a Passo' },
  { id: 'conclusao', label: 'Conclusão' },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const handleNext = () => setCurrentIndex(i => Math.min(i + 1, SECTIONS.length - 1));
  const handlePrev = () => setCurrentIndex(i => Math.max(i - 1, 0));
  
  const activeSectionId = SECTIONS[currentIndex].id;

  return (
    <div className="flex w-full min-h-screen bg-black">
      <Sidebar 
        sections={SECTIONS} 
        activeSection={activeSectionId} 
        onSelect={(id) => {
          setCurrentIndex(SECTIONS.findIndex(s => s.id === id));
          setIsMobileMenuOpen(false);
        }}
      />
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#0a0a0a] text-stone-50 z-50 px-6 py-4 flex justify-between items-center border-b border-stone-800">
        <div>
          <h1 className="font-medium text-gold-500 leading-none">Design de Sobrancelhas</h1>
          <p className="text-stone-500 text-[10px] tracking-widest uppercase mt-1">Módulo 1</p>
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
          <nav className="flex flex-col p-6 space-y-2">
            {SECTIONS.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg text-lg transition-colors ${
                  activeSectionId === section.id 
                    ? 'bg-gold-500/10 text-gold-500 font-medium border border-gold-500/20' 
                    : 'text-stone-400 hover:bg-[#111] hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
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
          isLast={currentIndex === SECTIONS.length - 1}
        />
      </main>
    </div>
  );
}
