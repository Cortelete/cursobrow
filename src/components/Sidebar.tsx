import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';

interface SidebarProps {
  sections: { id: string; label: string; module: number }[];
  activeSection: string;
  onSelect: (id: string) => void;
  onBack: () => void;
  activeCourseId: number;
}

export function Sidebar({ sections, activeSection, onSelect, onBack, activeCourseId }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside className="w-64 fixed left-0 top-0 h-screen bg-[#0a0a0a] text-stone-300 p-6 hidden lg:flex flex-col border-r border-stone-800 z-40">
      
      <button 
        onClick={onBack}
        className="flex items-center text-stone-400 hover:text-white mb-8 transition-colors text-sm font-medium group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Voltar ao Portal
      </button>

      <div className="mb-6">
        <h1 className="font-medium text-xl text-gold-500 leading-tight">
          {activeCourseId === 1 ? 'Design de Sobrancelhas' : activeCourseId === 2 ? 'Henna para Sobrancelhas' : 'Tintura para Sobrancelhas'}
        </h1>
      </div>
      
      <nav className="flex-grow flex flex-col overflow-y-auto pr-2 custom-scrollbar space-y-2">
        <div className="flex flex-col">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-left py-3 px-2 rounded-lg hover:bg-[#111] transition-colors"
          >
            <span className="text-stone-400 text-xs tracking-[0.1em] uppercase font-semibold">
              Módulo {activeCourseId}
            </span>
            {isExpanded ? <ChevronDown className="w-4 h-4 text-stone-500" /> : <ChevronRight className="w-4 h-4 text-stone-500" />}
          </button>
          
          {isExpanded && (
            <div className="space-y-1 mt-1 pl-2 border-l border-stone-800/50 ml-3">
              {sections.map((section, index) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => onSelect(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex items-center ${
                      isActive 
                        ? 'bg-gold-500/10 text-gold-500 font-medium border border-gold-500/20' 
                        : 'text-stone-400 hover:bg-[#111] hover:text-stone-200'
                    }`}
                  >
                    <span className={`w-5 text-[10px] opacity-50 ${isActive ? 'text-gold-500' : ''}`}>
                      {index + 1}
                    </span>
                    {section.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>
      <div className="pt-8 border-t border-stone-800 mt-auto">
        <p className="text-xs text-stone-600">Portal Interativo v2.0</p>
      </div>
    </aside>
  );
}
